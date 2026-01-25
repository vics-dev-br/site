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

// src/app/modules/tech-demanda/tech-demanda.component.ts
var TechDemandaComponent = class _TechDemandaComponent {
  constructor(titleService, metaService, platformId, document) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.platformId = platformId;
    this.document = document;
  }
  ngOnInit() {
    this.titleService.setTitle("Tecnologia sob Demanda para Acelerar seu Neg\xF3cio | VICS");
    this.metaService.updateTag({
      name: "description",
      content: "Desenvolvimento de software sob demanda. Transforme sua ideia em produto digital com especialistas de alto n\xEDvel t\xE9cnico e entrega \xE1gil."
    });
    this.metaService.updateTag({
      name: "keywords",
      content: "tecnologia sob demanda, desenvolvimento software, MVP, startup, consultoria t\xE9cnica, desenvolvimento \xE1gil"
    });
    this.metaService.updateTag({
      property: "og:title",
      content: "Tecnologia sob Demanda | Acelere seu Neg\xF3cio com VICS"
    });
    this.metaService.updateTag({
      property: "og:description",
      content: "Especialistas em desenvolvimento de software sob demanda. Do conceito ao produto final em tempo recorde."
    });
    this.metaService.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/tech-demanda"
    });
    this.metaService.updateTag({
      property: "og:type",
      content: "website"
    });
    this.metaService.updateTag({
      name: "twitter:card",
      content: "summary_large_image"
    });
    this.metaService.updateTag({
      name: "twitter:title",
      content: "Tecnologia sob Demanda | VICS"
    });
    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", "https://www.vics.dev.br/tech-demanda");
      this.document.head.appendChild(link);
      const script = this.document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Tecnologia sob Demanda",
        "description": "Desenvolvimento de software personalizado sob demanda para acelerar neg\xF3cios digitais",
        "provider": {
          "@type": "Organization",
          "name": "VICS",
          "url": "https://www.vics.dev.br"
        },
        "areaServed": "BR",
        "serviceType": "Desenvolvimento de Software"
      });
      this.document.head.appendChild(script);
    }
  }
  scrollToConsultation() {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById("consultation-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
  openWhatsApp() {
    const message = encodeURIComponent("Ol\xE1! Quero uma consultoria para acelerar meu neg\xF3cio com tecnologia sob demanda!");
    if (typeof gtag !== "undefined") {
      gtag("event", "whatsapp_click", {
        "event_category": "contact",
        "event_label": "tech_demanda_consultation"
      });
    }
    window.open(`https://wa.me/5531975474785?text=${message}`, "_blank");
  }
  static {
    this.\u0275fac = function TechDemandaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TechDemandaComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechDemandaComponent, selectors: [["app-tech-demanda"]], standalone: false, decls: 326, vars: 0, consts: [[1, "hero-section", "tech-demanda-hero"], [1, "container"], [1, "row", "align-items-center", "min-vh-100"], ["data-aos", "fade-right", 1, "col-lg-6"], [1, "hero-badge", "mb-4"], [1, "badge", "bg-success-subtle", "text-success", "px-4", "py-2"], [1, "display-3", "fw-bold", "mb-4"], [1, "text-gradient"], [1, "lead", "fs-4", "mb-5", "text-muted"], [1, "d-flex", "flex-column", "flex-sm-row", "gap-3", "mb-5"], [1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow-lg", 3, "click"], [1, "fas", "fa-rocket", "me-2"], ["onclick", "gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_demanda_hero'});", 1, "btn", "btn-outline-success", "btn-lg", "px-5", "py-3", 3, "click"], [1, "fab", "fa-whatsapp", "me-2"], [1, "trust-metrics", "d-flex", "flex-wrap", "gap-4", "text-muted"], [1, "metric-item"], [1, "fs-4", "text-success", "d-block"], ["data-aos", "fade-left", "data-aos-delay", "200", 1, "col-lg-6"], [1, "hero-image", "text-center"], [1, "tech-illustration"], [1, "fas", "fa-laptop-code", "display-1", "text-success", "mb-4"], [1, "floating-icons"], [1, "fab", "fa-angular", "text-danger"], [1, "fab", "fa-react", "text-info"], [1, "fab", "fa-node-js", "text-success"], [1, "fab", "fa-python", "text-warning"], [1, "fab", "fa-aws", "text-warning"], [1, "py-5", "bg-light"], [1, "text-center", "mb-5"], ["data-aos", "fade-up", 1, "display-5", "fw-bold", "mb-4"], [1, "text-success"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead"], [1, "row", "g-4"], ["data-aos", "fade-up", 1, "col-md-4"], [1, "benefit-card", "h-100"], [1, "benefit-icon"], [1, "fas", "fa-clock", "text-success"], [1, "fw-bold", "mb-3"], [1, "text-muted"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-md-4"], [1, "fas", "fa-star", "text-success"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-md-4"], [1, "fas", "fa-chart-line", "text-success"], [1, "py-5"], ["data-aos", "fade-up", 1, "col-lg-4", "col-md-6"], [1, "service-card", "h-100"], [1, "service-icon"], [1, "fas", "fa-sitemap", "text-success"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-lg-4", "col-md-6"], [1, "fas", "fa-chart-bar", "text-success"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-lg-4", "col-md-6"], [1, "fas", "fa-shield-alt", "text-success"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], [1, "fas", "fa-cloud", "text-success"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-lg-4", "col-md-6"], [1, "fas", "fa-globe", "text-success"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-lg-4", "col-md-6"], [1, "fas", "fa-cogs", "text-success"], [1, "row", "g-5", "align-items-center"], [1, "process-steps"], [1, "step-item"], [1, "step-number"], [1, "step-content"], [1, "fw-bold"], [1, "text-muted", "mb-0"], ["data-aos", "fade-left", 1, "col-lg-6"], [1, "process-illustration", "bg-light", "rounded-4", "p-5", "text-center"], [1, "fas", "fa-cogs", "display-1", "text-success", "mb-4"], [1, "testimonial-card"], [1, "stars", "mb-3"], [1, "fas", "fa-star", "text-warning"], [1, "mb-4"], [1, "testimonial-author"], [1, "author-avatar"], [1, "fas", "fa-user-tie"], [1, "fas", "fa-user-md"], [1, "fas", "fa-user-circle"], ["id", "consultation-section", 1, "py-5", "bg-dark", "text-white"], ["data-aos", "fade-up", 1, "display-5", "fw-bold", "mb-4", "text-white"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead", "fs-4", "text-light"], [1, "text-warning"], [1, "row", "justify-content-center"], [1, "col-lg-8"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "consultation-card", "bg-white", "rounded-4", "p-5", "shadow-lg", "text-center"], [1, "icon-large", "mb-3"], [1, "fas", "fa-comments", "fa-4x", "text-success"], [1, "lead", "text-muted", "mb-4"], [1, "row", "g-3", "mb-4"], [1, "col-md-4"], [1, "consultation-benefit"], [1, "fas", "fa-search", "text-success", "mb-2"], [1, "mb-0", "fw-semibold"], [1, "fas", "fa-road", "text-success", "mb-2"], [1, "fas", "fa-calculator", "text-success", "mb-2"], [1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow-lg", "mb-4", 3, "click"], [1, "mt-2", "text-muted", "small"], [1, "fas", "fa-shield-alt", "me-1"], [1, "contact-info", "mt-4", "text-muted", "small"], [1, "mb-1"], [1, "fas", "fa-envelope", "me-2"], ["href", "mailto:cristiano@engenhariadedados.tec.br", "onclick", "gtag('event', 'email_click', {'event_category': 'contact', 'event_label': 'tech_demanda_page'});", 1, "text-muted"], [1, "mb-0"], [1, "fab", "fa-linkedin", "me-2"], ["href", "https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true", "target", "_blank", 1, "text-muted"], ["href", "https://wa.me/5531975474785?text=Ol\xE1!%20Quero%20uma%20consultoria%20para%20acelerar%20meu%20neg\xF3cio%20com%20tecnologia%20sob%20demanda!", "target", "_blank", "aria-label", "Consultoria WhatsApp", 1, "whatsapp-float"], [1, "fab", "fa-whatsapp", "fa-2x"], [1, "whatsapp-tooltip"]], template: function TechDemandaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "\u{1F4A1} Tecnologia Sob Demanda");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8, " Acelere seu neg\xF3cio com");
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11, "especialistas de alto n\xEDvel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, " Solu\xE7\xF5es tech r\xE1pidas, ");
        \u0275\u0275elementStart(14, "strong");
        \u0275\u0275text(15, "sem burocracia");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, ".");
        \u0275\u0275element(17, "br");
        \u0275\u0275text(18, " Desenvolvemos MVPs, plataformas e sistemas com ");
        \u0275\u0275elementStart(19, "strong");
        \u0275\u0275text(20, "squad sob demanda");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 9)(23, "button", 10);
        \u0275\u0275listener("click", function TechDemandaComponent_Template_button_click_23_listener() {
          return ctx.scrollToConsultation();
        });
        \u0275\u0275element(24, "i", 11);
        \u0275\u0275text(25, " Quero acelerar meu neg\xF3cio ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 12);
        \u0275\u0275listener("click", function TechDemandaComponent_Template_button_click_26_listener() {
          return ctx.openWhatsApp();
        });
        \u0275\u0275element(27, "i", 13);
        \u0275\u0275text(28, " Falar com especialista ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 14)(30, "div", 15)(31, "strong", 16);
        \u0275\u0275text(32, "40+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34, "Projetos entregues");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 15)(36, "strong", 16);
        \u0275\u0275text(37, "25+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "span");
        \u0275\u0275text(39, "Empresas atendidas");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 15)(41, "strong", 16);
        \u0275\u0275text(42, "100%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44, "Satisfa\xE7\xE3o garantida");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(45, "div", 17)(46, "div", 18)(47, "div", 19);
        \u0275\u0275element(48, "i", 20);
        \u0275\u0275elementStart(49, "div", 21);
        \u0275\u0275element(50, "i", 22)(51, "i", 23)(52, "i", 24)(53, "i", 25)(54, "i", 26);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(55, "section", 27)(56, "div", 1)(57, "div", 28)(58, "h2", 29);
        \u0275\u0275text(59, " Por que escolher tecnologia ");
        \u0275\u0275elementStart(60, "span", 30);
        \u0275\u0275text(61, "sob demanda");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, "? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 31);
        \u0275\u0275text(64, " Sem burocracia, sem equipe fixa, sem complica\xE7\xE3o. ");
        \u0275\u0275elementStart(65, "strong");
        \u0275\u0275text(66, "S\xF3 resultados.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div", 32)(68, "div", 33)(69, "div", 34)(70, "div", 35);
        \u0275\u0275element(71, "i", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "h4", 37);
        \u0275\u0275text(73, "Rapidez na entrega");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p", 38);
        \u0275\u0275text(75, " Comece hoje, veja resultados em ");
        \u0275\u0275elementStart(76, "strong");
        \u0275\u0275text(77, "semanas");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, ". N\xE3o perca tempo com contrata\xE7\xF5es e treinamentos. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 39)(80, "div", 34)(81, "div", 35);
        \u0275\u0275element(82, "i", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "h4", 37);
        \u0275\u0275text(84, "Especialistas de alto n\xEDvel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p", 38);
        \u0275\u0275text(86, " Acesso imediato aos ");
        \u0275\u0275elementStart(87, "strong");
        \u0275\u0275text(88, "melhores profissionais");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " sem os custos de uma equipe interna. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(90, "div", 41)(91, "div", 34)(92, "div", 35);
        \u0275\u0275element(93, "i", 42);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "h4", 37);
        \u0275\u0275text(95, "Flexibilidade total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p", 38);
        \u0275\u0275text(97, " Escale para cima ou para baixo conforme sua necessidade. ");
        \u0275\u0275elementStart(98, "strong");
        \u0275\u0275text(99, "Pague apenas pelo que usar.");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(100, "section", 43)(101, "div", 1)(102, "div", 28)(103, "h2", 29);
        \u0275\u0275text(104, " \u{1F9E9} Nossos ");
        \u0275\u0275elementStart(105, "span", 30);
        \u0275\u0275text(106, "Servi\xE7os");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "p", 31);
        \u0275\u0275text(108, " Solu\xE7\xF5es completas para transformar e acelerar seu neg\xF3cio ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 32)(110, "div", 44)(111, "div", 45)(112, "div", 46);
        \u0275\u0275element(113, "i", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "h4", 37);
        \u0275\u0275text(115, "\u{1F5A5}\uFE0F Integra\xE7\xE3o de Sistemas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p", 38);
        \u0275\u0275text(117, " Conectamos diferentes plataformas e fontes de dados para que tudo funcione de forma integrada e fluida na sua opera\xE7\xE3o. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(118, "div", 48)(119, "div", 45)(120, "div", 46);
        \u0275\u0275element(121, "i", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "h4", 37);
        \u0275\u0275text(123, "\u{1F4CA} Modelagem e Previs\xF5es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "p", 38);
        \u0275\u0275text(125, " Usamos t\xE9cnicas avan\xE7adas para analisar padr\xF5es nos dados e prever comportamentos, ajudando voc\xEA a se antecipar ao mercado. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(126, "div", 50)(127, "div", 45)(128, "div", 46);
        \u0275\u0275element(129, "i", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "h4", 37);
        \u0275\u0275text(131, "\u{1F510} Transfer\xEAncia Segura de Dados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p", 38);
        \u0275\u0275text(133, " Migramos dados entre sistemas com seguran\xE7a, reduzindo riscos e garantindo que nada se perca no processo. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(134, "div", 52)(135, "div", 45)(136, "div", 46);
        \u0275\u0275element(137, "i", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "h4", 37);
        \u0275\u0275text(139, "\u2601\uFE0F Solu\xE7\xF5es em Nuvem");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "p", 38);
        \u0275\u0275text(141, " Implantamos solu\xE7\xF5es que rodam na nuvem com seguran\xE7a, reduzindo custos e aumentando a escalabilidade do seu neg\xF3cio. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(142, "div", 54)(143, "div", 45)(144, "div", 46);
        \u0275\u0275element(145, "i", 55);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "h4", 37);
        \u0275\u0275text(147, "\u{1F310} Sites e Aplica\xE7\xF5es Web");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "p", 38);
        \u0275\u0275text(149, " Criamos interfaces modernas, r\xE1pidas e responsivas para sua empresa se destacar na web e oferecer uma \xF3tima experi\xEAncia ao usu\xE1rio. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(150, "div", 56)(151, "div", 45)(152, "div", 46);
        \u0275\u0275element(153, "i", 57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "h4", 37);
        \u0275\u0275text(155, "\u2699\uFE0F Sistemas Personalizados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "p", 38);
        \u0275\u0275text(157, " Desenvolvemos sistemas sob medida para atender as necessidades espec\xEDficas do seu neg\xF3cio, com processos otimizados e eficientes. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(158, "section", 43)(159, "div", 1)(160, "div", 28)(161, "h2", 29);
        \u0275\u0275text(162, " Como funciona na ");
        \u0275\u0275elementStart(163, "span", 30);
        \u0275\u0275text(164, "pr\xE1tica");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(165, "p", 31);
        \u0275\u0275text(166, " Processo simples e transparente para acelerar seu projeto ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "div", 58)(168, "div", 3)(169, "div", 59)(170, "div", 60)(171, "div", 61);
        \u0275\u0275text(172, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 62)(174, "h4", 63);
        \u0275\u0275text(175, "Consultoria personalizada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "p", 64);
        \u0275\u0275text(177, " Conversamos sobre seu projeto, entendemos suas necessidades e definimos a melhor estrat\xE9gia t\xE9cnica. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "div", 60)(179, "div", 61);
        \u0275\u0275text(180, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(181, "div", 62)(182, "h4", 63);
        \u0275\u0275text(183, "Plano sob medida");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "p", 64);
        \u0275\u0275text(185, " Criamos um plano de desenvolvimento personalizado com prazos realistas e or\xE7amento transparente. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div", 60)(187, "div", 61);
        \u0275\u0275text(188, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "div", 62)(190, "h4", 63);
        \u0275\u0275text(191, "Entrega \xE1gil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "p", 64);
        \u0275\u0275text(193, " Desenvolvimento iterativo com entregas frequentes. Voc\xEA acompanha o progresso em tempo real. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(194, "div", 65)(195, "div", 66);
        \u0275\u0275element(196, "i", 67);
        \u0275\u0275elementStart(197, "h4", 37);
        \u0275\u0275text(198, "Metodologia comprovada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "p", 38);
        \u0275\u0275text(200, " Utilizamos as melhores pr\xE1ticas do mercado para garantir qualidade e efici\xEAncia em cada projeto. ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(201, "section", 27)(202, "div", 1)(203, "div", 28)(204, "h2", 29);
        \u0275\u0275text(205, " O que nossos ");
        \u0275\u0275elementStart(206, "span", 30);
        \u0275\u0275text(207, "parceiros");
        \u0275\u0275elementEnd();
        \u0275\u0275text(208, " dizem ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(209, "div", 32)(210, "div", 33)(211, "div", 68)(212, "div", 69);
        \u0275\u0275element(213, "i", 70)(214, "i", 70)(215, "i", 70)(216, "i", 70)(217, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "blockquote", 71);
        \u0275\u0275text(219, ' "O sistema de gest\xE3o judicial revolucionou nossa advocacia. Reduzimos 70% do tempo em tarefas administrativas." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "div", 72)(221, "div", 73);
        \u0275\u0275element(222, "i", 74);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "div")(224, "strong");
        \u0275\u0275text(225, "Dr. Ricardo Silva");
        \u0275\u0275elementEnd();
        \u0275\u0275element(226, "br");
        \u0275\u0275elementStart(227, "span", 38);
        \u0275\u0275text(228, "Projeto JurisRails");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(229, "div", 39)(230, "div", 68)(231, "div", 69);
        \u0275\u0275element(232, "i", 70)(233, "i", 70)(234, "i", 70)(235, "i", 70)(236, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "blockquote", 71);
        \u0275\u0275text(238, ' "A plataforma de sa\xFAde p\xFAblica otimizou nosso atendimento. Conseguimos atender 3x mais pacientes com qualidade." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "div", 72)(240, "div", 73);
        \u0275\u0275element(241, "i", 75);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(242, "div")(243, "strong");
        \u0275\u0275text(244, "Dra. Ana Costa");
        \u0275\u0275elementEnd();
        \u0275\u0275element(245, "br");
        \u0275\u0275elementStart(246, "span", 38);
        \u0275\u0275text(247, "Projeto Sa\xFAde P\xFAblica");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(248, "div", 41)(249, "div", 68)(250, "div", 69);
        \u0275\u0275element(251, "i", 70)(252, "i", 70)(253, "i", 70)(254, "i", 70)(255, "i", 70);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(256, "blockquote", 71);
        \u0275\u0275text(257, ' "O gateway de pagamentos XPay simplificou nossa opera\xE7\xE3o financeira. Processamento 50% mais r\xE1pido e zero erros." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "div", 72)(259, "div", 73);
        \u0275\u0275element(260, "i", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "div")(262, "strong");
        \u0275\u0275text(263, "Carlos Mendes");
        \u0275\u0275elementEnd();
        \u0275\u0275element(264, "br");
        \u0275\u0275elementStart(265, "span", 38);
        \u0275\u0275text(266, "Projeto XPay");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(267, "section", 77)(268, "div", 1)(269, "div", 28)(270, "h2", 78);
        \u0275\u0275text(271, " Pronto para acelerar seu neg\xF3cio? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(272, "p", 79)(273, "strong", 80);
        \u0275\u0275text(274, "Consultoria gratuita");
        \u0275\u0275elementEnd();
        \u0275\u0275text(275, " para analisar seu projeto");
        \u0275\u0275element(276, "br");
        \u0275\u0275text(277, " e criar um plano personalizado ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(278, "div", 81)(279, "div", 82)(280, "div", 83)(281, "div", 71)(282, "div", 84);
        \u0275\u0275element(283, "i", 85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "h3", 37);
        \u0275\u0275text(285, "Consultoria Gratuita de 45 minutos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "p", 86);
        \u0275\u0275text(287, " Vamos analisar seu projeto e mostrar exatamente como acelerar seu desenvolvimento com nossa metodologia comprovada ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(288, "div", 87)(289, "div", 88)(290, "div", 89);
        \u0275\u0275element(291, "i", 90);
        \u0275\u0275elementStart(292, "p", 91);
        \u0275\u0275text(293, "An\xE1lise t\xE9cnica completa");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(294, "div", 88)(295, "div", 89);
        \u0275\u0275element(296, "i", 92);
        \u0275\u0275elementStart(297, "p", 91);
        \u0275\u0275text(298, "Roadmap personalizado");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(299, "div", 88)(300, "div", 89);
        \u0275\u0275element(301, "i", 93);
        \u0275\u0275elementStart(302, "p", 91);
        \u0275\u0275text(303, "Or\xE7amento transparente");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(304, "button", 94);
        \u0275\u0275listener("click", function TechDemandaComponent_Template_button_click_304_listener() {
          return ctx.openWhatsApp();
        });
        \u0275\u0275element(305, "i", 13);
        \u0275\u0275text(306, " Quero minha consultoria gratuita ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "p", 95);
        \u0275\u0275element(308, "i", 96);
        \u0275\u0275text(309, " 100% gratuito \u2022 Sem compromisso \u2022 Resposta em at\xE9 2 horas ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(310, "div", 97)(311, "p", 98);
        \u0275\u0275element(312, "i", 99);
        \u0275\u0275elementStart(313, "a", 100);
        \u0275\u0275text(314, " cristiano@engenhariadedados.tec.br ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(315, "p", 98);
        \u0275\u0275element(316, "i", 13);
        \u0275\u0275text(317, " +55 (31) 97547-4785 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(318, "p", 101);
        \u0275\u0275element(319, "i", 102);
        \u0275\u0275elementStart(320, "a", 103);
        \u0275\u0275text(321, " linkedin.com/company/vicsdevbr ");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(322, "a", 104);
        \u0275\u0275element(323, "i", 105);
        \u0275\u0275elementStart(324, "span", 106);
        \u0275\u0275text(325, "Consultoria gratuita!");
        \u0275\u0275elementEnd()();
      }
    }, styles: ['\n\n.tech-demanda-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding-top: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.tech-demanda-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(25, 135, 84, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.text-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #198754 0%,\n      #146c43 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: 1px solid rgba(25, 135, 84, 0.2);\n}\n.trust-metrics[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #dee2e6;\n}\n.trust-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n@media (max-width: 576px) {\n  .trust-metrics[_ngcontent-%COMP%]   .metric-item[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tech-illustration[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 3rem;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2rem;\n  opacity: 0.7;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  top: 30%;\n  right: 15%;\n  animation-delay: 0.5s;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 40%;\n  left: 20%;\n  animation-delay: 1s;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  bottom: 20%;\n  right: 10%;\n  animation-delay: 1.5s;\n}\n.tech-illustration[_ngcontent-%COMP%]   .floating-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  animation-delay: 2s;\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.benefit-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2.5rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  transition: all 0.3s ease;\n  border-top: 4px solid #198754;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: rgba(25, 135, 84, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.benefit-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.process-steps[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 3rem;\n}\n.process-steps[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.step-number[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  background: #198754;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\n.step-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 0.5rem;\n}\n.process-illustration[_ngcontent-%COMP%] {\n  position: relative;\n}\n.process-illustration[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  right: -20px;\n  bottom: -20px;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(25, 135, 84, 0.05),\n      rgba(25, 135, 84, 0.1));\n  border-radius: 20px;\n  z-index: -1;\n}\n.service-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border-left: 4px solid #198754;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.service-icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background: rgba(25, 135, 84, 0.1);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.service-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  height: 100%;\n  transition: all 0.3s ease;\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n.testimonial-author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.author-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #198754;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.consultation-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.icon-large[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n.consultation-benefit[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.consultation-benefit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  display: block;\n}\n.contact-info[_ngcontent-%COMP%] {\n  background: rgba(25, 135, 84, 0.05);\n  padding: 1rem;\n  border-radius: 8px;\n}\n.contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.whatsapp-float[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background: #25d366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover {\n  background: #1ebe57;\n  transform: scale(1.1);\n  text-decoration: none;\n  color: white;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover   .whatsapp-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-10px);\n}\n.whatsapp-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 70px;\n  background: #333;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  transform: translateX(10px);\n}\n.whatsapp-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid #333;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n@media (max-width: 768px) {\n  .tech-demanda-hero[_ngcontent-%COMP%] {\n    padding-top: 60px;\n  }\n  .tech-demanda-hero[_ngcontent-%COMP%]   .display-3[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .benefit-card[_ngcontent-%COMP%] {\n    padding: 2rem;\n  }\n  .service-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .process-steps[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n  .process-steps[_ngcontent-%COMP%]   .step-item[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .testimonial-card[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .consultation-card[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n  .whatsapp-float[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n  }\n  .floating-icons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=tech-demanda.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TechDemandaComponent, [{
    type: Component,
    args: [{ selector: "app-tech-demanda", standalone: false, template: `<!-- Hero Section - Aplicando Dica 1: Proposta de valor clara above the fold -->
<section class="hero-section tech-demanda-hero">
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div class="col-lg-6" data-aos="fade-right">
        <div class="hero-badge mb-4">
          <span class="badge bg-success-subtle text-success px-4 py-2">\u{1F4A1} Tecnologia Sob Demanda</span>
        </div>
        <h1 class="display-3 fw-bold mb-4">
          Acelere seu neg\xF3cio com<br>
          <span class="text-gradient">especialistas de alto n\xEDvel</span>
        </h1>
        <p class="lead fs-4 mb-5 text-muted">
          Solu\xE7\xF5es tech r\xE1pidas, <strong>sem burocracia</strong>.<br>
          Desenvolvemos MVPs, plataformas e sistemas com <strong>squad sob demanda</strong>.
        </p>
        
        <!-- Dica 2: CTA \xFAnico e claro -->
        <div class="d-flex flex-column flex-sm-row gap-3 mb-5">
          <button class="btn btn-success btn-lg px-5 py-3 shadow-lg" (click)="scrollToConsultation()">
            <i class="fas fa-rocket me-2"></i>
            Quero acelerar meu neg\xF3cio
          </button>
          <button class="btn btn-outline-success btn-lg px-5 py-3" (click)="openWhatsApp()" onclick="gtag('event', 'whatsapp_click', {'event_category': 'contact', 'event_label': 'tech_demanda_hero'});">
            <i class="fab fa-whatsapp me-2"></i>
            Falar com especialista
          </button>
        </div>

        <!-- Dica 4: Prova social logo de in\xEDcio -->
        <div class="trust-metrics d-flex flex-wrap gap-4 text-muted">
          <div class="metric-item">
            <strong class="fs-4 text-success d-block">40+</strong>
            <span>Projetos entregues</span>
          </div>
          <div class="metric-item">
            <strong class="fs-4 text-success d-block">25+</strong>
            <span>Empresas atendidas</span>
          </div>
          <div class="metric-item">
            <strong class="fs-4 text-success d-block">100%</strong>
            <span>Satisfa\xE7\xE3o garantida</span>
          </div>
        </div>
      </div>
      
      <!-- Dica 3: Imagem que reforce o benef\xEDcio -->
      <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
        <div class="hero-image text-center">
          <div class="tech-illustration">
            <i class="fas fa-laptop-code display-1 text-success mb-4"></i>
            <div class="floating-icons">
              <i class="fab fa-angular text-danger"></i>
              <i class="fab fa-react text-info"></i>
              <i class="fab fa-node-js text-success"></i>
              <i class="fab fa-python text-warning"></i>
              <i class="fab fa-aws text-warning"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Benef\xEDcios - Dica 6: Foque nos benef\xEDcios, n\xE3o funcionalidades -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">
        Por que escolher tecnologia <span class="text-success">sob demanda</span>?
      </h2>
      <p class="lead" data-aos="fade-up" data-aos-delay="100">
        Sem burocracia, sem equipe fixa, sem complica\xE7\xE3o. <strong>S\xF3 resultados.</strong>
      </p>
    </div>
    
    <div class="row g-4">
      <div class="col-md-4" data-aos="fade-up">
        <div class="benefit-card h-100">
          <div class="benefit-icon">
            <i class="fas fa-clock text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">Rapidez na entrega</h4>
          <p class="text-muted">
            Comece hoje, veja resultados em <strong>semanas</strong>. 
            N\xE3o perca tempo com contrata\xE7\xF5es e treinamentos.
          </p>
        </div>
      </div>
      
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="benefit-card h-100">
          <div class="benefit-icon">
            <i class="fas fa-star text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">Especialistas de alto n\xEDvel</h4>
          <p class="text-muted">
            Acesso imediato aos <strong>melhores profissionais</strong> 
            sem os custos de uma equipe interna.
          </p>
        </div>
      </div>
      
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="benefit-card h-100">
          <div class="benefit-icon">
            <i class="fas fa-chart-line text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">Flexibilidade total</h4>
          <p class="text-muted">
            Escale para cima ou para baixo conforme sua necessidade. 
            <strong>Pague apenas pelo que usar.</strong>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Nossos Servi\xE7os -->
<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">
        \u{1F9E9} Nossos <span class="text-success">Servi\xE7os</span>
      </h2>
      <p class="lead" data-aos="fade-up" data-aos-delay="100">
        Solu\xE7\xF5es completas para transformar e acelerar seu neg\xF3cio
      </p>
    </div>
    
    <div class="row g-4">
      <div class="col-lg-4 col-md-6" data-aos="fade-up">
        <div class="service-card h-100">
          <div class="service-icon">
            <i class="fas fa-sitemap text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">\u{1F5A5}\uFE0F Integra\xE7\xE3o de Sistemas</h4>
          <p class="text-muted">
            Conectamos diferentes plataformas e fontes de dados para que tudo funcione 
            de forma integrada e fluida na sua opera\xE7\xE3o.
          </p>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
        <div class="service-card h-100">
          <div class="service-icon">
            <i class="fas fa-chart-bar text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">\u{1F4CA} Modelagem e Previs\xF5es</h4>
          <p class="text-muted">
            Usamos t\xE9cnicas avan\xE7adas para analisar padr\xF5es nos dados e prever 
            comportamentos, ajudando voc\xEA a se antecipar ao mercado.
          </p>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
        <div class="service-card h-100">
          <div class="service-icon">
            <i class="fas fa-shield-alt text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">\u{1F510} Transfer\xEAncia Segura de Dados</h4>
          <p class="text-muted">
            Migramos dados entre sistemas com seguran\xE7a, reduzindo riscos e 
            garantindo que nada se perca no processo.
          </p>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
        <div class="service-card h-100">
          <div class="service-icon">
            <i class="fas fa-cloud text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">\u2601\uFE0F Solu\xE7\xF5es em Nuvem</h4>
          <p class="text-muted">
            Implantamos solu\xE7\xF5es que rodam na nuvem com seguran\xE7a, reduzindo 
            custos e aumentando a escalabilidade do seu neg\xF3cio.
          </p>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
        <div class="service-card h-100">
          <div class="service-icon">
            <i class="fas fa-globe text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">\u{1F310} Sites e Aplica\xE7\xF5es Web</h4>
          <p class="text-muted">
            Criamos interfaces modernas, r\xE1pidas e responsivas para sua empresa se 
            destacar na web e oferecer uma \xF3tima experi\xEAncia ao usu\xE1rio.
          </p>
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
        <div class="service-card h-100">
          <div class="service-icon">
            <i class="fas fa-cogs text-success"></i>
          </div>
          <h4 class="fw-bold mb-3">\u2699\uFE0F Sistemas Personalizados</h4>
          <p class="text-muted">
            Desenvolvemos sistemas sob medida para atender as necessidades espec\xEDficas 
            do seu neg\xF3cio, com processos otimizados e eficientes.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Como funciona - Dica 5: Escaneabilidade -->
<section class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">
        Como funciona na <span class="text-success">pr\xE1tica</span>
      </h2>
      <p class="lead" data-aos="fade-up" data-aos-delay="100">
        Processo simples e transparente para acelerar seu projeto
      </p>
    </div>
    
    <div class="row g-5 align-items-center">
      <div class="col-lg-6" data-aos="fade-right">
        <div class="process-steps">
          <div class="step-item">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4 class="fw-bold">Consultoria personalizada</h4>
              <p class="text-muted mb-0">
                Conversamos sobre seu projeto, entendemos suas necessidades 
                e definimos a melhor estrat\xE9gia t\xE9cnica.
              </p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4 class="fw-bold">Plano sob medida</h4>
              <p class="text-muted mb-0">
                Criamos um plano de desenvolvimento personalizado 
                com prazos realistas e or\xE7amento transparente.
              </p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4 class="fw-bold">Entrega \xE1gil</h4>
              <p class="text-muted mb-0">
                Desenvolvimento iterativo com entregas frequentes. 
                Voc\xEA acompanha o progresso em tempo real.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6" data-aos="fade-left">
        <div class="process-illustration bg-light rounded-4 p-5 text-center">
          <i class="fas fa-cogs display-1 text-success mb-4"></i>
          <h4 class="fw-bold mb-3">Metodologia comprovada</h4>
          <p class="text-muted">
            Utilizamos as melhores pr\xE1ticas do mercado para 
            garantir qualidade e efici\xEAncia em cada projeto.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Depoimentos - Dica 4: Provas sociais -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">
        O que nossos <span class="text-success">parceiros</span> dizem
      </h2>
    </div>
    
    <div class="row g-4">
      <div class="col-md-4" data-aos="fade-up">
        <div class="testimonial-card">
          <div class="stars mb-3">
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
          </div>
          <blockquote class="mb-4">
            "O sistema de gest\xE3o judicial revolucionou nossa advocacia. 
            Reduzimos 70% do tempo em tarefas administrativas."
          </blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">
              <i class="fas fa-user-tie"></i>
            </div>
            <div>
              <strong>Dr. Ricardo Silva</strong><br>
              <span class="text-muted">Projeto JurisRails</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="100">
        <div class="testimonial-card">
          <div class="stars mb-3">
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
          </div>
          <blockquote class="mb-4">
            "A plataforma de sa\xFAde p\xFAblica otimizou nosso atendimento. 
            Conseguimos atender 3x mais pacientes com qualidade."
          </blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">
              <i class="fas fa-user-md"></i>
            </div>
            <div>
              <strong>Dra. Ana Costa</strong><br>
              <span class="text-muted">Projeto Sa\xFAde P\xFAblica</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div class="testimonial-card">
          <div class="stars mb-3">
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
            <i class="fas fa-star text-warning"></i>
          </div>
          <blockquote class="mb-4">
            "O gateway de pagamentos XPay simplificou nossa opera\xE7\xE3o financeira. 
            Processamento 50% mais r\xE1pido e zero erros."
          </blockquote>
          <div class="testimonial-author">
            <div class="author-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div>
              <strong>Carlos Mendes</strong><br>
              <span class="text-muted">Projeto XPay</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA Principal - Dica 2: CTA claro e Dica 8: Formul\xE1rio simples (WhatsApp) -->
<section class="py-5 bg-dark text-white" id="consultation-section">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-4 text-white" data-aos="fade-up">
        Pronto para acelerar seu neg\xF3cio?
      </h2>
      <p class="lead fs-4 text-light" data-aos="fade-up" data-aos-delay="100">
        <strong class="text-warning">Consultoria gratuita</strong> para analisar seu projeto<br>
        e criar um plano personalizado
      </p>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="consultation-card bg-white rounded-4 p-5 shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="mb-4">
            <div class="icon-large mb-3">
              <i class="fas fa-comments fa-4x text-success"></i>
            </div>
            <h3 class="fw-bold mb-3">Consultoria Gratuita de 45 minutos</h3>
            <p class="lead text-muted mb-4">
              Vamos analisar seu projeto e mostrar exatamente como acelerar 
              seu desenvolvimento com nossa metodologia comprovada
            </p>
          </div>
          
          <div class="row g-3 mb-4">
            <div class="col-md-4">
              <div class="consultation-benefit">
                <i class="fas fa-search text-success mb-2"></i>
                <p class="mb-0 fw-semibold">An\xE1lise t\xE9cnica completa</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="consultation-benefit">
                <i class="fas fa-road text-success mb-2"></i>
                <p class="mb-0 fw-semibold">Roadmap personalizado</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="consultation-benefit">
                <i class="fas fa-calculator text-success mb-2"></i>
                <p class="mb-0 fw-semibold">Or\xE7amento transparente</p>
              </div>
            </div>
          </div>
          
          <button class="btn btn-success btn-lg px-5 py-3 shadow-lg mb-4" (click)="openWhatsApp()">
            <i class="fab fa-whatsapp me-2"></i>
            Quero minha consultoria gratuita
          </button>

          <p class="mt-2 text-muted small">
            <i class="fas fa-shield-alt me-1"></i>
            100% gratuito \u2022 Sem compromisso \u2022 Resposta em at\xE9 2 horas
          </p>
          
          <div class="contact-info mt-4 text-muted small">
            <p class="mb-1">
              <i class="fas fa-envelope me-2"></i>
              <a href="mailto:cristiano@engenhariadedados.tec.br" class="text-muted" onclick="gtag('event', 'email_click', {'event_category': 'contact', 'event_label': 'tech_demanda_page'});">
                cristiano&#64;engenhariadedados.tec.br
              </a>
            </p>
            <p class="mb-1">
              <i class="fab fa-whatsapp me-2"></i>
              +55 (31) 97547-4785
            </p>
            <p class="mb-0">
              <i class="fab fa-linkedin me-2"></i>
              <a href="https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true" target="_blank" class="text-muted">
                linkedin.com/company/vicsdevbr
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- WhatsApp Float Button -->
<a href="https://wa.me/5531975474785?text=Ol\xE1!%20Quero%20uma%20consultoria%20para%20acelerar%20meu%20neg\xF3cio%20com%20tecnologia%20sob%20demanda!" 
   class="whatsapp-float" target="_blank" aria-label="Consultoria WhatsApp">
  <i class="fab fa-whatsapp fa-2x"></i>
  <span class="whatsapp-tooltip">Consultoria gratuita!</span>
</a>`, styles: ['/* src/app/modules/tech-demanda/tech-demanda.component.scss */\n.tech-demanda-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding-top: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.tech-demanda-hero::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(25, 135, 84, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.text-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #198754 0%,\n      #146c43 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge .badge {\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: 1px solid rgba(25, 135, 84, 0.2);\n}\n.trust-metrics {\n  padding-top: 2rem;\n  border-top: 1px solid #dee2e6;\n}\n.trust-metrics .metric-item {\n  text-align: center;\n}\n@media (max-width: 576px) {\n  .trust-metrics .metric-item {\n    margin-bottom: 1rem;\n  }\n}\n.hero-image {\n  position: relative;\n}\n.tech-illustration {\n  position: relative;\n  padding: 3rem;\n}\n.tech-illustration .floating-icons {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.tech-illustration .floating-icons i {\n  position: absolute;\n  font-size: 2rem;\n  opacity: 0.7;\n  animation: float 3s ease-in-out infinite;\n}\n.tech-illustration .floating-icons i:nth-child(1) {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n}\n.tech-illustration .floating-icons i:nth-child(2) {\n  top: 30%;\n  right: 15%;\n  animation-delay: 0.5s;\n}\n.tech-illustration .floating-icons i:nth-child(3) {\n  bottom: 40%;\n  left: 20%;\n  animation-delay: 1s;\n}\n.tech-illustration .floating-icons i:nth-child(4) {\n  bottom: 20%;\n  right: 10%;\n  animation-delay: 1.5s;\n}\n.tech-illustration .floating-icons i:nth-child(5) {\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n  animation-delay: 2s;\n}\n@keyframes float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.benefit-card {\n  background: white;\n  padding: 2.5rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  text-align: center;\n  transition: all 0.3s ease;\n  border-top: 4px solid #198754;\n}\n.benefit-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.benefit-icon {\n  width: 80px;\n  height: 80px;\n  background: rgba(25, 135, 84, 0.1);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n}\n.benefit-icon i {\n  font-size: 2rem;\n}\n.process-steps .step-item {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 3rem;\n}\n.process-steps .step-item:last-child {\n  margin-bottom: 0;\n}\n.step-number {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  background: #198754;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin-right: 1.5rem;\n}\n.step-content {\n  flex: 1;\n  padding-top: 0.5rem;\n}\n.process-illustration {\n  position: relative;\n}\n.process-illustration::before {\n  content: "";\n  position: absolute;\n  top: -20px;\n  left: -20px;\n  right: -20px;\n  bottom: -20px;\n  background:\n    linear-gradient(\n      45deg,\n      rgba(25, 135, 84, 0.05),\n      rgba(25, 135, 84, 0.1));\n  border-radius: 20px;\n  z-index: -1;\n}\n.service-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border-left: 4px solid #198754;\n}\n.service-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.service-icon {\n  width: 70px;\n  height: 70px;\n  background: rgba(25, 135, 84, 0.1);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n.service-icon i {\n  font-size: 1.75rem;\n}\n.testimonial-card {\n  background: white;\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  height: 100%;\n  transition: all 0.3s ease;\n}\n.testimonial-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.stars i {\n  margin-right: 0.25rem;\n}\n.testimonial-author {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.author-avatar {\n  width: 50px;\n  height: 50px;\n  background: #198754;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.2rem;\n}\n.consultation-card {\n  position: relative;\n  z-index: 1;\n}\n.icon-large {\n  display: inline-block;\n  animation: bounce 2s infinite;\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n.consultation-benefit {\n  text-align: center;\n}\n.consultation-benefit i {\n  font-size: 1.5rem;\n  display: block;\n}\n.contact-info {\n  background: rgba(25, 135, 84, 0.05);\n  padding: 1rem;\n  border-radius: 8px;\n}\n.contact-info i {\n  color: #198754;\n}\n.whatsapp-float {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background: #25d366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.whatsapp-float:hover {\n  background: #1ebe57;\n  transform: scale(1.1);\n  text-decoration: none;\n  color: white;\n}\n.whatsapp-float:hover .whatsapp-tooltip {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-10px);\n}\n.whatsapp-tooltip {\n  position: absolute;\n  right: 70px;\n  background: #333;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  transform: translateX(10px);\n}\n.whatsapp-tooltip::after {\n  content: "";\n  position: absolute;\n  right: -5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid #333;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n@media (max-width: 768px) {\n  .tech-demanda-hero {\n    padding-top: 60px;\n  }\n  .tech-demanda-hero .display-3 {\n    font-size: 2.5rem;\n  }\n  .benefit-card {\n    padding: 2rem;\n  }\n  .service-card {\n    padding: 1.5rem;\n  }\n  .process-steps .step-item {\n    flex-direction: column;\n    text-align: center;\n    margin-bottom: 2rem;\n  }\n  .process-steps .step-item .step-number {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n  .testimonial-card {\n    padding: 1.5rem;\n  }\n  .consultation-card {\n    padding: 3rem 1.5rem;\n  }\n  .whatsapp-float {\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n  }\n  .floating-icons {\n    display: none;\n  }\n}\n/*# sourceMappingURL=tech-demanda.component.css.map */\n'] }]
  }], () => [{ type: Title }, { type: Meta }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechDemandaComponent, { className: "TechDemandaComponent", filePath: "src/app/modules/tech-demanda/tech-demanda.component.ts", lineNumber: 12 });
})();

// src/app/modules/tech-demanda/tech-demanda.module.ts
var routes = [
  {
    path: "",
    component: TechDemandaComponent
  }
];
var TechDemandaModule = class _TechDemandaModule {
  static {
    this.\u0275fac = function TechDemandaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TechDemandaModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _TechDemandaModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TechDemandaModule, [{
    type: NgModule,
    args: [{
      declarations: [
        TechDemandaComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild(routes)
      ]
    }]
  }], null, null);
})();
export {
  TechDemandaModule
};
//# sourceMappingURL=tech-demanda.module-2DOICDEY.js.map
