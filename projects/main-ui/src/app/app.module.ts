import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'auth';
import {CoreModule} from "core";
import {AppGuardService} from "./app.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(),
    CoreModule
  ],
  providers: [
    AppGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
