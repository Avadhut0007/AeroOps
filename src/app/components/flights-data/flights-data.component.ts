import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ManageFlightsService } from '../../services/admin/manage-flights.service';

@Component({
  selector: 'app-flights-data',
  templateUrl: './flights-data.component.html',
  styleUrl: './flights-data.component.css'
})
export class FlightsDataComponent implements OnInit{
  flightDetails :FlightDetails[]=[];
  locations = ['Pune, India', 'Kolhapur, India', 'Mumbai, India'];
  flights = [
    { airline: 'IndiGo', time: '6:25 AM', duration: '05h 15m', price: '₹18,924' },
    { airline: 'Air India', time: '9:00 AM', duration: '06h 30m', price: '₹16,500' },
  ];

  constructor(
    private manageFlightsServices:ManageFlightsService
  ){}

  ngOnInit(): void {
    this.manageFlightsServices.getFlightDetails().subscribe(Response => { this.flightDetails = Response })
  }
}

export class FlightDetails{
  constructor(
    public departureLocation: string,
    public arrivalLocation:string,
    public depatureDate:Date,
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
  )
  {}
}