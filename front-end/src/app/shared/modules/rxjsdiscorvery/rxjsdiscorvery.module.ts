import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchmapComponent } from './switchmap/switchmap.component';
import { ColdhotComponent } from './coldhot/coldhot.component';



@NgModule({
  declarations: [SwitchmapComponent, ColdhotComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SwitchmapComponent,
    ColdhotComponent
  ]
})
export class RxjsdiscorveryModule { }
