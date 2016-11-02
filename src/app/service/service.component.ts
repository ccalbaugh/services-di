import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: `
    <p>
      service Works!
    </p>
  `,
  styles: []
})
export class ServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
