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

@NgModule({ 
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        FlightsComponent,
        ManageFlightsComponent
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
    CalendarModule
],
        
        providers: [
        provideAnimationsAsync(),
        provideHttpClient(withInterceptorsFromDi())
    ] })
export class AppModule { }
