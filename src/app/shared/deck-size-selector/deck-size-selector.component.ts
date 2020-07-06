import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splendex-deck-size-selector',
  templateUrl: './deck-size-selector.component.html',
  styleUrls: [ './deck-size-selector.component.scss' ],
})
export class DeckSizeSelectorComponent implements OnInit {

  public minSize = 3;
  public maxSize = 20;

  constructor() {
  }

  ngOnInit(): void {
  }

}
