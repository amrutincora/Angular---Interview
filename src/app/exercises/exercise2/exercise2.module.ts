import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './exercise2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { InvertedParentComponent } from './inverted-parent/inverted-parent.component';
import { InvertedChildComponent } from './inverted-child/inverted-child.component';


@NgModule({
  declarations: [
    Exercise2Component,
    ParentComponent,
    ChildComponent,
    InvertedParentComponent,
    InvertedChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class Exercise2Module { }
