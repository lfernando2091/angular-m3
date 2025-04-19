import { InjectionToken } from "@angular/core";

export interface AuthOptions {
  url?: string;
  loginPageUrl?: string;
}

export const DEFAULT_AUTH_OPTIONS: AuthOptions = {
  url: "<SET_LOGIN_URL>",
  loginPageUrl: "/auth",
}

export const AUTH_OPTIONS = new InjectionToken<AuthOptions>('Auth Options');
