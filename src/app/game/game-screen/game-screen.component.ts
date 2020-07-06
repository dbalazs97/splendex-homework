import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { GameEngineService } from '../../core/game-engine.service';

@Component({
  selector: 'splendex-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: [ './game-screen.component.scss' ],
})
export class GameScreenComponent implements OnInit, OnDestroy {
  private routeSubscription: any;

  constructor(
    public gameEngineService: GameEngineService,
    private route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.routeSubscription = this.route.queryParams.pipe(map(params => params.decksize)).subscribe(size => {
      this.gameEngineService.newGame(size ?? 3);
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }
}
