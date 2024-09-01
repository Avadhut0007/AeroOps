import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ManageFlightsService } from '../../../services/admin/manage-flights.service';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrl: './manage-flights.component.css'
})


export class ManageFlightsComponent {
  FlightDetailsForm!: FormGroup;

  constructor(private manageFlightService:ManageFlightsService){}

  flightDetails={
    DestinationFrom:'',
    DestinationTo:'',
    DepartureDate:'',
    TicketPrice:'',
    FlightNumber:'',
    AirlineName:'',
    Capacity:'',
    DepartureTime:'',
    ArrivalTime:'',
    FlightDuration:'',
    AirportName:'',
    FlightStatus:'',
    ClassType:''
  };

onSubmit() {
  this.manageFlightService.addFlightDetails(this.FlightDetailsForm.value)
  .subscribe(response => {
    console.log(response);
  });
  
}

  

}

