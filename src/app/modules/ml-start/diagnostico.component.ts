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
  selector: 'app-diagnostico',
  templateUrl: './diagnostico.component.html',
  styleUrls: ['./diagnostico.component.scss'],
  standalone: false
})
export class DiagnosticoComponent implements OnInit {
  ctaWhatsApp = 'https://wa.me/5531975474785?text=Fiz%20o%20diagn%C3%B3stico%20no%20site%20e%20quero%20conversar%20sobre%20o%20resultado';

  blocks = [
    { id: 'A', title: 'Dor Operacional', icon: '🔹' },
    { id: 'B', title: 'Complexidade do Negócio', icon: '🔹' },
    { id: 'C', title: 'Impacto Financeiro', icon: '🔹' },
    { id: 'D', title: 'Escala e Futuro', icon: '🔹' }
  ];

  questions: Question[] = [
    // BLOCO A — Dor Operacional
    { id: 1, block: 'A', text: 'Você depende de planilhas, regras manuais ou feeling para tomar decisões importantes?', answer: null },
    { id: 2, block: 'A', text: 'Sua equipe gasta mais tempo analisando dados do que executando ações?', answer: null },
    { id: 3, block: 'A', text: 'Existe alguém "chave" que decide bem, mas não sabe explicar exatamente como decide?', answer: null },
    { id: 4, block: 'A', text: 'Quando essa pessoa não está, a qualidade das decisões cai?', answer: null },
    { id: 5, block: 'A', text: 'Você já percebeu decisões diferentes para problemas muito parecidos?', answer: null },

    // BLOCO B — Complexidade do Negócio
    { id: 6, block: 'B', text: 'Suas decisões dependem de muitas variáveis ao mesmo tempo?', answer: null },
    { id: 7, block: 'B', text: 'Essas variáveis mudam com frequência (mercado, cliente, sazonalidade)?', answer: null },
    { id: 8, block: 'B', text: 'Regras fixas funcionam por um tempo e depois deixam de funcionar?', answer: null },
    { id: 9, block: 'B', text: 'Você já tentou criar regras do tipo "se X então Y" e virou algo difícil de manter?', answer: null },
    { id: 10, block: 'B', text: 'Você sente que o negócio é mais complexo do que os relatórios mostram?', answer: null },

    // BLOCO C — Impacto Financeiro
    { id: 11, block: 'C', text: 'Você descobre problemas quando o prejuízo já aconteceu?', answer: null },
    { id: 12, block: 'C', text: 'Hoje você reage mais do que se antecipa aos problemas?', answer: null },
    { id: 13, block: 'C', text: 'Seu crescimento trouxe mais receita, mas também mais erro ou retrabalho?', answer: null },
    { id: 14, block: 'C', text: 'Você sabe exatamente onde perde dinheiro ou apenas suspeita?', answer: null },
    { id: 15, block: 'C', text: 'Já pensou: "se eu tivesse visto isso antes, teria evitado"?', answer: null },

    // BLOCO D — Escala e Futuro
    { id: 16, block: 'D', text: 'Seu negócio cresce mais rápido que sua capacidade de decisão?', answer: null },
    { id: 17, block: 'D', text: 'Você precisa contratar pessoas só para analisar ou validar dados?', answer: null },
    { id: 18, block: 'D', text: 'A operação funciona bem pequena, mas perde controle quando cresce?', answer: null },
    { id: 19, block: 'D', text: 'Você sente que apaga incêndios em vez de conduzir estrategicamente?', answer: null },
    { id: 20, block: 'D', text: 'Você acredita que existe valor escondido nos seus dados que hoje você não consegue extrair?', answer: null }
  ];

  answerOptions = [
    { value: 2, label: 'Sim' },
    { value: 1, label: 'Às vezes' },
    { value: 0, label: 'Não' }
  ];

  results: Result[] = [
    {
      range: '0-10',
      title: 'Você NÃO precisa da VICS agora',
      color: 'green',
      message: 'No seu momento atual, seu maior ganho não está em projetos avançados de dados. Recomendamos focar em organização básica, processos e indicadores essenciais.',
      product: 'Conteúdo / Diagnóstico',
      cta: 'Baixar checklist gratuito de maturidade em dados',
      ctaLink: '/assets/checklist-maturidade-dados.pdf'
    },
    {
      range: '11-20',
      title: 'Você precisa de BI e Governança',
      color: 'yellow',
      message: 'Seus dados já são importantes, mas ainda não estão estruturados para gerar decisão confiável. Antes de prever o futuro, é preciso organizar o presente.',
      product: 'BI, Data Lake e Governança de Dados',
      cta: 'Falar com especialista em BI',
      ctaLink: this.ctaWhatsApp
    },
    {
      range: '21-30',
      title: 'Você está pronto para IA aplicada',
      color: 'orange',
      message: 'Seu negócio já sofre com complexidade, atraso na decisão e perda de oportunidade. IA aqui não é inovação — é eficiência operacional.',
      product: 'Automação inteligente + modelos preditivos',
      cta: 'Agendar diagnóstico de IA',
      ctaLink: this.ctaWhatsApp
    },
    {
      range: '31-40',
      title: 'Você PRECISA de Machine Learning',
      color: 'red',
      message: 'Você já paga o custo de não prever: erro, retrabalho, desperdício e decisões tardias. Machine Learning deixa de ser tecnologia e passa a ser infraestrutura de decisão.',
      product: 'Machine Learning sob medida + monitoramento contínuo',
      cta: 'Agendar diagnóstico gratuito ML Start',
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
    this.title.setTitle('Diagnóstico: Você precisa de Machine Learning? — VICS');
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra em 3 minutos se sua empresa está pronta para Machine Learning. Diagnóstico gratuito com 20 perguntas e resultado imediato.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Diagnóstico: Você precisa de Machine Learning? — VICS'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.vics.dev.br/ml-start/diagnostico'
    });

    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Quiz',
        name: 'Diagnóstico de Maturidade em Dados',
        description: 'Descubra se sua empresa precisa de Machine Learning',
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
