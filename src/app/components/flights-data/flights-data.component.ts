import { Component } from '@angular/core';

@Component({
  selector: 'app-flights-data',
  templateUrl: './flights-data.component.html',
  styleUrl: './flights-data.component.css'
})
export class FlightsDataComponent {
  locations = ['Pune, India', 'Kolhapur, India', 'Mumbai, India'];
  flights = [
    { airline: 'IndiGo', time: '6:25 AM', duration: '05h 15m', price: '₹18,924' },
    { airline: 'Air India', time: '9:00 AM', duration: '06h 30m', price: '₹16,500' },
  ];
}
