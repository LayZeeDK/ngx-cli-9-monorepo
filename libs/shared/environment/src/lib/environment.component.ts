import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-environment',
  template: `
    <p>
      environment works!
    </p>
  `,
  styles: []
})
export class EnvironmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
