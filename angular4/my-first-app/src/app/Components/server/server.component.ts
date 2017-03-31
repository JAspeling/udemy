import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverID: number = 10;
  serverStatus: string = "offline";

  constructor() {
    this.setStatus();
  }

  setStatus(): void {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
    setTimeout(() => { this.setStatus(); }, 5000);
  }

  ngOnInit() {
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    switch (this.serverStatus) {
      case "online": return "green";
      case "offline": return "red";
    }
  }
}
