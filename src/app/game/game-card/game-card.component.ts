import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
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
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit(): void {
  }

  public revealCard(index: number): void {
    this.gameEngineService.openField(index);
  }

  public getCardImagePath(value: number): SafeUrl {
    const images = [ 'angular', 'd3', 'jenkins', 'postcss', 'react', 'redux', 'sass', 'splendex', 'ts', 'webpack' ];
    return this.sanitizer.bypassSecurityTrustUrl(`assets/cards/${ images[value] }.png`);
  }
}
