import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-performance-infra',
  templateUrl: './performance-infra.component.html',
  styleUrls: ['./performance-infra.component.scss'],
  standalone: false
})
export class PerformanceInfraComponent implements OnInit {
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

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Diagnóstico de Performance e Infra | VICS');
    this.meta.updateTag({
      name: 'description',
      content:
        'Diagnóstico pago para sistemas críticos: mapeamos gargalos de performance, risco e custo antes de você escalar infraestrutura. Plano claro, priorizado e acionável.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'diagnóstico de performance, otimização rails, postgres, kubernetes, finops, performance em produção'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico de Performance para Sistemas Críticos | VICS'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Descubra onde seu sistema perde performance, estabilidade e dinheiro — antes de aumentar infraestrutura. Diagnóstico pago com entregáveis claros.'
    });
  }
}
