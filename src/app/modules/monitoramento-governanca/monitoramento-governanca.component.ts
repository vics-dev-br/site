import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-monitoramento-governanca',
  templateUrl: './monitoramento-governanca.component.html',
  styleUrls: ['./monitoramento-governanca.component.scss'],
  standalone: false
})
export class MonitoramentoGovernancaComponent implements OnInit {
  ctaLabel = 'Agendar diagnóstico gratuito de 30 min';
  ctaHref =
    'https://wa.me/5531975474785?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20de%2030%20min%20para%20Monitoramento%20%26%20Governan%C3%A7a%20de%20Performance';
  checklistHref = '/assets/checklist-12-pontos.pdf';

  problemReasons = [
    'Novos módulos são adicionados',
    'Dados crescem silenciosamente',
    'Consultas ruins reaparecem',
    'Equipes mudam',
    'Infra sofre ajustes pontuais sem visão global'
  ];

  audiences = [
    'Sistemas críticos em produção',
    'Ambientes hospitalares, governamentais ou corporativos',
    'Empresas em crescimento',
    'Gestores que não podem correr riscos',
    'Clientes que já passaram pelo Diagnóstico e Blindagem'
  ];

  monitoringItems = [
    'Indicadores críticos de performance',
    'Análise de tendência (degradação progressiva)',
    'Detecção precoce de gargalos'
  ];

  reviewItems = [
    'Avaliação mensal ou trimestral',
    'Análise de mudanças recentes',
    'Avaliação de impacto de crescimento',
    'Ajustes preventivos'
  ];

  governanceItems = [
    'Boas práticas documentadas',
    'Padrões de performance',
    'Recomendações para novas features',
    'Orientação para decisões de infra'
  ];

  reportingItems = [
    'Relatórios claros para gestão',
    'Evolução histórica da performance',
    'Riscos identificados',
    'Recomendações estratégicas'
  ];

  exclusions = [
    'Desenvolvimento de novas funcionalidades',
    'Suporte operacional diário',
    'Atendimento emergencial 24/7',
    'Grandes refatorações'
  ];

  results = [
    'Performance sustentada ao longo do tempo',
    'Menos incidentes',
    'Menos pressão por escala de infra',
    'Decisões técnicas mais seguras',
    'Tranquilidade para gestores'
  ];

  plans = [
    {
      name: 'Essencial',
      price: 'R$ 1.500 a R$ 2.500 / mês',
      tagline: 'Para manter estabilidade básica',
      items: [
        'Monitoramento de indicadores críticos',
        '1 revisão técnica mensal',
        'Relatório executivo mensal',
        'Recomendações preventivas'
      ],
      note: 'Ideal para ambientes estáveis pós-blindagem.'
    },
    {
      name: 'Avançado (Recomendado)',
      price: 'R$ 3.000 a R$ 4.500 / mês',
      tagline: 'Para crescimento com segurança',
      items: [
        'Tudo do Essencial',
        'Análise de tendência e crescimento',
        '2 revisões técnicas mensais',
        'Avaliação de impacto de novas features',
        'Apoio técnico à decisão de infra'
      ],
      note: 'Melhor custo-benefício. Plano âncora de venda.'
    },
    {
      name: 'Crítico',
      price: 'R$ 5.000 a R$ 7.000 / mês',
      tagline: 'Para ambientes de alta responsabilidade',
      items: [
        'Tudo do Avançado',
        'Monitoramento prioritário',
        'Revisões técnicas sob demanda',
        'Avaliações pré-auditoria',
        'Relatórios estratégicos para diretoria'
      ],
      note: 'Ideal para saúde pública, governo e sistemas sensíveis.'
    }
  ];

  riskControls = [
    'Escopo claro',
    'Produto recorrente',
    'Sem horas abertas',
    'Governança contínua'
  ];

  faqs = [
    {
      question: 'O que rastrear em SLI/SLO?',
      answer:
        'Latência P95/P99, erro rate, saturação, disponibilidade e custo. Priorizamos por impacto em UX e negócio e criamos limites de alerta por componente.'
    },
    {
      question: 'Observabilidade vs. monitoramento tradicional?',
      answer:
        'Monitoramento avisa “quebrou”. Observabilidade explica “por que quebrou” e antecipa degradação. Usamos logs, métricas, traces e eventos de negócio juntos.'
    },
    {
      question: 'Como conectar performance e FinOps?',
      answer:
        'Ligamos SLI/SLO a custos por serviço e ambiente, medindo impacto de otimizações e prevenindo escala desnecessária com dashboards e alertas de custo.'
    }
  ];

  testimonials = [
    {
      quote: 'Crescemos 2 releases por mês sem voltar a degradar performance.',
      author: 'CTO - SaaS B2B',
      metric: 'Erro rate mantido < 0,8% com throughput +25%'
    },
    {
      quote: 'FinOps e SLO no mesmo dashboard. Decisão de infra deixou de ser no escuro.',
      author: 'CIO - Serviços financeiros',
      metric: 'Custo otimizado em -15% mantendo P95 estável'
    }
  ];

  beforeAfterMetrics = [
    { metric: 'Latência P95', before: '340 ms', after: '270 ms' },
    { metric: 'Erro rate', before: '1,4%', after: '0,7%' },
    { metric: 'Alertas falsos positivos', before: '18/mês', after: '6/mês' },
    { metric: 'Custo de cloud', before: 'R$ 41k/mês', after: 'R$ 35k/mês' }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Garantia de Performance Contínua | Monitoramento & Governança — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Monitoramento contínuo para prever problemas antes que afetem clientes e faturamento.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'monitoramento de performance, governança técnica, estabilidade contínua, sistemas críticos, performance em produção'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Garantia de Performance Contínua | Monitoramento & Governança — VICS'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Acompanhamento contínuo para evitar regressões e proteger receita.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/monitoramento-governanca-performance'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'VICS',
        url: 'https://www.vics.dev.br',
        logo: 'https://www.vics.dev.br/assets/logo.png'
      });

      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Monitoramento & Governança de Performance',
        url: 'https://www.vics.dev.br/monitoramento-governanca-performance',
        serviceType: 'Garantia de performance contínua com governança',
        provider: { '@type': 'Organization', name: 'VICS' },
        areaServed: { '@type': 'Country', name: 'BR' }
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
          { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://www.vics.dev.br' },
          { '@type': 'ListItem', position: 2, name: 'Monitoramento & Governança', item: 'https://www.vics.dev.br/monitoramento-governanca-performance' }
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
