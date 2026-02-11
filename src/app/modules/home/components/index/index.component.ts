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
            title: 'Diagnóstico de Gargalos & Redução de Custos',
            pitch: 'Em até 15 dias, mostramos onde seu sistema está perdendo dinheiro e o que corrigir primeiro.',
            offer: 'Pare de tentar resolver lentidão apenas aumentando servidor. Entregamos um mapa claro dos problemas para você decidir com base em dados, não em achismo.',
            scope: [
                'Mapeamento de riscos: identificação exata do que está travando vendas e operação',
                'Análise financeira: estimativa clara de custo x benefício de cada correção',
                'Plano de ação priorizado: um roteiro de ganhos rápidos para aliviar o sistema imediatamente'
            ],
            scale: [
                'Decisão segura: retorno do investimento antes de aprovar a execução',
                'Economia real: evita gastos errados com infraestrutura desnecessária',
                'Risco zero: se fechar a execução, o valor do diagnóstico é abatido'
            ]
        },
        {
            icon: '⚙️',
            label: 'Produto 2',
            title: 'Blindagem de Performance & Estabilidade',
            pitch: 'Resolvemos a lentidão e os travamentos sem parar a sua operação.',
            offer: 'Executamos as correções críticas identificadas no diagnóstico. É uma intervenção cirúrgica para que seu sistema aguente picos de acesso sem cair.',
            scope: [
                'Execução segura: correções aplicadas com metodologia de blindagem e risco controlado',
                'Foco no negócio: ajustes em aplicação e banco priorizando o que impacta o faturamento',
                'Validação de carga: testes reais para garantir que o sistema aguenta o tranco',
                'Garantia de reversão (rollback): protocolos de segurança para desfazer alterações em minutos'
            ],
            scale: [
                'Resultado rápido: melhora perceptível na velocidade em poucas semanas',
                'Paz operacional: menos risco de queda em datas críticas (Black Friday, lançamentos)',
                'Eficiência: seu sistema faz mais com os mesmos servidores'
            ]
        },
        {
            icon: '📈',
            label: 'Produto 3',
            title: 'Monitoramento & Governança Contínua',
            pitch: 'O seguro do seu sistema: performance previsível mês a mês.',
            offer: 'Performance não é um projeto com fim, é uma disciplina contínua. Garantimos que o sistema não volte a ficar lento conforme novas funcionalidades são lançadas.',
            scope: [
                'Vigilância ativa: monitoramento de indicadores que importam para o negócio',
                'Antecipação de problemas: alertas de tendência antes do cliente reclamar',
                'Relatórios executivos: visão clara dos riscos técnicos e da eficiência de custos (FinOps)',
                'Governança técnica: apoio ao time para manter boas práticas de performance'
            ],
            scale: [
                'Previsibilidade: sem surpresas na fatura da nuvem ou quedas inesperadas',
                'Foco no core business: seu time cria features e a casa fica em pé',
                'Proteção do faturamento: menos downtime e perda de vendas'
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
