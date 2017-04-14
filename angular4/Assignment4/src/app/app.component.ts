import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Game } from 'app/Classes/GameState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // For the Child classs to be able to use the CSS
})
export class AppComponent implements OnInit {
  // Keep a reference to the Game Object
  @Input() game : Game;
  
  constructor() {

  }

  ngOnInit() {

  }

  // set the instance of the Game object in the app.component 
  // to the same instance of the game-control.component.
  onGameNotified(game: Game) {
    this.game = game;
  }
}
