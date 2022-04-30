import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DresseurDetailsComponent } from './pages/dresseur-details/dresseur-details.component';
import { DresseurListComponent } from './pages/dresseur-list/dresseur-list.component';
import { DresseurComponent } from './dresseur.component';

const routes: Routes = [
  {
    path: '',
    component : DresseurComponent,
    children : [
      {
        path : '',
        component : DresseurListComponent
      },
      {
        path : ':id',
        component : DresseurDetailsComponent
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DresseurRoutingModule { }
