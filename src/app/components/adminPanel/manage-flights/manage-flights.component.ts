import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageFlightsService } from '../../../services/admin/manage-flights.service';


@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css']
})

export class ManageFlightsComponent implements OnInit {
  FlightDetailsForm!: FormGroup;

  flightDetails ={
    DestinationFrom: '',
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
    ClassType:'',
  };

  constructor(
    private fb: FormBuilder,
    private manageFlightService: ManageFlightsService
  ) {}

  ngOnInit() {
    this.FlightDetailsForm = this.fb.group({
      DestinationFrom: ['', Validators.required],
      DestinationTo: ['', Validators.required],
      DepartureDate: ['', Validators.required],
      TicketPrice: ['', Validators.required],
      FlightNumber: ['', Validators.required],
      AirlineName: ['', Validators.required],
      Capacity: ['', Validators.required],
      DepartureTime: ['', Validators.required],
      ArrivalTime: ['', Validators.required],
      FlightDuration: ['', Validators.required],
      AirportName: ['', Validators.required],
      FlightStatus: ['', Validators.required],
      ClassType: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.FlightDetailsForm.valid) {
      this.manageFlightService.addFlightDetails(this.FlightDetailsForm.value)
        .subscribe(response => {
          console.log('Flight details added successfully:', response);
          this.FlightDetailsForm.reset(); // Reset the form after submission
        });
    }
  }
  
  
}
