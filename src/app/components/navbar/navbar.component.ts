import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menuAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(10%)', opacity: 0 }),
            stagger(
              '60ms',
              animate(
                '300ms ease-out',
                style({ transform: 'translateX(0)', opacity: 1 })
              )
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ transform: 'translateX(0)', opacity: 1 }),
            stagger(
              '60ms',
              animate(
                '300ms ease-out',
                style({ transform: 'translateX(10%)', opacity: 0 })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  darkModeEnabled: boolean;
  menuOpen: boolean = false;
  navList = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    { name: 'Projects', link: '/projects' },
  ];

  constructor() {
    // check if dark class is set to body
    this.darkModeEnabled = document.body.classList.contains('dark');
  }

  ngOnInit(): void {}

  toggleDarkMode(): void {
    // add dark mode class to body
    document.body.classList.toggle('dark');
    // update dark mode state
    this.darkModeEnabled = document.body.classList.contains('dark');
  }

  toggleMenu(): void {
    // toggle menu
    this.menuOpen = !this.menuOpen;
  }

  getNavIndex(index: number): number {
    // return index + 1 to start from 1
    return index + 1;
  }
}
