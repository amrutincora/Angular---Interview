import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise1Component } from './exercise1.component';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { PasswordStrengthDirective } from './password-strength.directive';



@NgModule({
  declarations: [
    Exercise1Component,
    PasswordStrengthDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: Exercise1Component
    }])
  ],
  exports: [RouterModule]
})
export class Exercise1Module { }
