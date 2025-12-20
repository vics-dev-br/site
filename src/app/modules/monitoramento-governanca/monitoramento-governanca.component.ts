import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-monitoramento-governanca',
  templateUrl: './monitoramento-governanca.component.html',
  styleUrls: ['./monitoramento-governanca.component.scss'],
  standalone: false
})
export class MonitoramentoGovernancaComponent implements OnInit {
  ctaLabel = 'Contratar Monitoramento & Governança';
  ctaHref =
    'https://wa.me/5534998097535?text=Queremos%20contratar%20Monitoramento%20%26%20Governan%C3%A7a%20de%20Performance%20ap%C3%B3s%20Diagn%C3%B3stico%20e%20Blindagem';

  problemReasons = [
    'Novos módulos são adicionados',
    'Dados crescem silenciosamente',
    'Consultas ruins reaparecem',
    'Equipes mudam',
    'Infra sofre ajustes pontuais sem visão global'
  ];

  audiences = [
    'Sistemas críticos em produção',
    'Ambientes hospitalares, governamentais ou corporativos',
    'Empresas em crescimento',
    'Gestores que não podem correr riscos',
    'Clientes que já passaram pelo Diagnóstico e Blindagem'
  ];

  monitoringItems = [
    'Indicadores críticos de performance',
    'Análise de tendência (degradação progressiva)',
    'Detecção precoce de gargalos'
  ];

  reviewItems = [
    'Avaliação mensal ou trimestral',
    'Análise de mudanças recentes',
    'Avaliação de impacto de crescimento',
    'Ajustes preventivos'
  ];

  governanceItems = [
    'Boas práticas documentadas',
    'Padrões de performance',
    'Recomendações para novas features',
    'Orientação para decisões de infra'
  ];

  reportingItems = [
    'Relatórios claros para gestão',
    'Evolução histórica da performance',
    'Riscos identificados',
    'Recomendações estratégicas'
  ];

  exclusions = [
    'Desenvolvimento de novas funcionalidades',
    'Suporte operacional diário',
    'Atendimento emergencial 24/7',
    'Grandes refatorações'
  ];

  results = [
    'Performance sustentada ao longo do tempo',
    'Menos incidentes',
    'Menos pressão por escala de infra',
    'Decisões técnicas mais seguras',
    'Tranquilidade para gestores'
  ];

  plans = [
    {
      name: 'Essencial',
      price: 'R$ 1.500 a R$ 2.500 / mês',
      tagline: 'Para manter estabilidade básica',
      items: [
        'Monitoramento de indicadores críticos',
        '1 revisão técnica mensal',
        'Relatório executivo mensal',
        'Recomendações preventivas'
      ],
      note: 'Ideal para ambientes estáveis pós-blindagem.'
    },
    {
      name: 'Avançado (Recomendado)',
      price: 'R$ 3.000 a R$ 4.500 / mês',
      tagline: 'Para crescimento com segurança',
      items: [
        'Tudo do Essencial',
        'Análise de tendência e crescimento',
        '2 revisões técnicas mensais',
        'Avaliação de impacto de novas features',
        'Apoio técnico à decisão de infra'
      ],
      note: 'Melhor custo-benefício. Plano âncora de venda.'
    },
    {
      name: 'Crítico',
      price: 'R$ 5.000 a R$ 7.000 / mês',
      tagline: 'Para ambientes de alta responsabilidade',
      items: [
        'Tudo do Avançado',
        'Monitoramento prioritário',
        'Revisões técnicas sob demanda',
        'Avaliações pré-auditoria',
        'Relatórios estratégicos para diretoria'
      ],
      note: 'Ideal para saúde pública, governo e sistemas sensíveis.'
    }
  ];

  riskControls = [
    'Escopo claro',
    'Produto recorrente',
    'Sem horas abertas',
    'Governança contínua'
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Monitoramento & Governança de Performance | VICS');
    this.meta.updateTag({
      name: 'description',
      content:
        'Monitoramento e governança contínua para sistemas críticos: estabilidade, previsibilidade e controle após diagnóstico e blindagem.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'monitoramento de performance, governança técnica, estabilidade contínua, sistemas críticos, performance em produção'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Monitoramento & Governança de Performance | Estabilidade Contínua'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Estabilidade contínua para sistemas críticos. Governança técnica, revisões periódicas e monitoramento estratégico para evitar novas crises.'
    });
  }
}
