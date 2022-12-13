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

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouterAnimation() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
