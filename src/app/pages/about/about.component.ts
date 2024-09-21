import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        query(
          '.content',
          [
            style({ transform: 'translateY(30px)', opacity: 0 }),
            stagger(
              '180ms',
              animate(
                '500ms 200ms ease-out',
                style({ transform: 'translateY(0)', opacity: 1 })
              )
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
  standalone: true,
})
export class AboutComponent {
  experienceInYears: number;

  constructor(private navigationService: NavigationService) {
    this.navigationService.setShowNavbar(true);

    // Define the specific date
    const specificDate = new Date('07/15/2017');

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMilliseconds = currentDate.getTime() - specificDate.getTime();

    // Convert milliseconds to years
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365);

    this.experienceInYears = Math.floor(diffInYears);
  }

  ngOnInit(): void {}
}
