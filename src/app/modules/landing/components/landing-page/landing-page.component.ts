import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    // Título da página
    this.titleService.setTitle('Landing Page - Desenvolvimento Web e App | VICS');

    // Metatags principais
    this.metaService.addTags([
      { name: 'description', content: 'Transformamos ideias em soluções digitais reais. Desenvolvemos sites, sistemas e aplicativos sob medida para sua empresa.' },
      { name: 'keywords', content: 'desenvolvimento web, criação de sites, aplicativos personalizados, sistemas, VICS, soluções digitais' },
      { name: 'author', content: 'VICS Desenvolvimento Web' },

      // Open Graph (para redes sociais)
      { property: 'og:title', content: 'Landing Page | VICS - Desenvolvimento Web e App' },
      { property: 'og:description', content: 'Ajudamos empresas a tirar ideias do papel com soluções digitais sob medida.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.vics.dev.br/landing' },
      { property: 'og:image', content: 'https://www.vics.dev.br/assets/img/vics.jpg' },

      // Twitter Card (opcional)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Landing Page | VICS' },
      { name: 'twitter:description', content: 'Transforme sua ideia em site ou aplicativo com a VICS.' },
      { name: 'twitter:image', content: 'https://www.vics.dev.br/assets/img/vics.jpg' }
    ]);
  }
}
