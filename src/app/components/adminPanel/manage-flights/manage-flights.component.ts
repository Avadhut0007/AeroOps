import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrl: './manage-flights.component.css'
})
export class ManageFlightsComponent {
  cities: any[] = [
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
  ];

}
