import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment 3';
  contents: Content[];
  displayDetails : boolean = false;
  password: Guid = Guid.newGuid();

  constructor() {
    this.contents = [];
  }

  private addTimestamp(): void {
    this.contents.push(new Content(this.contents.length + 1, new Date(Date.now())));
  }

  toggleDetails(): void{
    this.displayDetails = !this.displayDetails;
    this.addTimestamp();
  }

}

class Content {
  constructor(id: number, date: Date) {
    this.setTimeStamp(id, date);
  }

  private id: number;
  private timestamp: Date;

  setTimeStamp(id: number, date: Date): void {
    this.id = id;
    this.timestamp = date;
  }

  getInfo() : string {
    return `[${this.id}] - ${this.timestamp.toString()}`
  }
}

class Guid {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}
