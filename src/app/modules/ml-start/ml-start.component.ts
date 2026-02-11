import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ml-start',
  templateUrl: './ml-start.component.html',
  styleUrls: ['./ml-start.component.scss'],
  standalone: false
})
export class MlStartComponent implements OnInit {
  ctaLabel = 'Agendar diagnostico gratuito';
  ctaHref = 'https://wa.me/5531975474785?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20o%20ML%20Start';

  targetAudiences = [
    { segment: 'SaaS B2B', description: 'Priorizar trials com maior chance de conversao' },
    { segment: 'Healthtech', description: 'Classificar exames ou triagem com modelo simples' },
    { segment: 'Fintech', description: 'Score de credito interno ou deteccao de anomalia basica' },
    { segment: 'GovTech', description: 'Previsao de demanda por servico publico' },
    { segment: 'Marketplace', description: 'Recomendacao de produtos ou ranking de vendedores' }
  ];

  exclusions = [
    'Data Lake ou Data Warehouse',
    'BI completo com dashboards',
    'Plataforma de IA generativa',
    'Time alocado full-time',
    'Modelo de producao em escala'
  ];

  phases = [
    {
      number: 0,
      title: 'Diagnostico',
      duration: '1 semana',
      description: 'Entender o negocio, mapear dados disponiveis, identificar a decisao de maior impacto.',
      deliverables: ['Documento de escopo com hipotese de modelo e KPI alvo']
    },
    {
      number: 1,
      title: 'Preparacao',
      duration: '1 semana',
      description: 'Coleta, limpeza e feature engineering minimo viavel.',
      deliverables: ['Dataset pronto para treinamento']
    },
    {
      number: 2,
      title: 'Modelagem',
      duration: '2 semanas',
      description: 'Treinar modelo baseline, iterar com metricas claras.',
      deliverables: ['Modelo treinado com metricas documentadas']
    },
    {
      number: 3,
      title: 'Integracao',
      duration: '1 semana',
      description: 'API ou batch para consumo pelo produto.',
      deliverables: ['Endpoint ou pipeline de inferencia funcionando']
    },
    {
      number: 4,
      title: 'Validacao',
      duration: '1 semana',
      description: 'Teste em ambiente real com grupo controlado.',
      deliverables: ['Relatorio de validacao com recomendacoes de proximo passo']
    }
  ];

  valueProps = [
    { wrong: 'Construimos modelos de IA', right: 'Entregamos uma decisao automatizada que ja funciona no seu produto' },
    { wrong: 'Usamos Machine Learning', right: 'Voce vai priorizar leads, detectar fraudes ou recomendar produtos sem depender de feeling' },
    { wrong: 'Fazemos consultoria de dados', right: 'Em 6 semanas, seu time ve um modelo rodando em producao e decide se escala' }
  ];

  successChecklist = [
    'Existe uma decisao repetitiva que hoje depende de regra fixa ou intuicao',
    'Ha pelo menos 1.000 registros historicos com label ou proxy de sucesso',
    'O time tem acesso a dados em formato estruturado (banco, planilha, API)',
    'Stakeholder com poder de decisao disponivel para validacoes semanais',
    'Expectativa de resultado em semanas, nao meses'
  ];

  faqs = [
    {
      question: 'Preciso de um time de dados interno?',
      answer: 'Nao. O ML Start entrega modelo pronto para consumo. Voce precisa apenas de um desenvolvedor para integrar a API.'
    },
    {
      question: 'E se eu nao tiver dados suficientes?',
      answer: 'Na fase de diagnostico avaliamos a viabilidade. Se os dados forem insuficientes, recomendamos alternativas antes de iniciar.'
    },
    {
      question: 'O modelo fica comigo no final?',
      answer: 'Sim. Entregamos o modelo, codigo e documentacao. Voce e dono do ativo.'
    },
    {
      question: 'Qual a diferenca para uma consultoria tradicional?',
      answer: 'Consultoria entrega relatorio. ML Start entrega modelo em producao com metricas reais.'
    },
    {
      question: 'Quanto custa escalar depois?',
      answer: 'Depende do volume. Na validacao, entregamos estimativa de custo para escala com base no uso real.'
    }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('ML Start — Inteligencia de Dados Pratica | MVP de IA em 6 semanas — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Automatize decisoes complexas em 6 semanas com um modelo preditivo funcional para vender mais ou reduzir riscos.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'machine learning, ml para startups, modelo de ml, inteligencia artificial, automacao de decisoes, data science'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'ML Start — Inteligencia de Dados Pratica | MVP de IA em 6 semanas — VICS'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Automatize decisoes complexas em 6 semanas com um modelo preditivo funcional para vender mais ou reduzir riscos.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/ml-start'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'VICS',
        url: 'https://www.vics.dev.br',
        logo: 'https://www.vics.dev.br/assets/logo.png',
        sameAs: ['https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true']
      });

      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'ML Start — Inteligencia de Dados Pratica',
        url: 'https://www.vics.dev.br/ml-start',
        serviceType: 'MVP de IA para startups',
        provider: {
          '@type': 'Organization',
          name: 'VICS'
        },
        areaServed: { '@type': 'Country', name: 'BR' },
        offers: {
          '@type': 'Offer',
          priceRange: 'R$ 15.000 - R$ 30.000'
        }
      });

      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: this.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer }
        }))
      });

      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.vics.dev.br' },
          { '@type': 'ListItem', position: 2, name: 'ML Start', item: 'https://www.vics.dev.br/ml-start' }
        ]
      });
    }
  }

  private appendJsonLd(data: unknown): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
