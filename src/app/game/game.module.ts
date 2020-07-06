import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameCardComponent } from './game-card/game-card.component';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [ GameScreenComponent, GameCardComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: '', component: GameScreenComponent, pathMatch: 'full' } ]),
  ],
})
export class GameModule {
}
