import { NgModule } from '@angular/core';
import { PreloadAllModules, ROUTES, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/exercises/1', pathMatch: 'full'},
  {path: 'exercises', children: [{path: '1', loadChildren: () => import('./exercises/exercise1/exercise1.module').then(m => m.Exercise1Module)},
  {path: '2', loadChildren: () => import('./exercises/exercise2/exercise2.module').then(m => m.Exercise2Module)},
  {path: '3', loadChildren: () => import('./exercises/exercise3/exercise3.module').then(m => m.Exercise3Module)},
  {path: '4', loadChildren: () => import('./exercises/exercise4/exercise4.module').then(m => m.Exercise4Module)}]},
  {path: '**', loadChildren: () => import('./exercises/exerciseNotFound/exerciseNotFound.module').then(m => m.ExerciseNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
