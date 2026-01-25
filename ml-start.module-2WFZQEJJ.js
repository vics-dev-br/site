import {
  DefaultValueAccessor,
  FooterComponent,
  NavbarComponent,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RadioControlValueAccessor,
  SharedModule,
  ɵNgNoValidate
} from "./chunk-ZV3RLNPR.js";
import {
  Component,
  DOCUMENT,
  Inject,
  Meta,
  NgForOf,
  NgIf,
  NgModule,
  PLATFORM_ID,
  RouterLink,
  RouterModule,
  Title,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U2PEDCZ4.js";

// src/app/modules/ml-start/ml-start.component.ts
function MlStartComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const audience_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(audience_r1.segment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(audience_r1.description);
  }
}
function MlStartComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2);
  }
}
function MlStartComponent_div_63_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deliverable_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deliverable_r3);
  }
}
function MlStartComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50)(2, "span", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 52)(5, "div", 53)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55)(13, "span", 56);
    \u0275\u0275text(14, "Entregavel:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MlStartComponent_div_63_span_15_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const phase_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(phase_r4.number);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(phase_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(phase_r4.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(phase_r4.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", phase_r4.deliverables);
  }
}
function MlStartComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "span", 59);
    \u0275\u0275text(3, "NAO dizemos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 60)(7, "span", 59);
    \u0275\u0275text(8, "Dizemos:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const prop_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prop_r5.wrong);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(prop_r5.right);
  }
}
function MlStartComponent_li_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6);
  }
}
function MlStartComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r7.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r7.answer);
  }
}
var MlStartComponent = class _MlStartComponent {
  constructor(title, meta, platformId, document) {
    this.title = title;
    this.meta = meta;
    this.platformId = platformId;
    this.document = document;
    this.ctaLabel = "Agendar diagnostico gratuito";
    this.ctaHref = "https://wa.me/5531975474785?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20para%20o%20ML%20Start";
    this.targetAudiences = [
      { segment: "SaaS B2B", description: "Priorizar trials com maior chance de conversao" },
      { segment: "Healthtech", description: "Classificar exames ou triagem com modelo simples" },
      { segment: "Fintech", description: "Score de credito interno ou deteccao de anomalia basica" },
      { segment: "GovTech", description: "Previsao de demanda por servico publico" },
      { segment: "Marketplace", description: "Recomendacao de produtos ou ranking de vendedores" }
    ];
    this.exclusions = [
      "Data Lake ou Data Warehouse",
      "BI completo com dashboards",
      "Plataforma de IA generativa",
      "Time alocado full-time",
      "Modelo de producao em escala"
    ];
    this.phases = [
      {
        number: 0,
        title: "Diagnostico",
        duration: "1 semana",
        description: "Entender o negocio, mapear dados disponiveis, identificar a decisao de maior impacto.",
        deliverables: ["Documento de escopo com hipotese de modelo e KPI alvo"]
      },
      {
        number: 1,
        title: "Preparacao",
        duration: "1 semana",
        description: "Coleta, limpeza e feature engineering minimo viavel.",
        deliverables: ["Dataset pronto para treinamento"]
      },
      {
        number: 2,
        title: "Modelagem",
        duration: "2 semanas",
        description: "Treinar modelo baseline, iterar com metricas claras.",
        deliverables: ["Modelo treinado com metricas documentadas"]
      },
      {
        number: 3,
        title: "Integracao",
        duration: "1 semana",
        description: "API ou batch para consumo pelo produto.",
        deliverables: ["Endpoint ou pipeline de inferencia funcionando"]
      },
      {
        number: 4,
        title: "Validacao",
        duration: "1 semana",
        description: "Teste em ambiente real com grupo controlado.",
        deliverables: ["Relatorio de validacao com recomendacoes de proximo passo"]
      }
    ];
    this.valueProps = [
      { wrong: "Construimos modelos de IA", right: "Entregamos uma decisao automatizada que ja funciona no seu produto" },
      { wrong: "Usamos Machine Learning", right: "Voce vai priorizar leads, detectar fraudes ou recomendar produtos sem depender de feeling" },
      { wrong: "Fazemos consultoria de dados", right: "Em 6 semanas, seu time ve um modelo rodando em producao e decide se escala" }
    ];
    this.successChecklist = [
      "Existe uma decisao repetitiva que hoje depende de regra fixa ou intuicao",
      "Ha pelo menos 1.000 registros historicos com label ou proxy de sucesso",
      "O time tem acesso a dados em formato estruturado (banco, planilha, API)",
      "Stakeholder com poder de decisao disponivel para validacoes semanais",
      "Expectativa de resultado em semanas, nao meses"
    ];
    this.faqs = [
      {
        question: "Preciso de um time de dados interno?",
        answer: "Nao. O ML Start entrega modelo pronto para consumo. Voce precisa apenas de um desenvolvedor para integrar a API."
      },
      {
        question: "E se eu nao tiver dados suficientes?",
        answer: "Na fase de diagnostico avaliamos a viabilidade. Se os dados forem insuficientes, recomendamos alternativas antes de iniciar."
      },
      {
        question: "O modelo fica comigo no final?",
        answer: "Sim. Entregamos o modelo, codigo e documentacao. Voce e dono do ativo."
      },
      {
        question: "Qual a diferenca para uma consultoria tradicional?",
        answer: "Consultoria entrega relatorio. ML Start entrega modelo em producao com metricas reais."
      },
      {
        question: "Quanto custa escalar depois?",
        answer: "Depende do volume. Na validacao, entregamos estimativa de custo para escala com base no uso real."
      }
    ];
  }
  ngOnInit() {
    this.title.setTitle("ML Start \u2014 Decisoes que Escalam | Machine Learning para Startups \u2014 VICS");
    this.meta.updateTag({
      name: "description",
      content: "Primeiro modelo de Machine Learning em producao em 6 semanas. Para startups que querem automatizar decisoes com dados."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "machine learning, ml para startups, modelo de ml, inteligencia artificial, automacao de decisoes, data science"
    });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({
      property: "og:title",
      content: "ML Start \u2014 Decisoes que Escalam | Machine Learning para Startups \u2014 VICS"
    });
    this.meta.updateTag({
      property: "og:description",
      content: "Primeiro modelo de Machine Learning em producao em 6 semanas. Para startups que querem automatizar decisoes com dados."
    });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/ml-start"
    });
    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VICS",
        url: "https://www.vics.dev.br",
        logo: "https://www.vics.dev.br/assets/logo.png",
        sameAs: ["https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true"]
      });
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "ML Start \u2014 Decisoes que Escalam",
        url: "https://www.vics.dev.br/ml-start",
        serviceType: "Machine Learning para Startups",
        provider: {
          "@type": "Organization",
          name: "VICS"
        },
        areaServed: { "@type": "Country", name: "BR" },
        offers: {
          "@type": "Offer",
          priceRange: "R$ 15.000 - R$ 30.000"
        }
      });
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: this.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer }
        }))
      });
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://www.vics.dev.br" },
          { "@type": "ListItem", position: 2, name: "ML Start", item: "https://www.vics.dev.br/ml-start" }
        ]
      });
    }
  }
  appendJsonLd(data) {
    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
  static {
    this.\u0275fac = function MlStartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MlStartComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MlStartComponent, selectors: [["app-ml-start"]], standalone: false, decls: 132, vars: 13, consts: [[3, "minimalNav", "ctaHref", "ctaLabel"], [1, "page"], [1, "breadcrumb-nav"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/"], ["aria-current", "page"], [1, "hero"], [1, "hero-grid"], [1, "hero-content"], [1, "eyebrow"], [1, "lede"], [1, "hero-actions"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-lg", 3, "href"], ["routerLink", "/ml-start/diagnostico", 1, "btn", "btn-light", "btn-lg"], [1, "hero-meta"], [1, "card", "hero-card"], [1, "lede-sm"], ["id", "icp", 1, "section"], [1, "section-title"], [1, "icp-grid"], ["class", "icp-card", 4, "ngFor", "ngForOf"], [1, "note", "neutral"], ["id", "nao-e", 1, "section", "muted"], [1, "pill-grid"], ["class", "pill danger", 4, "ngFor", "ngForOf"], [1, "note", "warning"], ["id", "processo", 1, "section"], [1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], ["id", "investimento", 1, "section", "muted"], [1, "card-grid", "two"], [1, "card", "highlight"], [1, "note", "neutral", "inline"], ["id", "linguagem", 1, "section"], [1, "value-grid"], ["class", "value-item", 4, "ngFor", "ngForOf"], ["id", "checklist", 1, "section", "muted"], [1, "card"], [1, "checklist"], [4, "ngFor", "ngForOf"], ["id", "faq", 1, "section"], [1, "faq-grid"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "cta"], [1, "cta-actions"], [1, "cta-meta"], [1, "icp-card"], [1, "pill", "danger"], [1, "timeline-item"], [1, "timeline-marker"], [1, "phase-number"], [1, "timeline-content"], [1, "timeline-header"], [1, "duration"], [1, "deliverables"], [1, "deliverable-label"], [1, "value-item"], [1, "value-wrong"], [1, "icon"], [1, "value-right"], [1, "faq-item"]], template: function MlStartComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "ol", 4)(5, "li")(6, "a", 5);
        \u0275\u0275text(7, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 6);
        \u0275\u0275text(9, "ML Start");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "section", 7)(11, "div", 3)(12, "div", 8)(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, "Produto de Dados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h1");
        \u0275\u0275text(17, "ML Start \u2014 Decisoes que Escalam");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 11);
        \u0275\u0275text(19, "Seu primeiro modelo de Machine Learning em producao em 6 semanas. Para startups que querem parar de adivinhar e comecar a decidir com dados.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "a", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "a", 14);
        \u0275\u0275text(24, "Fazer autodiagnostico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "span", 15);
        \u0275\u0275text(26, "Descubra em 3 minutos se ML faz sentido para voce");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 16)(28, "h3");
        \u0275\u0275text(29, "Pitch de 30 segundos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 17)(31, "strong");
        \u0275\u0275text(32, "Startups que crescem rapido precisam tomar decisoes melhores, mais rapido. O ML Start entrega seu primeiro modelo de Machine Learning em producao \u2014 priorizacao de leads, deteccao de fraude, recomendacao de produtos \u2014 em 6 semanas, por uma fracao do custo de montar um time de dados interno.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(33, "section", 18)(34, "div", 3)(35, "div", 19)(36, "h2");
        \u0275\u0275text(37, "Para quem e o ML Start");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "Startups em crescimento que precisam automatizar decisoes com dados.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 20);
        \u0275\u0275template(41, MlStartComponent_div_41_Template, 5, 2, "div", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 22);
        \u0275\u0275text(43, " Se voce ainda esta validando produto ou nao tem dados historicos, o ML Start pode nao ser o momento certo. Vamos conversar no diagnostico. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "section", 23)(45, "div", 3)(46, "div", 19)(47, "h2");
        \u0275\u0275text(48, "O que o ML Start NAO e");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Clareza sobre o escopo para alinhar expectativas.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 24);
        \u0275\u0275template(52, MlStartComponent_div_52_Template, 2, 1, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 26);
        \u0275\u0275text(54, " O ML Start e focado em entregar um modelo funcional rapidamente. Projetos de infraestrutura de dados ou BI completo exigem escopo diferente. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "section", 27)(56, "div", 3)(57, "div", 19)(58, "h2");
        \u0275\u0275text(59, "Como funciona: 5 fases em 6-7 semanas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, "Processo estruturado com entregas claras em cada etapa.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "div", 28);
        \u0275\u0275template(63, MlStartComponent_div_63_Template, 16, 5, "div", 29);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "section", 30)(65, "div", 3)(66, "div", 19)(67, "h2");
        \u0275\u0275text(68, "Prazo e Investimento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, "Previsibilidade de entrega e custo.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "div", 31)(72, "div", 32)(73, "p", 10);
        \u0275\u0275text(74, "Prazo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h3");
        \u0275\u0275text(76, "6-7 semanas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "p", 17);
        \u0275\u0275text(78, "Do diagnostico ao modelo em producao com validacao real.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 32)(80, "p", 10);
        \u0275\u0275text(81, "Investimento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "h3");
        \u0275\u0275text(83, "R$ 15.000 - R$ 30.000");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p", 17);
        \u0275\u0275text(85, "Varia conforme complexidade dos dados e integracao.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 33);
        \u0275\u0275text(87, "Pagamento parcelado por fase disponivel.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(88, "section", 34)(89, "div", 3)(90, "div", 19)(91, "h2");
        \u0275\u0275text(92, "Proposta de valor clara");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "p");
        \u0275\u0275text(94, "O que voce realmente esta comprando.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 35);
        \u0275\u0275template(96, MlStartComponent_div_96_Template, 11, 2, "div", 36);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(97, "section", 37)(98, "div", 3)(99, "div", 19)(100, "h2");
        \u0275\u0275text(101, "Checklist: voce esta pronto?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "p");
        \u0275\u0275text(103, "5 criterios para saber se o ML Start faz sentido agora.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "div", 38)(105, "ul", 39);
        \u0275\u0275template(106, MlStartComponent_li_106_Template, 2, 1, "li", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 33);
        \u0275\u0275text(108, " Se voce marcou pelo menos 4 de 5, o ML Start provavelmente e uma boa opcao. Vamos validar no diagnostico. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(109, "section", 41)(110, "div", 3)(111, "div", 19)(112, "h2");
        \u0275\u0275text(113, "Perguntas frequentes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p");
        \u0275\u0275text(115, "O que startups perguntam antes de comecar.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 42);
        \u0275\u0275template(117, MlStartComponent_div_117_Template, 5, 2, "div", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "section", 44)(119, "div", 3)(120, "h2");
        \u0275\u0275text(121, "Pronto para seu primeiro modelo de ML?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "p");
        \u0275\u0275text(123, "Agende um diagnostico gratuito de 30 minutos. Vamos avaliar juntos se o ML Start faz sentido para sua startup.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 45)(125, "a", 13);
        \u0275\u0275text(126);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "a", 14);
        \u0275\u0275text(128, "Fazer autodiagnostico online");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "p", 46);
        \u0275\u0275text(130, "Sem compromisso. Se nao fizer sentido, voce sai com clareza sobre o que precisa antes.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(131, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("minimalNav", true)("ctaHref", ctx.ctaHref)("ctaLabel", ctx.ctaLabel);
        \u0275\u0275advance(21);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ctaLabel);
        \u0275\u0275advance(19);
        \u0275\u0275property("ngForOf", ctx.targetAudiences);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.exclusions);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.phases);
        \u0275\u0275advance(33);
        \u0275\u0275property("ngForOf", ctx.valueProps);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.successChecklist);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.faqs);
        \u0275\u0275advance(8);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ctaLabel);
      }
    }, dependencies: [NgForOf, RouterLink, NavbarComponent, FooterComponent], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  background: #0b0a0c;\n  color: #f5f5f5;\n}\n.container[_ngcontent-%COMP%] {\n  width: min(1100px, 90vw);\n  margin: 0 auto;\n}\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  background: #0f0e12;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 10px 0;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #dcd7d7;\n  font-size: 14px;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "/";\n  color: rgba(245, 245, 245, 0.6);\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  text-decoration: none;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 120px 0 90px;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.15),\n      transparent 35%),\n    radial-gradient(\n      circle at 80% 0%,\n      rgba(255, 255, 255, 0.08),\n      transparent 30%);\n}\n.hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 28px;\n  grid-template-columns: 1.6fr 1fr;\n  align-items: start;\n}\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #818cf8;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(30px, 5vw, 46px);\n  margin: 8px 0;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n}\n.hero[_ngcontent-%COMP%]   .lede[_ngcontent-%COMP%] {\n  color: #e5e0e0;\n  font-size: 18px;\n  line-height: 1.6;\n  max-width: 820px;\n}\n.hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.hero[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%] {\n  color: rgba(245, 245, 245, 0.8);\n  font-size: 14px;\n}\n.hero[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%] {\n  color: #fdfdfd;\n  align-self: stretch;\n}\n.hero[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n}\n.hero[_ngcontent-%COMP%]   .hero-card[_ngcontent-%COMP%]   .lede-sm[_ngcontent-%COMP%] {\n  color: #e5e0e0;\n  line-height: 1.5;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 90px 0;\n  background: #0b0a0c;\n}\n.section.muted[_ngcontent-%COMP%] {\n  background: #111013;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3.5vw, 36px);\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: #ffffff;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dcd7d7;\n  margin: 0;\n  font-size: 16px;\n}\n.icp-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n.icp-card[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(129, 140, 248, 0.25);\n  border-radius: 14px;\n  padding: 18px;\n}\n.icp-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-weight: 700;\n  color: #818cf8;\n  font-size: 16px;\n}\n.icp-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dcd7d7;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.pill-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: #131217;\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-weight: 600;\n  color: #f5f5f5;\n  line-height: 1.5;\n}\n.pill.danger[_ngcontent-%COMP%] {\n  border-color: rgba(239, 68, 68, 0.35);\n  background: rgba(239, 68, 68, 0.08);\n}\n.pill.danger[_ngcontent-%COMP%]::before {\n  content: "\\2717  ";\n  color: #ef4444;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.note.warning[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.note.neutral[_ngcontent-%COMP%] {\n  background: #16151b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #dcd7d7;\n}\n.note.inline[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.timeline[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n  position: relative;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 40px;\n  bottom: 40px;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      #818cf8,\n      rgba(129, 140, 248, 0.2));\n}\n.timeline-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 42px 1fr;\n  gap: 20px;\n  padding: 20px 0;\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  z-index: 1;\n}\n.phase-number[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: #818cf8;\n  color: #0b0a0c;\n  font-weight: 800;\n  font-size: 18px;\n}\n.timeline-content[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #f5f5f5;\n  font-size: 18px;\n}\n.timeline-content[_ngcontent-%COMP%]   .timeline-header[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  background: rgba(129, 140, 248, 0.15);\n  color: #818cf8;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.timeline-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.timeline-content[_ngcontent-%COMP%]   .deliverables[_ngcontent-%COMP%] {\n  background: rgba(129, 140, 248, 0.08);\n  border: 1px solid rgba(129, 140, 248, 0.2);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.timeline-content[_ngcontent-%COMP%]   .deliverables[_ngcontent-%COMP%]   .deliverable-label[_ngcontent-%COMP%] {\n  color: #818cf8;\n  font-weight: 700;\n  margin-right: 8px;\n}\n.timeline-content[_ngcontent-%COMP%]   .deliverables[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #e5e0e0;\n}\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.card-grid.two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.card[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 12px;\n  height: 100%;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #f5f5f5;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dcd7d7;\n}\n.card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #818cf8;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  font-size: 12px;\n  margin: 0;\n}\n.card.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e,\n      #16213e);\n  border-color: rgba(129, 140, 248, 0.35);\n  text-align: center;\n}\n.lede-sm[_ngcontent-%COMP%] {\n  color: #e5e0e0;\n  line-height: 1.5;\n}\n.value-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.value-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n}\n.value-wrong[_ngcontent-%COMP%], \n.value-right[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-radius: 10px;\n}\n.value-wrong[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], \n.value-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.value-wrong[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.value-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n}\n.value-wrong[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.value-wrong[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.value-wrong[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fca5a5;\n}\n.value-right[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.08);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.value-right[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n.value-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #86efac;\n}\n.checklist[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n  margin: 0;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 26px;\n  position: relative;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: #22c55e;\n  font-weight: 800;\n}\n.faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);\n}\n.faq-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #f5f5f5;\n  font-weight: 700;\n}\n.faq-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.cta[_ngcontent-%COMP%] {\n  padding: 90px 0 110px;\n  background:\n    linear-gradient(\n      120deg,\n      #0f0d0e,\n      #1e1b4b);\n  text-align: center;\n  color: #ffffff;\n}\n.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3.5vw, 36px);\n  font-weight: 800;\n  margin-bottom: 10px;\n}\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 18px;\n  max-width: 700px;\n  color: #f5f5f5;\n  line-height: 1.6;\n}\n.cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.cta[_ngcontent-%COMP%]   .cta-meta[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n}\n.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #818cf8;\n  border-color: #818cf8;\n  color: #0b0a0c;\n  font-weight: 700;\n}\n.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, \n.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus {\n  background-color: #a5b4fc;\n  border-color: #818cf8;\n  color: #0b0a0c;\n}\n.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: #f5f5f5;\n  font-weight: 600;\n}\n.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover, \n.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 100px 0 70px;\n  }\n  .hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 70px 0;\n  }\n  .value-item[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 20px;\n  }\n}\n/*# sourceMappingURL=ml-start.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MlStartComponent, [{
    type: Component,
    args: [{ selector: "app-ml-start", standalone: false, template: '<app-navbar [minimalNav]="true" [ctaHref]="ctaHref" [ctaLabel]="ctaLabel"></app-navbar>\n\n<div class="page">\n  <nav class="breadcrumb-nav">\n    <div class="container">\n      <ol class="breadcrumb">\n        <li><a routerLink="/">Inicio</a></li>\n        <li aria-current="page">ML Start</li>\n      </ol>\n    </div>\n  </nav>\n\n  <section class="hero">\n    <div class="container">\n      <div class="hero-grid">\n        <div class="hero-content">\n          <p class="eyebrow">Produto de Dados</p>\n          <h1>ML Start \u2014 Decisoes que Escalam</h1>\n          <p class="lede">Seu primeiro modelo de Machine Learning em producao em 6 semanas. Para startups que querem parar de adivinhar e comecar a decidir com dados.</p>\n          <div class="hero-actions">\n            <a class="btn btn-primary btn-lg" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>\n            <a class="btn btn-light btn-lg" routerLink="/ml-start/diagnostico">Fazer autodiagnostico</a>\n            <span class="hero-meta">Descubra em 3 minutos se ML faz sentido para voce</span>\n          </div>\n        </div>\n        <div class="card hero-card">\n          <h3>Pitch de 30 segundos</h3>\n          <p class="lede-sm"><strong>Startups que crescem rapido precisam tomar decisoes melhores, mais rapido. O ML Start entrega seu primeiro modelo de Machine Learning em producao \u2014 priorizacao de leads, deteccao de fraude, recomendacao de produtos \u2014 em 6 semanas, por uma fracao do custo de montar um time de dados interno.</strong></p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="icp">\n    <div class="container">\n      <div class="section-title">\n        <h2>Para quem e o ML Start</h2>\n        <p>Startups em crescimento que precisam automatizar decisoes com dados.</p>\n      </div>\n      <div class="icp-grid">\n        <div class="icp-card" *ngFor="let audience of targetAudiences">\n          <h4>{{ audience.segment }}</h4>\n          <p>{{ audience.description }}</p>\n        </div>\n      </div>\n      <div class="note neutral">\n        Se voce ainda esta validando produto ou nao tem dados historicos, o ML Start pode nao ser o momento certo. Vamos conversar no diagnostico.\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="nao-e">\n    <div class="container">\n      <div class="section-title">\n        <h2>O que o ML Start NAO e</h2>\n        <p>Clareza sobre o escopo para alinhar expectativas.</p>\n      </div>\n      <div class="pill-grid">\n        <div class="pill danger" *ngFor="let item of exclusions">{{ item }}</div>\n      </div>\n      <div class="note warning">\n        O ML Start e focado em entregar um modelo funcional rapidamente. Projetos de infraestrutura de dados ou BI completo exigem escopo diferente.\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="processo">\n    <div class="container">\n      <div class="section-title">\n        <h2>Como funciona: 5 fases em 6-7 semanas</h2>\n        <p>Processo estruturado com entregas claras em cada etapa.</p>\n      </div>\n      <div class="timeline">\n        <div class="timeline-item" *ngFor="let phase of phases">\n          <div class="timeline-marker">\n            <span class="phase-number">{{ phase.number }}</span>\n          </div>\n          <div class="timeline-content">\n            <div class="timeline-header">\n              <h4>{{ phase.title }}</h4>\n              <span class="duration">{{ phase.duration }}</span>\n            </div>\n            <p>{{ phase.description }}</p>\n            <div class="deliverables">\n              <span class="deliverable-label">Entregavel:</span>\n              <span *ngFor="let deliverable of phase.deliverables">{{ deliverable }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="investimento">\n    <div class="container">\n      <div class="section-title">\n        <h2>Prazo e Investimento</h2>\n        <p>Previsibilidade de entrega e custo.</p>\n      </div>\n      <div class="card-grid two">\n        <div class="card highlight">\n          <p class="eyebrow">Prazo</p>\n          <h3>6-7 semanas</h3>\n          <p class="lede-sm">Do diagnostico ao modelo em producao com validacao real.</p>\n        </div>\n        <div class="card highlight">\n          <p class="eyebrow">Investimento</p>\n          <h3>R$ 15.000 - R$ 30.000</h3>\n          <p class="lede-sm">Varia conforme complexidade dos dados e integracao.</p>\n          <div class="note neutral inline">Pagamento parcelado por fase disponivel.</div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="linguagem">\n    <div class="container">\n      <div class="section-title">\n        <h2>Proposta de valor clara</h2>\n        <p>O que voce realmente esta comprando.</p>\n      </div>\n      <div class="value-grid">\n        <div class="value-item" *ngFor="let prop of valueProps">\n          <div class="value-wrong">\n            <span class="icon">NAO dizemos:</span>\n            <p>{{ prop.wrong }}</p>\n          </div>\n          <div class="value-right">\n            <span class="icon">Dizemos:</span>\n            <p>{{ prop.right }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="checklist">\n    <div class="container">\n      <div class="section-title">\n        <h2>Checklist: voce esta pronto?</h2>\n        <p>5 criterios para saber se o ML Start faz sentido agora.</p>\n      </div>\n      <div class="card">\n        <ul class="checklist">\n          <li *ngFor="let item of successChecklist">{{ item }}</li>\n        </ul>\n        <div class="note neutral inline">\n          Se voce marcou pelo menos 4 de 5, o ML Start provavelmente e uma boa opcao. Vamos validar no diagnostico.\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="faq">\n    <div class="container">\n      <div class="section-title">\n        <h2>Perguntas frequentes</h2>\n        <p>O que startups perguntam antes de comecar.</p>\n      </div>\n      <div class="faq-grid">\n        <div class="faq-item" *ngFor="let faq of faqs">\n          <h4>{{ faq.question }}</h4>\n          <p>{{ faq.answer }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="cta">\n    <div class="container">\n      <h2>Pronto para seu primeiro modelo de ML?</h2>\n      <p>Agende um diagnostico gratuito de 30 minutos. Vamos avaliar juntos se o ML Start faz sentido para sua startup.</p>\n      <div class="cta-actions">\n        <a class="btn btn-primary btn-lg" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>\n        <a class="btn btn-light btn-lg" routerLink="/ml-start/diagnostico">Fazer autodiagnostico online</a>\n      </div>\n      <p class="cta-meta">Sem compromisso. Se nao fizer sentido, voce sai com clareza sobre o que precisa antes.</p>\n    </div>\n  </section>\n</div>\n\n<app-footer></app-footer>\n', styles: ['@charset "UTF-8";\n\n/* src/app/modules/ml-start/ml-start.component.scss */\n.page {\n  background: #0b0a0c;\n  color: #f5f5f5;\n}\n.container {\n  width: min(1100px, 90vw);\n  margin: 0 auto;\n}\n.breadcrumb-nav {\n  background: #0f0e12;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 10px 0;\n}\n.breadcrumb-nav .breadcrumb {\n  display: flex;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #dcd7d7;\n  font-size: 14px;\n}\n.breadcrumb-nav .breadcrumb li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-nav .breadcrumb li:not(:last-child)::after {\n  content: "/";\n  color: rgba(245, 245, 245, 0.6);\n}\n.breadcrumb-nav .breadcrumb li a {\n  color: #f5f5f5;\n  text-decoration: none;\n}\n.hero {\n  padding: 120px 0 90px;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(99, 102, 241, 0.15),\n      transparent 35%),\n    radial-gradient(\n      circle at 80% 0%,\n      rgba(255, 255, 255, 0.08),\n      transparent 30%);\n}\n.hero .hero-grid {\n  display: grid;\n  gap: 28px;\n  grid-template-columns: 1.6fr 1fr;\n  align-items: start;\n}\n.hero .hero-content {\n  display: grid;\n  gap: 12px;\n}\n.hero .eyebrow {\n  color: #818cf8;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n.hero h1 {\n  font-size: clamp(30px, 5vw, 46px);\n  margin: 8px 0;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n}\n.hero .lede {\n  color: #e5e0e0;\n  font-size: 18px;\n  line-height: 1.6;\n  max-width: 820px;\n}\n.hero .hero-actions {\n  margin-top: 14px;\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.hero .hero-meta {\n  color: rgba(245, 245, 245, 0.8);\n  font-size: 14px;\n}\n.hero .hero-card {\n  color: #fdfdfd;\n  align-self: stretch;\n}\n.hero .hero-card h3 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n}\n.hero .hero-card .lede-sm {\n  color: #e5e0e0;\n  line-height: 1.5;\n}\n.section {\n  padding: 90px 0;\n  background: #0b0a0c;\n}\n.section.muted {\n  background: #111013;\n}\n.section-title {\n  margin-bottom: 26px;\n}\n.section-title h2 {\n  font-size: clamp(24px, 3.5vw, 36px);\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: #ffffff;\n}\n.section-title p {\n  color: #dcd7d7;\n  margin: 0;\n  font-size: 16px;\n}\n.icp-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n.icp-card {\n  background: #131217;\n  border: 1px solid rgba(129, 140, 248, 0.25);\n  border-radius: 14px;\n  padding: 18px;\n}\n.icp-card h4 {\n  margin: 0 0 8px;\n  font-weight: 700;\n  color: #818cf8;\n  font-size: 16px;\n}\n.icp-card p {\n  margin: 0;\n  color: #dcd7d7;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.pill-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.pill {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: #131217;\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-weight: 600;\n  color: #f5f5f5;\n  line-height: 1.5;\n}\n.pill.danger {\n  border-color: rgba(239, 68, 68, 0.35);\n  background: rgba(239, 68, 68, 0.08);\n}\n.pill.danger::before {\n  content: "\\2717  ";\n  color: #ef4444;\n}\n.note {\n  margin-top: 16px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.note.warning {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.25);\n}\n.note.neutral {\n  background: #16151b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #dcd7d7;\n}\n.note.inline {\n  margin-top: 10px;\n}\n.timeline {\n  display: grid;\n  gap: 0;\n  position: relative;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 20px;\n  top: 40px;\n  bottom: 40px;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      #818cf8,\n      rgba(129, 140, 248, 0.2));\n}\n.timeline-item {\n  display: grid;\n  grid-template-columns: 42px 1fr;\n  gap: 20px;\n  padding: 20px 0;\n}\n.timeline-marker {\n  display: flex;\n  justify-content: center;\n  z-index: 1;\n}\n.phase-number {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  background: #818cf8;\n  color: #0b0a0c;\n  font-weight: 800;\n  font-size: 18px;\n}\n.timeline-content {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n}\n.timeline-content .timeline-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.timeline-content .timeline-header h4 {\n  margin: 0;\n  font-weight: 700;\n  color: #f5f5f5;\n  font-size: 18px;\n}\n.timeline-content .timeline-header .duration {\n  background: rgba(129, 140, 248, 0.15);\n  color: #818cf8;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.timeline-content p {\n  margin: 0 0 12px;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.timeline-content .deliverables {\n  background: rgba(129, 140, 248, 0.08);\n  border: 1px solid rgba(129, 140, 248, 0.2);\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 14px;\n}\n.timeline-content .deliverables .deliverable-label {\n  color: #818cf8;\n  font-weight: 700;\n  margin-right: 8px;\n}\n.timeline-content .deliverables span {\n  color: #e5e0e0;\n}\n.card-grid {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.card-grid.two {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.card {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 12px;\n  height: 100%;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\n.card h3,\n.card h4 {\n  margin: 0;\n  font-weight: 700;\n  color: #f5f5f5;\n}\n.card h3 {\n  font-size: 28px;\n}\n.card p {\n  margin: 0;\n  color: #dcd7d7;\n}\n.card .eyebrow {\n  color: #818cf8;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  font-size: 12px;\n  margin: 0;\n}\n.card.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e,\n      #16213e);\n  border-color: rgba(129, 140, 248, 0.35);\n  text-align: center;\n}\n.lede-sm {\n  color: #e5e0e0;\n  line-height: 1.5;\n}\n.value-grid {\n  display: grid;\n  gap: 16px;\n}\n.value-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n}\n.value-wrong,\n.value-right {\n  padding: 12px;\n  border-radius: 10px;\n}\n.value-wrong .icon,\n.value-right .icon {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 6px;\n}\n.value-wrong p,\n.value-right p {\n  margin: 0;\n  line-height: 1.5;\n}\n.value-wrong {\n  background: rgba(239, 68, 68, 0.08);\n  border: 1px solid rgba(239, 68, 68, 0.2);\n}\n.value-wrong .icon {\n  color: #ef4444;\n}\n.value-wrong p {\n  color: #fca5a5;\n}\n.value-right {\n  background: rgba(34, 197, 94, 0.08);\n  border: 1px solid rgba(34, 197, 94, 0.2);\n}\n.value-right .icon {\n  color: #22c55e;\n}\n.value-right p {\n  color: #86efac;\n}\n.checklist {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n  margin: 0;\n}\n.checklist li {\n  padding-left: 26px;\n  position: relative;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.checklist li::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: #22c55e;\n  font-weight: 800;\n}\n.faq-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n}\n.faq-item {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);\n}\n.faq-item h4 {\n  margin: 0 0 8px;\n  color: #f5f5f5;\n  font-weight: 700;\n}\n.faq-item p {\n  margin: 0;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.cta {\n  padding: 90px 0 110px;\n  background:\n    linear-gradient(\n      120deg,\n      #0f0d0e,\n      #1e1b4b);\n  text-align: center;\n  color: #ffffff;\n}\n.cta h2 {\n  font-size: clamp(26px, 3.5vw, 36px);\n  font-weight: 800;\n  margin-bottom: 10px;\n}\n.cta p {\n  margin: 0 auto 18px;\n  max-width: 700px;\n  color: #f5f5f5;\n  line-height: 1.6;\n}\n.cta .cta-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.cta .cta-meta {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n}\n.page .btn-primary {\n  background-color: #818cf8;\n  border-color: #818cf8;\n  color: #0b0a0c;\n  font-weight: 700;\n}\n.page .btn-primary:hover,\n.page .btn-primary:focus {\n  background-color: #a5b4fc;\n  border-color: #818cf8;\n  color: #0b0a0c;\n}\n.page .btn-light {\n  background-color: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  color: #f5f5f5;\n  font-weight: 600;\n}\n.page .btn-light:hover,\n.page .btn-light:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #ffffff;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 100px 0 70px;\n  }\n  .hero .hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .section {\n    padding: 70px 0;\n  }\n  .value-item {\n    grid-template-columns: 1fr;\n  }\n  .timeline::before {\n    left: 20px;\n  }\n}\n/*# sourceMappingURL=ml-start.component.css.map */\n'] }]
  }], () => [{ type: Title }, { type: Meta }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MlStartComponent, { className: "MlStartComponent", filePath: "src/app/modules/ml-start/ml-start.component.ts", lineNumber: 11 });
})();

// src/app/modules/ml-start/diagnostico.component.ts
function DiagnosticoComponent_div_29_div_6_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 30)(1, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function DiagnosticoComponent_div_29_div_6_label_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const question_r2 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(question_r2.answer, $event) || (question_r2.answer = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const question_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("selected", question_r2.answer === option_r3.value);
    \u0275\u0275advance();
    \u0275\u0275property("name", "question-" + question_r2.id)("value", option_r3.value);
    \u0275\u0275twoWayProperty("ngModel", question_r2.answer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.label);
  }
}
function DiagnosticoComponent_div_29_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275template(6, DiagnosticoComponent_div_29_div_6_label_6_Template, 4, 6, "label", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const question_r2 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Pergunta ", question_r2.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(question_r2.text);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.answerOptions);
  }
}
function DiagnosticoComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DiagnosticoComponent_div_29_div_6_Template, 7, 3, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(block_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Bloco ", block_r5.id, " \u2014 ", block_r5.title, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getQuestionsByBlock(block_r5.id));
  }
}
function DiagnosticoComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, " Responda todas as perguntas para ver o resultado ");
    \u0275\u0275elementEnd();
  }
}
function DiagnosticoComponent_section_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 34)(1, "div", 3)(2, "div", 35)(3, "div", 36)(4, "p", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 39)(9, "p", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 41)(12, "p", 42);
    \u0275\u0275text(13, "Produto recomendado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "a", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 46);
    \u0275\u0275listener("click", function DiagnosticoComponent_section_34_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetForm());
    });
    \u0275\u0275text(20, " Refazer diagnostico ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "blockquote");
    \u0275\u0275text(23, ' "Empresas quebram nao por falta de dados, mas por decidir tarde demais." ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 48)(25, "p");
    \u0275\u0275text(26, "Compartilhe seu resultado:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 49)(28, "a", 50);
    \u0275\u0275text(29, " WhatsApp ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 51);
    \u0275\u0275text(31, " LinkedIn ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classMap("result-" + ctx_r3.currentResult.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Sua pontuacao: ", ctx_r3.totalScore, " de 40 pontos");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.currentResult.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.currentResult.message);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.currentResult.product);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r3.currentResult.ctaLink, \u0275\u0275sanitizeUrl)("target", ctx_r3.currentResult.ctaLink.startsWith("http") ? "_blank" : "_self");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.currentResult.cta, " ");
    \u0275\u0275advance(10);
    \u0275\u0275property("href", "https://wa.me/?text=Fiz%20o%20diagn%C3%B3stico%20de%20Machine%20Learning%20da%20VICS%20e%20minha%20pontua%C3%A7%C3%A3o%20foi%20" + ctx_r3.totalScore + "%20de%2040.%20Fa%C3%A7a%20o%20seu%3A%20https%3A%2F%2Fwww.vics.dev.br%2Fml-start%2Fdiagnostico", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.vics.dev.br%2Fml-start%2Fdiagnostico", \u0275\u0275sanitizeUrl);
  }
}
var DiagnosticoComponent = class _DiagnosticoComponent {
  constructor(title, meta, platformId, document) {
    this.title = title;
    this.meta = meta;
    this.platformId = platformId;
    this.document = document;
    this.ctaWhatsApp = "https://wa.me/5531975474785?text=Fiz%20o%20diagn%C3%B3stico%20no%20site%20e%20quero%20conversar%20sobre%20o%20resultado";
    this.blocks = [
      { id: "A", title: "Dor Operacional", icon: "\u{1F539}" },
      { id: "B", title: "Complexidade do Neg\xF3cio", icon: "\u{1F539}" },
      { id: "C", title: "Impacto Financeiro", icon: "\u{1F539}" },
      { id: "D", title: "Escala e Futuro", icon: "\u{1F539}" }
    ];
    this.questions = [
      // BLOCO A — Dor Operacional
      { id: 1, block: "A", text: "Voc\xEA depende de planilhas, regras manuais ou feeling para tomar decis\xF5es importantes?", answer: null },
      { id: 2, block: "A", text: "Sua equipe gasta mais tempo analisando dados do que executando a\xE7\xF5es?", answer: null },
      { id: 3, block: "A", text: 'Existe algu\xE9m "chave" que decide bem, mas n\xE3o sabe explicar exatamente como decide?', answer: null },
      { id: 4, block: "A", text: "Quando essa pessoa n\xE3o est\xE1, a qualidade das decis\xF5es cai?", answer: null },
      { id: 5, block: "A", text: "Voc\xEA j\xE1 percebeu decis\xF5es diferentes para problemas muito parecidos?", answer: null },
      // BLOCO B — Complexidade do Negócio
      { id: 6, block: "B", text: "Suas decis\xF5es dependem de muitas vari\xE1veis ao mesmo tempo?", answer: null },
      { id: 7, block: "B", text: "Essas vari\xE1veis mudam com frequ\xEAncia (mercado, cliente, sazonalidade)?", answer: null },
      { id: 8, block: "B", text: "Regras fixas funcionam por um tempo e depois deixam de funcionar?", answer: null },
      { id: 9, block: "B", text: 'Voc\xEA j\xE1 tentou criar regras do tipo "se X ent\xE3o Y" e virou algo dif\xEDcil de manter?', answer: null },
      { id: 10, block: "B", text: "Voc\xEA sente que o neg\xF3cio \xE9 mais complexo do que os relat\xF3rios mostram?", answer: null },
      // BLOCO C — Impacto Financeiro
      { id: 11, block: "C", text: "Voc\xEA descobre problemas quando o preju\xEDzo j\xE1 aconteceu?", answer: null },
      { id: 12, block: "C", text: "Hoje voc\xEA reage mais do que se antecipa aos problemas?", answer: null },
      { id: 13, block: "C", text: "Seu crescimento trouxe mais receita, mas tamb\xE9m mais erro ou retrabalho?", answer: null },
      { id: 14, block: "C", text: "Voc\xEA sabe exatamente onde perde dinheiro ou apenas suspeita?", answer: null },
      { id: 15, block: "C", text: 'J\xE1 pensou: "se eu tivesse visto isso antes, teria evitado"?', answer: null },
      // BLOCO D — Escala e Futuro
      { id: 16, block: "D", text: "Seu neg\xF3cio cresce mais r\xE1pido que sua capacidade de decis\xE3o?", answer: null },
      { id: 17, block: "D", text: "Voc\xEA precisa contratar pessoas s\xF3 para analisar ou validar dados?", answer: null },
      { id: 18, block: "D", text: "A opera\xE7\xE3o funciona bem pequena, mas perde controle quando cresce?", answer: null },
      { id: 19, block: "D", text: "Voc\xEA sente que apaga inc\xEAndios em vez de conduzir estrategicamente?", answer: null },
      { id: 20, block: "D", text: "Voc\xEA acredita que existe valor escondido nos seus dados que hoje voc\xEA n\xE3o consegue extrair?", answer: null }
    ];
    this.answerOptions = [
      { value: 2, label: "Sim" },
      { value: 1, label: "\xC0s vezes" },
      { value: 0, label: "N\xE3o" }
    ];
    this.results = [
      {
        range: "0-10",
        title: "Voc\xEA N\xC3O precisa da VICS agora",
        color: "green",
        message: "No seu momento atual, seu maior ganho n\xE3o est\xE1 em projetos avan\xE7ados de dados. Recomendamos focar em organiza\xE7\xE3o b\xE1sica, processos e indicadores essenciais.",
        product: "Conte\xFAdo / Diagn\xF3stico",
        cta: "Baixar checklist gratuito de maturidade em dados",
        ctaLink: "/assets/checklist-maturidade-dados.pdf"
      },
      {
        range: "11-20",
        title: "Voc\xEA precisa de BI e Governan\xE7a",
        color: "yellow",
        message: "Seus dados j\xE1 s\xE3o importantes, mas ainda n\xE3o est\xE3o estruturados para gerar decis\xE3o confi\xE1vel. Antes de prever o futuro, \xE9 preciso organizar o presente.",
        product: "BI, Data Lake e Governan\xE7a de Dados",
        cta: "Falar com especialista em BI",
        ctaLink: this.ctaWhatsApp
      },
      {
        range: "21-30",
        title: "Voc\xEA est\xE1 pronto para IA aplicada",
        color: "orange",
        message: "Seu neg\xF3cio j\xE1 sofre com complexidade, atraso na decis\xE3o e perda de oportunidade. IA aqui n\xE3o \xE9 inova\xE7\xE3o \u2014 \xE9 efici\xEAncia operacional.",
        product: "Automa\xE7\xE3o inteligente + modelos preditivos",
        cta: "Agendar diagn\xF3stico de IA",
        ctaLink: this.ctaWhatsApp
      },
      {
        range: "31-40",
        title: "Voc\xEA PRECISA de Machine Learning",
        color: "red",
        message: "Voc\xEA j\xE1 paga o custo de n\xE3o prever: erro, retrabalho, desperd\xEDcio e decis\xF5es tardias. Machine Learning deixa de ser tecnologia e passa a ser infraestrutura de decis\xE3o.",
        product: "Machine Learning sob medida + monitoramento cont\xEDnuo",
        cta: "Agendar diagn\xF3stico gratuito ML Start",
        ctaLink: this.ctaWhatsApp
      }
    ];
    this.showResult = false;
    this.totalScore = 0;
    this.currentResult = null;
  }
  ngOnInit() {
    this.title.setTitle("Diagn\xF3stico: Voc\xEA precisa de Machine Learning? \u2014 VICS");
    this.meta.updateTag({
      name: "description",
      content: "Descubra em 3 minutos se sua empresa est\xE1 pronta para Machine Learning. Diagn\xF3stico gratuito com 20 perguntas e resultado imediato."
    });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({
      property: "og:title",
      content: "Diagn\xF3stico: Voc\xEA precisa de Machine Learning? \u2014 VICS"
    });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/ml-start/diagnostico"
    });
    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "Diagn\xF3stico de Maturidade em Dados",
        description: "Descubra se sua empresa precisa de Machine Learning",
        provider: {
          "@type": "Organization",
          name: "VICS"
        }
      });
    }
  }
  getQuestionsByBlock(blockId) {
    return this.questions.filter((q) => q.block === blockId);
  }
  get answeredCount() {
    return this.questions.filter((q) => q.answer !== null).length;
  }
  get progress() {
    return this.answeredCount / this.questions.length * 100;
  }
  get allAnswered() {
    return this.questions.every((q) => q.answer !== null);
  }
  calculateResult() {
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
        const resultEl = this.document.getElementById("resultado");
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }
  resetForm() {
    this.questions.forEach((q) => q.answer = null);
    this.showResult = false;
    this.totalScore = 0;
    this.currentResult = null;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  appendJsonLd(data) {
    const script = this.document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
  static {
    this.\u0275fac = function DiagnosticoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DiagnosticoComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiagnosticoComponent, selectors: [["app-diagnostico"]], standalone: false, decls: 36, vars: 9, consts: [[3, "minimalNav"], [1, "page"], [1, "breadcrumb-nav"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/ml-start"], ["aria-current", "page"], [1, "hero"], [1, "eyebrow"], [1, "lede"], [1, "progress-info"], [1, "progress-bar"], [1, "progress-fill"], [1, "section", "form-section"], [3, "ngSubmit"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "submit-hint", 4, "ngIf"], ["class", "section result-section", "id", "resultado", 4, "ngIf"], [1, "block"], [1, "block-header"], [1, "block-icon"], ["class", "question-card", 4, "ngFor", "ngForOf"], [1, "question-card"], [1, "question-number"], [1, "question-text"], [1, "answer-options"], ["class", "answer-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "answer-option"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel"], [1, "option-label"], [1, "submit-hint"], ["id", "resultado", 1, "section", "result-section"], [1, "result-card"], [1, "result-header"], [1, "result-range"], [1, "result-title"], [1, "result-body"], [1, "result-message"], [1, "result-product"], [1, "product-label"], [1, "product-name"], [1, "result-actions"], ["rel", "noopener", 1, "btn", "btn-primary", "btn-lg", 3, "href", "target"], ["type", "button", 1, "btn", "btn-light", "btn-lg", 3, "click"], [1, "result-footer"], [1, "share-section"], [1, "share-buttons"], ["target", "_blank", "rel", "noopener", 1, "share-btn", "whatsapp", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "share-btn", "linkedin", 3, "href"]], template: function DiagnosticoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "ol", 4)(5, "li")(6, "a", 5);
        \u0275\u0275text(7, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li")(9, "a", 6);
        \u0275\u0275text(10, "ML Start");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 7);
        \u0275\u0275text(12, "Diagnostico");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "section", 8)(14, "div", 3)(15, "p", 9);
        \u0275\u0275text(16, "Diagnostico Gratuito");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h1");
        \u0275\u0275text(18, "Voce precisa de Machine Learning?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 10);
        \u0275\u0275text(20, "Responda 20 perguntas rapidas e descubra se sua empresa esta pronta para automatizar decisoes com dados. Resultado imediato.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "span");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12);
        \u0275\u0275element(25, "div", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "section", 14)(27, "div", 3)(28, "form", 15);
        \u0275\u0275listener("ngSubmit", function DiagnosticoComponent_Template_form_ngSubmit_28_listener() {
          return ctx.calculateResult();
        });
        \u0275\u0275template(29, DiagnosticoComponent_div_29_Template, 7, 4, "div", 16);
        \u0275\u0275elementStart(30, "div", 17)(31, "button", 18);
        \u0275\u0275text(32, " Ver meu resultado ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, DiagnosticoComponent_p_33_Template, 2, 0, "p", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(34, DiagnosticoComponent_section_34_Template, 32, 11, "section", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("minimalNav", true);
        \u0275\u0275advance(23);
        \u0275\u0275textInterpolate2("", ctx.answeredCount, " de ", ctx.questions.length, " perguntas respondidas");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.progress, "%");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.blocks);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.allAnswered);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.allAnswered);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResult && ctx.currentResult);
      }
    }, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, RouterLink, NavbarComponent, FooterComponent], styles: [`

.page[_ngcontent-%COMP%] {
  background: #0b0a0c;
  color: #f5f5f5;
  min-height: 100vh;
}
.container[_ngcontent-%COMP%] {
  width: min(900px, 90vw);
  margin: 0 auto;
}
.breadcrumb-nav[_ngcontent-%COMP%] {
  background: #0f0e12;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 0;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #dcd7d7;
  font-size: 14px;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {
  content: "/";
  color: rgba(245, 245, 245, 0.6);
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #f5f5f5;
  text-decoration: none;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
.hero[_ngcontent-%COMP%] {
  padding: 80px 0 50px;
  text-align: center;
  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(99, 102, 241, 0.15),
      transparent 50%);
}
.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {
  color: #818cf8;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 12px;
}
.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  font-size: clamp(28px, 5vw, 42px);
  margin: 0 0 16px;
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
}
.hero[_ngcontent-%COMP%]   .lede[_ngcontent-%COMP%] {
  color: #e5e0e0;
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 24px;
}
.progress-info[_ngcontent-%COMP%] {
  max-width: 400px;
  margin: 0 auto;
}
.progress-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  color: #a5a5a5;
  margin-bottom: 8px;
}
.progress-bar[_ngcontent-%COMP%] {
  height: 8px;
  background: #1f1e24;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #818cf8,
      #a5b4fc);
  border-radius: 4px;
  transition: width 0.3s ease;
}
.section[_ngcontent-%COMP%] {
  padding: 60px 0;
}
.section.form-section[_ngcontent-%COMP%] {
  padding-top: 30px;
}
.section.result-section[_ngcontent-%COMP%] {
  background: #111013;
}
.block[_ngcontent-%COMP%] {
  margin-bottom: 40px;
}
.block-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.block-header[_ngcontent-%COMP%]   .block-icon[_ngcontent-%COMP%] {
  font-size: 20px;
}
.block-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}
.question-card[_ngcontent-%COMP%] {
  background: #131217;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}
.question-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(129, 140, 248, 0.3);
}
.question-number[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  color: #818cf8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}
.question-text[_ngcontent-%COMP%] {
  font-size: 16px;
  line-height: 1.5;
  color: #f5f5f5;
  margin: 0 0 16px;
}
.answer-options[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.answer-option[_ngcontent-%COMP%] {
  flex: 1;
  min-width: 100px;
  cursor: pointer;
}
.answer-option[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {
  display: none;
}
.answer-option[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%] {
  display: block;
  padding: 12px 16px;
  background: #1a1920;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #dcd7d7;
  transition: all 0.2s ease;
}
.answer-option[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%]:hover {
  border-color: rgba(129, 140, 248, 0.4);
  background: #1f1e26;
}
.answer-option.selected[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%] {
  background: rgba(129, 140, 248, 0.15);
  border-color: #818cf8;
  color: #ffffff;
}
.submit-section[_ngcontent-%COMP%] {
  text-align: center;
  padding: 40px 0;
}
.submit-section[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
  min-width: 250px;
}
.submit-section[_ngcontent-%COMP%]   .submit-hint[_ngcontent-%COMP%] {
  margin-top: 12px;
  font-size: 14px;
  color: #a5a5a5;
}
.result-card[_ngcontent-%COMP%] {
  background: #131217;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}
.result-card.result-green[_ngcontent-%COMP%] {
  border-top: 4px solid #22c55e;
}
.result-card.result-green[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #22c55e;
}
.result-card.result-yellow[_ngcontent-%COMP%] {
  border-top: 4px solid #eab308;
}
.result-card.result-yellow[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #eab308;
}
.result-card.result-orange[_ngcontent-%COMP%] {
  border-top: 4px solid #f97316;
}
.result-card.result-orange[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #f97316;
}
.result-card.result-red[_ngcontent-%COMP%] {
  border-top: 4px solid #ef4444;
}
.result-card.result-red[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #ef4444;
}
.result-header[_ngcontent-%COMP%] {
  padding: 30px 30px 20px;
  text-align: center;
}
.result-header[_ngcontent-%COMP%]   .result-range[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #a5a5a5;
  margin: 0 0 12px;
}
.result-header[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 800;
  margin: 0;
}
.result-body[_ngcontent-%COMP%] {
  padding: 0 30px 30px;
}
.result-message[_ngcontent-%COMP%] {
  font-size: 18px;
  line-height: 1.6;
  color: #e5e0e0;
  text-align: center;
  margin: 0 0 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}
.result-product[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 30px;
}
.result-product[_ngcontent-%COMP%]   .product-label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  color: #818cf8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}
.result-product[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}
.result-actions[_ngcontent-%COMP%] {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.result-footer[_ngcontent-%COMP%] {
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.result-footer[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 16px;
  font-style: italic;
  color: #a5a5a5;
  border: none;
  padding: 0;
}
.result-footer[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]::before {
  content: '"';
}
.result-footer[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]::after {
  content: '"';
}
.share-section[_ngcontent-%COMP%] {
  margin-top: 40px;
  text-align: center;
}
.share-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #a5a5a5;
  margin: 0 0 16px;
}
.share-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.share-btn[_ngcontent-%COMP%] {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.share-btn.whatsapp[_ngcontent-%COMP%] {
  background: #25d366;
  color: #ffffff;
}
.share-btn.whatsapp[_ngcontent-%COMP%]:hover {
  background: #1da851;
}
.share-btn.linkedin[_ngcontent-%COMP%] {
  background: #0077b5;
  color: #ffffff;
}
.share-btn.linkedin[_ngcontent-%COMP%]:hover {
  background: #005e93;
}
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {
  background-color: #818cf8;
  border-color: #818cf8;
  color: #0b0a0c;
  font-weight: 700;
}
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, 
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus {
  background-color: #a5b4fc;
  border-color: #818cf8;
  color: #0b0a0c;
}
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: #4b5563;
  border-color: #4b5563;
  color: #9ca3af;
  cursor: not-allowed;
}
.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #f5f5f5;
  font-weight: 600;
}
.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover, 
.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:focus {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}
@media (max-width: 768px) {
  .hero[_ngcontent-%COMP%] {
    padding: 60px 0 40px;
  }
  .answer-options[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .answer-option[_ngcontent-%COMP%] {
    min-width: 100%;
  }
  .result-header[_ngcontent-%COMP%], 
   .result-body[_ngcontent-%COMP%] {
    padding-left: 20px;
    padding-right: 20px;
  }
  .result-actions[_ngcontent-%COMP%] {
    flex-direction: column;
  }
  .result-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
  }
}
/*# sourceMappingURL=diagnostico.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagnosticoComponent, [{
    type: Component,
    args: [{ selector: "app-diagnostico", standalone: false, template: `<app-navbar [minimalNav]="true"></app-navbar>

<div class="page">
  <nav class="breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb">
        <li><a routerLink="/">Inicio</a></li>
        <li><a routerLink="/ml-start">ML Start</a></li>
        <li aria-current="page">Diagnostico</li>
      </ol>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <p class="eyebrow">Diagnostico Gratuito</p>
      <h1>Voce precisa de Machine Learning?</h1>
      <p class="lede">Responda 20 perguntas rapidas e descubra se sua empresa esta pronta para automatizar decisoes com dados. Resultado imediato.</p>
      <div class="progress-info">
        <span>{{ answeredCount }} de {{ questions.length }} perguntas respondidas</span>
        <div class="progress-bar">
          <div class="progress-fill" [style.width.%]="progress"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section form-section">
    <div class="container">
      <form (ngSubmit)="calculateResult()">
        <div class="block" *ngFor="let block of blocks">
          <div class="block-header">
            <span class="block-icon">{{ block.icon }}</span>
            <h2>Bloco {{ block.id }} \u2014 {{ block.title }}</h2>
          </div>

          <div class="question-card" *ngFor="let question of getQuestionsByBlock(block.id)">
            <p class="question-number">Pergunta {{ question.id }}</p>
            <p class="question-text">{{ question.text }}</p>
            <div class="answer-options">
              <label *ngFor="let option of answerOptions" class="answer-option" [class.selected]="question.answer === option.value">
                <input
                  type="radio"
                  [name]="'question-' + question.id"
                  [value]="option.value"
                  [(ngModel)]="question.answer"
                />
                <span class="option-label">{{ option.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="submit-section">
          <button type="submit" class="btn btn-primary btn-lg" [disabled]="!allAnswered">
            Ver meu resultado
          </button>
          <p class="submit-hint" *ngIf="!allAnswered">
            Responda todas as perguntas para ver o resultado
          </p>
        </div>
      </form>
    </div>
  </section>

  <section class="section result-section" id="resultado" *ngIf="showResult && currentResult">
    <div class="container">
      <div class="result-card" [class]="'result-' + currentResult.color">
        <div class="result-header">
          <p class="result-range">Sua pontuacao: {{ totalScore }} de 40 pontos</p>
          <h2 class="result-title">{{ currentResult.title }}</h2>
        </div>

        <div class="result-body">
          <p class="result-message">{{ currentResult.message }}</p>

          <div class="result-product">
            <p class="product-label">Produto recomendado:</p>
            <p class="product-name">{{ currentResult.product }}</p>
          </div>

          <div class="result-actions">
            <a
              [href]="currentResult.ctaLink"
              [target]="currentResult.ctaLink.startsWith('http') ? '_blank' : '_self'"
              rel="noopener"
              class="btn btn-primary btn-lg"
            >
              {{ currentResult.cta }}
            </a>
            <button type="button" class="btn btn-light btn-lg" (click)="resetForm()">
              Refazer diagnostico
            </button>
          </div>
        </div>

        <div class="result-footer">
          <blockquote>
            "Empresas quebram nao por falta de dados, mas por decidir tarde demais."
          </blockquote>
        </div>
      </div>

      <div class="share-section">
        <p>Compartilhe seu resultado:</p>
        <div class="share-buttons">
          <a
            [href]="'https://wa.me/?text=Fiz%20o%20diagn%C3%B3stico%20de%20Machine%20Learning%20da%20VICS%20e%20minha%20pontua%C3%A7%C3%A3o%20foi%20' + totalScore + '%20de%2040.%20Fa%C3%A7a%20o%20seu%3A%20https%3A%2F%2Fwww.vics.dev.br%2Fml-start%2Fdiagnostico'"
            target="_blank"
            rel="noopener"
            class="share-btn whatsapp"
          >
            WhatsApp
          </a>
          <a
            [href]="'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.vics.dev.br%2Fml-start%2Fdiagnostico'"
            target="_blank"
            rel="noopener"
            class="share-btn linkedin"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

<app-footer></app-footer>
`, styles: [`/* src/app/modules/ml-start/diagnostico.component.scss */
.page {
  background: #0b0a0c;
  color: #f5f5f5;
  min-height: 100vh;
}
.container {
  width: min(900px, 90vw);
  margin: 0 auto;
}
.breadcrumb-nav {
  background: #0f0e12;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 0;
}
.breadcrumb-nav .breadcrumb {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #dcd7d7;
  font-size: 14px;
}
.breadcrumb-nav .breadcrumb li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.breadcrumb-nav .breadcrumb li:not(:last-child)::after {
  content: "/";
  color: rgba(245, 245, 245, 0.6);
}
.breadcrumb-nav .breadcrumb li a {
  color: #f5f5f5;
  text-decoration: none;
}
.breadcrumb-nav .breadcrumb li a:hover {
  text-decoration: underline;
}
.hero {
  padding: 80px 0 50px;
  text-align: center;
  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(99, 102, 241, 0.15),
      transparent 50%);
}
.hero .eyebrow {
  color: #818cf8;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 12px;
}
.hero h1 {
  font-size: clamp(28px, 5vw, 42px);
  margin: 0 0 16px;
  font-weight: 800;
  line-height: 1.15;
  color: #ffffff;
}
.hero .lede {
  color: #e5e0e0;
  font-size: 18px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 24px;
}
.progress-info {
  max-width: 400px;
  margin: 0 auto;
}
.progress-info span {
  display: block;
  font-size: 14px;
  color: #a5a5a5;
  margin-bottom: 8px;
}
.progress-bar {
  height: 8px;
  background: #1f1e24;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #818cf8,
      #a5b4fc);
  border-radius: 4px;
  transition: width 0.3s ease;
}
.section {
  padding: 60px 0;
}
.section.form-section {
  padding-top: 30px;
}
.section.result-section {
  background: #111013;
}
.block {
  margin-bottom: 40px;
}
.block-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.block-header .block-icon {
  font-size: 20px;
}
.block-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}
.question-card {
  background: #131217;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}
.question-card:hover {
  border-color: rgba(129, 140, 248, 0.3);
}
.question-number {
  font-size: 12px;
  font-weight: 700;
  color: #818cf8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}
.question-text {
  font-size: 16px;
  line-height: 1.5;
  color: #f5f5f5;
  margin: 0 0 16px;
}
.answer-options {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.answer-option {
  flex: 1;
  min-width: 100px;
  cursor: pointer;
}
.answer-option input {
  display: none;
}
.answer-option .option-label {
  display: block;
  padding: 12px 16px;
  background: #1a1920;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #dcd7d7;
  transition: all 0.2s ease;
}
.answer-option .option-label:hover {
  border-color: rgba(129, 140, 248, 0.4);
  background: #1f1e26;
}
.answer-option.selected .option-label {
  background: rgba(129, 140, 248, 0.15);
  border-color: #818cf8;
  color: #ffffff;
}
.submit-section {
  text-align: center;
  padding: 40px 0;
}
.submit-section .btn {
  min-width: 250px;
}
.submit-section .submit-hint {
  margin-top: 12px;
  font-size: 14px;
  color: #a5a5a5;
}
.result-card {
  background: #131217;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}
.result-card.result-green {
  border-top: 4px solid #22c55e;
}
.result-card.result-green .result-title {
  color: #22c55e;
}
.result-card.result-yellow {
  border-top: 4px solid #eab308;
}
.result-card.result-yellow .result-title {
  color: #eab308;
}
.result-card.result-orange {
  border-top: 4px solid #f97316;
}
.result-card.result-orange .result-title {
  color: #f97316;
}
.result-card.result-red {
  border-top: 4px solid #ef4444;
}
.result-card.result-red .result-title {
  color: #ef4444;
}
.result-header {
  padding: 30px 30px 20px;
  text-align: center;
}
.result-header .result-range {
  font-size: 14px;
  color: #a5a5a5;
  margin: 0 0 12px;
}
.result-header .result-title {
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 800;
  margin: 0;
}
.result-body {
  padding: 0 30px 30px;
}
.result-message {
  font-size: 18px;
  line-height: 1.6;
  color: #e5e0e0;
  text-align: center;
  margin: 0 0 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}
.result-product {
  text-align: center;
  margin-bottom: 30px;
}
.result-product .product-label {
  font-size: 12px;
  font-weight: 700;
  color: #818cf8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}
.result-product .product-name {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
}
.result-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.result-footer {
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.result-footer blockquote {
  margin: 0;
  font-size: 16px;
  font-style: italic;
  color: #a5a5a5;
  border: none;
  padding: 0;
}
.result-footer blockquote::before {
  content: '"';
}
.result-footer blockquote::after {
  content: '"';
}
.share-section {
  margin-top: 40px;
  text-align: center;
}
.share-section p {
  font-size: 14px;
  color: #a5a5a5;
  margin: 0 0 16px;
}
.share-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
}
.share-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
}
.share-btn.whatsapp {
  background: #25d366;
  color: #ffffff;
}
.share-btn.whatsapp:hover {
  background: #1da851;
}
.share-btn.linkedin {
  background: #0077b5;
  color: #ffffff;
}
.share-btn.linkedin:hover {
  background: #005e93;
}
.page .btn-primary {
  background-color: #818cf8;
  border-color: #818cf8;
  color: #0b0a0c;
  font-weight: 700;
}
.page .btn-primary:hover,
.page .btn-primary:focus {
  background-color: #a5b4fc;
  border-color: #818cf8;
  color: #0b0a0c;
}
.page .btn-primary:disabled {
  background-color: #4b5563;
  border-color: #4b5563;
  color: #9ca3af;
  cursor: not-allowed;
}
.page .btn-light {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #f5f5f5;
  font-weight: 600;
}
.page .btn-light:hover,
.page .btn-light:focus {
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}
@media (max-width: 768px) {
  .hero {
    padding: 60px 0 40px;
  }
  .answer-options {
    flex-direction: column;
  }
  .answer-option {
    min-width: 100%;
  }
  .result-header,
  .result-body {
    padding-left: 20px;
    padding-right: 20px;
  }
  .result-actions {
    flex-direction: column;
  }
  .result-actions .btn {
    width: 100%;
  }
}
/*# sourceMappingURL=diagnostico.component.css.map */
`] }]
  }], () => [{ type: Title }, { type: Meta }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiagnosticoComponent, { className: "DiagnosticoComponent", filePath: "src/app/modules/ml-start/diagnostico.component.ts", lineNumber: 28 });
})();

// src/app/modules/ml-start/ml-start.routing.ts
var MlStartRoutes = [
  {
    path: "",
    component: MlStartComponent
  },
  {
    path: "diagnostico",
    component: DiagnosticoComponent
  }
];

// src/app/modules/ml-start/ml-start.module.ts
var MlStartModule = class _MlStartModule {
  static {
    this.\u0275fac = function MlStartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MlStartModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MlStartModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(MlStartRoutes)] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MlStartModule, [{
    type: NgModule,
    args: [{
      declarations: [MlStartComponent, DiagnosticoComponent],
      imports: [SharedModule, RouterModule.forChild(MlStartRoutes)]
    }]
  }], null, null);
})();
export {
  MlStartModule
};
//# sourceMappingURL=ml-start.module-2WFZQEJJ.js.map
