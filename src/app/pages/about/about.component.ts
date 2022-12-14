import { Title } from '@angular/platform-browser';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component } from '@angular/core';

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
})
export class AboutComponent {
  constructor(private title: Title) {
    this.title.setTitle('Brandon | About');
  }

  ngOnInit(): void {}
}
