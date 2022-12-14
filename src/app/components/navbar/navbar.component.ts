import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
  group,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('menuAnimation', [
      transition(':enter', [
        group([
          query(':self', [
            style({ opacity: 0 }),
            animate('500ms ease-out', style({ opacity: 1 })),
          ]),
          query(':enter', [
            style({ transform: 'translateX(10%)', opacity: 0 }),
            stagger(
              '100ms',
              animate(
                '300ms ease-out',
                style({ transform: 'translateX(0)', opacity: 1 })
              )
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        group([
          query(':self', [
            style({ opacity: 1 }),
            animate('500ms 200ms ease-out', style({ opacity: 0 })),
          ]),
          query(':leave', [
            style({ transform: 'translateX(0)', opacity: 1 }),
            stagger(
              '100ms',
              animate(
                '300ms ease-out',
                style({ transform: 'translateX(10%)', opacity: 0 })
              )
            ),
          ]),
        ]),
      ]),
    ]),
    trigger('navAnimation', [
      transition(':enter', [
        query(':self', [
          style({ opacity: 0 }),
          animate('500ms ease-out', style({ opacity: 1 })),
        ]),
      ]),
      transition(':leave', [
        query(':self', [
          style({ opacity: 1 }),
          animate('500ms ease-out', style({ opacity: 0 })),
        ]),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  darkModeEnabled: boolean;
  isHome: boolean = true;
  menuOpen: boolean = false;
  navList = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    // { name: 'Blog', link: '/blog'},
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    // check if dark class is set to body
    this.darkModeEnabled = document.body.classList.contains('dark');
  }

  ngOnInit(): void {
    //check if url is home
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.split('/').pop();
        this.isHome = url === 'home';
      }
    });
  }

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
