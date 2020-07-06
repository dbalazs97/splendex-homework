import { Component, OnInit } from '@angular/core';
import { GameEngineService } from '../../core/game-engine.service';

@Component({
  selector: 'splendex-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: [ './game-screen.component.scss' ],
})
export class GameScreenComponent implements OnInit {

  constructor(
    public gameEngineService: GameEngineService,
  ) {
    this.gameEngineService.newGame(10);
  }

  ngOnInit(): void {
  }
}
