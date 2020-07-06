import { Component } from '@angular/core';
import { GameEngineService } from '../../core/game-engine.service';

@Component({
  selector: 'splendex-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ],
})
export class HeaderComponent {
  public selectedSize = 3;

  constructor(
    public gameEngineService: GameEngineService,
  ) {
  }

  public startNewGame(): void {
    this.gameEngineService.newGame(this.selectedSize * 2);
  }

}
