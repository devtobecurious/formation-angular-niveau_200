import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/authentications/authentication.module').then(item => item.AuthenticationModule)
  },
  {
    path: 'jouer',
    loadChildren: () => import('./features/games/game.module').then(item => item.GameModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
