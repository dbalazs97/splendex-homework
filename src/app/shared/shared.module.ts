import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeckSizeSelectorComponent } from './deck-size-selector/deck-size-selector.component';
import { HeaderComponent } from './header/header.component';
import { NewGameButtonComponent } from './new-game-button/new-game-button.component';

@NgModule({
  declarations: [ HeaderComponent, NewGameButtonComponent, DeckSizeSelectorComponent ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class SharedModule {
}
