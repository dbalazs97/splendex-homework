import { Injectable } from '@angular/core';
import { GameGeneratorService } from './game-generator.service';
import { GameMap } from './game-map';
import { GameTile } from './game-tile';

@Injectable({
  providedIn: 'root',
})
export class GameEngineService {
  private currentGame: GameMap;
  private openFields: Array<number> = [];
  private bestValue = 0;

  constructor(
    private gameGeneratorService: GameGeneratorService,
  ) {
  }

  public get isWon(): boolean {
    if (this.currentGame && this.currentGame.tiles) {
      return this.currentGame.tiles.every(field => field.revealed);
    } else {
      return false;
    }
  }

  public get fields(): Array<GameTile> {
    return this.currentGame?.tiles ?? [];
  }

  public get tries(): number {
    return this.currentGame?.tries ?? 0;
  }

  public get best(): number {
    return this.bestValue;
  }

  public newGame(deckSize: number): void {
    if ((this.currentGame?.tries < this.bestValue || this.bestValue === 0) && this.isWon) {
      this.bestValue = this.currentGame?.tries ?? 0;
    }
    this.currentGame = this.gameGeneratorService.generateGame(deckSize);
  }

  public openField(index: number): void {
    const currentField = this.currentGame.tiles[index];

    if (!currentField.revealed && !this.isWon) {

      if (this.openFields.length === 1 && currentField.value === this.currentGame.tiles[this.openFields[0]].value) {
        this.currentGame.tiles[this.openFields[0]].revealed = true;
        this.currentGame.tiles[this.openFields[0]].match = true;
        currentField.revealed = true;
        currentField.match = true;
        this.openFields = [];
        this.currentGame.tries++;
        return;
      }

      if (this.openFields.length === 2) {
        this.openFields.forEach(field => this.currentGame.tiles[field].revealed = false);
        this.openFields = [];
        this.currentGame.tries++;
      }

      this.openFields.push(index);
      currentField.revealed = true;
    }
  }

  public restart(): void {
    this.currentGame.tries = 0;
    this.currentGame.tiles.forEach(tile => {
      tile.revealed = false;
      tile.match = false;
      this.openFields = [];
    });
  }
}
