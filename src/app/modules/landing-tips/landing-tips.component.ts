import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-landing-tips',
  templateUrl: './landing-tips.component.html',
  styleUrls: ['./landing-tips.component.scss'],
  standalone: false
})
export class LandingTipsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // Title
    this.titleService.setTitle('10 Dicas para Landing Pages de Alta Conversão | VICS');
    
    // Meta tags básicas
    this.metaService.updateTag({ 
      name: 'description', 
      content: '10 dicas práticas de marketing digital para criar landing pages que convertem. Aumente suas vendas online com estratégias comprovadas.' 
    });
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'landing page, conversão, marketing digital, CRO, otimização, vendas online, dicas de marketing' 
    });
    
    // Open Graph tags
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: '10 Dicas para Landing Pages de Alta Conversão | VICS' 
    });
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Aprenda as estratégias de conversão usadas pelos melhores profissionais de marketing digital.' 
    });
    this.metaService.updateTag({ 
      property: 'og:url', 
      content: 'https://www.vics.dev.br/landing-tips' 
    });
    this.metaService.updateTag({ 
      property: 'og:type', 
      content: 'article' 
    });
    
    // Twitter Card tags
    this.metaService.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    this.metaService.updateTag({ 
      name: 'twitter:title', 
      content: '10 Dicas para Landing Pages de Alta Conversão' 
    });
    
    // Only run in browser
    if (isPlatformBrowser(this.platformId)) {
      // Canonical URL
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://www.vics.dev.br/landing-tips');
      this.document.head.appendChild(link);
    }
  }

  scrollToCTA(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById('cta-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}