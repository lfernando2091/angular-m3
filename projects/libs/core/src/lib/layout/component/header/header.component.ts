import { Component } from '@angular/core';
import {DrawerService} from "../../service/drawer.service";

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private drawerService: DrawerService) {

  }

  onDrawerToggle() {
    this.drawerService.$opened.next(!this.drawerService.$opened.value);
  }
}
