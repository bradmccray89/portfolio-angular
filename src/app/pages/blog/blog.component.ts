import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private navigationService: NavigationService) {
    this.navigationService.setShowNavbar(true);
  }

  ngOnInit(): void {}
}
