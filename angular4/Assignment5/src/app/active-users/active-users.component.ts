import { CounterService } from '../Services/counter.service';
import { UsersService } from '../Services/users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  inactiveActions : number = 0;

  constructor(private usersService: UsersService,
    private counterService : CounterService) {
  }

  ngOnInit() {
    this.counterService.InactiveChanged.subscribe((amount : number) => {
      this.inactiveActions = amount;
    });
  }

  onSetToInactive(id: number) {
    this.usersService.setUserToInactive(id);
  }
}
