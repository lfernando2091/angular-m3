import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {canActivate, redirectLoggedInTo, redirectUnauthorizedTo} from "./app.guard";
import {AuthComponent, LoginComponent, CallbackComponent, LogoutComponent} from "auth";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo("/auth")
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        ...canActivate(redirectLoggedInToHome)
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: 'callback',
        component: CallbackComponent
      }
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
