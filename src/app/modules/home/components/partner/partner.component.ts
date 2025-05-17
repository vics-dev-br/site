import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  standalone: false
})
export class PartnerComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {}

  partners = [
    'assets/img/partner-1.png',
    'assets/img/partner-2.png',
    'assets/img/partner-3.png',
    'assets/img/partner-4.png',
    'assets/img/partner-5.png',
    'assets/img/partner-6.png',
    'assets/img/partner-1.png',
    'assets/img/partner-2.png',
    'assets/img/partner-3.png',
    'assets/img/partner-4.png',
    'assets/img/partner-5.png',
    'assets/img/partner-6.png'
  ];
}
