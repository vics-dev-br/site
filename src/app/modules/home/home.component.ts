import {
    Component,
    Inject,
    OnInit,
    PLATFORM_ID,
    AfterContentInit
  } from '@angular/core';
  import { Meta, Title } from '@angular/platform-browser';
  import { ViewportScroller, isPlatformBrowser } from '@angular/common';
  import { ActivatedRoute } from '@angular/router';
  
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
  })
  export class HomeComponent implements OnInit, AfterContentInit {
    isBrowser = false;
  
    constructor(
      private metaService: Meta,
      private titleService: Title,
      private viewportScroller: ViewportScroller,
      private activatedRoute: ActivatedRoute,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}
  
    ngOnInit(): void {
      this.isBrowser = isPlatformBrowser(this.platformId);
  
      this.titleService.setTitle('Serviços de Engenharia de Dados e Soluções Tecnológicas - Cristiano Araújo');
      this.metaService.addTags([
        {
          name: 'description',
          content:
            'Oferecemos soluções em engenharia de dados, análise de Big Data, Business Intelligence e muito mais para ajudar sua empresa a transformar dados em insights estratégicos.'
        },
        {
          name: 'keywords',
          content:
            'Engenharia de Dados, Big Data, Business Intelligence, Desenvolvimento Backend, Desenvolvimento Web, Data Warehousing, Machine Learning'
        },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Cristiano Araújo' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]);
  
      if (this.isBrowser) {
        this.createSchema();
      }
    }
  
    createSchema(): void {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Engenharia de Dados - Cristiano Araújo",
        "url": "https://www.vics.dev.br",
        "logo": "https://www.vics.dev.br/favicon.ico",
        "sameAs": [
          "https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true"
        ],
        "description": "Soluções personalizadas em engenharia de dados e desenvolvimento de software para transformar dados em insights acionáveis e decisões estratégicas.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+55 31 97547-4785",
          "contactType": "Customer Service",
          "areaServed": "BR"
        }
      };
  
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  
    ngAfterContentInit(): void {
      if (this.isBrowser) {
        this.activatedRoute.fragment.subscribe((fragment: string) => {
          if (fragment) {
            setTimeout(() => {
              this.viewportScroller.scrollToAnchor(fragment);
            }, 100);
          }
        });
      }
    }
}  