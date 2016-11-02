import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  providers: [LogService]
})
export class CmpBComponent {
  value = '';

  constructor(private logService: LogService) {}

  onLog(value: string) {
    this.logService.writeToLog(value);
  }
}
