import { NgModule } from '@angular/core';
import { CoreComponent } from './component/core.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {LayoutModule} from "./layout/layout.module";
import {CommonModule} from "@angular/common";

const MAT_IMPORTS = [
  MatSlideToggleModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MAT_IMPORTS
  ],
  declarations: [
    CoreComponent
  ],
  exports: [
    CoreComponent,
    LayoutModule,
  ]
})
export class CoreModule { }
