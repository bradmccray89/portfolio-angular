import { NavigationService } from './../../services/navigation.service';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        query(
          '.content',
          [
            style({ transform: 'translateY(20px)', opacity: 0 }),
            stagger(
              '180ms',
              animate(
                '1s ease-out',
                style({ transform: 'translateY(0)', opacity: 1 })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('fadeRotate', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-45deg)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'rotate(0)' })
        ),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'rotate(0)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 0, transform: 'rotate(45deg)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  darkModeEnabled: boolean;

  constructor(private navigationService: NavigationService) {
    // check if dark class is set to body
    this.darkModeEnabled = document.body.classList.contains('dark');
  }

  ngOnInit(): void {
    this.navigationService.setShowNavbar(false);
  }

  toggleDarkMode(): void {
    // add dark mode class to body
    document.body.classList.toggle('dark');
    // update dark mode state
    this.darkModeEnabled = document.body.classList.contains('dark');
  }
}
