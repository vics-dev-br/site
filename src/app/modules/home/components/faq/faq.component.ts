import {
    Component,
    ElementRef,
    Inject,
    OnInit,
    PLATFORM_ID,
    ViewChildren,
    QueryList,
    AfterViewInit
  } from '@angular/core';
  import { isPlatformBrowser, ViewportScroller } from '@angular/common';
  
  @Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss'],
    standalone: false
  })
  export class FaqComponent implements OnInit, AfterViewInit {
    contentHeight: number = 0;
    openSectionIndex: number = -1;
    isBrowser: boolean = false;
  
    @ViewChildren('accordionContent') accordionContents!: QueryList<ElementRef>;
  
    constructor(
      private viewportScroller: ViewportScroller,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}
  
    ngOnInit(): void {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }
  
    ngAfterViewInit(): void {
      if (this.isBrowser && this.openSectionIndex !== -1) {
        this.calculateContentHeight();
      }
    }
  
    onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  
    toggleSection(index: number): void {
      if (this.openSectionIndex === index) {
        this.openSectionIndex = -1;
      } else {
        this.openSectionIndex = index;
        if (this.isBrowser) {
          setTimeout(() => this.calculateContentHeight(), 0);
        }
      }
    }
  
    isSectionOpen(index: number): boolean {
      return this.openSectionIndex === index;
    }
  
    calculateContentHeight(): void {
      const content = this.accordionContents.get(this.openSectionIndex);
      if (content) {
        this.contentHeight = content.nativeElement.scrollHeight;
      }
    }
}  