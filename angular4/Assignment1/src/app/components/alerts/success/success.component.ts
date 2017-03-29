import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  title: string = 'Success!';
  body: string = 'This is the body of the success panel.';
  constructor() { }

  ngOnInit() {
  }

}
