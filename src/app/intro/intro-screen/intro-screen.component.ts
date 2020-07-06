import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'splendex-intro-screen',
  templateUrl: './intro-screen.component.html',
  styleUrls: [ './intro-screen.component.scss' ],
})
export class IntroScreenComponent implements OnInit {
  public selectedSize = 3;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  public newGame(): void {
    console.log(this.selectedSize);
    this.router.navigateByUrl(`/game?decksize=${ this.selectedSize * 2 }`).catch();
  }
}
