import { Component } from '@angular/core';

@Component({
  selector: 'app2-root',
  styles: [`
    :host {
      display: block;
    }
  `],
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
