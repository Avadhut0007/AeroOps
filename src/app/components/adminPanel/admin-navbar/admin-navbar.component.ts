import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  menuActive: boolean | undefined;
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
