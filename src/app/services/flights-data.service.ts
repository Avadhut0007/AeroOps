import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDetails } from '../components/flights/flights.component';

@Injectable({
  providedIn: 'root'
})
export class FlightsDataService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl='http://localhost:8080/FlightsData'

  getFlightDetails() {
    return this.httpClient.get<FlightDetails[]>(`${this.apiUrl}/showFlightDetails`);
  }

  sortByPrice() {
    return this.httpClient.get<FlightDetails[]>(`${this.apiUrl}/sortByCheaperPrice`);
    }

    sortByFlightDuration() {
      return this.httpClient.get<FlightDetails[]>(`${this.apiUrl}/sortByFlightDuration`);
      }
}
