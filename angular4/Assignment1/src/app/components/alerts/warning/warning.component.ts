import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  title: string = 'Warning!';
  body: string = 'This is the body of the warning panel.';

  constructor() { }

  ngOnInit() {
  }

}
