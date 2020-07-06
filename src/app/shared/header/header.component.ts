import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    public router: Router,
  ) {
  }

  public startNewGame(): void {
    this.gameEngineService.newGame(this.selectedSize * 2);
  }

}
