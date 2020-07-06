import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'splendex-deck-size-selector',
  templateUrl: './deck-size-selector.component.html',
  styleUrls: [ './deck-size-selector.component.scss' ],
})
export class DeckSizeSelectorComponent implements OnInit {

  public minSize = 3;
  public maxSize = 10;
  @Input() public selectedSize = 3;
  @Output() public selectedSizeChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
