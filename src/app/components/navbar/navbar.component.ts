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
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from 'src/app/services/navigation.service';
import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';

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
  standalone: true,
  imports: [NgIf, RouterLink, NgFor, RouterLinkActive, NgClass, AsyncPipe],
})
export class NavbarComponent implements OnInit {
  darkModeEnabled: boolean;
  showNavbar: Observable<boolean> = this.navigationService.showNavbar$;
  menuOpen: boolean = false;
  navList = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    // { name: 'Blog', link: '/blog'},
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contact' },
    // { name: 'Resume', link: '/resume' },
  ];

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) {
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
}
