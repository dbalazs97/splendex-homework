import { Injectable } from '@angular/core';
import { GameMap } from './game-map';

@Injectable({
  providedIn: 'root',
})
export class GameGeneratorService {

  public generateGame(deckSize: number): GameMap {
    const currentGame: GameMap = { tiles: [], tries: 0 };

    for (let i = 0; i < deckSize; i++) {
      let position: number;
      do {
        position = Math.round(Math.random() * (deckSize - 1));
      } while (!!currentGame.tiles[position]);
      currentGame.tiles[position] = { value: Math.floor(i / 2), revealed: false, match: false };
    }
    return currentGame;
  }
}
