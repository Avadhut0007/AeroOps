import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const airplane = document.querySelector('.airplane') as HTMLElement;
    airplane.style.animationPlayState = 'running';
  }
}