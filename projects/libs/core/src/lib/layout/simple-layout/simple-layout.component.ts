import { Component } from '@angular/core';
import {DrawerService} from "../service/drawer.service";

@Component({
  selector: 'lib-simple-layout',
  templateUrl: './simple-layout.component.html',
  styleUrls: ['./simple-layout.component.scss']
})
export class SimpleLayoutComponent {
  showFiller = false;
  $opened = this.drawerService.$opened;

  constructor(private drawerService: DrawerService) {
  }
}
