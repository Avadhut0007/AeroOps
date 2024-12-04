import { Time } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ManageFlightsService } from '../../services/admin/manage-flights.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent implements OnInit {
  flightDetails :FlightDetails[]=[];

  constructor(
    private manageFlightsServices:ManageFlightsService
  ){}

  searchTerm: string = '';
  
  // Example data (replace this with data from your API)
  recentSearches = [
    { name: 'Pune, India', code: 'PNQ' },
    { name: 'Shirdi, India', code: 'SAG' },
  ];

  popularCities = [
    { name: 'Mumbai, India', code: 'BOM' },
    { name: 'New Delhi, India', code: 'DEL' },
  ];

  filterAirports() {
    // Logic to filter recentSearches and popularCities based on the search term
    // This could involve an API call for live filtering
  }

  ngOnInit() {
    // this.manageFlightsServices.getFlightDetails().subscribe(Response => { this.flightDetails = Response })
}

}

export class FlightDetails{
  constructor(
    public departureLocation: string,
    public arrivalLocation:string,
    public departureDate:Date,
    public arrivalDate:Date,
    public ticketPrice:number,
    public flightNumber:number,
    public airlineName:string,
    public capacity:number,
    public depatureTime:Time,
    public arrivalTime:Time,
    public flightDuration:string,
    public airportName:string,
    public flightStatus:string,
    public classType:string,
    public airlineLogo:string,
  )
  {}
}