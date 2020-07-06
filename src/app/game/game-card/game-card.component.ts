import { Component, Input, OnInit } from '@angular/core';
import { GameEngineService } from '../../core/game-engine.service';
import { GameTile } from '../../core/game-tile';

@Component({
  selector: 'splendex-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: [ './game-card.component.scss' ],
})
export class GameCardComponent implements OnInit {
  @Input() public card: GameTile;
  @Input() public index: number;

  constructor(
    public gameEngineService: GameEngineService,
  ) {
  }

  ngOnInit(): void {
  }

  public revealCard(index: number): void {
    this.gameEngineService.openField(index);
  }
}
