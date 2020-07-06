import { GameTile } from './game-tile';

export interface GameMap {
  tiles: Array<GameTile>;
  tries: number;
}
