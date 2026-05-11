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

    vantagens = [
        {
            icon: '🇧🇷',
            titulo: 'Talento sénior disponível',
            descricao: 'O Brasil forma mais engenheiros de software por ano do que qualquer país da Europa. Acesso imediato a perfis que Portugal não consegue contratar localmente.'
        },
        {
            icon: '🗣️',
            titulo: 'Mesma língua, zero atrito',
            descricao: 'Reuniões, documentação e entregas em português. Sem traduções, sem mal-entendidos, sem o custo oculto da barreira linguística.'
        },
        {
            icon: '🕐',
            titulo: 'Fuso administrável',
            descricao: 'Lisboa e São Paulo têm 3 a 4 horas de diferença. Colaboração em tempo real durante a manhã europeia é totalmente viável.'
        },
        {
            icon: '💶',
            titulo: 'Custo competitivo',
            descricao: 'Qualidade técnica de nível europeu a uma fracção do custo de contratação local em Portugal ou no resto da Europa Ocidental.'
        }
    ];

    servicos = [
        {
            step: '01',
            label: 'Engenharia de Dados',
            quando: 'Dados espalhados, relatórios manuais, decisões sem base fiável.',
            descricao: 'Construímos pipelines, data warehouses e integrações entre sistemas para que a vossa equipa deixe de trabalhar com dados inconsistentes e passe a tomar decisões em tempo real.',
            bullets: [
                'Pipelines ETL/ELT em produção',
                'Integração entre ERP, CRM e plataformas digitais',
                'Dashboards e relatórios automatizados'
            ]
        },
        {
            step: '02',
            label: 'Engenharia de Software',
            quando: 'Projecto parado, equipa sem capacidade, prazo a pressionar.',
            descricao: 'Desenvolvemos e entregamos sistemas, APIs e integrações com o rigor de uma equipa sénior — sem o overhead de contratar e integrar pessoas novas internamente.',
            bullets: [
                'APIs e microsserviços',
                'Integrações entre plataformas',
                'Automação de processos operacionais'
            ]
        },
        {
            step: '03',
            label: 'Infraestrutura & Performance',
            quando: 'Sistema lento, instável ou com custos cloud fora de controlo.',
            descricao: 'Auditamos, optimizamos e estabilizamos infraestrutura cloud para que o vosso produto aguente crescimento sem surpresas na factura nem paragens em produção.',
            bullets: [
                'Diagnóstico e optimização de performance',
                'Redução de custos cloud (AWS, GCP, Azure)',
                'Monitorização e alertas proactivos'
            ]
        }
    ];

    passos = [
        {
            titulo: 'Conversa inicial',
            descricao: 'Descrevem o projecto ou necessidade. Percebemos em conjunto se há fit técnico e cultural.'
        },
        {
            titulo: 'Proposta em 48h',
            descricao: 'Escopo, timelines e investimento por escrito. Sem reuniões intermináveis antes de ter números.'
        },
        {
            titulo: 'Arranque rápido',
            descricao: 'Onboarding em menos de uma semana. A equipa integra-se nos vossos processos e ferramentas existentes.'
        },
        {
            titulo: 'Entrega contínua',
            descricao: 'Entregas incrementais com visibilidade total. Sem caixas negras, sem surpresas no final.'
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
        this.title.setTitle('VICS | Nearshore Data & Software Engineering — Brasil para Portugal');

        this.meta.updateTag({
            name: 'description',
            content: 'Parceiro nearshore de engenharia de dados e software para empresas portuguesas. Talento técnico brasileiro sénior, em português, com fuso compatível com Lisboa. Projectos entregues, não promessas.'
        });

        this.meta.updateTag({
            name: 'keywords',
            content: 'nearshore Portugal, engenharia de dados Portugal, software nearshore Brasil, parceiro técnico Portugal, desenvolvimento software Portugal, data engineering Portugal, outsourcing tecnológico Portugal'
        });

        this.meta.updateTag({ property: 'og:type', content: 'website' });
        this.meta.updateTag({
            property: 'og:title',
            content: 'VICS – Nearshore Data & Software Engineering, Brasil para Portugal'
        });
        this.meta.updateTag({
            property: 'og:description',
            content: 'Talento técnico brasileiro sénior para empresas portuguesas. Mesma língua, fuso compatível, custo competitivo. Projectos de dados, software e infraestrutura.'
        });

        this.meta.updateTag({ name: 'language', content: 'pt-PT' });
        this.meta.updateTag({ name: 'geo.region', content: 'PT' });
        this.meta.updateTag({ name: 'geo.placename', content: 'Portugal' });
    }
}
