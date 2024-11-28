import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerDialogComponent } from './traveller-dialog.component';

describe('TravellerDialogComponent', () => {
  let component: TravellerDialogComponent;
  let fixture: ComponentFixture<TravellerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TravellerDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
