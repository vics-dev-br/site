import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

interface Question {
  id: number;
  block: string;
  text: string;
  answer: number | null;
}

interface Result {
  range: string;
  title: string;
  color: string;
  message: string;
  product: string;
  cta: string;
  ctaLink: string;
}

@Component({
  selector: 'app-performance-diagnostico',
  templateUrl: './diagnostico-performance.component.html',
  styleUrls: ['./diagnostico-performance.component.scss'],
  standalone: false
})
export class DiagnosticoPerformanceComponent implements OnInit {
  ctaWhatsApp =
    'https://wa.me/5531975474785?text=Quero%20entender%20o%20estado%20da%20minha%20infra%20e%20performance%20%2D%20vi%20o%20diagn%C3%B3stico%20no%20site';
  checklistHref = '/assets/checklist-12-pontos.pdf';

  blocks = [
    { id: 'A', title: 'Sintomas em produção', icon: '🚨' },
    { id: 'B', title: 'Observabilidade e SLO', icon: '📊' },
    { id: 'C', title: 'Arquitetura e gargalos', icon: '🧭' },
    { id: 'D', title: 'Custos e previsibilidade', icon: '💰' }
  ];

  questions: Question[] = [
    // BLOCO A — Sintomas em produção
    { id: 1, block: 'A', text: 'Incidentes ou lentidão em horários críticos se repetem?', answer: null },
    { id: 2, block: 'A', text: 'Usuários relatam demora em etapas-chave (checkout, autenticação, consultas)?', answer: null },
    { id: 3, block: 'A', text: 'Há picos de fila ou timeout em integrações externas?', answer: null },
    { id: 4, block: 'A', text: 'A equipe passa mais tempo apagando incêndio do que evoluindo o produto?', answer: null },
    { id: 5, block: 'A', text: 'Deploys são evitados por medo de derrubar a performance?', answer: null },

    // BLOCO B — Observabilidade e SLO
    { id: 6, block: 'B', text: 'Você mede latência P95/P99, erro rate e throughput por rota/serviço?', answer: null },
    { id: 7, block: 'B', text: 'Alertas são acionáveis ou você descobre problemas por reclamação de usuário?', answer: null },
    { id: 8, block: 'B', text: 'Tem logs distribuídos/tracing para seguir a jornada de uma requisição?', answer: null },
    { id: 9, block: 'B', text: 'Existem baselines claros para horário de pico ou datas críticas?', answer: null },
    { id: 10, block: 'B', text: 'SLO/SLI estão acordados com o negócio e revisados periodicamente?', answer: null },

    // BLOCO C — Arquitetura e gargalos
    { id: 11, block: 'C', text: 'Queries ou jobs viram gargalo mesmo após aumentar recursos?', answer: null },
    { id: 12, block: 'C', text: 'Caches, filas ou bancos são usados sem estratégia clara de validade e carga?', answer: null },
    { id: 13, block: 'C', text: 'Autoescalonamento aumenta custo sem resolver a lentidão?', answer: null },
    { id: 14, block: 'C', text: 'Dependências externas geram backpressure sem circuit breaker ou proteção?', answer: null },
    { id: 15, block: 'C', text: 'Você conhece a capacidade atual e o ponto de saturação antes da degradação?', answer: null },

    // BLOCO D — Custos e previsibilidade
    { id: 16, block: 'D', text: 'O custo de cloud/infra subiu nos últimos meses sem redução de latência?', answer: null },
    { id: 17, block: 'D', text: 'Existe um plano claro de capacity planning para os próximos 3-6 meses?', answer: null },
    { id: 18, block: 'D', text: 'Você não realiza testes de carga/estresse antes de datas ou campanhas críticas?', answer: null },
    { id: 19, block: 'D', text: 'Negócio e produto têm visibilidade do risco de performance em roadmap?', answer: null },
    { id: 20, block: 'D', text: 'Investimentos em infraestrutura são decididos mais por feeling do que por dados?', answer: null }
  ];

  answerOptions = [
    { value: 2, label: 'Sim' },
    { value: 1, label: 'Às vezes' },
    { value: 0, label: 'Não' }
  ];

  results: Result[] = [
    {
      range: '0-10',
      title: 'Saúde sob controle',
      color: 'green',
      message:
        'Você tem sinais de controle de performance. Mantenha a higiene de monitoramento e refine checklists para prevenir regressões.',
      product: 'Checklist de 12 pontos + revisão pontual',
      cta: 'Baixar checklist gratuito',
      ctaLink: this.checklistHref
    },
    {
      range: '11-20',
      title: 'Melhorias táticas recomendadas',
      color: 'yellow',
      message:
        'Existem brechas de observabilidade ou gargalos localizados. Ajustes táticos e um mini review de infraestrutura trazem ganhos rápidos.',
      product: 'Revisão expressa de performance',
      cta: 'Agendar revisão de 30 min',
      ctaLink: this.ctaWhatsApp
    },
    {
      range: '21-30',
      title: 'Diagnóstico completo necessário',
      color: 'orange',
      message:
        'Você já sente impacto em usuários ou custos. O diagnóstico completo prioriza gargalos, define SLO e indica o plano com melhor relação ganho/custo.',
      product: 'Diagnóstico de Performance & Infra',
      cta: 'Agendar diagnóstico completo',
      ctaLink: this.ctaWhatsApp
    },
    {
      range: '31-40',
      title: 'Risco alto de degradação',
      color: 'red',
      message:
        'Incidentes, falta de SLO e custos crescentes indicam risco real para o negócio. Precisa de diagnóstico urgente e blindagem inicial para estabilizar.',
      product: 'Diagnóstico + Blindagem sob pressão',
      cta: 'Falar agora com especialista',
      ctaLink: this.ctaWhatsApp
    }
  ];

  showResult = false;
  totalScore = 0;
  currentResult: Result | null = null;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Diagnóstico: Performance de Infraestrutura — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra em 3 minutos se sua operação precisa de um diagnóstico de performance e infraestrutura. 20 perguntas com resultado imediato.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico: Performance de Infraestrutura — VICS'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/performance-infra/diagnostico'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: 'Diagnóstico de Performance de Infraestrutura',
        description: 'Veja se sua empresa precisa de um diagnóstico técnico de performance agora',
        provider: {
          '@type': 'Organization',
          name: 'VICS'
        }
      });
    }
  }

  getQuestionsByBlock(blockId: string): Question[] {
    return this.questions.filter(q => q.block === blockId);
  }

  get answeredCount(): number {
    return this.questions.filter(q => q.answer !== null).length;
  }

  get progress(): number {
    return (this.answeredCount / this.questions.length) * 100;
  }

  get allAnswered(): boolean {
    return this.questions.every(q => q.answer !== null);
  }

  calculateResult(): void {
    this.totalScore = this.questions.reduce((sum, q) => sum + (q.answer || 0), 0);

    if (this.totalScore <= 10) {
      this.currentResult = this.results[0];
    } else if (this.totalScore <= 20) {
      this.currentResult = this.results[1];
    } else if (this.totalScore <= 30) {
      this.currentResult = this.results[2];
    } else {
      this.currentResult = this.results[3];
    }

    this.showResult = true;

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const resultEl = this.document.getElementById('resultado');
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  resetForm(): void {
    this.questions.forEach(q => (q.answer = null));
    this.showResult = false;
    this.totalScore = 0;
    this.currentResult = null;

    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private appendJsonLd(data: unknown): void {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
