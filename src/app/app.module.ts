import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlightsComponent } from './components/flights/flights.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManageFlightsComponent } from './components/adminPanel/manage-flights/manage-flights.component';
import { CalendarModule } from 'primeng/calendar';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FlightsDataComponent } from './components/flights-data/flights-data.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { TravellerDialogComponent } from './components/traveller-dialog/traveller-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({ 
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        FlightsComponent,
        ManageFlightsComponent,
        FlightSearchComponent,
        FlightsDataComponent,
        TravellerDialogComponent,
    ],
    bootstrap: 
    [AppComponent], 
    
    imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    MatSnackBarModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,

    MatRadioModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    MatAutocompleteModule,
    MatCheckboxModule,

    MatButtonToggleModule,
    MatMenuModule,
    MatDialogModule,

    NgxPaginationModule

],
        
        providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
