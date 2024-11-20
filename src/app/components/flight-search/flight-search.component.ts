import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css'
})
export class FlightSearchComponent {

  fromOptions: string[] = [
    'Pune, PNQ, Pune Airport India',
    'Kolhapur, KLH, Kolhapur Airport India',
    'Mumbai, BOM, Mumbai Airport India',
    'Delhi, DEL, Indira Gandhi Airport',
    'Bangalore, BLR, Kempegowda Airport',
  ];

  toOptions: string[] = [
    'Pune, PNQ, Pune Airport India',
    'Kolhapur, KLH, Kolhapur Airport India',
    'Mumbai, BOM, Mumbai Airport India',
    'Delhi, DEL, Indira Gandhi Airport',
    'Bangalore, BLR, Kempegowda Airport',
  ];

  // Selected value
   selectedFrom: string = '';
   selectedTo: string = '';

  // Filtered options
  filteredFromOptions: string[] = [...this.fromOptions];
  filteredToOptions: string[] = [...this.toOptions];

  // Input search value
   searchFrom: string = '';
   searchTo: string = '';


  // Filter the options based on user input
  filterFrom(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredFromOptions = this.fromOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  filterTo(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredToOptions = this.toOptions.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

   // Handle selection
   onFromSelected(event: any) {
    console.log('Selected From:', event.value);
    this.searchFrom = ''; // Clear the search input after selection
  }

  onToSelected(event: any) {
    console.log('Selected To:', event.value);
    this.searchTo = ''; // Clear the search input after selection
  }
  
}
