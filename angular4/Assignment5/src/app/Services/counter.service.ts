import { LoggingService, LogType } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CounterService {
  private inactiveActions: number = 0;
  private activeActions: number = 0;

  InactiveChanged : EventEmitter<number> = new EventEmitter<number>();
  ActiveChanged : EventEmitter<number> = new EventEmitter<number>();

  constructor(private loggingService : LoggingService) { 
    this.loggingService.log('Counter Service Initiated', LogType.info);
  }

  addInactive() : void {
    this.loggingService.log(`Increment Inactive Actions: ${this.inactiveActions}`);
    this.inactiveActions += 1;
    this.InactiveChanged.emit(this.inactiveActions);
  }

  addActive() : void {
    this.loggingService.log(`Increment Active Actions: ${this.activeActions}`);
    this.activeActions += 1;
    this.ActiveChanged.emit(this.activeActions);
  }
}
