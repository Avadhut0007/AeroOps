import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-traveller-dialog',
  templateUrl: './traveller-dialog.component.html',
  styleUrl: './traveller-dialog.component.css'
})
export class TravellerDialogComponent {

  adults = this.data.adults;
  children = this.data.children;
  infants = this.data.infants;
  travelClass = this.data.travelClass;

  adultNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  childNumbers = [0, 1, 2, 3, 4, 5, 6];
  infantNumbers = [0, 1, 2, 3];
  travelClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];


  constructor(
    public dialogRef: MatDialogRef<TravellerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  applySelection() {
    this.dialogRef.close({
      adults: this.adults,
      children: this.children,
      infants: this.infants,
      travelClass: this.travelClass,
    });
  }
}
