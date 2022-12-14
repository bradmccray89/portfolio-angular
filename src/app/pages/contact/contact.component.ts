import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(
    private title: Title,
    private navigationService: NavigationService
  ) {
    this.title.setTitle('Brandon | Contact Me');
    this.navigationService.setShowNavbar(true);
  }

  ngOnInit(): void {}
}
