import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {HomeComponent} from "./component/home/home.component";
import {hasAccess} from "./app.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [hasAccess]
  },
  {
    path: 'reports-ui',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'reports-ui',
        exposedModule: './Module'
      }).then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
