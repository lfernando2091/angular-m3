import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {loadRemoteModule} from "@angular-architects/module-federation";
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
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
      // {
      //   path: '**',
      //   component: NotFoundComponent,
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {

}
