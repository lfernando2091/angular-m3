import {ModuleWithProviders, NgModule} from '@angular/core';
import { AuthComponent } from './component/auth.component';
import {AUTH_OPTIONS, AuthOptions, DEFAULT_AUTH_OPTIONS} from "./auth.options";
import {AuthService} from "./service/auth.service";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {CallbackComponent} from "./component/callback/callback.component";
import {LogoutComponent} from "./component/logout/logout.component";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    CallbackComponent,
    LogoutComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    CallbackComponent,
    LogoutComponent
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
