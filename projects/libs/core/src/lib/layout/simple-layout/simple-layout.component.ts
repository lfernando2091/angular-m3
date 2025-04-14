import { Component } from '@angular/core';

@Component({
  selector: 'lib-simple-layout',
  template: `
    <div>
      simple layout works!
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class SimpleLayoutComponent {

}
