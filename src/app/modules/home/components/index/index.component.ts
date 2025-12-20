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
            title: 'Blindagem de Performance e Custo para Sistemas Críticos',
            pitch: 'Garantir que o sistema aguente crescimento sem travar e sem pedir mais máquina.',
            offer: 'Blindagem operacional para manter produção estável, segura e com custo previsível.',
            scope: [
                'Diagnóstico de Rails + DB + Infra',
                'Mapa de gargalos e plano de otimização',
                'Execução controlada com métricas antes/depois',
                'Automação e isolamento de risco para produção'
            ],
            scale: [
                'Todo sistema cresce e fica lento',
                'Toda empresa teme aumento de custo',
                'Infra ama quem resolve sem pedir mais servidor'
            ]
        },
        {
            icon: '📄',
            label: 'Produto 2',
            title: 'Engenharia Técnica de Editais e Licitações de Tecnologia',
            pitch: 'Transformar tecnologia em requisito vencedor de licitação.',
            offer: 'Especificação técnica que converte critério em pontos, blindando contra impugnação.',
            scope: [
                'Tradução técnica em linguagem comprável',
                'Antecipação de critérios de julgamento',
                'Requisitos testáveis e sem brechas jurídicas',
                'Preparação para provas de carga e homologação'
            ],
            scale: [
                'Pouquíssima gente no Brasil faz isso bem',
                'Alto valor percebido e impacto direto no resultado',
                'Reduz retrabalho e risco jurídico pós-assinatura'
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
          'VICS | Blindagem operacional e engenharia de vitória'
        );
      
        this.meta.updateTag({
          name: 'description',
          content:
            'Transformamos crises técnicas em produtos claros: blindagem de performance e custo para sistemas críticos e engenharia de editais de tecnologia. Resposta rápida e execução sênior.'
        });
      
        this.meta.updateTag({
          name: 'keywords',
          content:
            'blindagem operacional, performance em produção, finops aws, migração cloud, engenharia de edital, licitações de tecnologia'
        });
      
        /* Open Graph / redes sociais */
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
          property: 'og:title',
          content: 'VICS – Blindagem operacional e engenharia de vitória'
        });
        this.meta.updateTag({
          property: 'og:description',
          content:
            'Dois produtos claros: blindagem de performance e custo em sistemas críticos e engenharia técnica para vencer licitações de tecnologia.'
        });
      }

}
