import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-data-access',
  template: `
    <p>
      data-access works!
    </p>
  `,
  styles: []
})
export class DataAccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
