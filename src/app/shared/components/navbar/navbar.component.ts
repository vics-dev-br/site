import {
    Component,
    OnInit,
    HostListener,
    Input,
    Inject,
    PLATFORM_ID
  } from '@angular/core';
  import { isPlatformBrowser, ViewportScroller } from '@angular/common';
  
  @Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: false
  })
export class NavbarComponent implements OnInit {
    @Input() fixSticky = false;
    @Input() minimalNav = false;
    @Input() ctaHref = 'https://wa.me/5534998097535?text=Quero%20falar%20com%20a%20VICS';
    @Input() ctaLabel = 'Falar com a VICS';
  
    isSticky = false;
    isBrowser = false;
    classApplied = false;
  
    constructor(
      private viewportScroller: ViewportScroller,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }
  
    @HostListener('window:scroll', [])
    onWindowScroll(): void {
      if (this.isBrowser) {
        const scrollPosition =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0;
  
        this.isSticky = scrollPosition >= 50;
      }
    }
  
    public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
    }
  
    ngOnInit(): void {
      this.isSticky = this.fixSticky;
    }
  
    toggleClass(): void {
      this.classApplied = !this.classApplied;
    }
} 
