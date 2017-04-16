import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private logService : LoggingService,
    private accountsService : AccountsService) {
  }
  
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.logService.logStatusChange(status);
    this.accountsService.statusUpdated.emit(status);
  }
}