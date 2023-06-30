import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './exercises/exercise2/parent/parent.component';
import { ChildComponent } from './exercises/exercise2/child/child.component';
import { Exercise2Module } from './exercises/exercise2/exercise2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Exercise2Module,
    AppRoutingModule,
    RouterModule.forRoot([{
      path: 'exercises',
      loadChildren: () =>   import('./exercises/exercises.module').then((m) => m.ExercisesModule),
    }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
