import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlightsDataService } from '../../services/flights-data.service';
declare var Razorpay : any;

@Component({
  selector: 'app-flights-data',
  templateUrl: './flights-data.component.html',
  styleUrl: './flights-data.component.css',
})
export class FlightsDataComponent implements OnInit {
  p: number = 1;
  count: number = 3;

  flightDetails: FlightDetails[] = [];
  locations = ['Pune, India', 'Kolhapur, India', 'Mumbai, India'];
  flights = [
    {
      airline: 'IndiGo',
      time: '6:25 AM',
      duration: '05h 15m',
      price: '₹18,924',
    },
    {
      airline: 'Air India',
      time: '9:00 AM',
      duration: '06h 30m',
      price: '₹16,500',
    },
  ];

  constructor(private flightsDataService: FlightsDataService) {}

  ngOnInit(): void {
    this.flightsDataService.getFlightDetails().subscribe((Response) => {
      this.flightDetails = Response;
    });
  }

  sortByPrice(): any {
    this.flightsDataService.sortByPrice().subscribe((Response) => {
      this.flightDetails = Response;
    });
  }

  sortByFlightDuration(): any {
    this.flightsDataService.sortByFlightDuration().subscribe((Response) => {
      this.flightDetails = Response;
    });
  }

  ticketPrice :number =0;

  payNow() {
    const RazorpayOptions = {
      description : 'sample',
      currency : 'INR',
      amount : 5000*100,
      name : 'AeroOps',
      key :'rzp_test_4cmsra6A3IAY4M',
      image : '/assets/logo.png',
      prefill : {
        name : 'avadhut',
        email : 'avadhutp620@gmail.com',
        phone : '7770004384',
      },
      theme :{
        color : '#f37254',
      },
      modal : {
        ondismiss : () => {
          console.log('dismissed')
        }
      }
    }

    const SuccessCallback =  (paymentid : any) => {
        console.log(paymentid);
    }

    const FailureCallback = (e : any) => {
      console.log(e);
    }

    Razorpay.open(RazorpayOptions,SuccessCallback,FailureCallback)
    }
}

export class FlightDetails {
  constructor(
    public departureLocation: string,
    public arrivalLocation: string,
    public departureDate: Date,
    public arrivalDate: Date,
    public ticketPrice: number,
    public flightNumber: number,
    public airlineName: string,
    public capacity: number,
    public depatureTime: Time,
    public arrivalTime: Time,
    public flightDuration: string,
    public airportName: string,
    public flightStatus: string,
    public classType: string,
    public airlineLogo: string
  ) {}
}
