import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private title: Title) {
    this.title.setTitle('Brandon | Blog');
  }

  ngOnInit(): void {}
}
