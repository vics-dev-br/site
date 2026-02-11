import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-blindagem-performance',
  templateUrl: './blindagem-performance.component.html',
  styleUrls: ['./blindagem-performance.component.scss'],
  standalone: false
})
export class BlindagemPerformanceComponent implements OnInit {
  ctaLabel = 'Agendar diagnóstico gratuito de 30 min';
  ctaHref =
    'https://wa.me/5531975474785?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20de%2030%20min%20e%20planejar%20a%20Blindagem%20de%20Performance';
  checklistHref = '/assets/checklist-12-pontos.pdf';

  contextPitfalls = [
    'Executar sem método',
    'Fazer ajustes diretos em produção',
    'Improvisar otimizações',
    'Escalar infraestrutura sem resolver a causa'
  ];

  targetAudiences = [
    'Empresas com sistemas críticos em produção',
    'Ambientes hospitalares, governamentais ou corporativos',
    'Times que já passaram pelo Diagnóstico de Performance',
    'Gestores que não podem correr riscos em produção'
  ];

  exclusions = [
    'Protótipos',
    'Ambientes experimentais',
    'Projetos sem governança técnica'
  ];

  planningItems = [
    'Revisão do plano de ação do diagnóstico',
    'Priorização por impacto e risco',
    'Definição de janelas de execução',
    'Estratégia de rollback'
  ];

  executionItems = [
    'Otimização de consultas críticas',
    'Criação e ajuste de índices',
    'Estratégias de cache (dados e assets)',
    'Ajustes de aplicação e servidores',
    'Ajustes de infraestrutura e escalabilidade',
    'Correção de uso ineficiente de recursos'
  ];

  stabilizationItems = [
    'Testes controlados',
    'Monitoramento pós-implantação',
    'Ajustes finos',
    'Validação de métricas'
  ];

  finalDelivery = [
    'Relatório de execução',
    'Comparativo antes x depois',
    'Recomendações técnicas futuras',
    'Base para governança contínua'
  ];

  notIncluded = [
    'Novos requisitos',
    'Evoluções funcionais',
    'Suporte contínuo',
    'Operação diária'
  ];

  results = [
    'Redução significativa de lentidão',
    'Estabilidade operacional comprovada',
    'Melhor uso de recursos',
    'Evita aumento desnecessário de infraestrutura',
    'Mais confiança técnica e gerencial'
  ];

  riskControls = [
    'Execução baseada em diagnóstico',
    'Mudanças controladas',
    'Estratégia de rollback',
    'Métricas antes e depois',
    'Sem improviso em produção'
  ];

  faqs = [
    {
      question: 'Qual diferença entre performance e resiliência?',
      answer:
        'Performance trata de latência, throughput e custo. Resiliência garante que esses números se sustentem em picos e falhas, com rollback e SLO respeitados.'
    },
    {
      question: 'O que é teste de caos/latência induzida?',
      answer:
        'São experimentos controlados que simulam falhas e latência extra para validar se arquitetura e SLO resistem a cenários reais antes de chegar ao usuário.'
    },
    {
      question: 'Como definir SLO/SLI realistas?',
      answer:
        'Usamos dados históricos, riscos de negócio e objetivos de custo. Definimos SLI (latência, erro, saturação) e SLO negociados com o time para priorizar o que importa.'
    }
  ];

  testimonials = [
    {
      quote: 'Estabilidade em pico de vendas sem aumento de infraestrutura.',
      author: 'COO - Varejo digital',
      metric: 'Erro rate caiu de 2,1% para 0,7% nos picos'
    },
    {
      quote: 'Teste de caos revelou ponto único de falha e corrigimos antes do grande lançamento.',
      author: 'Head de Produto - Educação',
      metric: 'Disponibilidade mantida em 99,95% durante campanha'
    }
  ];

  beforeAfterMetrics = [
    { metric: 'Latência P95 em pico', before: '510 ms', after: '310 ms' },
    { metric: 'Erro rate durante falha simulada', before: '3,4%', after: '0,9%' },
    { metric: 'Tempo de rollback', before: '18 min', after: '6 min' },
    { metric: 'Custo em pico', before: 'R$ 45k/mês', after: 'R$ 36k/mês' }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Blindagem de Performance | Estabilidade de Sistema — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Correções críticas com segurança total, rollback e validação para evitar travamentos e quedas em picos.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'blindagem de performance, execução de otimizações, estabilidade operacional, sistemas críticos, performance em produção'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Blindagem de Performance | Estabilidade de Sistema — VICS'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Execução segura das correções críticas para sustentar estabilidade em picos e falhas.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/blindagem-performance-infra'
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
        name: 'Blindagem de Performance em Infra',
        url: 'https://www.vics.dev.br/blindagem-performance-infra',
        serviceType: 'Estabilidade de sistema com execução controlada',
        provider: {
          '@type': 'Organization',
          name: 'VICS'
        },
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
          { '@type': 'ListItem', position: 2, name: 'Blindagem de Performance', item: 'https://www.vics.dev.br/blindagem-performance-infra' }
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
