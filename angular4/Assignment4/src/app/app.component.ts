import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Game } from 'app/Classes/GameState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // For the Child classs to be able to use the CSS
})
export class AppComponent implements OnInit {
  @Input() game : Game;
  
  constructor() {

  }

  ngOnInit() {

  }

  onGameNotified(game: Game) {
    this.game = game;
    // console.log('Game Notify Emitted', game);
  }
}
