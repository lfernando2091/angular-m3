import {Inject, Injectable} from '@angular/core';
import {AUTH_OPTIONS, AuthOptions} from "../auth.options";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = new BehaviorSubject<boolean>(true);

  constructor(@Inject(AUTH_OPTIONS) private authOptions: AuthOptions) { }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  get loginPageUrl(): string {
    return this.authOptions.loginPageUrl!;
  }

}
