import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  providers: [LogService]
})
export class CmpAComponent {
  value = '';

  constructor(private logService: LogService) {}

  onLog(value: string) {
    
  }
}
