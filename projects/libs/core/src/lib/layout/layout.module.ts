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
import {FooterComponent} from "./component/footer/footer.component";
import {MatListModule} from "@angular/material/list";
import {RouterLink} from "@angular/router";

const MAT_IMPORTS = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT_IMPORTS,
    ThemeSwitcherModule,
    RouterLink
  ],
  declarations: [
    SimpleLayoutComponent,
    HeaderComponent,
    FooterComponent,
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
