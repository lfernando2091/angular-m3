import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {hasAccess} from "./app.guard";
import {AuthComponent, LoginComponent, CallbackComponent, LogoutComponent} from "auth";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canActivate: [hasAccess]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
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
