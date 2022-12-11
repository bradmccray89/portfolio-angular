import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('NavbarComponent.ngOnInit()');
  }

  toggleDarkMode(): void {
    console.log('NavbarComponent.toggleDarkMode()');
    // add dark mode class to body
    document.body.classList.toggle('dark');
  }
}
