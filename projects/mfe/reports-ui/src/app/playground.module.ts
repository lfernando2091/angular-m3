import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PlaygroundComponent } from './playground.component';
import {PagesModule} from "./pages/pages.module";
import {RouterModule} from "@angular/router";
import {PLAYGROUND_ROUTES} from "./playground.routes";

@NgModule({
  declarations: [
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(PLAYGROUND_ROUTES),
    PagesModule
  ],
  providers: [],
  bootstrap: [PlaygroundComponent]
})
export class PlaygroundModule { }
