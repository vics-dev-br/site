import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blindagem-performance',
  templateUrl: './blindagem-performance.component.html',
  styleUrls: ['./blindagem-performance.component.scss'],
  standalone: false
})
export class BlindagemPerformanceComponent implements OnInit {
  ctaLabel = 'Avançar para execução de blindagem';
  ctaHref =
    'https://wa.me/5534998097535?text=Queremos%20avancar%20para%20a%20Execu%C3%A7%C3%A3o%20de%20Blindagem%20ap%C3%B3s%20o%20diagn%C3%B3stico';

  contextPitfalls = [
    'Executar sem método',
    'Fazer ajustes diretos em produção',
    'Improvisar otimizações',
    'Escalar infraestrutura sem resolver a causa'
  ];

  targetAudiences = [
    'Empresas com sistemas críticos em produção',
    'Ambientes hospitalares, governamentais ou corporativos',
    'Times que já passaram pelo Diagnóstico de Performance',
    'Gestores que não podem correr riscos em produção'
  ];

  exclusions = [
    'Protótipos',
    'Ambientes experimentais',
    'Projetos sem governança técnica'
  ];

  planningItems = [
    'Revisão do plano de ação do diagnóstico',
    'Priorização por impacto e risco',
    'Definição de janelas de execução',
    'Estratégia de rollback'
  ];

  executionItems = [
    'Otimização de consultas críticas',
    'Criação e ajuste de índices',
    'Estratégias de cache (dados e assets)',
    'Ajustes de aplicação e servidores',
    'Ajustes de infraestrutura e escalabilidade',
    'Correção de uso ineficiente de recursos'
  ];

  stabilizationItems = [
    'Testes controlados',
    'Monitoramento pós-implantação',
    'Ajustes finos',
    'Validação de métricas'
  ];

  finalDelivery = [
    'Relatório de execução',
    'Comparativo antes x depois',
    'Recomendações técnicas futuras',
    'Base para governança contínua'
  ];

  notIncluded = [
    'Novos requisitos',
    'Evoluções funcionais',
    'Suporte contínuo',
    'Operação diária'
  ];

  results = [
    'Redução significativa de lentidão',
    'Estabilidade operacional comprovada',
    'Melhor uso de recursos',
    'Evita aumento desnecessário de infraestrutura',
    'Mais confiança técnica e gerencial'
  ];

  riskControls = [
    'Execução baseada em diagnóstico',
    'Mudanças controladas',
    'Estratégia de rollback',
    'Métricas antes e depois',
    'Sem improviso em produção'
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Blindagem de Performance & Infra | VICS');
    this.meta.updateTag({
      name: 'description',
      content:
        'Execução controlada do plano do diagnóstico: otimizações críticas, validação de resultados e redução de risco em produção. Blindagem de Performance & Infra para sistemas críticos.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'blindagem de performance, execução de otimizações, estabilidade operacional, sistemas críticos, performance em produção'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Blindagem de Performance & Infra | Execução Controlada'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Transformamos diagnóstico em melhorias reais de performance, estabilidade e eficiência — com método, controle de risco e validação de resultados.'
    });
  }
}
