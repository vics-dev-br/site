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
    crises = [
        {
            icon: '🚨',
            title: 'Incidente de segurança',
            description: 'Acessos fora de controle, dados vazados ou risco real de invasão.'
        },
        {
            icon: '🛑',
            title: 'Legado crítico sem dono',
            description: 'Sistema antigo que não pode parar, mas ninguém quer assumir.'
        },
        {
            icon: '💸',
            title: 'Conta de cloud fora de controle',
            description: 'Custos imprevisíveis em AWS/Azure e arquitetura ineficiente.'
        },
        {
            icon: '⚙️',
            title: 'Deploy arriscado ou manual',
            description: 'Publicação sem automação, risco de outage e rollback improvisado.'
        },
        {
            icon: '🚚',
            title: 'Migração de produção',
            description: 'Mover de Azure para AWS ou on-prem para cloud sem quebrar operação.'
        },
        {
            icon: '📉',
            title: 'Instabilidade recorrente',
            description: 'Quedas, lentidão e falta de observabilidade em ambientes críticos.'
        }
    ];

    services = [
        {
            icon: '🔐',
            title: 'Resposta a Incidentes e Hardening de Segurança',
            price: 'R$ 10.000',
            items: [
                'Contenção imediata e plano de mitigação',
                'Auditoria de acessos e revisões de arquitetura',
                'LGPD-ready e prevenção para próximos incidentes'
            ]
        },
        {
            icon: '☁️',
            title: 'Reestruturação de Infra em Produção (AWS / Cloud)',
            price: 'R$ 12.000',
            items: [
                'Migrações seguras (Azure -> AWS ou on-prem -> cloud)',
                'Kubernetes (EKS / Rancher) e CI/CD com ArgoCD',
                'Observabilidade, confiabilidade e alta disponibilidade'
            ]
        },
        {
            icon: '💸',
            title: 'Redução de Custos Críticos em Cloud (FinOps Técnico)',
            price: 'R$ 8.000',
            items: [
                'Diagnóstico de desperdício e rightsizing',
                'Cache (Redis / ElastiCache) e arquitetura eficiente',
                'Previsibilidade e controles de custo'
            ]
        },
        {
            icon: '🧱',
            title: 'Modernização de Sistemas Legados Críticos (Rails)',
            price: 'R$ 15.000',
            items: [
                'Upgrade seguro de Rails 4.x para versões modernas',
                'Isolamento de riscos e automação de deploy',
                'Preparação para escala sem interromper a operação'
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
          'VICS | Resolução de crises técnicas em produção'
        );
      
        this.meta.updateTag({
          name: 'description',
          content:
            'A VICS atua quando a produção está em risco: incidentes de segurança, custos fora de controle, migrações críticas e sistemas legados. Resposta rápida e execução sênior.'
        });
      
        this.meta.updateTag({
          name: 'keywords',
          content:
            'resposta a incidentes, crise em produção, hardening segurança, finops aws, migração azure aws, modernização rails'
        });
      
        /* Open Graph / redes sociais */
        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
          property: 'og:title',
          content: 'VICS – Resolução de crises técnicas em produção'
        });
        this.meta.updateTag({
          property: 'og:description',
          content:
            'Especialistas em ambientes críticos: segurança, custos de cloud, legado e migrações em produção. Resposta em horas, execução pelos sócios.'
        });
      }

}
