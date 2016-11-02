import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <app-cmp-a></app-cmp-a>
    <app-cmp-b></app-cmp-b>
  `,
  styles: []
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
