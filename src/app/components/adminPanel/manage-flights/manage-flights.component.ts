import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-manage-flights',
  templateUrl: './manage-flights.component.html',
  styleUrl: './manage-flights.component.css'
})


export class ManageFlightsComponent implements OnInit {
  flightStatus: Status[] | undefined;
  classType:Type[] |undefined;

  selectedFlightStatus: Status | undefined;
  selectedClassType: Type|undefined;

  date2: Date | undefined;
  time: Date[] | undefined;

  ngOnInit() {
      this.flightStatus = [
          { name: 'On Time', code: 'OT' },
          { name: 'Delayed', code: 'D' },
          { name: 'Cancelled', code: 'C' }
         
      ];

      this.classType=[
        {name1:'Economy' , code1:'E'},
        {name1:'Business' , code1:'B'},
        {name1:'First Class' , code1:'FC'},
      ]
  }
}

interface Status {
  name: string;
  code: string;
}
interface Type {
  name1: string;
  code1: string;
}