import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
                '1s 300ms ease-out',
                style({ transform: 'translateY(0)', opacity: 1 })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  darkModeEnabled: boolean;

  constructor(private title: Title) {
    this.title.setTitle('Brandon McCray');
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
}
