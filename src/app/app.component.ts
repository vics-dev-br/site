import {
    Component,
    Inject,
    OnInit,
    PLATFORM_ID
  } from '@angular/core';
  import {
    Router,
    NavigationEnd,
    NavigationCancel
  } from '@angular/router';
  import { isPlatformBrowser } from '@angular/common';
  import { filter } from 'rxjs/operators';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
  })
  export class AppComponent implements OnInit {
    location: any;
    routerSubscription: any;
    isBrowser: boolean;
  
    constructor(
      private router: Router,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }
  
    ngOnInit(): void {
      if (this.isBrowser) {
        this.recallJsFunctions();
      }
    }
  
    recallJsFunctions(): void {
      this.routerSubscription = this.router.events
        .pipe(
          filter(
            event =>
              event instanceof NavigationEnd ||
              event instanceof NavigationCancel
          )
        )
        .subscribe(event => {
          this.location = this.router.url;
  
          if (event instanceof NavigationEnd) {
            window.scrollTo(0, 0);
  
            // se jQuery estiver carregado, reexecuta scripts
            if (typeof $ !== 'undefined' && typeof $.fn.tooltip === 'function') {
              $('[data-bs-toggle="tooltip"]').tooltip();
            }
          }
        });
    }
} 