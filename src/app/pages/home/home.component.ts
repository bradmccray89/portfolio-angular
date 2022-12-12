import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedSummaryIndex: number;
  summaryList = [
    {
      title: 'Shortest',
      content: 'I build things for the web.',
    },
    {
      title: 'Short',
      content:
        'I have been building websites and web applications for over 5 years.',
    },
    {
      title: 'Normal',
      content:
        'I have been building websites and web applications for over 5 years.',
      contentExtended:
        'I have experience with a wide range of technologies and frameworks, including Angular, Node, MySQL, and more. I have worked on projects of all sizes, from small personal projects to large enterprise applications.',
    },
    {
      title: 'Long',
      content:
        'I gradutated from Liberty University in 2019 with a B.S. in Computer Science and was fortunate enough to start my career as a Software Engineer at a local company in 2017.',
      contentExtended:
        'I have been building websites and web applications for over 5 years, and have experience with a wide range of technologies and frameworks, including Angular, Node, MySQL, and more. I have worked on projects of all sizes, from small personal projects to large enterprise applications.',
    },
    {
      title: 'Longest',
      content: 'Back in the good year of 1989 a legend was born...',
      contentExtended:
        "Just kidding...I wouldn't go back that far ;). I absolutely love what I do and I am always looking for new opportunities to learn and grow. I am fortunate to have been building websites and web applications for over 5 years, and have experience with a wide range of technologies and frameworks, including Angular, Node, C#, MySQL, and more. I have worked on projects of all sizes, from small personal projects to large enterprise applications.",
    },
  ];

  constructor() {
    this.selectedSummaryIndex = 2;
  }

  showChange(event: any) {
    console.log('event', event);
    console.log('selectedSummary', this.selectedSummaryIndex);
  }
}
