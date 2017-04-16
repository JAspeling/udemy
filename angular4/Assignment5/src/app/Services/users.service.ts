import { CounterService } from './counter.service';
import { LogType } from './logging.service';
import { Injectable } from '@angular/core';
import { LoggingService } from "app/Services/logging.service";

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private loggingService: LoggingService,
    private counterService : CounterService) {
    this.loggingService.log('Users Service Initiated', LogType.info);
  }

  setUserToInactive(id: number): void {
    this.counterService.addInactive();
    this.loggingService.logInactiveUser(this.activeUsers[id]);
    this.inactiveUsers.push(...this.activeUsers.splice(id, 1));
  }

  setUserToActive(id: number): void {
    this.counterService.addActive();
    this.loggingService.logActiveUser(this.inactiveUsers[id]);
    this.activeUsers.push(...this.inactiveUsers.splice(id, 1));
  }
}
