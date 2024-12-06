import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlightDetails } from '../../components/flights/flights.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageFlightsService {
 
  constructor(private httpClient:HttpClient) { }

  private apiUrl='http://localhost:8080/ManageFlights'

  addFlightDetails(flightDetails : any){
    return this.httpClient.post(`${this.apiUrl}/addFlights`,flightDetails, { observe: 'response' });
  }

  getFlightDetails() {
    return this.httpClient.get<FlightDetails[]>(`${this.apiUrl}/showFlightDetails`);
  }

  searchFlights(departureLocation: string, arrivalLocation: string, departureDate: string, arrivalDate: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/searchFlights/${departureLocation}/${arrivalLocation}/${departureDate}/${arrivalDate}`);
  }

}
