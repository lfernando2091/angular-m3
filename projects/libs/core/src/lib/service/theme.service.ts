import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeOption {
  name: string;
  value: string;
}

export const THEMES: ThemeOption[] = [
  { name: 'Light', value: 'light-theme' },
  { name: 'Dark', value: 'dark-theme' }
];

const LOCAL_STORAGE_THEME_KEY = 'theme';
const LIGHT_MODE = 'light';
const DARK_MODE = 'dark';
const DEFAULT_SYSTEM_THEME_MODE = 'system';
const MEDIA_QUERY_DARK_COLOR_SCHEMA = '(prefers-color-scheme: dark)';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private _currentTheme = new BehaviorSubject<ThemeMode>(DEFAULT_SYSTEM_THEME_MODE);

  // Observable for components to subscribe to
  public currentTheme$ = this._currentTheme.asObservable();

  // Available themes
  private _availableThemes: ThemeOption[] = THEMES;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);

    // Initialize theme from localStorage or use system preference
    this.initializeTheme();

    // Listen for system preference changes
    this.listenForSystemPreferenceChanges();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeMode;

    if (savedTheme) {
      this._currentTheme.next(savedTheme);
      this.applyTheme(savedTheme);
    } else {
      // Default to system preference
      this.applyTheme(DEFAULT_SYSTEM_THEME_MODE);
    }
  }

  private listenForSystemPreferenceChanges(): void {
    const mediaQuery = window.matchMedia(MEDIA_QUERY_DARK_COLOR_SCHEMA);

    // Initial check
    if (this._currentTheme.value === DEFAULT_SYSTEM_THEME_MODE) {
      this.applyActualTheme(mediaQuery.matches ? DARK_MODE : LIGHT_MODE);
    }

    // Listen for changes
    mediaQuery.addEventListener('change', (e) => {
      if (this._currentTheme.value === DEFAULT_SYSTEM_THEME_MODE) {
        this.applyActualTheme(e.matches ? DARK_MODE : LIGHT_MODE);
      }
    });
  }

  public setTheme(theme: ThemeMode): void {
    if (this._currentTheme.value !== theme) {
      this._currentTheme.next(theme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
      this.applyTheme(theme);
    }
  }

  private applyTheme(theme: ThemeMode): void {
    if (theme === DEFAULT_SYSTEM_THEME_MODE) {
      const prefersDark = window.matchMedia(MEDIA_QUERY_DARK_COLOR_SCHEMA).matches;
      this.applyActualTheme(prefersDark ? DARK_MODE : LIGHT_MODE);
    } else {
      this.applyActualTheme(theme);
    }
  }

  private applyActualTheme(theme: 'light' | 'dark'): void {
    // Remove all theme classes
    this.removeAllThemeClasses();

    // Add new theme class
    this.renderer.addClass(document.body, `${theme}-theme`);

    // Update color-scheme
    document.documentElement.style.colorScheme = theme;
  }

  private removeAllThemeClasses(): void {
    // Remove standard theme classes
    this.renderer.removeClass(document.body, `${LIGHT_MODE}-theme`);
    this.renderer.removeClass(document.body, `${DARK_MODE}-theme`);
  }

  public getAvailableThemes(): ThemeOption[] {
    return [...this._availableThemes];
  }

  public isDarkMode(): boolean {
    if (this._currentTheme.value === DARK_MODE) {
      return true;
    } else if (this._currentTheme.value === DEFAULT_SYSTEM_THEME_MODE) {
      return window.matchMedia(MEDIA_QUERY_DARK_COLOR_SCHEMA).matches;
    }
    return false;
  }
}
