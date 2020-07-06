import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntroScreenComponent } from '../intro/intro-screen/intro-screen.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: '', component: IntroScreenComponent, pathMatch: 'full' } ]),
  ],
})
export class GameModule {
}
