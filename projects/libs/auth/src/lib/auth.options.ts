import { InjectionToken } from "@angular/core";

export interface AuthOptions {
  url?: string;
}

export const DEFAULT_AUTH_OPTIONS: AuthOptions = {
  url: "<SET_LOGIN_URL>",
}

export const AUTH_OPTIONS = new InjectionToken<AuthOptions>('Auth Options');
