import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManageFlightsService {

  constructor(private httpClient:HttpClient) { }

  private apiUrl='http://localhost:8080/ManageFlights'

  addFlightDetails(flightDetails : any){
    return this.httpClient.post(`${this.apiUrl}/addFlights`,flightDetails);
  }
}
