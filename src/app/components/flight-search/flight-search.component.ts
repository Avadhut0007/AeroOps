import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

   departureControl = new FormControl();

   getDepartureDate() {
     console.log(this.departureControl.value); // This will return the selected date
   }

  // fromOptions: string[] = [
  //   'Pune, PNQ, Pune Airport India',
  //   'Kolhapur, KLH, Kolhapur Airport India',
  //   'Mumbai, BOM, Mumbai Airport India',
  //   'Delhi, DEL, Indira Gandhi Airport',
  //   'Bangalore, BLR, Kempegowda Airport',
  // ];

  // toOptions: string[] = [
  //   'Pune, PNQ, Pune Airport India',
  //   'Kolhapur, KLH, Kolhapur Airport India',
  //   'Mumbai, BOM, Mumbai Airport India',
  //   'Delhi, DEL, Indira Gandhi Airport',
  //   'Bangalore, BLR, Kempegowda Airport',
  // ];

  // // Selected value
  //  selectedFrom: string = '';
  //  selectedTo: string = '';

  // // Filtered options
  // filteredFromOptions: string[] = [...this.fromOptions];
  // filteredToOptions: string[] = [...this.toOptions];

  // // Input search value
  //  searchFrom: string = '';
  //  searchTo: string = '';


  // // Filter the options based on user input
  // filterFrom(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  //   this.filteredFromOptions = this.fromOptions.filter((option) =>
  //     option.toLowerCase().includes(filterValue)
  //   );
  // }

  // filterTo(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
  //   this.filteredToOptions = this.toOptions.filter((option) =>
  //     option.toLowerCase().includes(filterValue)
  //   );
  // }

  //  // Handle selection
  //  onFromSelected(event: any) {
  //   console.log('Selected From:', event.value);
  //   this.searchFrom = ''; // Clear the search input after selection
  // }

  // onToSelected(event: any) {
  //   console.log('Selected To:', event.value);
  //   this.searchTo = ''; // Clear the search input after selection
  // }
  
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
}
