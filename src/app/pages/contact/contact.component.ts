import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    animations: [
        trigger('enterAnimation', [
            transition(':enter', [
                query('.content', [
                    style({ transform: 'translateY(30px)', opacity: 0 }),
                    stagger('180ms', animate('500ms 200ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))),
                ], { optional: true }),
            ]),
        ]),
    ],
    standalone: true,
})
export class ContactComponent {
  constructor(private navigationService: NavigationService) {
    this.navigationService.setShowNavbar(true);
  }

  ngOnInit(): void {}
}
