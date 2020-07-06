import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GameScreenComponent } from './game-screen/game-screen.component';

@NgModule({
  declarations: [ GameScreenComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: '', component: GameScreenComponent, pathMatch: 'full' } ]),
  ],
})
export class GameModule {
}
