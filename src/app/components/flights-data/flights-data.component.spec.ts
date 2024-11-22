import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDataComponent } from './flights-data.component';

describe('FlightsDataComponent', () => {
  let component: FlightsDataComponent;
  let fixture: ComponentFixture<FlightsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightsDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
