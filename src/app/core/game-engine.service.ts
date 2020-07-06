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

  constructor(
    private gameGeneratorService: GameGeneratorService,
  ) {
  }

  public get isWon(): boolean {
    return this.currentGame.tiles.every(field => field.revealed);
  }

  public get fields(): Array<GameTile> {
    return this.currentGame?.tiles ?? [];
  }

  public get tries(): number {
    return this.currentGame?.tries ?? 0;
  }

  public newGame(deckSize: number): void {
    this.currentGame = this.gameGeneratorService.generateGame(deckSize);
  }

  public openField(index: number): void {
    const currentField = this.currentGame.tiles[index];

    if (!currentField.revealed && !this.isWon) {
      this.currentGame.tries++;

      if (this.openFields.length === 1 && currentField.value === this.currentGame.tiles[this.openFields[0]].value) {
        this.currentGame.tiles[this.openFields[0]].revealed = true;
        currentField.revealed = true;
        this.openFields = [];
        return;
      }

      if (this.openFields.length === 2) {
        this.openFields.forEach(field => this.currentGame.tiles[field].revealed = false);
        this.openFields = [];
      }

      this.openFields.push(index);
      currentField.revealed = true;
    }
  }
}
