import { NgModule } from '@angular/core';
import { CoreComponent } from './component/core.component';
import {LayoutModule} from "./layout/layout.module";

@NgModule({
  imports: [
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
