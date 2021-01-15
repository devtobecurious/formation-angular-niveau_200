import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateGuard } from './shared/guards/authenticate.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/authentications/authentication.module').then(item => item.AuthenticationModule)
  },
  {
    path: 'jouer',
    loadChildren: () => import('./features/games/game.module').then(item => item.GameModule),
    canActivate: [ AuthenticateGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
