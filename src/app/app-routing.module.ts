import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlightsComponent } from './components/flights/flights.component';
import { ManageFlightsComponent } from './components/adminPanel/manage-flights/manage-flights.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { FlightsDataComponent } from './components/flights-data/flights-data.component';
import { TravellerDialogComponent } from './components/traveller-dialog/traveller-dialog.component';
import { AdminNavbarComponent } from './components/adminPanel/admin-navbar/admin-navbar.component';


const routes: Routes = [
{path:'',component:LoginComponent},
{path:'navbar',component:NavbarComponent},
{path:'login',component:LoginComponent},
{path:'forgot-password',component:ForgotPasswordComponent},
{path:'reset-password',component:ResetPasswordComponent},
{path:'flights',component:FlightsComponent},
{path:'manage-flights',component:ManageFlightsComponent},
{path:'flight-search',component:FlightSearchComponent},
{path:'flights-data',component:FlightsDataComponent},
{path:'traveller-dialog',component:TravellerDialogComponent},
{path:'admin-navbar',component:AdminNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
