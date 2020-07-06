import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'intro', loadChildren: () => import('./intro/intro.module').then(m => m.IntroModule) },
  { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
  { path: '', pathMatch: 'full', redirectTo: 'intro' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
  ],

})
export class AppRoutingModule {
}
