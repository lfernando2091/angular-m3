import { NgModule } from '@angular/core';
import {SimpleLayoutComponent} from "./simple-layout/simple-layout.component";
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './component/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DrawerService} from "./service/drawer.service";

const MAT_IMPORTS = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT_IMPORTS
  ],
  declarations: [
    SimpleLayoutComponent,
    HeaderComponent
  ],
  exports: [
    SimpleLayoutComponent
  ],
  providers: [
    DrawerService
  ]
})
export class LayoutModule { }
