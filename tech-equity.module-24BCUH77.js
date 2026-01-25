import {
  CommonModule,
  Component,
  DOCUMENT,
  Inject,
  Meta,
  NgModule,
  PLATFORM_ID,
  RouterModule,
  Title,
  isPlatformBrowser,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-U2PEDCZ4.js";

// src/app/modules/tech-equity/tech-equity.component.ts
var TechEquityComponent = class _TechEquityComponent {
  constructor(titleService, metaService, platformId, document) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.platformId = platformId;
    this.document = document;
  }
  ngOnInit() {
    this.titleService.setTitle("Tech for Equity - Seu Cofundador T\xE9cnico | VICS");
    this.metaService.updateTag({
      name: "description",
      content: "Transforme sua ideia em um neg\xF3cio digital. A VICS entra como cofundador t\xE9cnico desenvolvendo seu MVP em troca de participa\xE7\xE3o societ\xE1ria."
    });
    this.metaService.updateTag({
      name: "keywords",
      content: "tech for equity, cofundador t\xE9cnico, MVP, startup, desenvolvimento de software, parceria tecnol\xF3gica, VICS"
    });
    this.metaService.updateTag({
      name: "author",
      content: "VICS - Vis\xE3o Inteligente para o Caminho do Sucesso"
    });
    this.metaService.updateTag({
      property: "og:title",
      content: "Tech for Equity - Transforme sua ideia em neg\xF3cio digital | VICS"
    });
    this.metaService.updateTag({
      property: "og:description",
      content: "A VICS entra como seu cofundador t\xE9cnico, desenvolvendo o MVP e acompanhando at\xE9 o projeto ganhar tra\xE7\xE3o. Parceria com at\xE9 30% de participa\xE7\xE3o."
    });
    this.metaService.updateTag({
      property: "og:image",
      content: "https://www.vics.dev.br/assets/images/tech-equity-og.jpg"
    });
    this.metaService.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/tech-equity"
    });
    this.metaService.updateTag({
      property: "og:type",
      content: "website"
    });
    this.metaService.updateTag({
      property: "og:locale",
      content: "pt_BR"
    });
    this.metaService.updateTag({
      name: "twitter:card",
      content: "summary_large_image"
    });
    this.metaService.updateTag({
      name: "twitter:title",
      content: "Tech for Equity - Seu Cofundador T\xE9cnico | VICS"
    });
    this.metaService.updateTag({
      name: "twitter:description",
      content: "Transforme sua ideia em neg\xF3cio digital com a VICS como cofundador t\xE9cnico."
    });
    this.metaService.updateTag({
      name: "twitter:image",
      content: "https://www.vics.dev.br/assets/images/tech-equity-og.jpg"
    });
    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", "https://www.vics.dev.br/tech-equity");
      this.document.head.appendChild(link);
      const script = this.document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tech for Equity - Parceria Tecnol\xF3gica",
        "provider": {
          "@type": "Organization",
          "name": "VICS",
          "url": "https://www.vics.dev.br",
          "logo": "https://www.vics.dev.br/assets/images/logo.png",
          "telephone": "+55-31-97547-4785",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Uberl\xE2ndia",
            "addressRegion": "MG",
            "addressCountry": "BR"
          }
        },
        "description": "Programa de parceria tecnol\xF3gica onde a VICS atua como cofundador t\xE9cnico, desenvolvendo MVPs em troca de participa\xE7\xE3o societ\xE1ria de at\xE9 30%.",
        "areaServed": {
          "@type": "Country",
          "name": "Brasil"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servi\xE7os Tech for Equity",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Desenvolvimento de MVP",
                "description": "MVP funcional com design e tecnologia de ponta"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Suporte T\xE9cnico",
                "description": "Acompanhamento at\xE9 os primeiros R$100 mil em faturamento"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Orienta\xE7\xE3o Estrat\xE9gica",
                "description": "Mentoria e acompanhamento do crescimento"
              }
            }
          ]
        }
      });
      this.document.head.appendChild(script);
    }
  }
  scrollToForm() {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById("contact-form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
  static {
    this.\u0275fac = function TechEquityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TechEquityComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechEquityComponent, selectors: [["app-tech-equity"]], standalone: false, decls: 578, vars: 0, consts: [[1, "hero-section", "tech-equity-hero"], [1, "container"], [1, "row", "align-items-center", "min-vh-100"], [1, "col-lg-7"], ["data-aos", "fade-up", 1, "display-3", "fw-bold", "mb-3"], [1, "text-gradient"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead", "fs-4", "mb-4"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "d-flex", "flex-column", "flex-sm-row", "gap-3", "mb-5"], ["href", "https://wa.me/5531975474785?text=Quero%20transformar%20minha%20ideia%20em%20neg\xF3cio%20digital!", "target", "_blank", "onclick", "gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_equity_hero'});", 1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow-lg"], [1, "fab", "fa-whatsapp", "me-2"], [1, "btn", "btn-outline-primary", "btn-lg", "px-5", "py-3", 3, "click"], [1, "fas", "fa-arrow-down", "ms-2"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "trust-indicators"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-4", "text-muted"], [1, "d-flex", "align-items-center"], [1, "fas", "fa-check-circle", "text-success", "me-2"], [1, "col-lg-5"], ["data-aos", "zoom-in", "data-aos-delay", "200", 1, "hero-visual", "position-relative"], ["src", "assets/images/tech-equity-hero.svg", "alt", "MVP em 90 dias", "loading", "lazy", 1, "img-fluid"], [1, "position-absolute", "top-0", "end-0", "m-3"], [1, "badge", "bg-danger", "px-3", "py-2"], [1, "fas", "fa-fire", "me-1"], [1, "py-5", "bg-light"], ["data-aos", "fade-up", 1, "text-center", "display-5", "fw-bold", "mb-5"], [1, "row", "g-4"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], [1, "card", "h-100", "shadow-sm", "border-0"], [1, "card-body", "text-center", "p-4"], [1, "icon-circle", "mb-3"], [1, "fas", "fa-lightbulb", "fa-2x", "text-primary"], [1, "h4", "mb-3"], [1, "text-muted"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-4"], [1, "fas", "fa-rocket", "fa-2x", "text-primary"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-md-4"], [1, "fas", "fa-chart-line", "fa-2x", "text-primary"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "text-center", "mt-5"], ["href", "https://wa.me/5531975474785?text=Quero%20saber%20mais%20sobre%20o%20programa%20Tech%20for%20Equity!", "onclick", "gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_equity_middle'});", 1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow"], [1, "mt-3", "text-muted"], [1, "fas", "fa-clock", "me-2"], [1, "text-center", "mb-5"], ["data-aos", "fade-up", 1, "display-5", "fw-bold", "mb-3"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead", "text-muted"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4"], [1, "testimonial-card", "h-100"], [1, "testimonial-content"], [1, "stars", "mb-3"], [1, "fas", "fa-star", "text-warning"], [1, "mb-4"], [1, "testimonial-author"], [1, "fas", "fa-gavel", "fa-2x", "text-primary", "mb-2"], [1, "mb-0", "small", "text-muted"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4"], [1, "fas", "fa-hospital", "fa-2x", "text-success", "mb-2"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-4"], [1, "fas", "fa-coins", "fa-2x", "text-warning", "mb-2"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "client-logos", "mt-5", "pt-5", "border-top"], [1, "text-center", "text-muted", "mb-4"], [1, "d-flex", "flex-wrap", "justify-content-center", "align-items-center", "gap-4"], [1, "tech-logo", "text-center"], [1, "fas", "fa-mobile-alt", "fa-3x", "text-primary", "opacity-75"], [1, "small", "mt-1", "mb-0"], [1, "fas", "fa-globe", "fa-3x", "text-success", "opacity-75"], [1, "fas", "fa-cloud", "fa-3x", "text-info", "opacity-75"], [1, "fas", "fa-shield-alt", "fa-3x", "text-warning", "opacity-75"], [1, "fas", "fa-credit-card", "fa-3x", "text-success", "opacity-75"], [1, "fas", "fa-robot", "fa-3x", "text-danger", "opacity-75"], [1, "py-5"], [1, "row", "align-items-center"], [1, "col-lg-6"], ["data-aos", "fade-up", 1, "mb-4"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "d-flex", "mb-3"], [1, "fas", "fa-check-circle", "text-success", "fs-4", "me-3", "mt-1"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "d-flex", "mb-3"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "d-flex", "mb-3"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "d-flex", "mb-3"], [1, "fas", "fa-user-check", "text-primary", "fs-4", "me-3", "mt-1"], [1, "fas", "fa-clock", "text-primary", "fs-4", "me-3", "mt-1"], [1, "fas", "fa-users", "text-primary", "fs-4", "me-3", "mt-1"], [1, "fas", "fa-chart-line", "text-primary", "fs-4", "me-3", "mt-1"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-6"], [1, "differential-card", "h-100"], [1, "differential-icon", "mb-3"], [1, "fas", "fa-shield-alt", "fa-2x", "text-primary"], [1, "mb-3"], [1, "list-unstyled"], [1, "mb-2"], [1, "alert", "alert-info", "mt-3"], [1, "fas", "fa-info-circle", "me-2"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-6"], [1, "criteria-timeline"], [1, "criteria-item"], [1, "criteria-marker"], [1, "criteria-content"], [1, "row", "mt-5"], [1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "benefits-bar", "bg-light", "rounded-4", "p-4"], [1, "col-lg-8"], [1, "row", "g-3"], [1, "col-md-6"], [1, "fas", "fa-rocket", "text-primary", "me-3"], [1, "fas", "fa-server", "text-primary", "me-3"], [1, "fas", "fa-chart-line", "text-primary", "me-3"], [1, "fas", "fa-handshake", "text-primary", "me-3"], [1, "col-lg-4", "text-center"], [1, "mt-4", "mt-lg-0"], [1, "fw-bold", "text-primary", "mb-2"], [1, "btn", "btn-primary", 3, "click"], ["data-aos", "fade-up", 1, "text-center", "mb-5"], [1, "row"], [1, "timeline"], ["data-aos", "fade-right", 1, "timeline-item"], [1, "timeline-marker"], [1, "timeline-content"], ["data-aos", "fade-left", 1, "timeline-item"], ["data-aos", "flip-left", 1, "col-md-4"], [1, "text-center"], [1, "icon-box", "mb-3"], [1, "fas", "fa-lightbulb", "fa-3x", "text-primary"], ["data-aos", "flip-left", "data-aos-delay", "100", 1, "col-md-4"], [1, "fas", "fa-user-tie", "fa-3x", "text-primary"], ["data-aos", "flip-left", "data-aos-delay", "200", 1, "col-md-4"], [1, "fas", "fa-rocket", "fa-3x", "text-primary"], [1, "row", "g-4", "mb-5"], [1, "portfolio-card", "h-100"], [1, "portfolio-status"], [1, "badge", "bg-success"], [1, "portfolio-icon", "mb-3"], [1, "fas", "fa-building", "fa-3x", "text-primary"], [1, "portfolio-stats"], [1, "d-flex", "justify-content-between", "small"], [1, "badge", "bg-warning", "text-dark"], [1, "fas", "fa-truck", "fa-3x", "text-primary"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-md-4"], [1, "portfolio-card", "h-100", "portfolio-available"], [1, "badge", "bg-primary"], [1, "fas", "fa-plus-circle", "fa-3x", "text-primary", "opacity-50"], [1, "mt-3"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "metrics-section", "text-center"], [1, "col-6", "col-md-3"], [1, "metric-box"], [1, "display-4", "fw-bold", "text-primary", "mb-0"], ["id", "contact-form", 1, "py-5", "bg-dark", "text-white"], ["data-aos", "fade-up", 1, "badge", "bg-danger", "px-4", "py-2", "mb-3"], [1, "fas", "fa-fire", "me-2"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "display-5", "fw-bold", "mb-4", "text-white"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "lead", "fs-4", "text-light"], [1, "text-warning"], [1, "row", "justify-content-center"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "cta-card", "bg-white", "rounded-4", "p-5", "shadow-lg", "text-center"], [1, "whatsapp-icon-large", "mb-3"], [1, "fab", "fa-whatsapp", "fa-4x", "text-success"], [1, "fw-bold", "mb-3"], [1, "lead", "text-muted", "mb-4"], [1, "row", "g-3", "mb-4"], [1, "col-md-4"], [1, "benefit-item"], [1, "fas", "fa-check-circle", "text-success", "mb-2"], [1, "mb-0"], ["href", "https://wa.me/5531975474785?text=Ol\xE1!%20Tenho%20uma%20ideia%20de%20neg\xF3cio%20digital%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20Tech%20for%20Equity%20da%20VICS.%20Podemos%20conversar?", "target", "_blank", "onclick", "gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_equity_final_cta'});", 1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow-lg"], [1, "mt-4", "text-muted", "small"], [1, "fas", "fa-lock", "me-1"], ["href", "https://wa.me/5531975474785?text=Ol\xE1!%20Vi%20a%20p\xE1gina%20Tech%20for%20Equity%20e%20quero%20saber%20mais!", "target", "_blank", "aria-label", "Conversar no WhatsApp", 1, "whatsapp-float"], [1, "fab", "fa-whatsapp", "fa-2x"], [1, "whatsapp-tooltip"]], template: function TechEquityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        \u0275\u0275text(5, " Transforme sua ideia em");
        \u0275\u0275element(6, "br");
        \u0275\u0275elementStart(7, "span", 5);
        \u0275\u0275text(8, "neg\xF3cio digital em 90 dias");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p", 6);
        \u0275\u0275text(10, " N\xF3s desenvolvemos seu MVP completo.");
        \u0275\u0275element(11, "br");
        \u0275\u0275elementStart(12, "strong");
        \u0275\u0275text(13, "Voc\xEA foca em vender. Pagamento: 30% equity.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 7)(15, "a", 8);
        \u0275\u0275element(16, "i", 9);
        \u0275\u0275text(17, " Quero meu MVP agora ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 10);
        \u0275\u0275listener("click", function TechEquityComponent_Template_button_click_18_listener() {
          return ctx.scrollToForm();
        });
        \u0275\u0275text(19, " Ver como funciona ");
        \u0275\u0275element(20, "i", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "div", 13)(23, "div", 14);
        \u0275\u0275element(24, "i", 15);
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26, "Sem custo inicial");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 14);
        \u0275\u0275element(28, "i", 15);
        \u0275\u0275elementStart(29, "span");
        \u0275\u0275text(30, "2 projetos em andamento");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 14);
        \u0275\u0275element(32, "i", 15);
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34, "15+ anos experi\xEAncia");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(35, "div", 16)(36, "div", 17);
        \u0275\u0275element(37, "img", 18);
        \u0275\u0275elementStart(38, "div", 19)(39, "span", 20);
        \u0275\u0275element(40, "i", 21);
        \u0275\u0275text(41, "1 vaga dispon\xEDvel ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(42, "section", 22)(43, "div", 1)(44, "h2", 23);
        \u0275\u0275text(45, " 3 passos para ter seu neg\xF3cio digital ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 24)(47, "div", 25)(48, "div", 26)(49, "div", 27)(50, "div", 28);
        \u0275\u0275element(51, "i", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "h3", 30);
        \u0275\u0275text(53, "Voc\xEA valida e vende");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p", 31)(55, "strong");
        \u0275\u0275text(56, "Foque 100% no seu cliente.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " Enquanto voc\xEA valida a ideia e fecha vendas, n\xF3s constru\xEDmos a tecnologia. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(58, "div", 32)(59, "div", 26)(60, "div", 27)(61, "div", 28);
        \u0275\u0275element(62, "i", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h3", 30);
        \u0275\u0275text(64, "MVP em 90 dias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p", 31)(66, "strong");
        \u0275\u0275text(67, "Economize 6 meses e R$ 150 mil.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " Entregamos seu produto funcionando com qualidade de startup internacional. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "div", 34)(70, "div", 26)(71, "div", 27)(72, "div", 28);
        \u0275\u0275element(73, "i", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "h3", 30);
        \u0275\u0275text(75, "Crescemos juntos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 31)(77, "strong");
        \u0275\u0275text(78, "Sucesso compartilhado.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, " Suporte at\xE9 R$ 100k de faturamento. Se voc\xEA cresce, n\xF3s crescemos. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "div", 36)(81, "a", 37);
        \u0275\u0275element(82, "i", 9);
        \u0275\u0275text(83, " Falar com especialista agora ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p", 38);
        \u0275\u0275element(85, "i", 39);
        \u0275\u0275text(86, " Resposta em at\xE9 2 horas no hor\xE1rio comercial ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(87, "section", 22)(88, "div", 1)(89, "div", 40)(90, "h2", 41);
        \u0275\u0275text(91, "O que dizem nossos parceiros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p", 42);
        \u0275\u0275text(93, " Hist\xF3rias reais de empreendedores que transformaram ideias em neg\xF3cios ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 24)(95, "div", 43)(96, "div", 44)(97, "div", 45)(98, "div", 46);
        \u0275\u0275element(99, "i", 47)(100, "i", 47)(101, "i", 47)(102, "i", 47)(103, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "p", 48);
        \u0275\u0275text(105, ' "');
        \u0275\u0275elementStart(106, "strong");
        \u0275\u0275text(107, "Marketplace jur\xEDdico completo em 4 meses.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(108, ' Sistema de pagamentos, propostas e mensagens integradas. J\xE1 temos 150+ advogados cadastrados e crescendo!" ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 49);
        \u0275\u0275element(110, "i", 50);
        \u0275\u0275elementStart(111, "div")(112, "strong");
        \u0275\u0275text(113, "Marketplace Jur\xEDdico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "p", 51);
        \u0275\u0275text(115, "Conectando advogados e clientes");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(116, "div", 52)(117, "div", 44)(118, "div", 45)(119, "div", 46);
        \u0275\u0275element(120, "i", 47)(121, "i", 47)(122, "i", 47)(123, "i", 47)(124, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "p", 48);
        \u0275\u0275text(126, ' "Sistema completo de gest\xE3o hospitalar. ');
        \u0275\u0275elementStart(127, "strong");
        \u0275\u0275text(128, "Prontu\xE1rio eletr\xF4nico, farm\xE1cia e laborat\xF3rio integrados.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(129, ' J\xE1 atendemos 5 unidades de sa\xFAde com 10k+ pacientes/m\xEAs." ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 49);
        \u0275\u0275element(131, "i", 53);
        \u0275\u0275elementStart(132, "div")(133, "strong");
        \u0275\u0275text(134, "Sistema de Sa\xFAde");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "p", 51);
        \u0275\u0275text(136, "Gest\xE3o completa para SUS");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(137, "div", 54)(138, "div", 44)(139, "div", 45)(140, "div", 46);
        \u0275\u0275element(141, "i", 47)(142, "i", 47)(143, "i", 47)(144, "i", 47)(145, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "p", 48);
        \u0275\u0275text(147, ' "');
        \u0275\u0275elementStart(148, "strong");
        \u0275\u0275text(149, "Fintech internacional com blockchain.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(150, ' Carteira digital multi-moeda, PIX e pagamentos via USDC. Compliance total e integra\xE7\xE3o com Polygon!" ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(151, "div", 49);
        \u0275\u0275element(152, "i", 55);
        \u0275\u0275elementStart(153, "div")(154, "strong");
        \u0275\u0275text(155, "Fintech Global");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "p", 51);
        \u0275\u0275text(157, "Pagamentos para turistas");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(158, "div", 56)(159, "p", 57);
        \u0275\u0275text(160, "Nossas expertises t\xE9cnicas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 58)(162, "div", 59);
        \u0275\u0275element(163, "i", 60);
        \u0275\u0275elementStart(164, "p", 61);
        \u0275\u0275text(165, "Apps Mobile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "div", 59);
        \u0275\u0275element(167, "i", 62);
        \u0275\u0275elementStart(168, "p", 61);
        \u0275\u0275text(169, "Plataformas Web");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(170, "div", 59);
        \u0275\u0275element(171, "i", 63);
        \u0275\u0275elementStart(172, "p", 61);
        \u0275\u0275text(173, "Cloud & DevOps");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "div", 59);
        \u0275\u0275element(175, "i", 64);
        \u0275\u0275elementStart(176, "p", 61);
        \u0275\u0275text(177, "Seguran\xE7a");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(178, "div", 59);
        \u0275\u0275element(179, "i", 65);
        \u0275\u0275elementStart(180, "p", 61);
        \u0275\u0275text(181, "Pagamentos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div", 59);
        \u0275\u0275element(183, "i", 66);
        \u0275\u0275elementStart(184, "p", 61);
        \u0275\u0275text(185, "IA & Automa\xE7\xE3o");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(186, "section", 67)(187, "div", 1)(188, "div", 68)(189, "div", 69)(190, "h2", 70);
        \u0275\u0275text(191, "\u{1F4C8} O que voc\xEA recebe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 71);
        \u0275\u0275element(193, "i", 72);
        \u0275\u0275elementStart(194, "div")(195, "h4");
        \u0275\u0275text(196, "MVP funcional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "p");
        \u0275\u0275text(198, "Design e tecnologia de ponta para seu produto digital");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(199, "div", 73);
        \u0275\u0275element(200, "i", 72);
        \u0275\u0275elementStart(201, "div")(202, "h4");
        \u0275\u0275text(203, "Suporte t\xE9cnico completo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(204, "p");
        \u0275\u0275text(205, "Acompanhamento at\xE9 a fase de tra\xE7\xE3o do neg\xF3cio");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(206, "div", 74);
        \u0275\u0275element(207, "i", 72);
        \u0275\u0275elementStart(208, "div")(209, "h4");
        \u0275\u0275text(210, "Equipe experiente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(211, "p");
        \u0275\u0275text(212, "Profissionais especializados em plataformas digitais");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(213, "div", 75);
        \u0275\u0275element(214, "i", 72);
        \u0275\u0275elementStart(215, "div")(216, "h4");
        \u0275\u0275text(217, "Orienta\xE7\xE3o estrat\xE9gica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "p");
        \u0275\u0275text(219, "Mentoria e acompanhamento do crescimento");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(220, "div", 69)(221, "h2", 70);
        \u0275\u0275text(222, "\u{1F9E0} O que esperamos de voc\xEA");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "div", 71);
        \u0275\u0275element(224, "i", 76);
        \u0275\u0275elementStart(225, "div")(226, "h4");
        \u0275\u0275text(227, "Comprometimento total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "p");
        \u0275\u0275text(229, "Dedica\xE7\xE3o real ao sucesso do projeto");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(230, "div", 73);
        \u0275\u0275element(231, "i", 77);
        \u0275\u0275elementStart(232, "div")(233, "h4");
        \u0275\u0275text(234, "Dedica\xE7\xE3o semanal m\xEDnima");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "p");
        \u0275\u0275text(236, "Tempo necess\xE1rio para fazer o neg\xF3cio crescer");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(237, "div", 74);
        \u0275\u0275element(238, "i", 78);
        \u0275\u0275elementStart(239, "div")(240, "h4");
        \u0275\u0275text(241, "Valida\xE7\xE3o ativa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "p");
        \u0275\u0275text(243, "Contato constante com usu\xE1rios reais");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(244, "div", 75);
        \u0275\u0275element(245, "i", 79);
        \u0275\u0275elementStart(246, "div")(247, "h4");
        \u0275\u0275text(248, "Execu\xE7\xE3o comercial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "p");
        \u0275\u0275text(250, "Plano de vendas e marketing em a\xE7\xE3o");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(251, "section", 67)(252, "div", 1)(253, "div", 40)(254, "h2", 41);
        \u0275\u0275text(255, "Por que nosso modelo \xE9 diferente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "p", 42);
        \u0275\u0275text(257, " Prote\xE7\xE3o e alinhamento de interesses para ambos os lados ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(258, "div", 24)(259, "div", 80)(260, "div", 81)(261, "div", 82);
        \u0275\u0275element(262, "i", 83);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "h3");
        \u0275\u0275text(264, "Vesting Reverso Protetor");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "p", 84);
        \u0275\u0275text(266, "Sua participa\xE7\xE3o de 70% \xE9 conquistada gradualmente conforme voc\xEA atinge metas reais:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(267, "ul", 85)(268, "li", 86);
        \u0275\u0275element(269, "i", 15);
        \u0275\u0275elementStart(270, "strong");
        \u0275\u0275text(271, "25%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(272, " na assinatura do contrato ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "li", 86);
        \u0275\u0275element(274, "i", 15);
        \u0275\u0275elementStart(275, "strong");
        \u0275\u0275text(276, "25%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(277, " ao validar com 10 clientes pagantes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "li", 86);
        \u0275\u0275element(279, "i", 15);
        \u0275\u0275elementStart(280, "strong");
        \u0275\u0275text(281, "25%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(282, " ao atingir R$ 50k em faturamento ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "li", 86);
        \u0275\u0275element(284, "i", 15);
        \u0275\u0275elementStart(285, "strong");
        \u0275\u0275text(286, "25%");
        \u0275\u0275elementEnd();
        \u0275\u0275text(287, " ao alcan\xE7ar R$ 100k ou 100 clientes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(288, "div", 87)(289, "small");
        \u0275\u0275element(290, "i", 88);
        \u0275\u0275text(291, "Se desistir, sua participa\xE7\xE3o \xE9 proporcional ao que conquistou");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(292, "div", 89)(293, "div", 81)(294, "div", 82);
        \u0275\u0275element(295, "i", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "h3");
        \u0275\u0275text(297, "Crit\xE9rios Transparentes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "p", 84);
        \u0275\u0275text(299, "Metas claras e alcan\xE7\xE1veis para conquistar sua participa\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(300, "div", 90)(301, "div", 91)(302, "div", 92);
        \u0275\u0275text(303, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(304, "div", 93)(305, "strong");
        \u0275\u0275text(306, "M\xEAs 1-3:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(307, " Desenvolvimento do MVP ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(308, "div", 91)(309, "div", 92);
        \u0275\u0275text(310, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "div", 93)(312, "strong");
        \u0275\u0275text(313, "M\xEAs 4-6:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(314, " Primeiros 10 clientes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(315, "div", 91)(316, "div", 92);
        \u0275\u0275text(317, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(318, "div", 93)(319, "strong");
        \u0275\u0275text(320, "M\xEAs 7-12:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(321, " R$ 50k faturamento ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(322, "div", 91)(323, "div", 92);
        \u0275\u0275text(324, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "div", 93)(326, "strong");
        \u0275\u0275text(327, "Ano 2:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(328, " R$ 100k ou 100 clientes ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(329, "div", 94)(330, "div", 95)(331, "div", 96)(332, "div", 68)(333, "div", 97)(334, "h4", 84);
        \u0275\u0275text(335, "Mais que desenvolvimento, uma parceria completa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(336, "div", 98)(337, "div", 99)(338, "div", 14);
        \u0275\u0275element(339, "i", 100);
        \u0275\u0275elementStart(340, "span");
        \u0275\u0275text(341, "Tecnologia de ponta para escalar");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(342, "div", 99)(343, "div", 14);
        \u0275\u0275element(344, "i", 101);
        \u0275\u0275elementStart(345, "span");
        \u0275\u0275text(346, "Infraestrutura robusta e segura");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(347, "div", 99)(348, "div", 14);
        \u0275\u0275element(349, "i", 102);
        \u0275\u0275elementStart(350, "span");
        \u0275\u0275text(351, "Preparado para crescimento");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(352, "div", 99)(353, "div", 14);
        \u0275\u0275element(354, "i", 103);
        \u0275\u0275elementStart(355, "span");
        \u0275\u0275text(356, "Parceria estrat\xE9gica completa");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(357, "div", 104)(358, "div", 105)(359, "p", 106);
        \u0275\u0275text(360, "Vagas limitadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(361, "button", 107);
        \u0275\u0275listener("click", function TechEquityComponent_Template_button_click_361_listener() {
          return ctx.scrollToForm();
        });
        \u0275\u0275text(362, " Candidatar agora ");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(363, "section", 22)(364, "div", 1)(365, "h2", 108);
        \u0275\u0275text(366, "\u{1F680} Etapas da parceria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(367, "div", 109)(368, "div", 95)(369, "div", 110)(370, "div", 111)(371, "div", 112);
        \u0275\u0275text(372, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(373, "div", 113)(374, "h4");
        \u0275\u0275text(375, "Submeta sua ideia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(376, "p");
        \u0275\u0275text(377, "Preencha o formul\xE1rio com os detalhes do seu projeto");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(378, "div", 114)(379, "div", 112);
        \u0275\u0275text(380, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(381, "div", 113)(382, "h4");
        \u0275\u0275text(383, "Sele\xE7\xE3o t\xE9cnica e estrat\xE9gica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(384, "p");
        \u0275\u0275text(385, "Avaliamos o potencial t\xE9cnico e de mercado");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(386, "div", 111)(387, "div", 112);
        \u0275\u0275text(388, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "div", 113)(390, "h4");
        \u0275\u0275text(391, "Contrato com metas e prazos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(392, "p");
        \u0275\u0275text(393, "Definimos objetivos claros e mensur\xE1veis");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(394, "div", 114)(395, "div", 112);
        \u0275\u0275text(396, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "div", 113)(398, "h4");
        \u0275\u0275text(399, "Desenvolvimento do MVP");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(400, "p");
        \u0275\u0275text(401, "Criamos a primeira vers\xE3o funcional do produto");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(402, "div", 111)(403, "div", 112);
        \u0275\u0275text(404, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(405, "div", 113)(406, "h4");
        \u0275\u0275text(407, "Valida\xE7\xE3o e crescimento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(408, "p");
        \u0275\u0275text(409, "Voc\xEA valida, vende e cresce com nosso apoio");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(410, "div", 114)(411, "div", 112);
        \u0275\u0275text(412, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(413, "div", 113)(414, "h4");
        \u0275\u0275text(415, "Sucesso compartilhado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(416, "p");
        \u0275\u0275text(417, "Com o sucesso do projeto, todos colhem os frutos");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(418, "section", 67)(419, "div", 1)(420, "h2", 108);
        \u0275\u0275text(421, "\u{1F91D} Quem pode participar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(422, "div", 24)(423, "div", 115)(424, "div", 116)(425, "div", 117);
        \u0275\u0275element(426, "i", 118);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(427, "h4");
        \u0275\u0275text(428, "Ideias com potencial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(429, "p");
        \u0275\u0275text(430, "Pessoas com ideias validadas ou com grande potencial de mercado");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(431, "div", 119)(432, "div", 116)(433, "div", 117);
        \u0275\u0275element(434, "i", 120);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(435, "h4");
        \u0275\u0275text(436, "Expertise de mercado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(437, "p");
        \u0275\u0275text(438, "Profissionais que dominam seu nicho e conhecem as dores do cliente");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(439, "div", 121)(440, "div", 116)(441, "div", 117);
        \u0275\u0275element(442, "i", 122);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(443, "h4");
        \u0275\u0275text(444, "M\xE3o na massa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(445, "p");
        \u0275\u0275text(446, "Gente disposta a trabalhar duro e fazer acontecer");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(447, "section", 22)(448, "div", 1)(449, "div", 40)(450, "h2", 41);
        \u0275\u0275text(451, "Projetos em constru\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(452, "p", 42);
        \u0275\u0275text(453, " Estamos selecionando os primeiros parceiros para nosso programa ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(454, "div", 123)(455, "div", 32)(456, "div", 124)(457, "div", 125)(458, "span", 126);
        \u0275\u0275text(459, "Em desenvolvimento");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(460, "div", 127);
        \u0275\u0275element(461, "i", 128);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(462, "h4");
        \u0275\u0275text(463, "PropTech Imobili\xE1ria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(464, "p", 31);
        \u0275\u0275text(465, "Plataforma de gest\xE3o de alugu\xE9is com pagamento automatizado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(466, "div", 129)(467, "div", 130)(468, "span");
        \u0275\u0275text(469, "In\xEDcio: Dez/2024");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(470, "span");
        \u0275\u0275text(471, "MVP: Mar/2025");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(472, "div", 34)(473, "div", 124)(474, "div", 125)(475, "span", 131);
        \u0275\u0275text(476, "Em valida\xE7\xE3o");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(477, "div", 127);
        \u0275\u0275element(478, "i", 132);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(479, "h4");
        \u0275\u0275text(480, "Log\xEDstica Last Mile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(481, "p", 31);
        \u0275\u0275text(482, "App para entregadores aut\xF4nomos com roteiriza\xE7\xE3o inteligente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(483, "div", 129)(484, "div", 130)(485, "span");
        \u0275\u0275text(486, "Valida\xE7\xE3o: Jan/2025");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(487, "span");
        \u0275\u0275text(488, "Meta: 100 entregadores");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(489, "div", 133)(490, "div", 134)(491, "div", 125)(492, "span", 135);
        \u0275\u0275text(493, "Vaga aberta");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(494, "div", 127);
        \u0275\u0275element(495, "i", 136);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(496, "h4");
        \u0275\u0275text(497, "Seu projeto aqui");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(498, "p", 31);
        \u0275\u0275text(499, "Estamos selecionando 1 novo projeto por trimestre");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(500, "div", 137)(501, "button", 138);
        \u0275\u0275listener("click", function TechEquityComponent_Template_button_click_501_listener() {
          return ctx.scrollToForm();
        });
        \u0275\u0275text(502, " Candidatar projeto ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(503, "div", 139)(504, "div", 24)(505, "div", 140)(506, "div", 141)(507, "h3", 142);
        \u0275\u0275text(508, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(509, "p", 31);
        \u0275\u0275text(510, "Projetos ativos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(511, "div", 140)(512, "div", 141)(513, "h3", 142);
        \u0275\u0275text(514, "15+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(515, "p", 31);
        \u0275\u0275text(516, "Anos de experi\xEAncia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(517, "div", 140)(518, "div", 141)(519, "h3", 142);
        \u0275\u0275text(520, "R$5M+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(521, "p", 31);
        \u0275\u0275text(522, "Em projetos entregues");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(523, "div", 140)(524, "div", 141)(525, "h3", 142);
        \u0275\u0275text(526, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(527, "p", 31);
        \u0275\u0275text(528, "Vaga dispon\xEDvel");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(529, "section", 143)(530, "div", 1)(531, "div", 40)(532, "div", 144);
        \u0275\u0275element(533, "i", 145);
        \u0275\u0275text(534, "Apenas 1 vaga dispon\xEDvel este trimestre ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(535, "h2", 146);
        \u0275\u0275text(536, " Pronto para construir o futuro? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(537, "p", 147);
        \u0275\u0275text(538, " Selecionamos projetos com alto potencial de crescimento.");
        \u0275\u0275element(539, "br");
        \u0275\u0275elementStart(540, "strong", 148);
        \u0275\u0275text(541, "Candidaturas abertas at\xE9 31/01/2025");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(542, "div", 149)(543, "div", 97)(544, "div", 150)(545, "div", 48)(546, "div", 151);
        \u0275\u0275element(547, "i", 152);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(548, "h3", 153);
        \u0275\u0275text(549, "Vamos conversar sobre sua ideia?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(550, "p", 154);
        \u0275\u0275text(551, " Conte-nos seu projeto e receba uma an\xE1lise personalizada em at\xE9 24h ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(552, "div", 155)(553, "div", 156)(554, "div", 157);
        \u0275\u0275element(555, "i", 158);
        \u0275\u0275elementStart(556, "p", 159);
        \u0275\u0275text(557, "An\xE1lise gratuita");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(558, "div", 156)(559, "div", 157);
        \u0275\u0275element(560, "i", 158);
        \u0275\u0275elementStart(561, "p", 159);
        \u0275\u0275text(562, "Resposta em 24h");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(563, "div", 156)(564, "div", 157);
        \u0275\u0275element(565, "i", 158);
        \u0275\u0275elementStart(566, "p", 159);
        \u0275\u0275text(567, "Sem compromisso");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(568, "a", 160);
        \u0275\u0275element(569, "i", 9);
        \u0275\u0275text(570, " Iniciar conversa no WhatsApp ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(571, "p", 161);
        \u0275\u0275element(572, "i", 162);
        \u0275\u0275text(573, " Conversas 100% confidenciais \u2022 Atendimento de segunda a sexta ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(574, "a", 163);
        \u0275\u0275element(575, "i", 164);
        \u0275\u0275elementStart(576, "span", 165);
        \u0275\u0275text(577, "Fale conosco!");
        \u0275\u0275elementEnd()();
      }
    }, styles: ['\n\n.tech-equity-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding-top: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.tech-equity-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 110, 253, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.text-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d6efd 0%,\n      #0a58ca 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n}\n.hero-stats[_ngcontent-%COMP%] {\n  border-top: 1px solid #dee2e6;\n  padding-top: 1.5rem;\n}\n.hero-stats[_ngcontent-%COMP%]   .vr[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hero-visual[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 120%;\n  height: 120%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 110, 253, 0.1) 0%,\n      transparent 50%);\n  z-index: -1;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 0;\n}\n.timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #dee2e6;\n  transform: translateX(-50%);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 0;\n}\n.timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%] {\n  margin-right: 50%;\n  padding-right: 3rem;\n  text-align: right;\n}\n.timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding-left: 3rem;\n}\n.timeline-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n  background: #0d6efd;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n  z-index: 1;\n}\n.icon-box[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.icon-box[_ngcontent-%COMP%]:hover {\n  background: #0d6efd;\n  transform: scale(1.1);\n}\n.icon-box[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.icon-circle[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(13, 110, 253, 0.1);\n  border-radius: 50%;\n}\n.cta-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.whatsapp-icon-large[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.benefit-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.portfolio-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  position: relative;\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.portfolio-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.portfolio-card.portfolio-available[_ngcontent-%COMP%] {\n  border: 2px dashed #0d6efd;\n  background: rgba(13, 110, 253, 0.02);\n}\n.portfolio-status[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.portfolio-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.portfolio-stats[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e9ecef;\n}\n.metric-box[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.metric-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  line-height: 1;\n}\n.differential-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2.5rem;\n  border: 1px solid #e9ecef;\n  height: 100%;\n  transition: all 0.3s ease;\n}\n.differential-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.differential-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(13, 110, 253, 0.1);\n  border-radius: 12px;\n}\n.criteria-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 2rem;\n}\n.criteria-timeline[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 15px;\n  top: 20px;\n  bottom: 20px;\n  width: 2px;\n  background: #dee2e6;\n}\n.criteria-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1.5rem;\n}\n.criteria-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.criteria-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -25px;\n  width: 30px;\n  height: 30px;\n  background: #0d6efd;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.875rem;\n}\n.criteria-content[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.benefits-bar[_ngcontent-%COMP%] {\n  border: 2px solid rgba(13, 110, 253, 0.1);\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.testimonial-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.testimonial-content[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e9ecef;\n}\n.testimonial-author[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n.tech-logo[_ngcontent-%COMP%] {\n  min-width: 80px;\n}\n.tech-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n.tech-logo[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  opacity: 1 !important;\n}\n.whatsapp-float[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background: #25d366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover {\n  background: #1ebe57;\n  transform: scale(1.1);\n  text-decoration: none;\n  color: white;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover   .whatsapp-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-10px);\n}\n.whatsapp-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 70px;\n  background: #333;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  transform: translateX(10px);\n}\n.whatsapp-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid #333;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n@media (max-width: 768px) {\n  .whatsapp-float[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n  }\n  .timeline[_ngcontent-%COMP%]::before {\n    left: 30px;\n  }\n  .timeline-item[_ngcontent-%COMP%]:nth-child(odd)   .timeline-content[_ngcontent-%COMP%], \n   .timeline-item[_ngcontent-%COMP%]:nth-child(even)   .timeline-content[_ngcontent-%COMP%] {\n    margin-left: 80px;\n    margin-right: 0;\n    padding-left: 0;\n    padding-right: 0;\n    text-align: left;\n  }\n  .timeline-marker[_ngcontent-%COMP%] {\n    left: 30px;\n  }\n}\n/*# sourceMappingURL=tech-equity.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TechEquityComponent, [{
    type: Component,
    args: [{ selector: "app-tech-equity", standalone: false, template: `<!-- Hero Section -->
<section class="hero-section tech-equity-hero">
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div class="col-lg-7">
        <h1 class="display-3 fw-bold mb-3" data-aos="fade-up">
          Transforme sua ideia em<br>
          <span class="text-gradient">neg\xF3cio digital em 90 dias</span>
        </h1>
        <p class="lead fs-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          N\xF3s desenvolvemos seu MVP completo.<br>
          <strong>Voc\xEA foca em vender. Pagamento: 30% equity.</strong>
        </p>
        <div class="d-flex flex-column flex-sm-row gap-3 mb-5" data-aos="fade-up" data-aos-delay="200">
          <a href="https://wa.me/5531975474785?text=Quero%20transformar%20minha%20ideia%20em%20neg\xF3cio%20digital!" 
             class="btn btn-success btn-lg px-5 py-3 shadow-lg" target="_blank"
             onclick="gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_equity_hero'});">
            <i class="fab fa-whatsapp me-2"></i>
            Quero meu MVP agora
          </a>
          <button class="btn btn-outline-primary btn-lg px-5 py-3" (click)="scrollToForm()">
            Ver como funciona
            <i class="fas fa-arrow-down ms-2"></i>
          </button>
        </div>
        <div class="trust-indicators" data-aos="fade-up" data-aos-delay="300">
          <div class="d-flex flex-wrap align-items-center gap-4 text-muted">
            <div class="d-flex align-items-center">
              <i class="fas fa-check-circle text-success me-2"></i>
              <span>Sem custo inicial</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-check-circle text-success me-2"></i>
              <span>2 projetos em andamento</span>
            </div>
            <div class="d-flex align-items-center">
              <i class="fas fa-check-circle text-success me-2"></i>
              <span>15+ anos experi\xEAncia</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="hero-visual position-relative" data-aos="zoom-in" data-aos-delay="200">
          <img src="assets/images/tech-equity-hero.svg" alt="MVP em 90 dias" 
               class="img-fluid" loading="lazy">
          <div class="position-absolute top-0 end-0 m-3">
            <span class="badge bg-danger px-3 py-2">
              <i class="fas fa-fire me-1"></i>1 vaga dispon\xEDvel
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Como Funciona -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center display-5 fw-bold mb-5" data-aos="fade-up">
      3 passos para ter seu neg\xF3cio digital
    </h2>
    <div class="row g-4">
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center p-4">
            <div class="icon-circle mb-3">
              <i class="fas fa-lightbulb fa-2x text-primary"></i>
            </div>
            <h3 class="h4 mb-3">Voc\xEA valida e vende</h3>
            <p class="text-muted">
              <strong>Foque 100% no seu cliente.</strong> Enquanto voc\xEA valida a ideia e fecha vendas, 
              n\xF3s constru\xEDmos a tecnologia.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center p-4">
            <div class="icon-circle mb-3">
              <i class="fas fa-rocket fa-2x text-primary"></i>
            </div>
            <h3 class="h4 mb-3">MVP em 90 dias</h3>
            <p class="text-muted">
              <strong>Economize 6 meses e R$ 150 mil.</strong> Entregamos seu produto funcionando 
              com qualidade de startup internacional.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center p-4">
            <div class="icon-circle mb-3">
              <i class="fas fa-chart-line fa-2x text-primary"></i>
            </div>
            <h3 class="h4 mb-3">Crescemos juntos</h3>
            <p class="text-muted">
              <strong>Sucesso compartilhado.</strong> Suporte at\xE9 R$ 100k de faturamento. 
              Se voc\xEA cresce, n\xF3s crescemos.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- CTA no meio da p\xE1gina -->
    <div class="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
      <a href="https://wa.me/5531975474785?text=Quero%20saber%20mais%20sobre%20o%20programa%20Tech%20for%20Equity!" 
         class="btn btn-success btn-lg px-5 py-3 shadow"
         onclick="gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_equity_middle'});">
        <i class="fab fa-whatsapp me-2"></i>
        Falar com especialista agora
      </a>
      <p class="mt-3 text-muted">
        <i class="fas fa-clock me-2"></i>
        Resposta em at\xE9 2 horas no hor\xE1rio comercial
      </p>
    </div>
  </div>
</section>

<!-- Depoimentos / Provas Sociais -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-3" data-aos="fade-up">O que dizem nossos parceiros</h2>
      <p class="lead text-muted" data-aos="fade-up" data-aos-delay="100">
        Hist\xF3rias reais de empreendedores que transformaram ideias em neg\xF3cios
      </p>
    </div>
    
    <div class="row g-4">
      <!-- Depoimento 1 - JurisRails -->
      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
        <div class="testimonial-card h-100">
          <div class="testimonial-content">
            <div class="stars mb-3">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
            </div>
            <p class="mb-4">
              "<strong>Marketplace jur\xEDdico completo em 4 meses.</strong> Sistema de pagamentos, 
              propostas e mensagens integradas. J\xE1 temos 150+ advogados cadastrados e crescendo!"
            </p>
          </div>
          <div class="testimonial-author">
            <i class="fas fa-gavel fa-2x text-primary mb-2"></i>
            <div>
              <strong>Marketplace Jur\xEDdico</strong>
              <p class="mb-0 small text-muted">Conectando advogados e clientes</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Depoimento 2 - Sa\xFAde P\xFAblica -->
      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div class="testimonial-card h-100">
          <div class="testimonial-content">
            <div class="stars mb-3">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
            </div>
            <p class="mb-4">
              "Sistema completo de gest\xE3o hospitalar. <strong>Prontu\xE1rio eletr\xF4nico, farm\xE1cia e laborat\xF3rio integrados.</strong> 
              J\xE1 atendemos 5 unidades de sa\xFAde com 10k+ pacientes/m\xEAs."
            </p>
          </div>
          <div class="testimonial-author">
            <i class="fas fa-hospital fa-2x text-success mb-2"></i>
            <div>
              <strong>Sistema de Sa\xFAde</strong>
              <p class="mb-0 small text-muted">Gest\xE3o completa para SUS</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Depoimento 3 - XPay -->
      <div class="col-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div class="testimonial-card h-100">
          <div class="testimonial-content">
            <div class="stars mb-3">
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
              <i class="fas fa-star text-warning"></i>
            </div>
            <p class="mb-4">
              "<strong>Fintech internacional com blockchain.</strong> Carteira digital multi-moeda, 
              PIX e pagamentos via USDC. Compliance total e integra\xE7\xE3o com Polygon!"
            </p>
          </div>
          <div class="testimonial-author">
            <i class="fas fa-coins fa-2x text-warning mb-2"></i>
            <div>
              <strong>Fintech Global</strong>
              <p class="mb-0 small text-muted">Pagamentos para turistas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Capacidades T\xE9cnicas -->
    <div class="client-logos mt-5 pt-5 border-top" data-aos="fade-up" data-aos-delay="500">
      <p class="text-center text-muted mb-4">Nossas expertises t\xE9cnicas</p>
      <div class="d-flex flex-wrap justify-content-center align-items-center gap-4">
        <div class="tech-logo text-center">
          <i class="fas fa-mobile-alt fa-3x text-primary opacity-75"></i>
          <p class="small mt-1 mb-0">Apps Mobile</p>
        </div>
        <div class="tech-logo text-center">
          <i class="fas fa-globe fa-3x text-success opacity-75"></i>
          <p class="small mt-1 mb-0">Plataformas Web</p>
        </div>
        <div class="tech-logo text-center">
          <i class="fas fa-cloud fa-3x text-info opacity-75"></i>
          <p class="small mt-1 mb-0">Cloud & DevOps</p>
        </div>
        <div class="tech-logo text-center">
          <i class="fas fa-shield-alt fa-3x text-warning opacity-75"></i>
          <p class="small mt-1 mb-0">Seguran\xE7a</p>
        </div>
        <div class="tech-logo text-center">
          <i class="fas fa-credit-card fa-3x text-success opacity-75"></i>
          <p class="small mt-1 mb-0">Pagamentos</p>
        </div>
        <div class="tech-logo text-center">
          <i class="fas fa-robot fa-3x text-danger opacity-75"></i>
          <p class="small mt-1 mb-0">IA & Automa\xE7\xE3o</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- O que voc\xEA recebe -->
<section class="py-5">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-lg-6">
        <h2 class="mb-4" data-aos="fade-up">\u{1F4C8} O que voc\xEA recebe</h2>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="100">
          <i class="fas fa-check-circle text-success fs-4 me-3 mt-1"></i>
          <div>
            <h4>MVP funcional</h4>
            <p>Design e tecnologia de ponta para seu produto digital</p>
          </div>
        </div>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="200">
          <i class="fas fa-check-circle text-success fs-4 me-3 mt-1"></i>
          <div>
            <h4>Suporte t\xE9cnico completo</h4>
            <p>Acompanhamento at\xE9 a fase de tra\xE7\xE3o do neg\xF3cio</p>
          </div>
        </div>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="300">
          <i class="fas fa-check-circle text-success fs-4 me-3 mt-1"></i>
          <div>
            <h4>Equipe experiente</h4>
            <p>Profissionais especializados em plataformas digitais</p>
          </div>
        </div>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="400">
          <i class="fas fa-check-circle text-success fs-4 me-3 mt-1"></i>
          <div>
            <h4>Orienta\xE7\xE3o estrat\xE9gica</h4>
            <p>Mentoria e acompanhamento do crescimento</p>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <h2 class="mb-4" data-aos="fade-up">\u{1F9E0} O que esperamos de voc\xEA</h2>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="100">
          <i class="fas fa-user-check text-primary fs-4 me-3 mt-1"></i>
          <div>
            <h4>Comprometimento total</h4>
            <p>Dedica\xE7\xE3o real ao sucesso do projeto</p>
          </div>
        </div>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="200">
          <i class="fas fa-clock text-primary fs-4 me-3 mt-1"></i>
          <div>
            <h4>Dedica\xE7\xE3o semanal m\xEDnima</h4>
            <p>Tempo necess\xE1rio para fazer o neg\xF3cio crescer</p>
          </div>
        </div>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="300">
          <i class="fas fa-users text-primary fs-4 me-3 mt-1"></i>
          <div>
            <h4>Valida\xE7\xE3o ativa</h4>
            <p>Contato constante com usu\xE1rios reais</p>
          </div>
        </div>
        <div class="d-flex mb-3" data-aos="fade-up" data-aos-delay="400">
          <i class="fas fa-chart-line text-primary fs-4 me-3 mt-1"></i>
          <div>
            <h4>Execu\xE7\xE3o comercial</h4>
            <p>Plano de vendas e marketing em a\xE7\xE3o</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Diferenciais do Modelo -->
<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-3" data-aos="fade-up">Por que nosso modelo \xE9 diferente</h2>
      <p class="lead text-muted" data-aos="fade-up" data-aos-delay="100">
        Prote\xE7\xE3o e alinhamento de interesses para ambos os lados
      </p>
    </div>
    
    <div class="row g-4">
      <!-- Vesting Reverso -->
      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div class="differential-card h-100">
          <div class="differential-icon mb-3">
            <i class="fas fa-shield-alt fa-2x text-primary"></i>
          </div>
          <h3>Vesting Reverso Protetor</h3>
          <p class="mb-3">Sua participa\xE7\xE3o de 70% \xE9 conquistada gradualmente conforme voc\xEA atinge metas reais:</p>
          <ul class="list-unstyled">
            <li class="mb-2">
              <i class="fas fa-check-circle text-success me-2"></i>
              <strong>25%</strong> na assinatura do contrato
            </li>
            <li class="mb-2">
              <i class="fas fa-check-circle text-success me-2"></i>
              <strong>25%</strong> ao validar com 10 clientes pagantes
            </li>
            <li class="mb-2">
              <i class="fas fa-check-circle text-success me-2"></i>
              <strong>25%</strong> ao atingir R$ 50k em faturamento
            </li>
            <li class="mb-2">
              <i class="fas fa-check-circle text-success me-2"></i>
              <strong>25%</strong> ao alcan\xE7ar R$ 100k ou 100 clientes
            </li>
          </ul>
          <div class="alert alert-info mt-3">
            <small><i class="fas fa-info-circle me-2"></i>Se desistir, sua participa\xE7\xE3o \xE9 proporcional ao que conquistou</small>
          </div>
        </div>
      </div>
      
      <!-- Crit\xE9rios Claros -->
      <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div class="differential-card h-100">
          <div class="differential-icon mb-3">
            <i class="fas fa-chart-line fa-2x text-primary"></i>
          </div>
          <h3>Crit\xE9rios Transparentes</h3>
          <p class="mb-3">Metas claras e alcan\xE7\xE1veis para conquistar sua participa\xE7\xE3o:</p>
          <div class="criteria-timeline">
            <div class="criteria-item">
              <div class="criteria-marker">1</div>
              <div class="criteria-content">
                <strong>M\xEAs 1-3:</strong> Desenvolvimento do MVP
              </div>
            </div>
            <div class="criteria-item">
              <div class="criteria-marker">2</div>
              <div class="criteria-content">
                <strong>M\xEAs 4-6:</strong> Primeiros 10 clientes
              </div>
            </div>
            <div class="criteria-item">
              <div class="criteria-marker">3</div>
              <div class="criteria-content">
                <strong>M\xEAs 7-12:</strong> R$ 50k faturamento
              </div>
            </div>
            <div class="criteria-item">
              <div class="criteria-marker">4</div>
              <div class="criteria-content">
                <strong>Ano 2:</strong> R$ 100k ou 100 clientes
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Benef\xEDcios Adicionais -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="benefits-bar bg-light rounded-4 p-4" data-aos="fade-up" data-aos-delay="400">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <h4 class="mb-3">Mais que desenvolvimento, uma parceria completa</h4>
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-rocket text-primary me-3"></i>
                    <span>Tecnologia de ponta para escalar</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-server text-primary me-3"></i>
                    <span>Infraestrutura robusta e segura</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-chart-line text-primary me-3"></i>
                    <span>Preparado para crescimento</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <i class="fas fa-handshake text-primary me-3"></i>
                    <span>Parceria estrat\xE9gica completa</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 text-center">
              <div class="mt-4 mt-lg-0">
                <p class="fw-bold text-primary mb-2">Vagas limitadas</p>
                <button class="btn btn-primary" (click)="scrollToForm()">
                  Candidatar agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Etapas da Parceria -->
<section class="py-5 bg-light">
  <div class="container">
    <h2 class="text-center mb-5" data-aos="fade-up">\u{1F680} Etapas da parceria</h2>
    <div class="row">
      <div class="col-12">
        <div class="timeline">
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h4>Submeta sua ideia</h4>
              <p>Preencha o formul\xE1rio com os detalhes do seu projeto</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h4>Sele\xE7\xE3o t\xE9cnica e estrat\xE9gica</h4>
              <p>Avaliamos o potencial t\xE9cnico e de mercado</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h4>Contrato com metas e prazos</h4>
              <p>Definimos objetivos claros e mensur\xE1veis</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h4>Desenvolvimento do MVP</h4>
              <p>Criamos a primeira vers\xE3o funcional do produto</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h4>Valida\xE7\xE3o e crescimento</h4>
              <p>Voc\xEA valida, vende e cresce com nosso apoio</p>
            </div>
          </div>
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-marker">6</div>
            <div class="timeline-content">
              <h4>Sucesso compartilhado</h4>
              <p>Com o sucesso do projeto, todos colhem os frutos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Quem pode participar -->
<section class="py-5">
  <div class="container">
    <h2 class="text-center mb-5" data-aos="fade-up">\u{1F91D} Quem pode participar</h2>
    <div class="row g-4">
      <div class="col-md-4" data-aos="flip-left">
        <div class="text-center">
          <div class="icon-box mb-3">
            <i class="fas fa-lightbulb fa-3x text-primary"></i>
          </div>
          <h4>Ideias com potencial</h4>
          <p>Pessoas com ideias validadas ou com grande potencial de mercado</p>
        </div>
      </div>
      <div class="col-md-4" data-aos="flip-left" data-aos-delay="100">
        <div class="text-center">
          <div class="icon-box mb-3">
            <i class="fas fa-user-tie fa-3x text-primary"></i>
          </div>
          <h4>Expertise de mercado</h4>
          <p>Profissionais que dominam seu nicho e conhecem as dores do cliente</p>
        </div>
      </div>
      <div class="col-md-4" data-aos="flip-left" data-aos-delay="200">
        <div class="text-center">
          <div class="icon-box mb-3">
            <i class="fas fa-rocket fa-3x text-primary"></i>
          </div>
          <h4>M\xE3o na massa</h4>
          <p>Gente disposta a trabalhar duro e fazer acontecer</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Portfolio / Casos de Sucesso -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-3" data-aos="fade-up">Projetos em constru\xE7\xE3o</h2>
      <p class="lead text-muted" data-aos="fade-up" data-aos-delay="100">
        Estamos selecionando os primeiros parceiros para nosso programa
      </p>
    </div>
    
    <div class="row g-4 mb-5">
      <!-- Projeto Piloto 1 -->
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="portfolio-card h-100">
          <div class="portfolio-status">
            <span class="badge bg-success">Em desenvolvimento</span>
          </div>
          <div class="portfolio-icon mb-3">
            <i class="fas fa-building fa-3x text-primary"></i>
          </div>
          <h4>PropTech Imobili\xE1ria</h4>
          <p class="text-muted">Plataforma de gest\xE3o de alugu\xE9is com pagamento automatizado</p>
          <div class="portfolio-stats">
            <div class="d-flex justify-content-between small">
              <span>In\xEDcio: Dez/2024</span>
              <span>MVP: Mar/2025</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Projeto Piloto 2 -->
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
        <div class="portfolio-card h-100">
          <div class="portfolio-status">
            <span class="badge bg-warning text-dark">Em valida\xE7\xE3o</span>
          </div>
          <div class="portfolio-icon mb-3">
            <i class="fas fa-truck fa-3x text-primary"></i>
          </div>
          <h4>Log\xEDstica Last Mile</h4>
          <p class="text-muted">App para entregadores aut\xF4nomos com roteiriza\xE7\xE3o inteligente</p>
          <div class="portfolio-stats">
            <div class="d-flex justify-content-between small">
              <span>Valida\xE7\xE3o: Jan/2025</span>
              <span>Meta: 100 entregadores</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Slot Dispon\xEDvel -->
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
        <div class="portfolio-card h-100 portfolio-available">
          <div class="portfolio-status">
            <span class="badge bg-primary">Vaga aberta</span>
          </div>
          <div class="portfolio-icon mb-3">
            <i class="fas fa-plus-circle fa-3x text-primary opacity-50"></i>
          </div>
          <h4>Seu projeto aqui</h4>
          <p class="text-muted">Estamos selecionando 1 novo projeto por trimestre</p>
          <div class="mt-3">
            <button class="btn btn-sm btn-primary" (click)="scrollToForm()">
              Candidatar projeto
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- M\xE9tricas -->
    <div class="metrics-section text-center" data-aos="fade-up" data-aos-delay="500">
      <div class="row g-4">
        <div class="col-6 col-md-3">
          <div class="metric-box">
            <h3 class="display-4 fw-bold text-primary mb-0">2</h3>
            <p class="text-muted">Projetos ativos</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="metric-box">
            <h3 class="display-4 fw-bold text-primary mb-0">15+</h3>
            <p class="text-muted">Anos de experi\xEAncia</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="metric-box">
            <h3 class="display-4 fw-bold text-primary mb-0">R$5M+</h3>
            <p class="text-muted">Em projetos entregues</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="metric-box">
            <h3 class="display-4 fw-bold text-primary mb-0">1</h3>
            <p class="text-muted">Vaga dispon\xEDvel</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Final -->
<section class="py-5 bg-dark text-white" id="contact-form">
  <div class="container">
    <div class="text-center mb-5">
      <div class="badge bg-danger px-4 py-2 mb-3" data-aos="fade-up">
        <i class="fas fa-fire me-2"></i>Apenas 1 vaga dispon\xEDvel este trimestre
      </div>
      <h2 class="display-5 fw-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="100">
        Pronto para construir o futuro?
      </h2>
      <p class="lead fs-4 text-light" data-aos="fade-up" data-aos-delay="200">
        Selecionamos projetos com alto potencial de crescimento.<br>
        <strong class="text-warning">Candidaturas abertas at\xE9 31/01/2025</strong>
      </p>
    </div>
    
    <!-- CTA WhatsApp Direto -->
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="cta-card bg-white rounded-4 p-5 shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="mb-4">
            <div class="whatsapp-icon-large mb-3">
              <i class="fab fa-whatsapp fa-4x text-success"></i>
            </div>
            <h3 class="fw-bold mb-3">Vamos conversar sobre sua ideia?</h3>
            <p class="lead text-muted mb-4">
              Conte-nos seu projeto e receba uma an\xE1lise personalizada em at\xE9 24h
            </p>
          </div>
          
          <div class="row g-3 mb-4">
            <div class="col-md-4">
              <div class="benefit-item">
                <i class="fas fa-check-circle text-success mb-2"></i>
                <p class="mb-0">An\xE1lise gratuita</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefit-item">
                <i class="fas fa-check-circle text-success mb-2"></i>
                <p class="mb-0">Resposta em 24h</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefit-item">
                <i class="fas fa-check-circle text-success mb-2"></i>
                <p class="mb-0">Sem compromisso</p>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/5531975474785?text=Ol\xE1!%20Tenho%20uma%20ideia%20de%20neg\xF3cio%20digital%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20programa%20Tech%20for%20Equity%20da%20VICS.%20Podemos%20conversar?" 
             class="btn btn-success btn-lg px-5 py-3 shadow-lg" target="_blank"
             onclick="gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_equity_final_cta'});">
            <i class="fab fa-whatsapp me-2"></i>
            Iniciar conversa no WhatsApp
          </a>
          
          <p class="mt-4 text-muted small">
            <i class="fas fa-lock me-1"></i>
            Conversas 100% confidenciais \u2022 Atendimento de segunda a sexta
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Bot\xE3o WhatsApp Flutuante -->
<a href="https://wa.me/5531975474785?text=Ol\xE1!%20Vi%20a%20p\xE1gina%20Tech%20for%20Equity%20e%20quero%20saber%20mais!" 
   class="whatsapp-float" target="_blank" aria-label="Conversar no WhatsApp">
  <i class="fab fa-whatsapp fa-2x"></i>
  <span class="whatsapp-tooltip">Fale conosco!</span>
</a>`, styles: ['/* src/app/modules/tech-equity/tech-equity.component.scss */\n.tech-equity-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding-top: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.tech-equity-hero::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 110, 253, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.text-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #0d6efd 0%,\n      #0a58ca 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge .badge {\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n}\n.hero-stats {\n  border-top: 1px solid #dee2e6;\n  padding-top: 1.5rem;\n}\n.hero-stats .vr {\n  opacity: 0.3;\n}\n.hero-visual {\n  position: relative;\n}\n.hero-visual::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 120%;\n  height: 120%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(13, 110, 253, 0.1) 0%,\n      transparent 50%);\n  z-index: -1;\n}\n.timeline {\n  position: relative;\n  padding: 2rem 0;\n}\n.timeline::before {\n  content: "";\n  position: absolute;\n  left: 50%;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: #dee2e6;\n  transform: translateX(-50%);\n}\n.timeline-item {\n  position: relative;\n  padding: 2rem 0;\n}\n.timeline-item:nth-child(odd) .timeline-content {\n  margin-right: 50%;\n  padding-right: 3rem;\n  text-align: right;\n}\n.timeline-item:nth-child(even) .timeline-content {\n  margin-left: 50%;\n  padding-left: 3rem;\n}\n.timeline-marker {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n  height: 50px;\n  background: #0d6efd;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n  z-index: 1;\n}\n.icon-box {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  border-radius: 50%;\n  transition: all 0.3s ease;\n}\n.icon-box:hover {\n  background: #0d6efd;\n  transform: scale(1.1);\n}\n.icon-box:hover i {\n  color: white !important;\n}\n.icon-circle {\n  width: 80px;\n  height: 80px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(13, 110, 253, 0.1);\n  border-radius: 50%;\n}\n.cta-card {\n  position: relative;\n  z-index: 1;\n}\n.whatsapp-icon-large {\n  display: inline-block;\n  animation: pulse 2s infinite;\n}\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n.benefit-item i {\n  font-size: 1.5rem;\n}\n.portfolio-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  position: relative;\n  transition: all 0.3s ease;\n  border: 1px solid #e9ecef;\n}\n.portfolio-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.portfolio-card.portfolio-available {\n  border: 2px dashed #0d6efd;\n  background: rgba(13, 110, 253, 0.02);\n}\n.portfolio-status {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n}\n.portfolio-icon {\n  width: 80px;\n  height: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #f8f9fa;\n  border-radius: 12px;\n}\n.portfolio-stats {\n  margin-top: 1.5rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e9ecef;\n}\n.metric-box {\n  padding: 1.5rem;\n}\n.metric-box h3 {\n  line-height: 1;\n}\n.differential-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2.5rem;\n  border: 1px solid #e9ecef;\n  height: 100%;\n  transition: all 0.3s ease;\n}\n.differential-card:hover {\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.differential-icon {\n  width: 70px;\n  height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(13, 110, 253, 0.1);\n  border-radius: 12px;\n}\n.criteria-timeline {\n  position: relative;\n  padding-left: 2rem;\n}\n.criteria-timeline::before {\n  content: "";\n  position: absolute;\n  left: 15px;\n  top: 20px;\n  bottom: 20px;\n  width: 2px;\n  background: #dee2e6;\n}\n.criteria-item {\n  position: relative;\n  margin-bottom: 1.5rem;\n}\n.criteria-item:last-child {\n  margin-bottom: 0;\n}\n.criteria-marker {\n  position: absolute;\n  left: -25px;\n  width: 30px;\n  height: 30px;\n  background: #0d6efd;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 0.875rem;\n}\n.criteria-content {\n  padding-left: 1rem;\n}\n.benefits-bar {\n  border: 2px solid rgba(13, 110, 253, 0.1);\n}\n.testimonial-card {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.testimonial-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.testimonial-content {\n  flex: 1;\n}\n.testimonial-content .stars {\n  font-size: 1.2rem;\n}\n.testimonial-author {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid #e9ecef;\n}\n.testimonial-author i {\n  opacity: 0.8;\n}\n.tech-logo {\n  min-width: 80px;\n}\n.tech-logo i {\n  transition: all 0.3s ease;\n}\n.tech-logo:hover i {\n  transform: scale(1.1);\n  opacity: 1 !important;\n}\n.whatsapp-float {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background: #25d366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.whatsapp-float:hover {\n  background: #1ebe57;\n  transform: scale(1.1);\n  text-decoration: none;\n  color: white;\n}\n.whatsapp-float:hover .whatsapp-tooltip {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-10px);\n}\n.whatsapp-tooltip {\n  position: absolute;\n  right: 70px;\n  background: #333;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  transform: translateX(10px);\n}\n.whatsapp-tooltip::after {\n  content: "";\n  position: absolute;\n  right: -5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid #333;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n@media (max-width: 768px) {\n  .whatsapp-float {\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n  }\n  .timeline::before {\n    left: 30px;\n  }\n  .timeline-item:nth-child(odd) .timeline-content,\n  .timeline-item:nth-child(even) .timeline-content {\n    margin-left: 80px;\n    margin-right: 0;\n    padding-left: 0;\n    padding-right: 0;\n    text-align: left;\n  }\n  .timeline-marker {\n    left: 30px;\n  }\n}\n/*# sourceMappingURL=tech-equity.component.css.map */\n'] }]
  }], () => [{ type: Title }, { type: Meta }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechEquityComponent, { className: "TechEquityComponent", filePath: "src/app/modules/tech-equity/tech-equity.component.ts", lineNumber: 12 });
})();

// src/app/modules/tech-equity/tech-equity.module.ts
var TechEquityModule = class _TechEquityModule {
  static {
    this.\u0275fac = function TechEquityModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TechEquityModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TechEquityModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule.forChild([
        { path: "", component: TechEquityComponent }
      ])
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TechEquityModule, [{
    type: NgModule,
    args: [{
      declarations: [
        TechEquityComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild([
          { path: "", component: TechEquityComponent }
        ])
      ]
    }]
  }], null, null);
})();
export {
  TechEquityModule
};
//# sourceMappingURL=tech-equity.module-24BCUH77.js.map
