import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tech-equity',
  templateUrl: './tech-equity.component.html',
  styleUrls: ['./tech-equity.component.scss'],
  standalone: false
})
export class TechEquityComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    // Title
    this.titleService.setTitle('Tech for Equity - Seu Cofundador Técnico | VICS');
    
    // Meta tags básicas
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Transforme sua ideia em um negócio digital. A VICS entra como cofundador técnico desenvolvendo seu MVP em troca de participação societária.' 
    });
    this.metaService.updateTag({ 
      name: 'keywords', 
      content: 'tech for equity, cofundador técnico, MVP, startup, desenvolvimento de software, parceria tecnológica, VICS' 
    });
    this.metaService.updateTag({ 
      name: 'author', 
      content: 'VICS - Visão Inteligente para o Caminho do Sucesso' 
    });
    
    // Open Graph tags
    this.metaService.updateTag({ 
      property: 'og:title', 
      content: 'Tech for Equity - Transforme sua ideia em negócio digital | VICS' 
    });
    this.metaService.updateTag({ 
      property: 'og:description', 
      content: 'A VICS entra como seu cofundador técnico, desenvolvendo o MVP e acompanhando até o projeto ganhar tração. Parceria com até 30% de participação.' 
    });
    this.metaService.updateTag({ 
      property: 'og:image', 
      content: 'https://www.vics.dev.br/assets/images/tech-equity-og.jpg' 
    });
    this.metaService.updateTag({ 
      property: 'og:url', 
      content: 'https://www.vics.dev.br/tech-equity' 
    });
    this.metaService.updateTag({ 
      property: 'og:type', 
      content: 'website' 
    });
    this.metaService.updateTag({ 
      property: 'og:locale', 
      content: 'pt_BR' 
    });
    
    // Twitter Card tags
    this.metaService.updateTag({ 
      name: 'twitter:card', 
      content: 'summary_large_image' 
    });
    this.metaService.updateTag({ 
      name: 'twitter:title', 
      content: 'Tech for Equity - Seu Cofundador Técnico | VICS' 
    });
    this.metaService.updateTag({ 
      name: 'twitter:description', 
      content: 'Transforme sua ideia em negócio digital com a VICS como cofundador técnico.' 
    });
    this.metaService.updateTag({ 
      name: 'twitter:image', 
      content: 'https://www.vics.dev.br/assets/images/tech-equity-og.jpg' 
    });
    
    // Only run in browser
    if (isPlatformBrowser(this.platformId)) {
      // Canonical URL
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://www.vics.dev.br/tech-equity');
      this.document.head.appendChild(link);
      
      // Structured Data (JSON-LD)
      const script = this.document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Tech for Equity - Parceria Tecnológica",
      "provider": {
        "@type": "Organization",
        "name": "VICS",
        "url": "https://www.vics.dev.br",
        "logo": "https://www.vics.dev.br/assets/images/logo.png",
        "telephone": "+55-31-97547-4785",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Uberlândia",
          "addressRegion": "MG",
          "addressCountry": "BR"
        }
      },
      "description": "Programa de parceria tecnológica onde a VICS atua como cofundador técnico, desenvolvendo MVPs em troca de participação societária de até 30%.",
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços Tech for Equity",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desenvolvimento de MVP",
              "description": "MVP funcional com design e tecnologia de ponta"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Suporte Técnico",
              "description": "Acompanhamento até os primeiros R$100 mil em faturamento"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Orientação Estratégica",
              "description": "Mentoria e acompanhamento do crescimento"
            }
          }
        ]
      }
      });
      this.document.head.appendChild(script);
    }
  }

  scrollToForm(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Rola direto para a seção de CTA final
      const element = this.document.getElementById('contact-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

}