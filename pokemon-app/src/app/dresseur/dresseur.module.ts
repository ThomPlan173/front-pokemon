import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DresseurRoutingModule } from './dresseur-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DresseurComponent } from './dresseur.component';
import { DresseurDetailsComponent } from './pages/dresseur-details/dresseur-details.component';
import { DresseurListComponent } from './pages/dresseur-list/dresseur-list.component';
import { DresseurFormComponent } from './components/dresseur-form/dresseur-form.component';


@NgModule({
  declarations: [
    DresseurComponent,
    DresseurDetailsComponent,
    DresseurListComponent,
    DresseurFormComponent
  ],
  imports: [
    CommonModule,
    DresseurRoutingModule,
    SharedModule
  ]
})
export class DresseurModule { }
