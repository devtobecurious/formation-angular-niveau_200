import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [CounterComponent, DisplayComponent],
  imports: [
    CommonModule
  ],
  exports: [CounterComponent, DisplayComponent]
})
export class CounterModule { }
