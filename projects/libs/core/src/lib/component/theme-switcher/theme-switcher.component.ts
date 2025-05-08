import { Component, OnInit } from '@angular/core';
import { ThemeService, ThemeMode, ThemeOption } from '../../service/theme.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'lib-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  currentTheme$: Observable<ThemeMode>;
  availableThemes: ThemeOption[] = [];
  activeTheme$: Observable<string>;

  constructor(private themeService: ThemeService) {
    this.currentTheme$ = this.themeService.currentTheme$;

    // Observable to determine the active theme
    this.activeTheme$ = this.currentTheme$.pipe(
      map((currentTheme) => {
        return `${currentTheme}-theme`;
      })
    );
  }

  ngOnInit(): void {
    // Get available themes
    this.availableThemes = this.themeService.getAvailableThemes();
  }

  setTheme(themeValue: string): void {
    switch (themeValue) {
      case 'light-theme':
        this.themeService.setTheme('light');
        break;
      case 'dark-theme':
        this.themeService.setTheme('dark');
        break;
      default:
        this.themeService.setTheme('system');
        break;
    }
  }
}
