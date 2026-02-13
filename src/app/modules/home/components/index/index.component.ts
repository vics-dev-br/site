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
            icon: '🔍',
            step: '01',
            label: 'O Diagnóstico',
            pain: 'Incerteza, lentidão inexplicável e gastos fantasmas.',
            title: 'Pare de adivinhar o erro. Obtenha um raio-x técnico do seu ambiente.',
            pitch: 'Realizamos uma auditoria profunda em sua infraestrutura e banco de dados para identificar gargalos de performance, falhas de segurança e desperdício de recursos. Você recebe um roadmap de execução claro, com prioridades baseadas no impacto financeiro e operacional.',
            bullets: [
                'Identificação de bottlenecks',
                'Auditoria de custos de nuvem',
                'Relatório de riscos críticos'
            ],
            cta: 'Quero o diagnóstico',
            link: '/performance-infra'
        },
        {
            icon: '🛡️',
            step: '02',
            label: 'A Blindagem',
            pain: 'Quedas em produção, instabilidade e medo de escalar.',
            title: 'Estabilidade absoluta para sistemas que não podem parar.',
            pitch: 'Não entregamos apenas código; entregamos resiliência. Atuamos na correção estrutural das falhas encontradas, aplicando as melhores práticas de engenharia para que seu sistema suporte picos de carga sem degradação. É a transição do caos para a previsibilidade.',
            bullets: [
                'Tuning de banco de dados e queries',
                'Otimização de latência e concorrência',
                'Refatoração focada em estabilidade'
            ],
            cta: 'Quero estabilidade',
            link: '/blindagem-performance-infra'
        },
        {
            icon: '📈',
            step: '03',
            label: 'A Governança',
            pain: 'O sistema volta a ficar lento com o tempo, custos saem do controle.',
            title: 'Sustentabilidade técnica e financeira a longo prazo.',
            pitch: 'O ambiente está rápido e estável? Agora garantimos que ele continue assim. Implementamos monitoramento avançado (SLIs/SLOs) e práticas de FinOps para que sua infraestrutura cresça de forma saudável, mantendo a performance alta e o custo sob controle rígido.',
            bullets: [
                'Dashboards de saúde em tempo real',
                'Gestão contínua de custos (Cloud/On-premise)',
                'Prevenção proativa de incidentes'
            ],
            cta: 'Quero governança',
            link: '/monitoramento-governanca-performance'
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
