import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise3Component } from './exercise3.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Exercise3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: Exercise3Component
    }])
  ],
  exports: [RouterModule]
})
export class Exercise3Module { }
