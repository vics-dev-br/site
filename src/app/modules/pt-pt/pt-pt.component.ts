import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'app-pt-pt',
    templateUrl: './pt-pt.component.html',
    styleUrls: ['./pt-pt.component.scss'],
    standalone: false
})
export class PtPtComponent implements OnInit {

    servicos = [
        {
            step: '01',
            label: 'Diagnóstico',
            dor: 'O sistema está lento, os custos crescem e ninguém sabe bem porquê.',
            titulo: 'Descubra exactamente o que está a custar dinheiro à sua empresa.',
            descricao: 'Em 10 a 15 dias auditamos a sua infraestrutura e identificamos as falhas concretas que estão a causar lentidão, paragens não planeadas e facturas cloud a crescer. Recebe um plano de acção priorizado por impacto financeiro — não por complexidade técnica.',
            bullets: [
                'Identificação da causa raiz de lentidão e instabilidade',
                'Quantificação do custo mensal de cada problema',
                'Relatório claro com prioridades e próximos passos'
            ],
            cta: 'Pedir um Diagnóstico',
            link: '/performance-infra'
        },
        {
            step: '02',
            label: 'Correcção',
            dor: 'Cada hora de paragem custa clientes, receita e reputação.',
            titulo: 'Torne o seu sistema fiável o suficiente para crescer sem medo.',
            descricao: 'Corrigimos as falhas estruturais encontradas no diagnóstico — com plano de rollback completo e zero paragens não planeadas. O resultado: a sua equipa deixa de apagar incêndios e o sistema aguenta o crescimento do negócio.',
            bullets: [
                'Eliminação das causas raiz de paragens e lentidão',
                'Redução de custos cloud sem perda de capacidade',
                'Escalar com confiança — sem "esperemos que aguente"'
            ],
            cta: 'Resolver o problema',
            link: '/blindagem-performance-infra'
        },
        {
            step: '03',
            label: 'Controlo Contínuo',
            dor: 'Os problemas voltam. Os custos sobem. Ninguém nota até ser tarde.',
            titulo: 'Custos previsíveis. Problemas detectados antes de afectarem o negócio.',
            descricao: 'Implementamos monitorização e controlo de custos para que veja os problemas antes dos seus clientes. As facturas cloud tornam-se previsíveis. As decisões técnicas passam a ser baseadas em dados. A equipa deixa de reagir e começa a planear.',
            bullets: [
                'Visibilidade em tempo real sobre saúde e custo da infraestrutura',
                'Alertas antes de problemas afectarem utilizadores ou receita',
                'Relatório mensal que o CFO consegue interpretar'
            ],
            cta: 'Manter o controlo',
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
        this.title.setTitle('VICS | Reduza Custos e Elimine Paragens — Engenharia de Sistemas para Portugal');

        this.meta.updateTag({
            name: 'description',
            content: 'Auditamos a sua infraestrutura, identificamos o que está a custar dinheiro e corrigimos. Custos cloud previsíveis, sistemas fiáveis, sem paragens não planeadas. Trabalhamos com empresas portuguesas remotamente.'
        });

        this.meta.updateTag({
            name: 'keywords',
            content: 'redução de custos cloud, sistemas lentos Portugal, paragens não planeadas, eficiência operacional, automação Portugal, engenharia de dados Portugal, infraestrutura cloud PME'
        });

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
            property: 'og:title',
            content: 'VICS – Reduza Custos e Elimine Paragens nos Seus Sistemas'
        });
        this.meta.updateTag({
            property: 'og:description',
            content: 'Diagnóstico, correcção e controlo contínuo para sistemas críticos. Trabalhamos com empresas em Portugal, remotamente, em português europeu.'
        });

        this.meta.updateTag({ name: 'language', content: 'pt-PT' });
        this.meta.updateTag({ name: 'geo.region', content: 'PT' });
        this.meta.updateTag({ name: 'geo.placename', content: 'Portugal' });
    }
}
