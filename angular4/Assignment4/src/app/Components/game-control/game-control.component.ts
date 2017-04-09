import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Game, GameState } from 'app/Classes/GameState';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameNotifier = new EventEmitter<Game>();
  game: Game = new Game();
  gameState = '';
  private gameTimer: any;

  constructor() { }

  ngOnInit() {
    console.log(this.game.state);
  }

  StartGame() {
    if (this.game && this.game.state !== GameState.Started) {
      this.game.state = GameState.Started;
      this.runGame();
    }
  }

  PauseGame() {
    this.game.Pause();
    clearTimeout(this.gameTimer);
  }

  StopGame() {
    clearTimeout(this.gameTimer);
    // Resets the Game state to its initial state
    this.game.Reset();
  }

  // Responsible for providing feedback every second.
  private runGame(): void {
    this.game.interval += 1;
    this.gameNotifier.emit(this.game);
    // Keep the game running
    this.gameTimer = setTimeout(() => {
      this.runGame();
    }, 1000);
  }
}
