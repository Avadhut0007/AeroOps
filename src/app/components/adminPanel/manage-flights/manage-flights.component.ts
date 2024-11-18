import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManageFlightsService } from '../../../services/admin/manage-flights.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrls: ['./manage-flights.component.css'],
  providers: [DatePipe] 
})

export class ManageFlightsComponent implements OnInit {
  FlightDetailsForm!: FormGroup;

  flightDetails ={
    departureLocation: '',
    arrivalLocation:'',
    depatureDate:'',
    arrivalDate:'',
    ticketPrice:'',
    flightNumber:'',
    airlineName:'',
    capacity:'',
    depatureTime:'',
    arrivalTime:'',
    flightDuration:'',
    airportName:'',
    flightStatus:'',
    classType:'',
  };

  constructor(
    private fb: FormBuilder,
    private manageFlightService: ManageFlightsService,
    private snackBar:MatSnackBar,
    private datePipe: DatePipe
  ) {}


  ngOnInit() {
    this.FlightDetailsForm = this.fb.group({
      departureLocation: ['', Validators.required],
      arrivalLocation: ['', Validators.required],
      depatureDate: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      ticketPrice: ['', Validators.required],
      flightNumber: ['', Validators.required],
      airlineName: ['', Validators.required],
      capacity: ['', Validators.required],
      depatureTime: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      flightDuration: ['', Validators.required],
      airportName: ['', Validators.required],
      flightStatus: ['', Validators.required],
      classType: ['', Validators.required],
    });
  }


  onSubmit() {
    if (this.FlightDetailsForm.valid) {
      const formattedDepartureDate = this.datePipe.transform(this.FlightDetailsForm.value.departureDate, 'yyyy-MM-dd');
      const formattedArrivalDate = this.datePipe.transform(this.FlightDetailsForm.value.arrivalDate, 'yyyy-MM-dd');
      
      
      const flightDetails = {
        ...this.FlightDetailsForm.value,
        departureDate: formattedDepartureDate,
        arrivalDate: formattedArrivalDate,
        
      };
  
      
      this.manageFlightService.addFlightDetails(flightDetails)
        .subscribe((response) => {
          if (response.status === 200) {
            this.snackBar.open('Data added successfully', 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
            console.log('Flight details added successfully:', response);
            this.FlightDetailsForm.reset(); // Reset the form after submission
          }
          else{
            this.snackBar.open('Failed to add data', 'Close', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }
        },
      );
    }
  }
  
  
  
}
