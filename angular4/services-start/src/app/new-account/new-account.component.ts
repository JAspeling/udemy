import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {
  constructor(private logService: LoggingService,
    private accountService: AccountsService) {
    this.accountService.statusUpdated.subscribe(
      (status: string) => { 
        alert('New Status: ' + status);
      });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }
}
