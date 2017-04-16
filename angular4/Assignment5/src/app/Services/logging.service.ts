import { logWarnings } from 'protractor/built/driverProviders';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  constructor() { 
    this.log('Logger service Initiated', LogType.info);
  }

  logActiveUser(user: string): void {
    console.log(`${user} status changed to Active`);
  }

  logInactiveUser(user: string): void {
    console.log(`${user} status changed to Inactive`);
  }

  log(message: string, type: LogType = LogType.normal): void {
    switch (type) {
      case LogType.normal:
        console.log(message);
        break;
      case LogType.error:
        console.error(message);
        break;
      case LogType.warn:
        console.warn(message);
        break;
      case LogType.info:
        console.info(message);
        break;
    }
  }
}

export enum LogType {
  normal,
  info,
  warn,
  error
}