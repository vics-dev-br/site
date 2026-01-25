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

// src/app/modules/performance-infra/performance-infra.component.ts
function PerformanceInfraComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pain_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pain_r1, " ");
  }
}
function PerformanceInfraComponent_li_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const deliverable_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(deliverable_r2);
  }
}
function PerformanceInfraComponent_li_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r3);
  }
}
function PerformanceInfraComponent_div_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r4, " ");
  }
}
function PerformanceInfraComponent_li_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5);
  }
}
function PerformanceInfraComponent_tr_192_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r6.metric);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r6.before);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r6.after);
  }
}
function PerformanceInfraComponent_div_224_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "blockquote", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 84);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const testimonial_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r7.quote);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r7.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(testimonial_r7.metric);
  }
}
function PerformanceInfraComponent_div_233_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const audience_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", audience_r8, " ");
  }
}
function PerformanceInfraComponent_div_291_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85)(1, "h4");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const faq_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r9.question);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r9.answer);
  }
}
var PerformanceInfraComponent = class _PerformanceInfraComponent {
  constructor(title, meta, platformId, document) {
    this.title = title;
    this.meta = meta;
    this.platformId = platformId;
    this.document = document;
    this.ctaLabel = "Agendar diagn\xF3stico gratuito de 30 min";
    this.ctaHref = "https://wa.me/5531975474785?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20de%2030%20min%20para%20avaliar%20performance%20de%20infra";
    this.checklistHref = "/assets/checklist-12-pontos.pdf";
    this.painPoints = [
      "Lentid\xE3o crescente sem causa clara",
      "Reclama\xE7\xF5es constantes de usu\xE1rios",
      "Infraestrutura pressionando por mais recursos",
      "Consultas lentas e inst\xE1veis no banco de dados",
      "Medo de quedas em hor\xE1rios cr\xEDticos",
      "Falta de m\xE9tricas confi\xE1veis para decis\xE3o"
    ];
    this.deliverables = [
      "Mapa completo de gargalos de performance",
      "An\xE1lise integrada de aplica\xE7\xE3o, banco e infraestrutura",
      "Identifica\xE7\xE3o de riscos operacionais",
      "Avalia\xE7\xE3o de impacto financeiro (custo x benef\xEDcio)",
      "Plano de a\xE7\xE3o priorizado",
      "Relat\xF3rio t\xE9cnico documentado"
    ];
    this.steps = [
      "Levantamento T\xE9cnico \u2014 m\xE9tricas, logs e configura\xE7\xF5es do ambiente",
      "An\xE1lise Profunda \u2014 gargalos de aplica\xE7\xE3o, banco de dados e infraestrutura",
      "Diagn\xF3stico Consolidado \u2014 vis\xE3o t\xE9cnica com impacto no neg\xF3cio",
      "Entrega do Plano de A\xE7\xE3o \u2014 prioridades, riscos e recomenda\xE7\xF5es (10 a 15 dias)"
    ];
    this.scope = [
      "Performance da aplica\xE7\xE3o",
      "Consultas e \xEDndices do banco de dados",
      "Uso de cache e recursos",
      "Configura\xE7\xF5es de servidores de aplica\xE7\xE3o",
      "Uso e escalabilidade da infraestrutura",
      "Consumo de CPU, mem\xF3ria e I/O",
      "Riscos de instabilidade"
    ];
    this.avoids = [
      "Aumento desnecess\xE1rio de infraestrutura",
      "Otimiza\xE7\xF5es aleat\xF3rias sem resultado",
      "Quedas inesperadas em sistemas cr\xEDticos",
      "Decis\xF5es baseadas em suposi\xE7\xE3o",
      "Retrabalho t\xE9cnico"
    ];
    this.audiences = [
      "Sistemas cr\xEDticos em produ\xE7\xE3o",
      "Ambientes hospitalares, governamentais ou corporativos",
      "Empresas em crescimento",
      "Gestores que precisam de previsibilidade",
      "Infraestruturas sob press\xE3o"
    ];
    this.faqs = [
      {
        question: "Como medir ganhos de performance de infra?",
        answer: "Come\xE7amos definindo SLI/SLO claros (lat\xEAncia P95/P99, throughput, erro rate e custo). O plano traz baseline e metas por componente, com comparativo antes/depois."
      },
      {
        question: "Quanto tempo at\xE9 ver resultado?",
        answer: "O diagn\xF3stico completo leva 10 a 15 dias. As primeiras otimiza\xE7\xF5es priorizadas normalmente entregam melhora percept\xEDvel nas 2 primeiras sprints de execu\xE7\xE3o."
      },
      {
        question: "Como equilibrar performance e custos?",
        answer: "Mapeamos gargalos que geram consumo desnecess\xE1rio e ajustamos caches, \xEDndices e configura\xE7\xE3o de recursos. Priorizamos a\xE7\xF5es com melhor rela\xE7\xE3o ganho/custo."
      }
    ];
    this.testimonials = [
      {
        quote: "Reduzimos lat\xEAncia P95 em 38% e estabilizamos plant\xF5es cr\xEDticos sem aumentar infraestrutura.",
        author: "CTO - Sa\xFAde",
        metric: "P95 de 420ms para 260ms em 4 semanas"
      },
      {
        quote: "Corte de 22% no custo de cloud enquanto liberamos throughput para novo m\xF3dulo.",
        author: "Head de Tecnologia - Finan\xE7as",
        metric: "Throughput +18% com -22% de custo"
      }
    ];
    this.beforeAfterMetrics = [
      { metric: "Lat\xEAncia P95", before: "420 ms", after: "260 ms" },
      { metric: "Lat\xEAncia P99", before: "680 ms", after: "410 ms" },
      { metric: "Erro rate", before: "1,8%", after: "0,6%" },
      { metric: "Throughput", before: "11k req/min", after: "13k req/min" },
      { metric: "Custo de infra", before: "R$ 38k/m\xEAs", after: "R$ 29k/m\xEAs" }
    ];
  }
  ngOnInit() {
    this.title.setTitle("Performance de Infraestrutura | Acelera\xE7\xE3o, SLO e Custos \u2014 VICS");
    this.meta.updateTag({
      name: "description",
      content: "Otimize lat\xEAncia, throughput e custo da sua infra. SLO claros, ganhos mensur\xE1veis e governan\xE7a. Veja como a VICS executa."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "performance de infraestrutura, otimiza\xE7\xE3o de performance, SLO, finops, redu\xE7\xE3o de lat\xEAncia, throughput, custo de cloud"
    });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({
      property: "og:title",
      content: "Performance de Infraestrutura | Acelera\xE7\xE3o, SLO e Custos \u2014 VICS"
    });
    this.meta.updateTag({
      property: "og:description",
      content: "Otimize lat\xEAncia, throughput e custo da sua infra com SLO claros e ganhos mensur\xE1veis."
    });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/performance-infra"
    });
    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "VICS",
        url: "https://www.vics.dev.br",
        logo: "https://www.vics.dev.br/assets/logo.png",
        sameAs: ["https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55 31 97547-4785",
          contactType: "sales",
          areaServed: "BR"
        }
      });
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Performance de Infraestrutura",
        url: "https://www.vics.dev.br/performance-infra",
        serviceType: "Diagn\xF3stico e acelera\xE7\xE3o de performance",
        provider: {
          "@type": "Organization",
          name: "VICS",
          url: "https://www.vics.dev.br"
        },
        areaServed: { "@type": "Country", name: "BR" },
        offers: {
          "@type": "Offer",
          description: "Diagn\xF3stico e plano de a\xE7\xE3o para performance de infraestrutura com SLO claros."
        }
      });
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: this.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      });
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "In\xEDcio",
            item: "https://www.vics.dev.br"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Performance de Infraestrutura",
            item: "https://www.vics.dev.br/performance-infra"
          }
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
    this.\u0275fac = function PerformanceInfraComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PerformanceInfraComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerformanceInfraComponent, selectors: [["app-performance-infra"]], standalone: false, decls: 306, vars: 26, consts: [[3, "minimalNav", "ctaHref", "ctaLabel"], [1, "page"], [1, "breadcrumb-nav"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/"], ["aria-current", "page"], [1, "hero"], [1, "hero-grid"], [1, "hero-content"], [1, "eyebrow"], [1, "lede"], [1, "hero-actions"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-lg", 3, "href"], ["routerLink", "/performance-infra/diagnostico", 1, "btn", "btn-secondary", "btn-lg"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-light", "btn-lg", 3, "href"], [1, "hero-meta"], [1, "hero-links"], ["routerLink", "/blindagem-performance-infra"], ["routerLink", "/monitoramento-governanca-performance"], [1, "trust"], [1, "trust-label"], [1, "logo-row"], ["src", "assets/img/partner-1.png", "alt", "Logo cliente de sa\xFAde", "loading", "lazy"], ["src", "assets/img/partner-2.png", "alt", "Logo cliente de finan\xE7as", "loading", "lazy"], ["src", "assets/img/partner-3.png", "alt", "Logo cliente enterprise", "loading", "lazy"], ["src", "assets/img/partner-4.png", "alt", "Logo cliente setor p\xFAblico", "loading", "lazy"], [1, "quote"], ["id", "agendar", 1, "lead-card"], [1, "lead-copy"], [1, "whatsapp-cta-card"], [1, "whatsapp-icon-large", "mb-4"], [1, "fab", "fa-whatsapp", "fa-4x", "text-success"], [1, "mb-3"], [1, "text-muted", "mb-4"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-success", "btn-lg", "w-100", "mb-3", 3, "href"], [1, "fab", "fa-whatsapp", "me-2"], [1, "trust-indicators"], [1, "d-flex", "flex-column", "gap-2", "small", "text-muted"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-check-circle", "text-success", "me-2"], ["id", "dor", 1, "section"], [1, "section-title"], [1, "pill-grid"], ["class", "pill", 4, "ngFor", "ngForOf"], [1, "note", "warning"], ["id", "solucao", 1, "section", "muted"], [1, "card-grid"], [1, "card", "highlight"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "w-100", 3, "href"], [1, "card"], [1, "dash-list"], [4, "ngFor", "ngForOf"], [1, "step-list"], ["id", "escopo", 1, "section"], [1, "pill-grid", "soft"], [1, "note", "neutral"], ["id", "evita", 1, "section", "muted"], [1, "checklist"], ["id", "case", 1, "section"], [1, "case-grid"], [1, "case-card"], [1, "note", "success"], ["id", "antes-depois", 1, "section", "muted"], [1, "table-wrapper"], ["id", "por-que-pago", 1, "section", "muted"], [1, "card-grid", "two"], ["id", "prova-social", 1, "section"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "para-quem", 1, "section"], ["id", "links-internos", 1, "section"], [1, "card-grid", "two", "blindagem-grid"], ["routerLink", "/blindagem-performance-infra", 1, "btn", "btn-light"], ["routerLink", "/monitoramento-governanca-performance", 1, "btn", "btn-light"], ["id", "checklist", 1, "section", "muted"], [1, "lead-magnet"], [1, "lead-magnet-actions"], ["id", "faq", 1, "section", "muted"], [1, "faq-grid"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "cta"], [1, "cta-actions"], [1, "cta-meta"], [1, "pill"], [1, "lede-sm"], [1, "faq-item"]], template: function PerformanceInfraComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "ol", 4)(5, "li")(6, "a", 5);
        \u0275\u0275text(7, "In\xEDcio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li", 6);
        \u0275\u0275text(9, "Performance de Infraestrutura");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "section", 7)(11, "div", 3)(12, "div", 8)(13, "div", 9)(14, "p", 10);
        \u0275\u0275text(15, "Pilar \u2022 Performance & Infra");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h1");
        \u0275\u0275text(17, "Performance de Infraestrutura: do diagn\xF3stico ao ganho mensur\xE1vel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p", 11);
        \u0275\u0275text(19, "Otimize lat\xEAncia, throughput e custo com um diagn\xF3stico t\xE9cnico que entrega SLO claros e plano acion\xE1vel em at\xE9 15 dias. Analisamos aplica\xE7\xE3o, banco e infraestrutura para priorizar o que move a agulha.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12)(21, "a", 13);
        \u0275\u0275text(22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "a", 14);
        \u0275\u0275text(24, "Fazer autodiagn\xF3stico online");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275text(26, "Baixar checklist de 12 pontos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 16);
        \u0275\u0275text(28, "Plano t\xE9cnico entregue em at\xE9 15 dias \u2022 Execu\xE7\xE3o pelos s\xF3cios");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 17)(30, "a", 18);
        \u0275\u0275text(31, "Precisa garantir resili\xEAncia?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "a", 19);
        \u0275\u0275text(33, "Quer governar por SLO/SLI?");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 20)(35, "p", 21);
        \u0275\u0275text(36, "Confian\xE7a de quem opera sistemas cr\xEDticos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 22);
        \u0275\u0275element(38, "img", 23)(39, "img", 24)(40, "img", 25)(41, "img", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "blockquote", 27);
        \u0275\u0275text(43, ' "Reduzimos risco operacional, estabilizamos o sistema e economizamos antes de ampliar infraestrutura." ');
        \u0275\u0275elementStart(44, "span");
        \u0275\u0275text(45, "CTO \u2022 Sistema hospitalar");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 28)(47, "p", 10);
        \u0275\u0275text(48, "Atendimento direto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h3");
        \u0275\u0275text(50, "Agende seu diagn\xF3stico em 30 minutos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p", 29);
        \u0275\u0275text(52, "Retornamos em 1 dia \xFAtil com agenda e pr\xF3ximos passos. Diagn\xF3stico observacional: nada muda em produ\xE7\xE3o nesta fase.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 30)(54, "div", 31);
        \u0275\u0275element(55, "i", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "h4", 33);
        \u0275\u0275text(57, "Fale direto com nossos especialistas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p", 34);
        \u0275\u0275text(59, "Envie uma mensagem pelo WhatsApp e retornamos rapidamente com os pr\xF3ximos passos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 35);
        \u0275\u0275element(61, "i", 36);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 37)(64, "div", 38)(65, "div", 39);
        \u0275\u0275element(66, "i", 40);
        \u0275\u0275elementStart(67, "span");
        \u0275\u0275text(68, "Resposta em at\xE9 1 dia \xFAtil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 39);
        \u0275\u0275element(70, "i", 40);
        \u0275\u0275elementStart(71, "span");
        \u0275\u0275text(72, "Diagn\xF3stico observacional");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 39);
        \u0275\u0275element(74, "i", 40);
        \u0275\u0275elementStart(75, "span");
        \u0275\u0275text(76, "Sem alterar produ\xE7\xE3o");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(77, "section", 41)(78, "div", 3)(79, "div", 42)(80, "h2");
        \u0275\u0275text(81, "O problema (dor consciente)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p");
        \u0275\u0275text(83, "Se o seu sistema apresenta algum desses sinais, o risco j\xE1 est\xE1 instalado.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 43);
        \u0275\u0275template(85, PerformanceInfraComponent_div_85_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 45)(87, "strong");
        \u0275\u0275text(88, "\u{1F4C9} Escalar infraestrutura sem diagn\xF3stico aumenta custo e n\xE3o resolve a causa.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(89, "section", 46)(90, "div", 3)(91, "div", 42)(92, "h2");
        \u0275\u0275text(93, "Diagn\xF3stico de Performance & Infra");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p");
        \u0275\u0275text(95, "Chamada gratuita de 30 min para enquadrar o cen\xE1rio. Diagn\xF3stico completo (pago) entrega plano priorizado com impacto t\xE9cnico e financeiro.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(96, "div", 47)(97, "div", 48)(98, "h3");
        \u0275\u0275text(99, "Voc\xEA paga para saber onde agir");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "p");
        \u0275\u0275text(101, "Plano priorizado, com impacto t\xE9cnico e financeiro, sem alterar produ\xE7\xE3o nesta fase.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "a", 49);
        \u0275\u0275text(103);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "div", 50)(105, "h4");
        \u0275\u0275text(106, "Entreg\xE1veis claros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "ul", 51);
        \u0275\u0275template(108, PerformanceInfraComponent_li_108_Template, 2, 1, "li", 52);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 50)(110, "h4");
        \u0275\u0275text(111, "Como funciona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "ol", 53);
        \u0275\u0275template(113, PerformanceInfraComponent_li_113_Template, 2, 1, "li", 52);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(114, "section", 54)(115, "div", 3)(116, "div", 42)(117, "h2");
        \u0275\u0275text(118, "O que \xE9 analisado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p");
        \u0275\u0275text(120, "Diagn\xF3stico completo sem tocar na produ\xE7\xE3o, protegendo seu ambiente.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div", 55);
        \u0275\u0275template(122, PerformanceInfraComponent_div_122_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 56);
        \u0275\u0275text(124, " \u26A0\uFE0F Sem altera\xE7\xF5es diretas em produ\xE7\xE3o nesta fase \u2014 \xE9 diagn\xF3stico, n\xE3o execu\xE7\xE3o. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "section", 57)(126, "div", 3)(127, "div", 42)(128, "h2");
        \u0275\u0275text(129, "O que esse diagn\xF3stico evita");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "p");
        \u0275\u0275text(131, "Decidir com clareza custa menos do que corrigir uma crise.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "ul", 58);
        \u0275\u0275template(133, PerformanceInfraComponent_li_133_Template, 2, 1, "li", 52);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(134, "section", 59)(135, "div", 3)(136, "div", 42)(137, "h2");
        \u0275\u0275text(138, "Exemplo real");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "p");
        \u0275\u0275text(140, "Sistema hospitalar com lentid\xE3o crescente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "div", 60)(142, "div", 61)(143, "p", 10);
        \u0275\u0275text(144, "Situa\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "ul", 51)(146, "li");
        \u0275\u0275text(147, "Reclama\xE7\xF5es frequentes de usu\xE1rios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "li");
        \u0275\u0275text(149, "Infraestrutura pressionando por mais recursos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "li");
        \u0275\u0275text(151, "Risco operacional elevado");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(152, "div", 61)(153, "p", 10);
        \u0275\u0275text(154, "Diagn\xF3stico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "ul", 51)(156, "li");
        \u0275\u0275text(157, "Gargalos cr\xEDticos de banco e aplica\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li");
        \u0275\u0275text(159, "Uso ineficiente de recursos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li");
        \u0275\u0275text(161, "Aus\xEAncia de estrat\xE9gia de cache");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(162, "div", 61)(163, "p", 10);
        \u0275\u0275text(164, "Resultado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "ul", 51)(166, "li");
        \u0275\u0275text(167, "Plano claro de otimiza\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "li");
        \u0275\u0275text(169, "Estabilidade restaurada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "li");
        \u0275\u0275text(171, "Nenhum aumento de infraestrutura");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(172, "div", 62);
        \u0275\u0275text(173, " \u{1F4CC} O diagn\xF3stico evitou custos maiores e riscos operacionais. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(174, "section", 63)(175, "div", 3)(176, "div", 42)(177, "h2");
        \u0275\u0275text(178, "M\xE9tricas antes e depois (exemplo anonimizado)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "p");
        \u0275\u0275text(180, "Baseline, metas e valida\xE7\xE3o com SLI/SLO para cada componente.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "div", 64)(182, "table")(183, "thead")(184, "tr")(185, "th");
        \u0275\u0275text(186, "M\xE9trica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "th");
        \u0275\u0275text(188, "Antes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "th");
        \u0275\u0275text(190, "Depois");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(191, "tbody");
        \u0275\u0275template(192, PerformanceInfraComponent_tr_192_Template, 7, 3, "tr", 52);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(193, "section", 65)(194, "div", 3)(195, "div", 42)(196, "h2");
        \u0275\u0275text(197, "Por que o diagn\xF3stico \xE9 pago");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "p");
        \u0275\u0275text(199, "Clareza t\xE9cnica, redu\xE7\xE3o de risco e economia futura.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "div", 66)(201, "div", 50)(202, "h4");
        \u0275\u0275text(203, "Posicionamento de pre\xE7o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "ul", 51)(205, "li");
        \u0275\u0275text(206, "Diagn\xF3stico t\xE9cnico profissional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "li");
        \u0275\u0275text(208, "Escopo fechado e entreg\xE1vel documentado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "li");
        \u0275\u0275text(210, "Base para execu\xE7\xE3o futura");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(211, "div", 50)(212, "h4");
        \u0275\u0275text(213, "Abatimento inteligente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "p");
        \u0275\u0275text(215, "O valor do diagn\xF3stico pode ser abatido na execu\xE7\xE3o, caso avance para a fase de otimiza\xE7\xE3o.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(216, "section", 67)(217, "div", 3)(218, "div", 42)(219, "h2");
        \u0275\u0275text(220, "Prova social (mensur\xE1vel)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "p");
        \u0275\u0275text(222, "Resultados validados em produ\xE7\xE3o, com SLO monitorados.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(223, "div", 66);
        \u0275\u0275template(224, PerformanceInfraComponent_div_224_Template, 7, 3, "div", 68);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(225, "section", 69)(226, "div", 3)(227, "div", 42)(228, "h2");
        \u0275\u0275text(229, "Para quem \xE9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "p");
        \u0275\u0275text(231, "Diagnosticamos onde h\xE1 risco e necessidade de previsibilidade.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(232, "div", 43);
        \u0275\u0275template(233, PerformanceInfraComponent_div_233_Template, 2, 1, "div", 44);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 45);
        \u0275\u0275text(235, " \u274C N\xE3o indicado para prot\xF3tipos ou projetos experimentais. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(236, "section", 70)(237, "div", 3)(238, "div", 42)(239, "h2");
        \u0275\u0275text(240, "Pr\xF3ximos passos no cluster");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "p");
        \u0275\u0275text(242, "Conecte performance, resili\xEAncia e governan\xE7a.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(243, "div", 71)(244, "div", 48)(245, "h3");
        \u0275\u0275text(246, "Blindagem de Performance & Infra");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(247, "p");
        \u0275\u0275text(248, "Resili\xEAncia para sustentar picos e falhas. Execu\xE7\xE3o controlada das otimiza\xE7\xF5es priorizadas com testes de carga e rollback.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "a", 72);
        \u0275\u0275text(250, "Ver blindagem");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "div", 50)(252, "h3");
        \u0275\u0275text(253, "Monitoramento & Governan\xE7a de Performance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(254, "p");
        \u0275\u0275text(255, "Observabilidade, SLI/SLO e FinOps cont\xEDnuo para que os ganhos n\xE3o se percam com o tempo.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "a", 73);
        \u0275\u0275text(257, "Ver governan\xE7a");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(258, "div", 56);
        \u0275\u0275text(259, " Use o mesmo CTA em todas as p\xE1ginas: ");
        \u0275\u0275elementStart(260, "strong");
        \u0275\u0275text(261);
        \u0275\u0275elementEnd();
        \u0275\u0275text(262, ". ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(263, "section", 74)(264, "div", 3)(265, "div", 42)(266, "h2");
        \u0275\u0275text(267, "Checklist de 12 pontos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "p");
        \u0275\u0275text(269, "Diagn\xF3stico r\xE1pido de maturidade com a\xE7\xF5es recomendadas.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(270, "div", 75)(271, "ul", 51)(272, "li");
        \u0275\u0275text(273, "SLI/SLO essenciais para app, infra e neg\xF3cio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(274, "li");
        \u0275\u0275text(275, "Alertas e riscos priorit\xE1rios (P95/P99, erro rate, custo)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(276, "li");
        \u0275\u0275text(277, "Passo a passo para estabilizar e reduzir custo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(278, "div", 76)(279, "a", 13);
        \u0275\u0275text(280, "Baixar checklist de 12 pontos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "a", 15);
        \u0275\u0275text(282);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(283, "section", 77)(284, "div", 3)(285, "div", 42)(286, "h2");
        \u0275\u0275text(287, "Perguntas frequentes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "p");
        \u0275\u0275text(289, "O que decisores costumam perguntar antes do diagn\xF3stico.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(290, "div", 78);
        \u0275\u0275template(291, PerformanceInfraComponent_div_291_Template, 5, 2, "div", 79);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(292, "section", 80)(293, "div", 3)(294, "h2");
        \u0275\u0275text(295, "Quer performance previs\xEDvel com custo sob controle?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "p");
        \u0275\u0275text(297, "Agende o diagn\xF3stico e receba um plano t\xE9cnico com SLO claros antes de investir mais em infraestrutura.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "div", 81)(299, "a", 13);
        \u0275\u0275text(300);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "a", 15);
        \u0275\u0275text(302, "Baixar checklist de 12 pontos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(303, "p", 82);
        \u0275\u0275text(304, "Diagn\xF3stico t\xE9cnico que evita crise, reduz custo e traz previsibilidade para sistemas cr\xEDticos.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(305, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("minimalNav", true)("ctaHref", ctx.ctaHref)("ctaLabel", ctx.ctaLabel);
        \u0275\u0275advance(21);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ctaLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.checklistHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(35);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.ctaLabel, " ");
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.painPoints);
        \u0275\u0275advance(17);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ctaLabel);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.deliverables);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.steps);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.scope);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.avoids);
        \u0275\u0275advance(59);
        \u0275\u0275property("ngForOf", ctx.beforeAfterMetrics);
        \u0275\u0275advance(32);
        \u0275\u0275property("ngForOf", ctx.testimonials);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.audiences);
        \u0275\u0275advance(28);
        \u0275\u0275textInterpolate(ctx.ctaLabel);
        \u0275\u0275advance(18);
        \u0275\u0275property("href", ctx.checklistHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ctaLabel);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.faqs);
        \u0275\u0275advance(8);
        \u0275\u0275property("href", ctx.ctaHref, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.ctaLabel);
        \u0275\u0275advance();
        \u0275\u0275property("href", ctx.checklistHref, \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [NgForOf, RouterLink, NavbarComponent, FooterComponent], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  background: #0b0a0c;\n  color: #f5f5f5;\n}\n.container[_ngcontent-%COMP%] {\n  width: min(1100px, 90vw);\n  margin: 0 auto;\n}\n.breadcrumb-nav[_ngcontent-%COMP%] {\n  background: #0f0e12;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 10px 0;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #dcd7d7;\n  font-size: 14px;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "/";\n  color: rgba(245, 245, 245, 0.6);\n}\n.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  text-decoration: none;\n}\n.hero[_ngcontent-%COMP%] {\n  padding: 120px 0 90px;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(255, 44, 87, 0.12),\n      transparent 35%),\n    radial-gradient(\n      circle at 80% 0%,\n      rgba(255, 255, 255, 0.08),\n      transparent 30%);\n}\n.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n  font-weight: 700;\n  letter-spacing: 0.4px;\n}\n.hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 32px;\n  grid-template-columns: 1.6fr 1fr;\n  align-items: start;\n}\n.hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(30px, 5vw, 46px);\n  margin: 14px 0;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n}\n.hero[_ngcontent-%COMP%]   .lede[_ngcontent-%COMP%] {\n  color: #e5e0e0;\n  font-size: 18px;\n  line-height: 1.6;\n  max-width: 820px;\n}\n.hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.hero[_ngcontent-%COMP%]   .hero-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin: 10px 0 4px;\n}\n.hero[_ngcontent-%COMP%]   .hero-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffc2d0;\n  font-weight: 700;\n  text-decoration: none;\n}\n.hero[_ngcontent-%COMP%]   .hero-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.hero[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%] {\n  color: rgba(245, 245, 245, 0.8);\n  font-size: 14px;\n}\n.hero[_ngcontent-%COMP%]   .trust[_ngcontent-%COMP%] {\n  background: rgba(19, 18, 23, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 14px 16px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);\n}\n.hero[_ngcontent-%COMP%]   .trust-label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-size: 12px;\n  color: #c8c3c3;\n  margin: 0 0 8px;\n}\n.hero[_ngcontent-%COMP%]   .logo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.hero[_ngcontent-%COMP%]   .logo-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 28px;\n  filter: grayscale(100%) brightness(1.1);\n  opacity: 0.9;\n}\n.hero[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n  font-weight: 600;\n  line-height: 1.5;\n  border-left: 3px solid #ff2c57;\n  padding-left: 12px;\n}\n.hero[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  color: #c8c3c3;\n  font-weight: 500;\n  font-size: 14px;\n}\n.hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%] {\n  background: #0f0e12;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);\n  position: relative;\n  top: 12px;\n  color: #fdfdfd;\n}\n.hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #ffffff;\n}\n.hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%]   .lead-copy[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #f0f0f0;\n  line-height: 1.5;\n}\n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-weight: 600;\n  color: #f5f5f5;\n  font-size: 14px;\n}\n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  background: #0b0a0c;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  padding: 12px 12px;\n  color: #f5f5f5;\n  font-size: 15px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #ff2c57;\n  box-shadow: 0 0 0 3px rgba(255, 44, 87, 0.18);\n}\n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 90px;\n}\n.hero[_ngcontent-%COMP%]   .lead-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 4px;\n}\n.hero[_ngcontent-%COMP%]   .form-meta[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #e6e6e6;\n  font-size: 13px;\n}\n.hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n}\n.hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%]   .text-muted[_ngcontent-%COMP%] {\n  color: #ededed !important;\n}\n.hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: 700;\n}\n.section[_ngcontent-%COMP%] {\n  padding: 90px 0;\n  background: #0b0a0c;\n}\n.section.muted[_ngcontent-%COMP%] {\n  background: #111013;\n}\n.section-title[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n}\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 3.5vw, 36px);\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: #f5f5f5;\n}\n.section-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #dcd7d7;\n  margin: 0;\n  font-size: 16px;\n}\n.blindagem-grid[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n  padding: 10px;\n  background: #0f0e12;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  margin: 10px 0;\n}\n.blindagem-grid[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-size: 12px;\n  color: #c8c3c3;\n}\n.blindagem-grid[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  font-weight: 700;\n}\n.emphasis[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.cta-hint[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: rgba(245, 245, 245, 0.75);\n  font-size: 13px;\n}\n.blindagem-steps[_ngcontent-%COMP%]   .note.inline[_ngcontent-%COMP%], \n.blindagem-steps[_ngcontent-%COMP%]   .note.success.inline[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.pill-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.pill-grid.soft[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%] {\n  background: #151419;\n}\n.pill[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: #131217;\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-weight: 600;\n  color: #f5f5f5;\n  line-height: 1.5;\n}\n.note[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.note.warning[_ngcontent-%COMP%] {\n  background: rgba(255, 44, 87, 0.08);\n  border: 1px solid rgba(255, 44, 87, 0.25);\n}\n.note.neutral[_ngcontent-%COMP%] {\n  background: #16151b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #dcd7d7;\n}\n.note.success[_ngcontent-%COMP%] {\n  background: rgba(24, 201, 100, 0.12);\n  border: 1px solid rgba(24, 201, 100, 0.3);\n}\n.card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.card-grid.two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.card[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 12px;\n  height: 100%;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  color: #f5f5f5;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dcd7d7;\n}\n.card.highlight[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1d1a22,\n      #211018);\n  border-color: rgba(255, 44, 87, 0.35);\n}\n.dash-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 8px;\n  padding-left: 0;\n  margin: 0;\n}\n.dash-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  position: relative;\n  padding-left: 14px;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.dash-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2014";\n  position: absolute;\n  left: 0;\n  color: var(--mainColor);\n  font-weight: 700;\n}\n.step-list[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.step-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.checklist[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n  margin: 0;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 26px;\n  position: relative;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2714";\n  position: absolute;\n  left: 0;\n  color: #18c964;\n  font-weight: 800;\n}\n.case-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.case-card[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 16px;\n}\n.case-card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #c8c3c3;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin: 0 0 10px;\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 16px;\n  overflow-x: auto;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  color: #f5f5f5;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: left;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #c8c3c3;\n  font-weight: 700;\n}\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.lead-magnet[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 14px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\n.lead-magnet-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cta[_ngcontent-%COMP%] {\n  padding: 90px 0 110px;\n  background:\n    linear-gradient(\n      120deg,\n      #0f0d0e,\n      #361525);\n  text-align: center;\n  color: #ffffff;\n}\n.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3.5vw, 36px);\n  font-weight: 800;\n  margin-bottom: 10px;\n}\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 auto 18px;\n  max-width: 700px;\n  color: #f5f5f5;\n  line-height: 1.6;\n}\n.cta[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.cta[_ngcontent-%COMP%]   .cta-meta[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n}\n.faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);\n}\n.faq-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #f5f5f5;\n  font-weight: 700;\n}\n.faq-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background-color: #ff2c57;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n  font-weight: 700;\n}\n.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, \n.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus {\n  background-color: #ffc2d0;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 100px 0 70px;\n  }\n  .hero[_ngcontent-%COMP%]   .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero[_ngcontent-%COMP%]   .lead-card[_ngcontent-%COMP%] {\n    top: 0;\n  }\n  .section[_ngcontent-%COMP%] {\n    padding: 70px 0;\n  }\n}\n/*# sourceMappingURL=performance-infra.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerformanceInfraComponent, [{
    type: Component,
    args: [{ selector: "app-performance-infra", standalone: false, template: '<app-navbar [minimalNav]="true" [ctaHref]="ctaHref" [ctaLabel]="ctaLabel"></app-navbar>\n\n<div class="page">\n  <nav class="breadcrumb-nav">\n    <div class="container">\n      <ol class="breadcrumb">\n        <li><a routerLink="/">In\xEDcio</a></li>\n        <li aria-current="page">Performance de Infraestrutura</li>\n      </ol>\n    </div>\n  </nav>\n\n  <section class="hero">\n    <div class="container">\n      <div class="hero-grid">\n        <div class="hero-content">\n          <p class="eyebrow">Pilar \u2022 Performance & Infra</p>\n          <h1>Performance de Infraestrutura: do diagn\xF3stico ao ganho mensur\xE1vel</h1>\n          <p class="lede">Otimize lat\xEAncia, throughput e custo com um diagn\xF3stico t\xE9cnico que entrega SLO claros e plano acion\xE1vel em at\xE9 15 dias. Analisamos aplica\xE7\xE3o, banco e infraestrutura para priorizar o que move a agulha.</p>\n          <div class="hero-actions">\n            <a class="btn btn-primary btn-lg" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>\n            <a class="btn btn-secondary btn-lg" routerLink="/performance-infra/diagnostico">Fazer autodiagn\xF3stico online</a>\n            <a class="btn btn-light btn-lg" [href]="checklistHref" target="_blank" rel="noopener">Baixar checklist de 12 pontos</a>\n            <span class="hero-meta">Plano t\xE9cnico entregue em at\xE9 15 dias \u2022 Execu\xE7\xE3o pelos s\xF3cios</span>\n          </div>\n          <div class="hero-links">\n            <a routerLink="/blindagem-performance-infra">Precisa garantir resili\xEAncia?</a>\n            <a routerLink="/monitoramento-governanca-performance">Quer governar por SLO/SLI?</a>\n          </div>\n          <div class="trust">\n            <p class="trust-label">Confian\xE7a de quem opera sistemas cr\xEDticos</p>\n            <div class="logo-row">\n              <img src="assets/img/partner-1.png" alt="Logo cliente de sa\xFAde" loading="lazy" />\n              <img src="assets/img/partner-2.png" alt="Logo cliente de finan\xE7as" loading="lazy" />\n              <img src="assets/img/partner-3.png" alt="Logo cliente enterprise" loading="lazy" />\n              <img src="assets/img/partner-4.png" alt="Logo cliente setor p\xFAblico" loading="lazy" />\n            </div>\n            <blockquote class="quote">\n              "Reduzimos risco operacional, estabilizamos o sistema e economizamos antes de ampliar infraestrutura."\n              <span>CTO \u2022 Sistema hospitalar</span>\n            </blockquote>\n          </div>\n        </div>\n        <div class="lead-card" id="agendar">\n          <p class="eyebrow">Atendimento direto</p>\n          <h3>Agende seu diagn\xF3stico em 30 minutos</h3>\n          <p class="lead-copy">Retornamos em 1 dia \xFAtil com agenda e pr\xF3ximos passos. Diagn\xF3stico observacional: nada muda em produ\xE7\xE3o nesta fase.</p>\n          <div class="whatsapp-cta-card">\n            <div class="whatsapp-icon-large mb-4">\n              <i class="fab fa-whatsapp fa-4x text-success"></i>\n            </div>\n            <h4 class="mb-3">Fale direto com nossos especialistas</h4>\n            <p class="text-muted mb-4">Envie uma mensagem pelo WhatsApp e retornamos rapidamente com os pr\xF3ximos passos</p>\n            <a class="btn btn-success btn-lg w-100 mb-3" [href]="ctaHref" target="_blank" rel="noopener">\n              <i class="fab fa-whatsapp me-2"></i>{{ ctaLabel }}\n            </a>\n            <div class="trust-indicators">\n              <div class="d-flex flex-column gap-2 small text-muted">\n                <div class="d-flex align-items-center">\n                  <i class="fas fa-check-circle text-success me-2"></i>\n                  <span>Resposta em at\xE9 1 dia \xFAtil</span>\n                </div>\n                <div class="d-flex align-items-center">\n                  <i class="fas fa-check-circle text-success me-2"></i>\n                  <span>Diagn\xF3stico observacional</span>\n                </div>\n                <div class="d-flex align-items-center">\n                  <i class="fas fa-check-circle text-success me-2"></i>\n                  <span>Sem alterar produ\xE7\xE3o</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="dor">\n    <div class="container">\n      <div class="section-title">\n        <h2>O problema (dor consciente)</h2>\n        <p>Se o seu sistema apresenta algum desses sinais, o risco j\xE1 est\xE1 instalado.</p>\n      </div>\n      <div class="pill-grid">\n        <div class="pill" *ngFor="let pain of painPoints">\n          {{ pain }}\n        </div>\n      </div>\n      <div class="note warning">\n        <strong>\u{1F4C9} Escalar infraestrutura sem diagn\xF3stico aumenta custo e n\xE3o resolve a causa.</strong>\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="solucao">\n    <div class="container">\n      <div class="section-title">\n        <h2>Diagn\xF3stico de Performance & Infra</h2>\n        <p>Chamada gratuita de 30 min para enquadrar o cen\xE1rio. Diagn\xF3stico completo (pago) entrega plano priorizado com impacto t\xE9cnico e financeiro.</p>\n      </div>\n      <div class="card-grid">\n        <div class="card highlight">\n          <h3>Voc\xEA paga para saber onde agir</h3>\n          <p>Plano priorizado, com impacto t\xE9cnico e financeiro, sem alterar produ\xE7\xE3o nesta fase.</p>\n          <a class="btn btn-primary w-100" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>\n        </div>\n        <div class="card">\n          <h4>Entreg\xE1veis claros</h4>\n          <ul class="dash-list">\n            <li *ngFor="let deliverable of deliverables">{{ deliverable }}</li>\n          </ul>\n        </div>\n        <div class="card">\n          <h4>Como funciona</h4>\n          <ol class="step-list">\n            <li *ngFor="let step of steps">{{ step }}</li>\n          </ol>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="escopo">\n    <div class="container">\n      <div class="section-title">\n        <h2>O que \xE9 analisado</h2>\n        <p>Diagn\xF3stico completo sem tocar na produ\xE7\xE3o, protegendo seu ambiente.</p>\n      </div>\n      <div class="pill-grid soft">\n        <div class="pill" *ngFor="let item of scope">\n          {{ item }}\n        </div>\n      </div>\n      <div class="note neutral">\n        \u26A0\uFE0F Sem altera\xE7\xF5es diretas em produ\xE7\xE3o nesta fase \u2014 \xE9 diagn\xF3stico, n\xE3o execu\xE7\xE3o.\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="evita">\n    <div class="container">\n      <div class="section-title">\n        <h2>O que esse diagn\xF3stico evita</h2>\n        <p>Decidir com clareza custa menos do que corrigir uma crise.</p>\n      </div>\n      <ul class="checklist">\n        <li *ngFor="let item of avoids">{{ item }}</li>\n      </ul>\n    </div>\n  </section>\n\n  <section class="section" id="case">\n    <div class="container">\n      <div class="section-title">\n        <h2>Exemplo real</h2>\n        <p>Sistema hospitalar com lentid\xE3o crescente</p>\n      </div>\n      <div class="case-grid">\n        <div class="case-card">\n          <p class="eyebrow">Situa\xE7\xE3o</p>\n          <ul class="dash-list">\n            <li>Reclama\xE7\xF5es frequentes de usu\xE1rios</li>\n            <li>Infraestrutura pressionando por mais recursos</li>\n            <li>Risco operacional elevado</li>\n          </ul>\n        </div>\n        <div class="case-card">\n          <p class="eyebrow">Diagn\xF3stico</p>\n          <ul class="dash-list">\n            <li>Gargalos cr\xEDticos de banco e aplica\xE7\xE3o</li>\n            <li>Uso ineficiente de recursos</li>\n            <li>Aus\xEAncia de estrat\xE9gia de cache</li>\n          </ul>\n        </div>\n        <div class="case-card">\n          <p class="eyebrow">Resultado</p>\n          <ul class="dash-list">\n            <li>Plano claro de otimiza\xE7\xE3o</li>\n            <li>Estabilidade restaurada</li>\n            <li>Nenhum aumento de infraestrutura</li>\n          </ul>\n        </div>\n      </div>\n      <div class="note success">\n        \u{1F4CC} O diagn\xF3stico evitou custos maiores e riscos operacionais.\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="antes-depois">\n    <div class="container">\n      <div class="section-title">\n        <h2>M\xE9tricas antes e depois (exemplo anonimizado)</h2>\n        <p>Baseline, metas e valida\xE7\xE3o com SLI/SLO para cada componente.</p>\n      </div>\n      <div class="table-wrapper">\n        <table>\n          <thead>\n            <tr>\n              <th>M\xE9trica</th>\n              <th>Antes</th>\n              <th>Depois</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let metric of beforeAfterMetrics">\n              <td>{{ metric.metric }}</td>\n              <td>{{ metric.before }}</td>\n              <td>{{ metric.after }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="por-que-pago">\n    <div class="container">\n      <div class="section-title">\n        <h2>Por que o diagn\xF3stico \xE9 pago</h2>\n        <p>Clareza t\xE9cnica, redu\xE7\xE3o de risco e economia futura.</p>\n      </div>\n      <div class="card-grid two">\n        <div class="card">\n          <h4>Posicionamento de pre\xE7o</h4>\n          <ul class="dash-list">\n            <li>Diagn\xF3stico t\xE9cnico profissional</li>\n            <li>Escopo fechado e entreg\xE1vel documentado</li>\n            <li>Base para execu\xE7\xE3o futura</li>\n          </ul>\n        </div>\n        <div class="card">\n          <h4>Abatimento inteligente</h4>\n          <p>O valor do diagn\xF3stico pode ser abatido na execu\xE7\xE3o, caso avance para a fase de otimiza\xE7\xE3o.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="prova-social">\n    <div class="container">\n      <div class="section-title">\n        <h2>Prova social (mensur\xE1vel)</h2>\n        <p>Resultados validados em produ\xE7\xE3o, com SLO monitorados.</p>\n      </div>\n      <div class="card-grid two">\n        <div class="card" *ngFor="let testimonial of testimonials">\n          <blockquote class="quote">{{ testimonial.quote }}</blockquote>\n          <p class="eyebrow">{{ testimonial.author }}</p>\n          <p class="lede-sm">{{ testimonial.metric }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="para-quem">\n    <div class="container">\n      <div class="section-title">\n        <h2>Para quem \xE9</h2>\n        <p>Diagnosticamos onde h\xE1 risco e necessidade de previsibilidade.</p>\n      </div>\n      <div class="pill-grid">\n        <div class="pill" *ngFor="let audience of audiences">\n          {{ audience }}\n        </div>\n      </div>\n      <div class="note warning">\n        \u274C N\xE3o indicado para prot\xF3tipos ou projetos experimentais.\n      </div>\n    </div>\n  </section>\n\n  <section class="section" id="links-internos">\n    <div class="container">\n      <div class="section-title">\n        <h2>Pr\xF3ximos passos no cluster</h2>\n        <p>Conecte performance, resili\xEAncia e governan\xE7a.</p>\n      </div>\n      <div class="card-grid two blindagem-grid">\n        <div class="card highlight">\n          <h3>Blindagem de Performance & Infra</h3>\n          <p>Resili\xEAncia para sustentar picos e falhas. Execu\xE7\xE3o controlada das otimiza\xE7\xF5es priorizadas com testes de carga e rollback.</p>\n          <a class="btn btn-light" routerLink="/blindagem-performance-infra">Ver blindagem</a>\n        </div>\n        <div class="card">\n          <h3>Monitoramento & Governan\xE7a de Performance</h3>\n          <p>Observabilidade, SLI/SLO e FinOps cont\xEDnuo para que os ganhos n\xE3o se percam com o tempo.</p>\n          <a class="btn btn-light" routerLink="/monitoramento-governanca-performance">Ver governan\xE7a</a>\n        </div>\n      </div>\n      <div class="note neutral">\n        Use o mesmo CTA em todas as p\xE1ginas: <strong>{{ ctaLabel }}</strong>.\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="checklist">\n    <div class="container">\n      <div class="section-title">\n        <h2>Checklist de 12 pontos</h2>\n        <p>Diagn\xF3stico r\xE1pido de maturidade com a\xE7\xF5es recomendadas.</p>\n      </div>\n      <div class="lead-magnet">\n        <ul class="dash-list">\n          <li>SLI/SLO essenciais para app, infra e neg\xF3cio</li>\n          <li>Alertas e riscos priorit\xE1rios (P95/P99, erro rate, custo)</li>\n          <li>Passo a passo para estabilizar e reduzir custo</li>\n        </ul>\n        <div class="lead-magnet-actions">\n          <a class="btn btn-primary btn-lg" [href]="checklistHref" target="_blank" rel="noopener">Baixar checklist de 12 pontos</a>\n          <a class="btn btn-light btn-lg" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="section muted" id="faq">\n    <div class="container">\n      <div class="section-title">\n        <h2>Perguntas frequentes</h2>\n        <p>O que decisores costumam perguntar antes do diagn\xF3stico.</p>\n      </div>\n      <div class="faq-grid">\n        <div class="faq-item" *ngFor="let faq of faqs">\n          <h4>{{ faq.question }}</h4>\n          <p>{{ faq.answer }}</p>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class="cta">\n    <div class="container">\n      <h2>Quer performance previs\xEDvel com custo sob controle?</h2>\n      <p>Agende o diagn\xF3stico e receba um plano t\xE9cnico com SLO claros antes de investir mais em infraestrutura.</p>\n      <div class="cta-actions">\n        <a class="btn btn-primary btn-lg" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>\n        <a class="btn btn-light btn-lg" [href]="checklistHref" target="_blank" rel="noopener">Baixar checklist de 12 pontos</a>\n      </div>\n      <p class="cta-meta">Diagn\xF3stico t\xE9cnico que evita crise, reduz custo e traz previsibilidade para sistemas cr\xEDticos.</p>\n    </div>\n  </section>\n</div>\n\n<app-footer></app-footer>\n', styles: ['@charset "UTF-8";\n\n/* src/app/modules/performance-infra/performance-infra.component.scss */\n.page {\n  background: #0b0a0c;\n  color: #f5f5f5;\n}\n.container {\n  width: min(1100px, 90vw);\n  margin: 0 auto;\n}\n.breadcrumb-nav {\n  background: #0f0e12;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 10px 0;\n}\n.breadcrumb-nav .breadcrumb {\n  display: flex;\n  gap: 8px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #dcd7d7;\n  font-size: 14px;\n}\n.breadcrumb-nav .breadcrumb li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.breadcrumb-nav .breadcrumb li:not(:last-child)::after {\n  content: "/";\n  color: rgba(245, 245, 245, 0.6);\n}\n.breadcrumb-nav .breadcrumb li a {\n  color: #f5f5f5;\n  text-decoration: none;\n}\n.hero {\n  padding: 120px 0 90px;\n  background:\n    radial-gradient(\n      circle at 20% 20%,\n      rgba(255, 44, 87, 0.12),\n      transparent 35%),\n    radial-gradient(\n      circle at 80% 0%,\n      rgba(255, 255, 255, 0.08),\n      transparent 30%);\n}\n.hero .eyebrow {\n  color: var(--mainColor);\n  font-weight: 700;\n  letter-spacing: 0.4px;\n}\n.hero .hero-grid {\n  display: grid;\n  gap: 32px;\n  grid-template-columns: 1.6fr 1fr;\n  align-items: start;\n}\n.hero .hero-content {\n  display: grid;\n  gap: 16px;\n}\n.hero h1 {\n  font-size: clamp(30px, 5vw, 46px);\n  margin: 14px 0;\n  font-weight: 800;\n  line-height: 1.15;\n  color: #ffffff;\n}\n.hero .lede {\n  color: #e5e0e0;\n  font-size: 18px;\n  line-height: 1.6;\n  max-width: 820px;\n}\n.hero .hero-actions {\n  margin-top: 22px;\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.hero .hero-links {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  margin: 10px 0 4px;\n}\n.hero .hero-links a {\n  color: #ffc2d0;\n  font-weight: 700;\n  text-decoration: none;\n}\n.hero .hero-links a:hover {\n  text-decoration: underline;\n}\n.hero .hero-meta {\n  color: rgba(245, 245, 245, 0.8);\n  font-size: 14px;\n}\n.hero .trust {\n  background: rgba(19, 18, 23, 0.8);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 14px 16px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);\n}\n.hero .trust-label {\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-size: 12px;\n  color: #c8c3c3;\n  margin: 0 0 8px;\n}\n.hero .logo-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.hero .logo-row img {\n  max-height: 28px;\n  filter: grayscale(100%) brightness(1.1);\n  opacity: 0.9;\n}\n.hero .quote {\n  margin: 0;\n  color: #ffffff;\n  font-weight: 600;\n  line-height: 1.5;\n  border-left: 3px solid #ff2c57;\n  padding-left: 12px;\n}\n.hero .quote span {\n  display: block;\n  margin-top: 6px;\n  color: #c8c3c3;\n  font-weight: 500;\n  font-size: 14px;\n}\n.hero .lead-card {\n  background: #0f0e12;\n  border: 1px solid rgba(255, 255, 255, 0.14);\n  border-radius: 16px;\n  padding: 20px;\n  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);\n  position: relative;\n  top: 12px;\n  color: #fdfdfd;\n}\n.hero .lead-card h3 {\n  margin: 0 0 6px;\n  font-size: 22px;\n  font-weight: 700;\n  color: #ffffff;\n}\n.hero .lead-card .lead-copy {\n  margin: 0 0 14px;\n  color: #f0f0f0;\n  line-height: 1.5;\n}\n.hero .lead-form {\n  display: grid;\n  gap: 12px;\n}\n.hero .lead-form label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  font-weight: 600;\n  color: #f5f5f5;\n  font-size: 14px;\n}\n.hero .lead-form input,\n.hero .lead-form textarea {\n  background: #0b0a0c;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 10px;\n  padding: 12px 12px;\n  color: #f5f5f5;\n  font-size: 15px;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.hero .lead-form input:focus,\n.hero .lead-form textarea:focus {\n  outline: none;\n  border-color: #ff2c57;\n  box-shadow: 0 0 0 3px rgba(255, 44, 87, 0.18);\n}\n.hero .lead-form textarea {\n  resize: vertical;\n  min-height: 90px;\n}\n.hero .lead-form button {\n  width: 100%;\n  margin-top: 4px;\n}\n.hero .form-meta {\n  margin: 8px 0 0;\n  color: #e6e6e6;\n  font-size: 13px;\n}\n.hero .lead-card span {\n  color: #f5f5f5;\n}\n.hero .lead-card .text-muted {\n  color: #ededed !important;\n}\n.hero .lead-card h4 {\n  color: #ffffff;\n  font-weight: 700;\n}\n.section {\n  padding: 90px 0;\n  background: #0b0a0c;\n}\n.section.muted {\n  background: #111013;\n}\n.section-title {\n  margin-bottom: 26px;\n}\n.section-title h2 {\n  font-size: clamp(24px, 3.5vw, 36px);\n  font-weight: 700;\n  margin: 0 0 8px;\n  color: #f5f5f5;\n}\n.section-title p {\n  color: #dcd7d7;\n  margin: 0;\n  font-size: 16px;\n}\n.blindagem-grid .timeline {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 10px;\n  padding: 10px;\n  background: #0f0e12;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  margin: 10px 0;\n}\n.blindagem-grid .timeline p {\n  margin: 0 0 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  font-size: 12px;\n  color: #c8c3c3;\n}\n.blindagem-grid .timeline strong {\n  color: #f5f5f5;\n  font-weight: 700;\n}\n.emphasis {\n  font-weight: 700;\n}\n.cta-hint {\n  margin: 8px 0 0;\n  color: rgba(245, 245, 245, 0.75);\n  font-size: 13px;\n}\n.blindagem-steps .note.inline,\n.blindagem-steps .note.success.inline {\n  margin-top: 14px;\n}\n.pill-grid {\n  display: grid;\n  gap: 12px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.pill-grid.soft .pill {\n  background: #151419;\n}\n.pill {\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  background: #131217;\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-weight: 600;\n  color: #f5f5f5;\n  line-height: 1.5;\n}\n.note {\n  margin-top: 16px;\n  padding: 14px 16px;\n  border-radius: 12px;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.note.warning {\n  background: rgba(255, 44, 87, 0.08);\n  border: 1px solid rgba(255, 44, 87, 0.25);\n}\n.note.neutral {\n  background: #16151b;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  color: #dcd7d7;\n}\n.note.success {\n  background: rgba(24, 201, 100, 0.12);\n  border: 1px solid rgba(24, 201, 100, 0.3);\n}\n.card-grid {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.card-grid.two {\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n}\n.card {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 12px;\n  height: 100%;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\n.card h3,\n.card h4 {\n  margin: 0;\n  font-weight: 700;\n  color: #f5f5f5;\n}\n.card p {\n  margin: 0;\n  color: #dcd7d7;\n}\n.card.highlight {\n  background:\n    linear-gradient(\n      135deg,\n      #1d1a22,\n      #211018);\n  border-color: rgba(255, 44, 87, 0.35);\n}\n.dash-list {\n  display: grid;\n  gap: 8px;\n  padding-left: 0;\n  margin: 0;\n}\n.dash-list li {\n  list-style: none;\n  position: relative;\n  padding-left: 14px;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.dash-list li::before {\n  content: "\\2014";\n  position: absolute;\n  left: 0;\n  color: var(--mainColor);\n  font-weight: 700;\n}\n.step-list {\n  padding-left: 18px;\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.step-list li {\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.checklist {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n  margin: 0;\n}\n.checklist li {\n  padding-left: 26px;\n  position: relative;\n  font-weight: 600;\n  color: #f5f5f5;\n}\n.checklist li::before {\n  content: "\\2714";\n  position: absolute;\n  left: 0;\n  color: #18c964;\n  font-weight: 800;\n}\n.case-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n.case-card {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 16px;\n}\n.case-card .eyebrow {\n  color: #c8c3c3;\n  text-transform: uppercase;\n  font-size: 12px;\n  letter-spacing: 0.4px;\n  margin: 0 0 10px;\n}\n.table-wrapper {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 16px;\n  overflow-x: auto;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  color: #f5f5f5;\n}\ntable th,\ntable td {\n  padding: 12px 10px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  text-align: left;\n}\ntable th {\n  color: #c8c3c3;\n  font-weight: 700;\n}\ntable tr:last-child td {\n  border-bottom: none;\n}\n.lead-magnet {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 18px;\n  display: grid;\n  gap: 14px;\n  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);\n}\n.lead-magnet-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.cta {\n  padding: 90px 0 110px;\n  background:\n    linear-gradient(\n      120deg,\n      #0f0d0e,\n      #361525);\n  text-align: center;\n  color: #ffffff;\n}\n.cta h2 {\n  font-size: clamp(26px, 3.5vw, 36px);\n  font-weight: 800;\n  margin-bottom: 10px;\n}\n.cta p {\n  margin: 0 auto 18px;\n  max-width: 700px;\n  color: #f5f5f5;\n  line-height: 1.6;\n}\n.cta .cta-actions {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 12px;\n}\n.cta .cta-meta {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n}\n.faq-grid {\n  display: grid;\n  gap: 16px;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n}\n.faq-item {\n  background: #131217;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);\n}\n.faq-item h4 {\n  margin: 0 0 8px;\n  color: #f5f5f5;\n  font-weight: 700;\n}\n.faq-item p {\n  margin: 0;\n  color: #dcd7d7;\n  line-height: 1.6;\n}\n.page .btn-primary {\n  background-color: #ff2c57;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n  font-weight: 700;\n}\n.page .btn-primary:hover,\n.page .btn-primary:focus {\n  background-color: #ffc2d0;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 100px 0 70px;\n  }\n  .hero .hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero .lead-card {\n    top: 0;\n  }\n  .section {\n    padding: 70px 0;\n  }\n}\n/*# sourceMappingURL=performance-infra.component.css.map */\n'] }]
  }], () => [{ type: Title }, { type: Meta }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerformanceInfraComponent, { className: "PerformanceInfraComponent", filePath: "src/app/modules/performance-infra/performance-infra.component.ts", lineNumber: 11 });
})();

// src/app/modules/performance-infra/diagnostico-performance.component.ts
function DiagnosticoPerformanceComponent_div_29_div_6_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 30)(1, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function DiagnosticoPerformanceComponent_div_29_div_6_label_6_Template_input_ngModelChange_1_listener($event) {
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
function DiagnosticoPerformanceComponent_div_29_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "p", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 28);
    \u0275\u0275template(6, DiagnosticoPerformanceComponent_div_29_div_6_label_6_Template, 4, 6, "label", 29);
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
function DiagnosticoPerformanceComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, DiagnosticoPerformanceComponent_div_29_div_6_Template, 7, 3, "div", 24);
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
function DiagnosticoPerformanceComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33);
    \u0275\u0275text(1, " Responda todas as perguntas para ver o resultado ");
    \u0275\u0275elementEnd();
  }
}
function DiagnosticoPerformanceComponent_section_34_Template(rf, ctx) {
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
    \u0275\u0275text(13, "Recomendacao:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 44)(17, "a", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 46);
    \u0275\u0275listener("click", function DiagnosticoPerformanceComponent_section_34_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetForm());
    });
    \u0275\u0275text(20, " Refazer diagnostico ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 47)(22, "blockquote");
    \u0275\u0275text(23, ' "Performance previsivel custa menos que apagar incendio em producao." ');
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
    \u0275\u0275property("href", "https://wa.me/?text=Fiz%20o%20diagnostico%20de%20performance%20de%20infra%20da%20VICS%20e%20minha%20pontuacao%20foi%20" + ctx_r3.totalScore + "%20de%2040.%20Faca%20o%20seu%3A%20https%3A%2F%2Fwww.vics.dev.br%2Fperformance-infra%2Fdiagnostico", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.vics.dev.br%2Fperformance-infra%2Fdiagnostico", \u0275\u0275sanitizeUrl);
  }
}
var DiagnosticoPerformanceComponent = class _DiagnosticoPerformanceComponent {
  constructor(title, meta, platformId, document) {
    this.title = title;
    this.meta = meta;
    this.platformId = platformId;
    this.document = document;
    this.ctaWhatsApp = "https://wa.me/5531975474785?text=Quero%20entender%20o%20estado%20da%20minha%20infra%20e%20performance%20%2D%20vi%20o%20diagn%C3%B3stico%20no%20site";
    this.checklistHref = "/assets/checklist-12-pontos.pdf";
    this.blocks = [
      { id: "A", title: "Sintomas em produ\xE7\xE3o", icon: "\u{1F6A8}" },
      { id: "B", title: "Observabilidade e SLO", icon: "\u{1F4CA}" },
      { id: "C", title: "Arquitetura e gargalos", icon: "\u{1F9ED}" },
      { id: "D", title: "Custos e previsibilidade", icon: "\u{1F4B0}" }
    ];
    this.questions = [
      // BLOCO A — Sintomas em produção
      { id: 1, block: "A", text: "Incidentes ou lentid\xE3o em hor\xE1rios cr\xEDticos se repetem?", answer: null },
      { id: 2, block: "A", text: "Usu\xE1rios relatam demora em etapas-chave (checkout, autentica\xE7\xE3o, consultas)?", answer: null },
      { id: 3, block: "A", text: "H\xE1 picos de fila ou timeout em integra\xE7\xF5es externas?", answer: null },
      { id: 4, block: "A", text: "A equipe passa mais tempo apagando inc\xEAndio do que evoluindo o produto?", answer: null },
      { id: 5, block: "A", text: "Deploys s\xE3o evitados por medo de derrubar a performance?", answer: null },
      // BLOCO B — Observabilidade e SLO
      { id: 6, block: "B", text: "Voc\xEA mede lat\xEAncia P95/P99, erro rate e throughput por rota/servi\xE7o?", answer: null },
      { id: 7, block: "B", text: "Alertas s\xE3o acion\xE1veis ou voc\xEA descobre problemas por reclama\xE7\xE3o de usu\xE1rio?", answer: null },
      { id: 8, block: "B", text: "Tem logs distribu\xEDdos/tracing para seguir a jornada de uma requisi\xE7\xE3o?", answer: null },
      { id: 9, block: "B", text: "Existem baselines claros para hor\xE1rio de pico ou datas cr\xEDticas?", answer: null },
      { id: 10, block: "B", text: "SLO/SLI est\xE3o acordados com o neg\xF3cio e revisados periodicamente?", answer: null },
      // BLOCO C — Arquitetura e gargalos
      { id: 11, block: "C", text: "Queries ou jobs viram gargalo mesmo ap\xF3s aumentar recursos?", answer: null },
      { id: 12, block: "C", text: "Caches, filas ou bancos s\xE3o usados sem estrat\xE9gia clara de validade e carga?", answer: null },
      { id: 13, block: "C", text: "Autoescalonamento aumenta custo sem resolver a lentid\xE3o?", answer: null },
      { id: 14, block: "C", text: "Depend\xEAncias externas geram backpressure sem circuit breaker ou prote\xE7\xE3o?", answer: null },
      { id: 15, block: "C", text: "Voc\xEA conhece a capacidade atual e o ponto de satura\xE7\xE3o antes da degrada\xE7\xE3o?", answer: null },
      // BLOCO D — Custos e previsibilidade
      { id: 16, block: "D", text: "O custo de cloud/infra subiu nos \xFAltimos meses sem redu\xE7\xE3o de lat\xEAncia?", answer: null },
      { id: 17, block: "D", text: "Existe um plano claro de capacity planning para os pr\xF3ximos 3-6 meses?", answer: null },
      { id: 18, block: "D", text: "Voc\xEA n\xE3o realiza testes de carga/estresse antes de datas ou campanhas cr\xEDticas?", answer: null },
      { id: 19, block: "D", text: "Neg\xF3cio e produto t\xEAm visibilidade do risco de performance em roadmap?", answer: null },
      { id: 20, block: "D", text: "Investimentos em infraestrutura s\xE3o decididos mais por feeling do que por dados?", answer: null }
    ];
    this.answerOptions = [
      { value: 2, label: "Sim" },
      { value: 1, label: "\xC0s vezes" },
      { value: 0, label: "N\xE3o" }
    ];
    this.results = [
      {
        range: "0-10",
        title: "Sa\xFAde sob controle",
        color: "green",
        message: "Voc\xEA tem sinais de controle de performance. Mantenha a higiene de monitoramento e refine checklists para prevenir regress\xF5es.",
        product: "Checklist de 12 pontos + revis\xE3o pontual",
        cta: "Baixar checklist gratuito",
        ctaLink: this.checklistHref
      },
      {
        range: "11-20",
        title: "Melhorias t\xE1ticas recomendadas",
        color: "yellow",
        message: "Existem brechas de observabilidade ou gargalos localizados. Ajustes t\xE1ticos e um mini review de infraestrutura trazem ganhos r\xE1pidos.",
        product: "Revis\xE3o expressa de performance",
        cta: "Agendar revis\xE3o de 30 min",
        ctaLink: this.ctaWhatsApp
      },
      {
        range: "21-30",
        title: "Diagn\xF3stico completo necess\xE1rio",
        color: "orange",
        message: "Voc\xEA j\xE1 sente impacto em usu\xE1rios ou custos. O diagn\xF3stico completo prioriza gargalos, define SLO e indica o plano com melhor rela\xE7\xE3o ganho/custo.",
        product: "Diagn\xF3stico de Performance & Infra",
        cta: "Agendar diagn\xF3stico completo",
        ctaLink: this.ctaWhatsApp
      },
      {
        range: "31-40",
        title: "Risco alto de degrada\xE7\xE3o",
        color: "red",
        message: "Incidentes, falta de SLO e custos crescentes indicam risco real para o neg\xF3cio. Precisa de diagn\xF3stico urgente e blindagem inicial para estabilizar.",
        product: "Diagn\xF3stico + Blindagem sob press\xE3o",
        cta: "Falar agora com especialista",
        ctaLink: this.ctaWhatsApp
      }
    ];
    this.showResult = false;
    this.totalScore = 0;
    this.currentResult = null;
  }
  ngOnInit() {
    this.title.setTitle("Diagn\xF3stico: Performance de Infraestrutura \u2014 VICS");
    this.meta.updateTag({
      name: "description",
      content: "Descubra em 3 minutos se sua opera\xE7\xE3o precisa de um diagn\xF3stico de performance e infraestrutura. 20 perguntas com resultado imediato."
    });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({
      property: "og:title",
      content: "Diagn\xF3stico: Performance de Infraestrutura \u2014 VICS"
    });
    this.meta.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/performance-infra/diagnostico"
    });
    if (isPlatformBrowser(this.platformId)) {
      this.appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: "Diagn\xF3stico de Performance de Infraestrutura",
        description: "Veja se sua empresa precisa de um diagn\xF3stico t\xE9cnico de performance agora",
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
    this.\u0275fac = function DiagnosticoPerformanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DiagnosticoPerformanceComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DiagnosticoPerformanceComponent, selectors: [["app-performance-diagnostico"]], standalone: false, decls: 36, vars: 9, consts: [[3, "minimalNav"], [1, "page"], [1, "breadcrumb-nav"], [1, "container"], [1, "breadcrumb"], ["routerLink", "/"], ["routerLink", "/performance-infra"], ["aria-current", "page"], [1, "hero"], [1, "eyebrow"], [1, "lede"], [1, "progress-info"], [1, "progress-bar"], [1, "progress-fill"], [1, "section", "form-section"], [3, "ngSubmit"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "submit-section"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "submit-hint", 4, "ngIf"], ["class", "section result-section", "id", "resultado", 4, "ngIf"], [1, "block"], [1, "block-header"], [1, "block-icon"], ["class", "question-card", 4, "ngFor", "ngForOf"], [1, "question-card"], [1, "question-number"], [1, "question-text"], [1, "answer-options"], ["class", "answer-option", 3, "selected", 4, "ngFor", "ngForOf"], [1, "answer-option"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel"], [1, "option-label"], [1, "submit-hint"], ["id", "resultado", 1, "section", "result-section"], [1, "result-card"], [1, "result-header"], [1, "result-range"], [1, "result-title"], [1, "result-body"], [1, "result-message"], [1, "result-product"], [1, "product-label"], [1, "product-name"], [1, "result-actions"], ["rel", "noopener", 1, "btn", "btn-primary", "btn-lg", 3, "href", "target"], ["type", "button", 1, "btn", "btn-light", "btn-lg", 3, "click"], [1, "result-footer"], [1, "share-section"], [1, "share-buttons"], ["target", "_blank", "rel", "noopener", 1, "share-btn", "whatsapp", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "share-btn", "linkedin", 3, "href"]], template: function DiagnosticoPerformanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar", 0);
        \u0275\u0275elementStart(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "ol", 4)(5, "li")(6, "a", 5);
        \u0275\u0275text(7, "Inicio");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li")(9, "a", 6);
        \u0275\u0275text(10, "Performance de Infra");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li", 7);
        \u0275\u0275text(12, "Diagnostico");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "section", 8)(14, "div", 3)(15, "p", 9);
        \u0275\u0275text(16, "Diagnostico gratuito");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "h1");
        \u0275\u0275text(18, "Qual o risco de performance da sua infraestrutura?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "p", 10);
        \u0275\u0275text(20, "Responda 20 perguntas r\xE1pidas e descubra se voc\xEA precisa do diagn\xF3stico t\xE9cnico agora ou se ajustes t\xE1ticos resolvem. Resultado imediato.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "span");
        \u0275\u0275text(23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 12);
        \u0275\u0275element(25, "div", 13);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(26, "section", 14)(27, "div", 3)(28, "form", 15);
        \u0275\u0275listener("ngSubmit", function DiagnosticoPerformanceComponent_Template_form_ngSubmit_28_listener() {
          return ctx.calculateResult();
        });
        \u0275\u0275template(29, DiagnosticoPerformanceComponent_div_29_Template, 7, 4, "div", 16);
        \u0275\u0275elementStart(30, "div", 17)(31, "button", 18);
        \u0275\u0275text(32, " Ver meu resultado ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(33, DiagnosticoPerformanceComponent_p_33_Template, 2, 0, "p", 19);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(34, DiagnosticoPerformanceComponent_section_34_Template, 32, 11, "section", 20);
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
  background: #071013;
  color: #ecf4f8;
  min-height: 100vh;
}
.container[_ngcontent-%COMP%] {
  width: min(900px, 90vw);
  margin: 0 auto;
}
.breadcrumb-nav[_ngcontent-%COMP%] {
  background: #0b161a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 0;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #c8d7de;
  font-size: 14px;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 8px;
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child)::after {
  content: "/";
  color: rgba(236, 244, 248, 0.6);
}
.breadcrumb-nav[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #ecf4f8;
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
      rgba(34, 211, 238, 0.18),
      transparent 50%),
    radial-gradient(
      circle at 80% 10%,
      rgba(52, 211, 153, 0.1),
      transparent 35%);
}
.hero[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {
  color: #22d3ee;
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
  color: #d5e7ee;
  font-size: 18px;
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto 24px;
}
.progress-info[_ngcontent-%COMP%] {
  max-width: 400px;
  margin: 0 auto;
}
.progress-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {
  display: block;
  font-size: 14px;
  color: #99afb8;
  margin-bottom: 8px;
}
.progress-bar[_ngcontent-%COMP%] {
  height: 8px;
  background: #102027;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill[_ngcontent-%COMP%] {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #22d3ee,
      #34d399);
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
  background: #0b161a;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
  background: #0f1c21;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}
.question-card[_ngcontent-%COMP%]:hover {
  border-color: rgba(52, 211, 153, 0.35);
}
.question-number[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  color: #22d3ee;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}
.question-text[_ngcontent-%COMP%] {
  font-size: 16px;
  line-height: 1.5;
  color: #ecf4f8;
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
  background: #12252d;
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #c8d7de;
  transition: all 0.2s ease;
}
.answer-option[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%]:hover {
  border-color: rgba(34, 211, 238, 0.5);
  background: #152c36;
}
.answer-option.selected[_ngcontent-%COMP%]   .option-label[_ngcontent-%COMP%] {
  background: rgba(52, 211, 153, 0.14);
  border-color: #34d399;
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
  color: #99afb8;
}
.result-card[_ngcontent-%COMP%] {
  background: #0f1c21;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}
.result-card.result-green[_ngcontent-%COMP%] {
  border-top: 4px solid #34d399;
}
.result-card.result-green[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #34d399;
}
.result-card.result-yellow[_ngcontent-%COMP%] {
  border-top: 4px solid #eab308;
}
.result-card.result-yellow[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #eab308;
}
.result-card.result-orange[_ngcontent-%COMP%] {
  border-top: 4px solid #fb923c;
}
.result-card.result-orange[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #fb923c;
}
.result-card.result-red[_ngcontent-%COMP%] {
  border-top: 4px solid #f43f5e;
}
.result-card.result-red[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {
  color: #f43f5e;
}
.result-header[_ngcontent-%COMP%] {
  padding: 30px 30px 20px;
  text-align: center;
}
.result-header[_ngcontent-%COMP%]   .result-range[_ngcontent-%COMP%] {
  font-size: 14px;
  color: #99afb8;
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
  color: #d5e7ee;
  text-align: center;
  margin: 0 0 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
}
.result-product[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 30px;
}
.result-product[_ngcontent-%COMP%]   .product-label[_ngcontent-%COMP%] {
  font-size: 12px;
  font-weight: 700;
  color: #22d3ee;
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
  color: #99afb8;
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
  color: #99afb8;
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
  background-color: #22d3ee;
  border-color: #22d3ee;
  color: #071013;
  font-weight: 700;
}
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover, 
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:focus {
  background-color: #34d399;
  border-color: #34d399;
  color: #071013;
}
.page[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:disabled {
  background-color: #4b5c66;
  border-color: #4b5c66;
  color: #9fb4bf;
  cursor: not-allowed;
}
.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #ecf4f8;
  font-weight: 600;
}
.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:hover, 
.page[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%]:focus {
  background-color: rgba(255, 255, 255, 0.08);
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
/*# sourceMappingURL=diagnostico-performance.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DiagnosticoPerformanceComponent, [{
    type: Component,
    args: [{ selector: "app-performance-diagnostico", standalone: false, template: `<app-navbar [minimalNav]="true"></app-navbar>

<div class="page">
  <nav class="breadcrumb-nav">
    <div class="container">
      <ol class="breadcrumb">
        <li><a routerLink="/">Inicio</a></li>
        <li><a routerLink="/performance-infra">Performance de Infra</a></li>
        <li aria-current="page">Diagnostico</li>
      </ol>
    </div>
  </nav>

  <section class="hero">
    <div class="container">
      <p class="eyebrow">Diagnostico gratuito</p>
      <h1>Qual o risco de performance da sua infraestrutura?</h1>
      <p class="lede">Responda 20 perguntas r\xE1pidas e descubra se voc\xEA precisa do diagn\xF3stico t\xE9cnico agora ou se ajustes t\xE1ticos resolvem. Resultado imediato.</p>
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
            <p class="product-label">Recomendacao:</p>
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
            "Performance previsivel custa menos que apagar incendio em producao."
          </blockquote>
        </div>
      </div>

      <div class="share-section">
        <p>Compartilhe seu resultado:</p>
        <div class="share-buttons">
          <a
            [href]="'https://wa.me/?text=Fiz%20o%20diagnostico%20de%20performance%20de%20infra%20da%20VICS%20e%20minha%20pontuacao%20foi%20' + totalScore + '%20de%2040.%20Faca%20o%20seu%3A%20https%3A%2F%2Fwww.vics.dev.br%2Fperformance-infra%2Fdiagnostico'"
            target="_blank"
            rel="noopener"
            class="share-btn whatsapp"
          >
            WhatsApp
          </a>
          <a
            [href]="'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.vics.dev.br%2Fperformance-infra%2Fdiagnostico'"
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
`, styles: [`/* src/app/modules/performance-infra/diagnostico-performance.component.scss */
.page {
  background: #071013;
  color: #ecf4f8;
  min-height: 100vh;
}
.container {
  width: min(900px, 90vw);
  margin: 0 auto;
}
.breadcrumb-nav {
  background: #0b161a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 0;
}
.breadcrumb-nav .breadcrumb {
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #c8d7de;
  font-size: 14px;
}
.breadcrumb-nav .breadcrumb li {
  display: flex;
  align-items: center;
  gap: 8px;
}
.breadcrumb-nav .breadcrumb li:not(:last-child)::after {
  content: "/";
  color: rgba(236, 244, 248, 0.6);
}
.breadcrumb-nav .breadcrumb li a {
  color: #ecf4f8;
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
      rgba(34, 211, 238, 0.18),
      transparent 50%),
    radial-gradient(
      circle at 80% 10%,
      rgba(52, 211, 153, 0.1),
      transparent 35%);
}
.hero .eyebrow {
  color: #22d3ee;
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
  color: #d5e7ee;
  font-size: 18px;
  line-height: 1.6;
  max-width: 640px;
  margin: 0 auto 24px;
}
.progress-info {
  max-width: 400px;
  margin: 0 auto;
}
.progress-info span {
  display: block;
  font-size: 14px;
  color: #99afb8;
  margin-bottom: 8px;
}
.progress-bar {
  height: 8px;
  background: #102027;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background:
    linear-gradient(
      90deg,
      #22d3ee,
      #34d399);
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
  background: #0b161a;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
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
  background: #0f1c21;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
}
.question-card:hover {
  border-color: rgba(52, 211, 153, 0.35);
}
.question-number {
  font-size: 12px;
  font-weight: 700;
  color: #22d3ee;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 8px;
}
.question-text {
  font-size: 16px;
  line-height: 1.5;
  color: #ecf4f8;
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
  background: #12252d;
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  color: #c8d7de;
  transition: all 0.2s ease;
}
.answer-option .option-label:hover {
  border-color: rgba(34, 211, 238, 0.5);
  background: #152c36;
}
.answer-option.selected .option-label {
  background: rgba(52, 211, 153, 0.14);
  border-color: #34d399;
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
  color: #99afb8;
}
.result-card {
  background: #0f1c21;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
}
.result-card.result-green {
  border-top: 4px solid #34d399;
}
.result-card.result-green .result-title {
  color: #34d399;
}
.result-card.result-yellow {
  border-top: 4px solid #eab308;
}
.result-card.result-yellow .result-title {
  color: #eab308;
}
.result-card.result-orange {
  border-top: 4px solid #fb923c;
}
.result-card.result-orange .result-title {
  color: #fb923c;
}
.result-card.result-red {
  border-top: 4px solid #f43f5e;
}
.result-card.result-red .result-title {
  color: #f43f5e;
}
.result-header {
  padding: 30px 30px 20px;
  text-align: center;
}
.result-header .result-range {
  font-size: 14px;
  color: #99afb8;
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
  color: #d5e7ee;
  text-align: center;
  margin: 0 0 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
}
.result-product {
  text-align: center;
  margin-bottom: 30px;
}
.result-product .product-label {
  font-size: 12px;
  font-weight: 700;
  color: #22d3ee;
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
  color: #99afb8;
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
  color: #99afb8;
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
  background-color: #22d3ee;
  border-color: #22d3ee;
  color: #071013;
  font-weight: 700;
}
.page .btn-primary:hover,
.page .btn-primary:focus {
  background-color: #34d399;
  border-color: #34d399;
  color: #071013;
}
.page .btn-primary:disabled {
  background-color: #4b5c66;
  border-color: #4b5c66;
  color: #9fb4bf;
  cursor: not-allowed;
}
.page .btn-light {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.2);
  color: #ecf4f8;
  font-weight: 600;
}
.page .btn-light:hover,
.page .btn-light:focus {
  background-color: rgba(255, 255, 255, 0.08);
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
/*# sourceMappingURL=diagnostico-performance.component.css.map */
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DiagnosticoPerformanceComponent, { className: "DiagnosticoPerformanceComponent", filePath: "src/app/modules/performance-infra/diagnostico-performance.component.ts", lineNumber: 28 });
})();

// src/app/modules/performance-infra/performance-infra.routing.ts
var PerformanceInfraRoutes = [
  {
    path: "",
    component: PerformanceInfraComponent
  },
  {
    path: "diagnostico",
    component: DiagnosticoPerformanceComponent
  }
];

// src/app/modules/performance-infra/performance-infra.module.ts
var PerformanceInfraModule = class _PerformanceInfraModule {
  static {
    this.\u0275fac = function PerformanceInfraModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PerformanceInfraModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PerformanceInfraModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [SharedModule, RouterModule.forChild(PerformanceInfraRoutes)] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerformanceInfraModule, [{
    type: NgModule,
    args: [{
      declarations: [PerformanceInfraComponent, DiagnosticoPerformanceComponent],
      imports: [SharedModule, RouterModule.forChild(PerformanceInfraRoutes)]
    }]
  }], null, null);
})();
export {
  PerformanceInfraModule
};
//# sourceMappingURL=performance-infra.module-XNUBIPHM.js.map
