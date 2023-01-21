import { NavigationService } from './../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
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
})
export class ResumeComponent implements OnInit {
  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.setShowNavbar(true);
  }
}
