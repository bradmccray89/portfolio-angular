import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';
import { NavigationService } from 'src/app/services/navigation.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
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
    imports: [NgFor],
})
export class ProjectsComponent {
  projectList = [
    {
      title: 'Portfolio (Angular)',
      description: 'My current portfolio website built with Angular.',
      image: '',
      link: 'https://github.com/bradmccray89/portfolio-angular',
    },
    {
      title: 'Mobile Massage',
      description: 'A mobile massage service website built with Angular.',
      image: '',
      link: 'https://github.com/bradmccray89/mobile-massage',
    },
    {
      title: 'Portfolio (React)',
      description: 'My first portfolio website built with React.',
      image: '',
      link: 'https://github.com/bradmccray89/portfolio',
    },
  ];

  constructor(
    private title: Title,
    private navigationService: NavigationService
  ) {
    this.title.setTitle('Brandon | Projects');
    this.navigationService.setShowNavbar(true);
  }

  ngOnInit(): void {}

  navigateToProject(link: string): void {
    window.open(link, '_blank');
  }
}
