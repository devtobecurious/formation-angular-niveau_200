import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallHeaderComponent } from './small-header/small-header.component';



@NgModule({
  declarations: [SmallHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SmallHeaderComponent
  ]
})
export class HeadModule { }
