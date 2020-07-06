import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'splendex-new-game-button',
  templateUrl: './new-game-button.component.html',
  styleUrls: [ './new-game-button.component.scss' ],
})
export class NewGameButtonComponent {

  @Output() public clickEvent = new EventEmitter<void>();

}
