import { NgModule } from '@angular/core';
import { MovePlayerDirective } from './directives/move-player.directive';
import { StarwarsJediComponent } from './starwars-jedi.component';



@NgModule({
  declarations: [
    StarwarsJediComponent,
    MovePlayerDirective
  ],
  imports: [
  ],
  exports: [
    StarwarsJediComponent,
    MovePlayerDirective
  ]
})
export class StarwarsJediModule { }
