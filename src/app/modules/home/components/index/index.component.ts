import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    standalone: false
})
export class IndexComponent implements OnInit {
    products = [
        {
            icon: '🛡️',
            label: 'Produto 1',
            title: 'Diagnóstico de Performance para Sistemas Críticos',
            pitch: 'Mapa claro de gargalos de aplicação, banco e infra em até 15 dias.',
            offer: 'Diagnóstico técnico pago com plano de ação priorizado antes de escalar infraestrutura.',
            scope: [
                'Levantamento de métricas, logs e configuração',
                'Análise de aplicação, banco e infraestrutura',
                'Plano de ação priorizado com impacto técnico e financeiro',
                'Entregáveis documentados'
            ],
            scale: [
                'Entrada clara e de baixo risco',
                'Define onde agir primeiro',
                'Abatimento do valor na execução'
            ]
        },
        {
            icon: '⚙️',
            label: 'Produto 2',
            title: 'Blindagem de Performance & Infra',
            pitch: 'Execução controlada das otimizações críticas em 15 a 30 dias.',
            offer: 'Implementação com método, rollback e validação de métricas para sistemas que não podem parar.',
            scope: [
                'Planejamento técnico e janelas de execução',
                'Otimização de queries, índices e cache',
                'Ajustes de aplicação e servidores',
                'Monitoramento e validação pós-implantação'
            ],
            scale: [
                'Plano já validado no diagnóstico',
                'Entrega fechada com escopo claro',
                'Evita aumento desnecessário de infraestrutura'
            ]
        },
        {
            icon: '📈',
            label: 'Produto 3',
            title: 'Monitoramento & Governança de Performance',
            pitch: 'Assinatura recorrente para manter performance e evitar novas crises.',
            offer: 'Monitoramento estratégico, revisões periódicas e governança técnica com relatórios executivos.',
            scope: [
                'Indicadores críticos e análise de tendência',
                'Revisões técnicas mensais ou trimestrais',
                'Boas práticas e orientação para novas features',
                'Relatórios executivos com riscos e recomendações'
            ],
            scale: [
                'Receita previsível e relação de longo prazo',
                'Menos incidentes e menos pressão por infra',
                'Produto recorrente, sem horas abertas'
            ]
        },
        {
            icon: '🤖',
            label: 'Produto 4',
            title: 'ML Start — Decisões que Escalam',
            pitch: 'Primeiro modelo de Machine Learning em produção em 6 semanas.',
            offer: 'Modelo de ML funcional para startups que querem automatizar decisões com dados.',
            scope: [
                'Diagnóstico e mapeamento de dados',
                'Preparação e feature engineering',
                'Treinamento e validação do modelo',
                'Integração via API ou batch'
            ],
            scale: [
                'Entrega rápida com escopo fechado',
                'Modelo pronto para consumo',
                'Base para escalar com dados'
            ]
        }
    ];

    constructor(  
        private title: Title,
        private meta: Meta,
        private viewportScroller: ViewportScroller
    ) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
        this.title.setTitle(
          'VICS | Diagnóstico, Blindagem e Governança de Performance'
        );
      
        this.meta.updateTag({
          name: 'description',
          content:
            'Tripé completo para sistemas críticos: diagnóstico de performance, blindagem de execução e governança contínua. Estabilidade, previsibilidade e redução de custos de infraestrutura.'
        });
      
        this.meta.updateTag({
          name: 'keywords',
          content:
            'diagnóstico de performance, blindagem de performance, governança de performance, sistemas críticos, finops, estabilidade em produção'
        });
      
        /* Open Graph / redes sociais */
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
          property: 'og:title',
          content: 'VICS – Diagnóstico, Blindagem e Governança de Performance'
        });
        this.meta.updateTag({
          property: 'og:description',
          content:
            'Entrada com diagnóstico pago, execução controlada com blindagem e recorrência com governança de performance para sistemas críticos.'
        });
      }

}
