import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-performance-infra',
  templateUrl: './performance-infra.component.html',
  styleUrls: ['./performance-infra.component.scss'],
  standalone: false
})
export class PerformanceInfraComponent implements OnInit {
  ctaLabel = 'Agendar diagnóstico gratuito de 30 min';
  ctaHref =
    'https://wa.me/5531975474785?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20de%2030%20min%20para%20avaliar%20performance%20de%20infra';
  checklistHref = '/assets/checklist-12-pontos.pdf';

  painPoints = [
    'Lentidão crescente sem causa clara',
    'Reclamações constantes de usuários',
    'Infraestrutura pressionando por mais recursos',
    'Consultas lentas e instáveis no banco de dados',
    'Medo de quedas em horários críticos',
    'Falta de métricas confiáveis para decisão'
  ];

  deliverables = [
    'Mapa completo de gargalos de performance',
    'Análise integrada de aplicação, banco e infraestrutura',
    'Identificação de riscos operacionais',
    'Avaliação de impacto financeiro (custo x benefício)',
    'Plano de ação priorizado',
    'Relatório técnico documentado'
  ];

  steps = [
    'Levantamento Técnico — métricas, logs e configurações do ambiente',
    'Análise Profunda — gargalos de aplicação, banco de dados e infraestrutura',
    'Diagnóstico Consolidado — visão técnica com impacto no negócio',
    'Entrega do Plano de Ação — prioridades, riscos e recomendações (10 a 15 dias)'
  ];

  scope = [
    'Performance da aplicação',
    'Consultas e índices do banco de dados',
    'Uso de cache e recursos',
    'Configurações de servidores de aplicação',
    'Uso e escalabilidade da infraestrutura',
    'Consumo de CPU, memória e I/O',
    'Riscos de instabilidade'
  ];

  avoids = [
    'Aumento desnecessário de infraestrutura',
    'Otimizações aleatórias sem resultado',
    'Quedas inesperadas em sistemas críticos',
    'Decisões baseadas em suposição',
    'Retrabalho técnico'
  ];

  audiences = [
    'Sistemas críticos em produção',
    'Ambientes hospitalares, governamentais ou corporativos',
    'Empresas em crescimento',
    'Gestores que precisam de previsibilidade',
    'Infraestruturas sob pressão'
  ];

  faqs = [
    {
      question: 'Como medir ganhos de performance de infra?',
      answer:
        'Começamos definindo SLI/SLO claros (latência P95/P99, throughput, erro rate e custo). O plano traz baseline e metas por componente, com comparativo antes/depois.'
    },
    {
      question: 'Quanto tempo até ver resultado?',
      answer:
        'O diagnóstico completo leva 10 a 15 dias. As primeiras otimizações priorizadas normalmente entregam melhora perceptível nas 2 primeiras sprints de execução.'
    },
    {
      question: 'Como equilibrar performance e custos?',
      answer:
        'Mapeamos gargalos que geram consumo desnecessário e ajustamos caches, índices e configuração de recursos. Priorizamos ações com melhor relação ganho/custo.'
    }
  ];

  testimonials = [
    {
      quote: 'Reduzimos latência P95 em 38% e estabilizamos plantões críticos sem aumentar infraestrutura.',
      author: 'CTO - Saúde',
      metric: 'P95 de 420ms para 260ms em 4 semanas'
    },
    {
      quote: 'Corte de 22% no custo de cloud enquanto liberamos throughput para novo módulo.',
      author: 'Head de Tecnologia - Finanças',
      metric: 'Throughput +18% com -22% de custo'
    }
  ];

  beforeAfterMetrics = [
    { metric: 'Latência P95', before: '420 ms', after: '260 ms' },
    { metric: 'Latência P99', before: '680 ms', after: '410 ms' },
    { metric: 'Erro rate', before: '1,8%', after: '0,6%' },
    { metric: 'Throughput', before: '11k req/min', after: '13k req/min' },
    { metric: 'Custo de infra', before: 'R$ 38k/mês', after: 'R$ 29k/mês' }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Diagnóstico de Gargalos e Redução de Custos | Performance de Infra — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra por que seu sistema está lento ou caro e quanto economizar corrigindo os gargalos certos antes de escalar infraestrutura.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'performance de infraestrutura, otimização de performance, SLO, finops, redução de latência, throughput, custo de cloud'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico de Gargalos e Redução de Custos | Performance de Infra — VICS'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Diagnóstico em até 15 dias para reduzir custos e recuperar performance antes de escalar infraestrutura.'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/performance-infra'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'VICS',
        url: 'https://www.vics.dev.br',
        logo: 'https://www.vics.dev.br/assets/logo.png',
        sameAs: ['https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55 31 97547-4785',
          contactType: 'sales',
          areaServed: 'BR'
        }
      });

      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Performance de Infraestrutura',
        url: 'https://www.vics.dev.br/performance-infra',
        serviceType: 'Diagnóstico de gargalos e redução de custos',
        provider: {
          '@type': 'Organization',
          name: 'VICS',
          url: 'https://www.vics.dev.br'
        },
        areaServed: { '@type': 'Country', name: 'BR' },
        offers: {
          '@type': 'Offer',
          description: 'Diagnóstico e plano priorizado para reduzir custos e melhorar performance antes de escalar infraestrutura.'
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
            name: 'Performance de Infraestrutura',
            item: 'https://www.vics.dev.br/performance-infra'
          }
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
