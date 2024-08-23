import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageFlightsComponent } from '../components/adminPanel/manage-flights/manage-flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ManageFlightsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DropdownModule

  ]
})
export class AdminModule { }
