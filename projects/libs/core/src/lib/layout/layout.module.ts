import { NgModule } from '@angular/core';
import {SimpleLayoutComponent} from "./simple-layout/simple-layout.component";
import {CommonModule} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './component/header/header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DrawerService} from "./service/drawer.service";
import {NavigationComponent} from "./component/navigation/navigation.component";
import { ThemeSwitcherModule } from '../component/theme-switcher/theme-switcher.module';

const MAT_IMPORTS = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT_IMPORTS,
    ThemeSwitcherModule
  ],
  declarations: [
    SimpleLayoutComponent,
    HeaderComponent,
    NavigationComponent
  ],
  exports: [
    SimpleLayoutComponent
  ],
  providers: [
    DrawerService
  ]
})
export class LayoutModule { }
