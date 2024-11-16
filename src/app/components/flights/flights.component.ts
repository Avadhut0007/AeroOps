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

  ngOnInit() {
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