import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private title: Title) {
    this.title.setTitle('Brandon | Contact Me');
  }

  ngOnInit(): void {}
}
