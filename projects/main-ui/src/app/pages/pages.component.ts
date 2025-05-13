import {Component} from "@angular/core";

@Component({
  selector: 'app-pages',
  template: `
    <!--<lib-auth></lib-auth>-->
    <lib-simple-layout>
      <router-outlet></router-outlet>
    </lib-simple-layout>
  `,
  styleUrls: ['pages.component.scss'],
})
export class PagesComponent {

}
