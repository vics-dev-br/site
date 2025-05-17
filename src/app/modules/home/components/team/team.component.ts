import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  standalone: false
})
export class TeamComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {}

  teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO',
      img: 'assets/img/team-1.jpg'
    },
    {
      name: 'David Warner',
      role: 'Web Developer',
      img: 'assets/img/team-2.jpg'
    },
    {
      name: 'James Andy',
      role: 'Back-End Developer',
      img: 'assets/img/team-3.jpg'
    },
    {
      name: 'David Smith',
      role: 'Front-End Developer',
      img: 'assets/img/team-4.jpg'
    },
    {
      name: 'John Doe',
      role: 'Web Developer',
      img: 'assets/img/team-5.jpg'
    },
    {
      name: 'Olivia Smith',
      role: 'Photographer',
      img: 'assets/img/team-6.jpg'
    }
  ];
}
