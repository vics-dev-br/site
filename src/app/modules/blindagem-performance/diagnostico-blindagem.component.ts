import { Component, HostListener, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
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
  riskMessage: string;
  alertHeadline: string;
}

@Component({
  selector: 'app-diagnostico-blindagem',
  templateUrl: './diagnostico-blindagem.component.html',
  styleUrls: ['./diagnostico-blindagem.component.scss'],
  standalone: false
})
export class DiagnosticoBlindagemComponent implements OnInit, OnDestroy {
  ctaWhatsApp = 'https://wa.me/5531975474785?text=Fiz%20o%20diagn%C3%B3stico%20no%20site%20e%20quero%20conversar%20sobre%20Blindagem%20de%20Performance';

  blocks = [
    { id: 'A', title: 'Riscos em Produção', icon: '🔹' },
    { id: 'B', title: 'Resiliência e Recuperação', icon: '🔹' },
    { id: 'C', title: 'Execução e Controle', icon: '🔹' },
    { id: 'D', title: 'Validação e Confiança', icon: '🔹' }
  ];

  questions: Question[] = [
    // BLOCO A — Riscos em Produção
    { id: 1, block: 'A', text: 'Você já teve incidentes de performance em momentos críticos (picos de acesso, campanhas, datas especiais)?', answer: null },
    { id: 2, block: 'A', text: 'Seu sistema já falhou ou degradou significativamente durante atualizações ou deploys?', answer: null },
    { id: 3, block: 'A', text: 'Você tem medo de fazer mudanças em produção porque não sabe o impacto na performance?', answer: null },
    { id: 4, block: 'A', text: 'Já aconteceu de escalar infraestrutura às pressas para resolver problemas de lentidão?', answer: null },
    { id: 5, block: 'A', text: 'Existe pressão do negócio para garantir estabilidade em eventos ou períodos importantes?', answer: null },

    // BLOCO B — Resiliência e Recuperação
    { id: 6, block: 'B', text: 'Você tem estratégia de rollback documentada e testada?', answer: null },
    { id: 7, block: 'B', text: 'Se um componente crítico falhar, o sistema continua funcionando de forma degradada?', answer: null },
    { id: 8, block: 'B', text: 'Você sabe quanto tempo leva para recuperar o sistema após uma falha grave?', answer: null },
    { id: 9, block: 'B', text: 'Já testou o comportamento do sistema em cenários de falha (banco fora, cache indisponível)?', answer: null },
    { id: 10, block: 'B', text: 'Você tem SLOs (objetivos de nível de serviço) definidos e monitorados?', answer: null },

    // BLOCO C — Execução e Controle
    { id: 11, block: 'C', text: 'Otimizações de performance são feitas de forma improvisada, sem planejamento formal?', answer: null },
    { id: 12, block: 'C', text: 'Mudanças de infraestrutura ou configuração são testadas antes de ir para produção?', answer: null },
    { id: 13, block: 'C', text: 'Você tem janelas de manutenção definidas para mudanças de risco?', answer: null },
    { id: 14, block: 'C', text: 'Existe documentação de mudanças realizadas e seus impactos?', answer: null },
    { id: 15, block: 'C', text: 'Ajustes críticos são executados com base em diagnóstico técnico prévio?', answer: null },

    // BLOCO D — Validação e Confiança
    { id: 16, block: 'D', text: 'Você realiza testes de carga antes de eventos importantes?', answer: null },
    { id: 17, block: 'D', text: 'O sistema foi validado sob cenários de pico realistas?', answer: null },
    { id: 18, block: 'D', text: 'Você tem métricas comparativas de antes e depois de otimizações?', answer: null },
    { id: 19, block: 'D', text: 'A gestão tem confiança técnica de que o sistema aguenta a demanda esperada?', answer: null },
    { id: 20, block: 'D', text: 'Você dorme tranquilo sabendo que a infraestrutura está preparada para imprevistos?', answer: null }
  ];

  answerOptions = [
    { value: 2, label: 'Sim' },
    { value: 1, label: 'Às vezes' },
    { value: 0, label: 'Não' }
  ];

  // Perguntas onde "Sim" indica problema (pontuação invertida)
  // Bloco A: todas são problemas se "Sim"
  // Bloco B: "Não" indica falta de resiliência (perguntas normais)
  // Bloco C: 11 é problema se "Sim", 12-15 são normais
  // Bloco D: todas são normais ("Não" indica falta de validação)
  invertedQuestions = [1, 2, 3, 4, 5, 11];

