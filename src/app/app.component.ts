import { fadeInOut } from './../animations/fadeInOut';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private contexts: ChildrenOutletContexts) {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkMode) {
      document.body.classList.add('dark');
    }
  }

  getRouterAnimation() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
