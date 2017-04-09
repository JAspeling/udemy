export class Game {
    state: GameState = GameState.Stopped;
    interval = 0;

    public getState(): string {
        let result = '';
        switch (this.state) {
            case GameState.Stopped: result = 'Stopped'; break;
            case GameState.Started: result = 'Started'; break;
            case GameState.Paused: result = 'Paused'; break;
        }

        result = `${result}, with an interval of ${this.interval}`;
        return result;
    }

    public Reset(): void {
        this.state = GameState.Stopped;
        this.interval = 0;
    }

    public Pause() : void{
        this.state = GameState.Paused;
    }
}

export enum GameState {
    Stopped,
    Paused,
    Started
}