  results: Result[] = [
    {
      range: '0-10',
      title: 'Seu sistema está blindado',
      color: 'green',
      message: 'Parabéns! Você já tem práticas sólidas de resiliência e validação. Considere evoluir para testes de caos e SLO avançados.',
      product: 'Conteúdo / Checklist',
      cta: 'Baixar checklist de 12 pontos',
      ctaLink: '/assets/checklist-12-pontos.pdf',
      riskMessage: '',
      alertHeadline: ''
    },
    {
      range: '11-20',
      title: 'Você precisa de validação básica',
      color: 'yellow',
      message: 'Existem gaps que podem virar incidentes. Testes de carga e estratégias de rollback são prioridade antes de eventos críticos.',
      product: 'Blindagem Básica',
      cta: 'Garantir estabilidade do meu sistema',
      ctaLink: this.ctaWhatsApp,
      riskMessage: 'Com essa pontuação, gaps de validação podem causar incidentes em períodos de pico.',
      alertHeadline: 'Atenção: seu sistema tem pontos cegos que podem falhar sob pressão'
    },
    {
      range: '21-30',
      title: 'Você precisa de blindagem completa',
      color: 'orange',
      message: 'Seu ambiente tem riscos reais de incidentes. Execução controlada de otimizações, testes de carga e estratégia de resiliência são urgentes.',
      product: 'Blindagem Completa (Recomendado)',
      cta: 'Resolver gaps de infraestrutura agora',
      ctaLink: this.ctaWhatsApp,
      riskMessage: 'Seu risco de downtime em eventos como Black Friday ou lançamentos é alto. Não espere o sistema cair para agir.',
      alertHeadline: 'Alerta: riscos reais de downtime detectados na sua infraestrutura'
    },
    {
      range: '31-40',
      title: 'Você PRECISA blindar agora',
      color: 'red',
      message: 'Seu sistema opera em risco. Incidentes em produção são questão de tempo. Blindagem com testes de caos e resiliência é urgente.',
      product: 'Blindagem Crítica + Chaos Engineering',
      cta: 'Proteger minha operação AGORA',
      ctaLink: this.ctaWhatsApp,
      riskMessage: 'Seu sistema OPERA EM RISCO. Cada dia sem blindagem é um dia mais próximo de um incidente crítico em produção.',
      alertHeadline: 'CRÍTICO: seu sistema está operando sem proteção contra falhas'
    }
  ];

  showResult = false;
  totalScore = 0;
  currentResult: Result | null = null;

  // Urgency banner & countdown
  showUrgencyBanner = false;
  countdownMinutes = 15;
  countdownSeconds = 0;
  private countdownInterval: any;

  // Exit-intent modal
  showExitModal = false;
  private exitModalShown = false;

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Diagnóstico: Você precisa de Blindagem de Performance? — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra em 3 minutos se seu sistema precisa de blindagem de performance. Diagnóstico gratuito com 20 perguntas e resultado imediato.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico: Você precisa de Blindagem de Performance? — VICS'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/blindagem-performance-infra/diagnostico'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: 'Diagnóstico de Blindagem de Performance',
        description: 'Descubra se seu sistema precisa de blindagem e resiliência',
        provider: {
          '@type': 'Organization',
          name: 'VICS'
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  get currentMonth(): string {
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    return months[new Date().getMonth()];
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
    this.totalScore = this.questions.reduce((sum, q) => {
      if (q.answer === null) return sum;

      if (this.invertedQuestions.includes(q.id)) {
        return sum + (q.answer || 0);
      } else {
        return sum + (2 - (q.answer || 0));
      }
    }, 0);

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

    if (this.totalScore >= 11) {
      this.showUrgencyBanner = true;
      this.startCountdown();
    }

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const resultEl = this.document.getElementById('resultado');
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }

  startCountdown(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.countdownMinutes = 15;
    this.countdownSeconds = 0;

    if (!isPlatformBrowser(this.platformId)) return;

    this.countdownInterval = setInterval(() => {
      if (this.countdownSeconds === 0) {
        if (this.countdownMinutes === 0) {
          clearInterval(this.countdownInterval);
          return;
        }
        this.countdownMinutes--;
        this.countdownSeconds = 59;
      } else {
        this.countdownSeconds--;
      }
    }, 1000);
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.exitModalShown) return;
    if (!this.showResult || !this.currentResult) return;
    if (this.totalScore < 11) return;

    this.showExitModal = true;
    this.exitModalShown = true;
  }

  closeExitModal(): void {
    this.showExitModal = false;
  }

  resetForm(): void {
    this.questions.forEach(q => q.answer = null);
    this.showResult = false;
    this.totalScore = 0;
    this.currentResult = null;
    this.showUrgencyBanner = false;
    this.showExitModal = false;
    this.exitModalShown = false;

    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
    this.countdownMinutes = 15;
    this.countdownSeconds = 0;

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
