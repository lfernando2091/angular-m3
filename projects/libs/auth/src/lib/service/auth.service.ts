import {Inject, Injectable} from '@angular/core';
import {AUTH_OPTIONS, AuthOptions} from "../auth.options";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject(AUTH_OPTIONS) private authOptions: AuthOptions) { }
}
