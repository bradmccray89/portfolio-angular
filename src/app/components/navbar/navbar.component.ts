import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navList = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Projects', link: '/projects' },
  ];

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
