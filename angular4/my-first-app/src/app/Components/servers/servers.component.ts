import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  canAddServer: boolean = false;
  serverCreationStatus: string = "No Server was created.";
  serverName: string = "";
  serverAdded: boolean = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.canAddServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(event): void {
    this.serverAdded = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Server Name: ${this.serverName}` ;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
