import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-cloud-credits',
  templateUrl: './cloud-credits.component.html',
  styleUrls: ['./cloud-credits.component.scss'],
  standalone: false
})
export class CloudCreditsComponent implements OnInit {

  spendbaseUrl = 'https://www.spendbase.co/partners/vics/';
  whatsappUrl = 'https://wa.me/5531975474785?text=Quero%20saber%20mais%20sobre%20cr%C3%A9ditos%20cloud%20AWS%2FGCP';

  beneficios = [
    {
      icon: '💰',
      titulo: 'Até US$ 25 mil em créditos',
      descricao: 'Créditos AWS e GCP para startups e empresas em fase de crescimento. Reduza custos de infraestrutura desde o primeiro dia.'
    },
    {
      icon: '🛠️',
      titulo: 'Suporte técnico dedicado',
      descricao: 'Acesso a suporte especializado para configurar e otimizar sua infraestrutura cloud com as melhores práticas.'
    },
    {
      icon: '📊',
      titulo: 'Ferramentas de FinOps',
      descricao: 'Visibilidade e controle total dos gastos com cloud. Identifique desperdícios e otimize custos automaticamente.'
    },
    {
      icon: '🏪',
      titulo: 'Descontos em marketplace',
      descricao: 'Acesso a preços especiais em ferramentas e serviços do ecossistema cloud via marketplace AWS e GCP.'
    }
  ];

  requisitos = [
    'Conta AWS ou GCP ativa (ou em processo de criação)',
    'Pitch deck em inglês (pode ser simplificado)',
    'Perfil LinkedIn do fundador ou CTO',
    'Domínio próprio e site da empresa (mesmo que MVP)'
  ];

  passos = [
    {
      numero: '1',
      titulo: 'Acesse o link da Spendbase',
      descricao: 'Clique no botão abaixo para acessar a página de avaliação. O link já identifica a VICS como parceira.'
    },
    {
      numero: '2',
      titulo: 'Preencha a avaliação',
      descricao: 'Informe dados da sua empresa, estágio, uso de cloud e necessidades. O processo leva menos de 10 minutos.'
    },
    {
      numero: '3',
      titulo: 'Receba os créditos',
      descricao: 'Após aprovação, os créditos são aplicados diretamente na sua conta AWS ou GCP. Sem intermediários.'
    }
  ];

  faqs = [
    {
      question: 'Quem é elegível para os créditos?',
      answer: 'Startups e empresas em estágio inicial ou de crescimento que utilizam (ou planejam utilizar) AWS ou GCP. Não é necessário ter investimento externo, mas empresas com tração demonstrável têm maior chance de aprovação.'
    },
    {
      question: 'Qual o prazo para receber os créditos?',
      answer: 'O processo de avaliação pela Spendbase costuma levar de 5 a 15 dias úteis. Após aprovação, os créditos são ativados diretamente na sua conta cloud.'
    },
    {
      question: 'O que está incluído além dos créditos?',
      answer: 'Dependendo do programa, você pode receber suporte técnico, ferramentas de FinOps para controle de gastos, e descontos em serviços do marketplace. Os benefícios variam conforme o perfil da empresa.'
    },
    {
      question: 'Qual a relação entre VICS e Spendbase?',
      answer: 'A VICS é parceira oficial da Spendbase. Facilitamos o acesso aos créditos e, caso precise, oferecemos serviços complementares de infraestrutura: deploy, configuração de banco de dados, HTTPS, domínio e otimização de performance.'
    },
    {
      question: 'Preciso contratar algum serviço da VICS para acessar os créditos?',
      answer: 'Não. O acesso aos créditos via Spendbase é independente. Você pode solicitar diretamente pelo link. Os serviços da VICS são opcionais para quem precisa de ajuda com infraestrutura.'
    },
    {
      question: 'Já tenho conta AWS/GCP com gastos. Ainda posso participar?',
      answer: 'Sim. Empresas com contas ativas também são elegíveis. Os créditos podem ajudar a reduzir custos existentes ou financiar novos projetos e ambientes.'
    }
  ];

  private readonly pageUrl = 'https://www.vics.dev.br/ferramentas/cloud-credits';
  private readonly pageTitle = 'Créditos Cloud AWS & GCP — Até US$ 25 mil para Startups | VICS';
  private readonly pageDescription =
    'Acesse até US$ 25 mil em créditos AWS e GCP para sua startup através da parceria VICS + Spendbase. Reduza custos de infraestrutura cloud, receba suporte técnico e ferramentas de FinOps.';
  private readonly ogImage = 'https://www.vics.dev.br/assets/logo.png';

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ name: 'description', content: this.pageDescription });
    this.meta.updateTag({
      name: 'keywords',
      content: 'créditos cloud, créditos AWS, créditos GCP, reduzir custos AWS, startup cloud credits, spendbase, infraestrutura cloud, FinOps, créditos infraestrutura'
    });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'VICS - Data Science & Analytics' });

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });
    this.meta.updateTag({ property: 'og:image', content: this.ogImage });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });
    this.meta.updateTag({ property: 'og:site_name', content: 'VICS' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: this.ogImage });

    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', this.pageUrl);
      this.document.head.appendChild(link);
    }

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: this.pageTitle,
      description: this.pageDescription,
      url: this.pageUrl,
      inLanguage: 'pt-BR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'VICS',
        url: 'https://www.vics.dev.br'
      }
    });

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Início',
          item: 'https://www.vics.dev.br'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ferramentas',
          item: 'https://www.vics.dev.br/ferramentas'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Créditos Cloud AWS & GCP',
          item: this.pageUrl
        }
      ]
    });

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: 'Créditos Cloud AWS & GCP para Startups',
      description: this.pageDescription,
      url: this.pageUrl,
      priceCurrency: 'USD',
      price: '0',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'VICS',
        url: 'https://www.vics.dev.br'
      }
    });

    this.appendJsonLd({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  private appendJsonLd(data: unknown): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
