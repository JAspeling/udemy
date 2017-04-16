import { CounterService } from '../Services/counter.service';
import { UsersService } from '../Services/users.service';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  activeActions : number = 0;

  constructor(private usersService: UsersService,
    private counterService: CounterService) {
  }

  ngOnInit() {
    this.counterService.ActiveChanged.subscribe((amount : number) => {
      this.activeActions = amount;
    });
  }

  onSetToActive(id: number) {
    this.usersService.setUserToActive(id);
  }
}
