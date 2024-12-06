import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TravellerDialogComponent } from '../traveller-dialog/traveller-dialog.component';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {


departureControl = new FormControl();
selectedFareType: any;
adults: any;
adultNumbers: any;
children: any;
childNumbers: any;
infants: any;
infantNumbers: any;
travelClasses: any;

   getDepartureDate() {
     console.log(this.departureControl.value); // This will return the selected date
   }
  
  airports = [
    { name: 'Pune Airport', code: 'PNQ' },
    { name: 'Shirdi Airport', code: 'SAG' },
    { name: 'Chhatrapati Shivaji International Airport', code: 'BOM' },
    { name: 'Indira Gandhi International Airport', code: 'DEL' },
  ];

  // Recent searches and popular cities
  recentSearches = [
    { name: 'Pune Airport', code: 'PNQ' },
    { name: 'Shirdi Airport', code: 'SAG' },
  ];
  popularCities = [
    { name: 'Mumbai, India', code: 'BOM' },
    { name: 'New Delhi, India', code: 'DEL' },
  ];

  // Input fields
  searchTermFrom: string = '';
  searchTermTo: string = '';

  // Filtered options
  filteredAirportsFrom: { name: string; code: string }[] = [];
  filteredAirportsTo: { name: string; code: string }[] = [];

  // Method to filter airports for the "From" field
  filterAirportsFrom() {
    if (this.searchTermFrom) {
      this.filteredAirportsFrom = this.airports.filter((airport) =>
        airport.name.toLowerCase().includes(this.searchTermFrom.toLowerCase())
      );
    } else {
      this.filteredAirportsFrom = [];
    }
  }

  // Method to filter airports for the "To" field
  filterAirportsTo() {
    if (this.searchTermTo) {
      this.filteredAirportsTo = this.airports.filter((airport) =>
        airport.name.toLowerCase().includes(this.searchTermTo.toLowerCase())
      );
    } else {
      this.filteredAirportsTo = [];
    }
  }

  // Method to handle selection changes (optional if needed for additional logic)
  onFromSelected(selectedAirport: any) {
    console.log('Selected From:', selectedAirport);
  }

  onToSelected(selectedAirport: any) {
    console.log('Selected To:', selectedAirport);
  }



  totalPassengers = 1;
  travelClass = 'Economy';

  constructor(public dialog: MatDialog) {}

  openTravellerDialog() {
    const dialogRef = this.dialog.open(TravellerDialogComponent, {
      width: '600px',
      data: {
        adults: 1,
        children: 0,
        infants: 0,
        travelClass: 'Economy',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.totalPassengers = result.adults + result.children + result.infants;
        this.travelClass = result.travelClass;
      }
    });
  }
}
