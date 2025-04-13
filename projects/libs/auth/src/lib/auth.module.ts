import {ModuleWithProviders, NgModule} from '@angular/core';
import { AuthComponent } from './component/auth.component';
import {AUTH_OPTIONS, AuthOptions, DEFAULT_AUTH_OPTIONS} from "./auth.options";
import {AuthService} from "./service/auth.service";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule {

  static forRoot(authOptions: AuthOptions = DEFAULT_AUTH_OPTIONS): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        { provide: AUTH_OPTIONS, useValue: authOptions },
        AuthService
      ]
    }
  }

}
