import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  menuActive: boolean = false;

  isLoading: boolean=true;//skaleton purpose

  ngOnInit(): void {
    this.loadNavbar();
  }
  
  loadNavbar():void{
    setTimeout(()=>{
      this.isLoading=false;
    },1000);
  }


  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
