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
  selector: 'app-diagnostico-monitoramento',
  templateUrl: './diagnostico-monitoramento.component.html',
  styleUrls: ['./diagnostico-monitoramento.component.scss'],
  standalone: false
})
export class DiagnosticoMonitoramentoComponent implements OnInit {
  ctaWhatsApp = 'https://wa.me/5531975474785?text=Fiz%20o%20diagn%C3%B3stico%20no%20site%20e%20quero%20conversar%20sobre%20Monitoramento%20%26%20Governan%C3%A7a';

  blocks = [
    { id: 'A', title: 'Visibilidade e Controle', icon: '🔹' },
    { id: 'B', title: 'Estabilidade e Incidentes', icon: '🔹' },
    { id: 'C', title: 'Crescimento e Mudanças', icon: '🔹' },
    { id: 'D', title: 'Governança e Decisão', icon: '🔹' }
  ];

  questions: Question[] = [
    // BLOCO A — Visibilidade e Controle
    { id: 1, block: 'A', text: 'Você consegue identificar degradação de performance antes que o usuário reclame?', answer: null },
    { id: 2, block: 'A', text: 'Você tem dashboards que mostram a saúde do sistema em tempo real?', answer: null },
    { id: 3, block: 'A', text: 'Quando ocorre lentidão, você sabe exatamente onde está o gargalo?', answer: null },
    { id: 4, block: 'A', text: 'Você monitora indicadores como latência P95/P99, erro rate e saturação?', answer: null },
    { id: 5, block: 'A', text: 'Você tem histórico de performance para comparar períodos diferentes?', answer: null },

    // BLOCO B — Estabilidade e Incidentes
    { id: 6, block: 'B', text: 'Nos últimos 3 meses, houve algum incidente de performance que poderia ter sido evitado?', answer: null },
    { id: 7, block: 'B', text: 'Você recebe muitos alertas falsos positivos que atrapalham a operação?', answer: null },
    { id: 8, block: 'B', text: 'A performance do sistema degrada gradualmente sem que ninguém perceba a tempo?', answer: null },
    { id: 9, block: 'B', text: 'Incidentes de performance costumam se repetir mesmo após correções?', answer: null },
    { id: 10, block: 'B', text: 'Você descobre problemas de performance quando já estão afetando usuários ou receita?', answer: null },

    // BLOCO C — Crescimento e Mudanças
    { id: 11, block: 'C', text: 'Novos deploys ou features frequentemente causam regressões de performance?', answer: null },
    { id: 12, block: 'C', text: 'O crescimento de dados ou usuários já causou surpresas na infraestrutura?', answer: null },
    { id: 13, block: 'C', text: 'Você consegue prever quando precisará escalar a infraestrutura?', answer: null },
    { id: 14, block: 'C', text: 'Mudanças na equipe (rotatividade) afetam a qualidade das decisões técnicas?', answer: null },
    { id: 15, block: 'C', text: 'Você sabe o impacto de performance antes de subir uma nova feature para produção?', answer: null },

    // BLOCO D — Governança e Decisão
    { id: 16, block: 'D', text: 'Você tem padrões documentados de performance que a equipe deve seguir?', answer: null },
    { id: 17, block: 'D', text: 'Decisões de infraestrutura são tomadas com base em dados ou intuição?', answer: null },
    { id: 18, block: 'D', text: 'Você consegue justificar investimentos em infra com métricas claras?', answer: null },
    { id: 19, block: 'D', text: 'Existe alguém responsável por acompanhar a saúde de performance continuamente?', answer: null },
    { id: 20, block: 'D', text: 'Você tem relatórios de performance que a gestão consegue entender?', answer: null }
  ];

  // Opções invertidas: "Não" indica necessidade do serviço (exceto para perguntas negativas)
  answerOptions = [
    { value: 2, label: 'Sim' },
    { value: 1, label: 'Às vezes' },
    { value: 0, label: 'Não' }
  ];

  // Perguntas onde "Sim" indica problema (pontuação invertida)
  invertedQuestions = [6, 7, 8, 9, 10, 11, 12, 14];

  results: Result[] = [
    {
      range: '0-10',
      title: 'Você está com a casa em ordem',
      color: 'green',
      message: 'Sua operação já tem boa visibilidade e controle sobre performance. Mantenha as boas práticas e considere evoluir para SLI/SLO se ainda não implementou.',
      product: 'Conteúdo / Checklist',
      cta: 'Baixar checklist de 12 pontos de performance',
      ctaLink: '/assets/checklist-12-pontos.pdf'
    },
    {
      range: '11-20',
      title: 'Você precisa de monitoramento básico',
      color: 'yellow',
      message: 'Existem gaps de visibilidade que podem causar surpresas. Monitoramento de indicadores críticos e revisões periódicas podem evitar incidentes.',
      product: 'Plano Essencial',
      cta: 'Conhecer Plano Essencial',
      ctaLink: this.ctaWhatsApp
    },
    {
      range: '21-30',
      title: 'Você precisa de governança contínua',
      color: 'orange',
      message: 'Seu ambiente cresce e muda com frequência. Sem governança ativa, cada deploy é um risco. Análise de tendência e avaliação de impacto são essenciais.',
      product: 'Plano Avançado (Recomendado)',
      cta: 'Conhecer Plano Avançado',
      ctaLink: this.ctaWhatsApp
    },
    {
      range: '31-40',
      title: 'Você PRECISA de monitoramento prioritário',
      color: 'red',
      message: 'Seu sistema opera no escuro. Incidentes são questão de tempo, não de possibilidade. Governança contínua com visibilidade estratégica é urgente.',
      product: 'Plano Crítico',
      cta: 'Agendar diagnóstico urgente',
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
    this.title.setTitle('Diagnóstico: Você precisa de Monitoramento & Governança? — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra em 3 minutos se sua empresa precisa de monitoramento contínuo de performance. Diagnóstico gratuito com 20 perguntas e resultado imediato.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico: Você precisa de Monitoramento & Governança? — VICS'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/monitoramento-governanca-performance/diagnostico'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: 'Diagnóstico de Maturidade em Monitoramento & Governança',
        description: 'Descubra se sua empresa precisa de monitoramento contínuo de performance',
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
    // Calcula score considerando perguntas invertidas
    this.totalScore = this.questions.reduce((sum, q) => {
      if (q.answer === null) return sum;

      // Para perguntas invertidas: "Sim" = 2 pontos (problema), "Não" = 0 pontos
      // Para perguntas normais: "Não" = 2 pontos (falta controle), "Sim" = 0 pontos
      if (this.invertedQuestions.includes(q.id)) {
        return sum + (q.answer || 0); // Sim = 2 indica problema
      } else {
        return sum + (2 - (q.answer || 0)); // Não = 2 indica falta de controle
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
    this.questions.forEach(q => q.answer = null);
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
