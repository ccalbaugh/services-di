import { Component, OnInit } from '@angular/core';

import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  providers: [LogService, DataService]
})
export class CmpAComponent {
  value = '';
  items: string[] = [];

  constructor(private logService: LogService, private dataService: DataService) {}

  onLog(value: string) {
    this.logService.writeToLog(value);
  }

  onStore(value: string) {
    this.dataService.addData(value);
  }

  onGet() {
    this.items = this.dataService.getData();
  }
}
