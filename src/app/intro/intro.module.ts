import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';

@NgModule({
  declarations: [ IntroScreenComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild([ { path: '', component: IntroScreenComponent, pathMatch: 'full' } ]),
    SharedModule,
  ],
})
export class IntroModule {
}
