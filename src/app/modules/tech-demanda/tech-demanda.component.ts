import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tech-demanda',
  templateUrl: './tech-demanda.component.html',
  styleUrls: ['./tech-demanda.component.scss'],
  standalone: false
})
export class TechDemandaComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // Title - Aplicando dica 1: Proposta de valor clara
    this.titleService.setTitle('Tecnologia sob Demanda para Acelerar seu Negócio | VICS');
    
    // Meta tags básicas
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Desenvolvimento de software sob demanda. Transforme sua ideia em produto digital com especialistas de alto nível técnico e entrega ágil.' 
    });
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'tecnologia sob demanda, desenvolvimento software, MVP, startup, consultoria técnica, desenvolvimento ágil' 
    });
    
    // Open Graph tags
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Tecnologia sob Demanda | Acelere seu Negócio com VICS' 
    });
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'Especialistas em desenvolvimento de software sob demanda. Do conceito ao produto final em tempo recorde.' 
    });
    this.metaService.updateTag({ 
      property: 'og:url', 
      content: 'https://www.vics.dev.br/tech-demanda' 
    });
    this.metaService.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
    
    // Twitter Card tags
    this.metaService.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    this.metaService.updateTag({ 
      name: 'twitter:title', 
      content: 'Tecnologia sob Demanda | VICS' 
    });
    
    // Structured Data - Aplicando dicas de SEO
    if (isPlatformBrowser(this.platformId)) {
      // Canonical URL
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://www.vics.dev.br/tech-demanda');
      this.document.head.appendChild(link);

      // JSON-LD Structured Data
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tecnologia sob Demanda",
        "description": "Desenvolvimento de software personalizado sob demanda para acelerar negócios digitais",
        "provider": {
          "@type": "Organization",
          "name": "VICS",
          "url": "https://www.vics.dev.br"
        },
        "areaServed": "BR",
        "serviceType": "Desenvolvimento de Software"
      });
      this.document.head.appendChild(script);
    }
  }

  scrollToConsultation(): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById('consultation-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  openWhatsApp(): void {
    const message = encodeURIComponent('Olá! Quero uma consultoria para acelerar meu negócio com tecnologia sob demanda!');
    window.open(`https://wa.me/5534998097535?text=${message}`, '_blank');
  }
}