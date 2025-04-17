import {NgModule} from "@angular/core";
import {PagesComponent} from "./pages.component";
import {PagesRoutingModule} from "./pages-routing.module";
import {HomeComponent} from "./home/home.component";
import {LayoutModule} from "core";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  imports: [
    PagesRoutingModule,
    LayoutModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class PagesModule {

}
