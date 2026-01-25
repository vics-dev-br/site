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

// src/app/modules/landing-tips/landing-tips.component.ts
var LandingTipsComponent = class _LandingTipsComponent {
  constructor(titleService, metaService, platformId, document) {
    this.titleService = titleService;
    this.metaService = metaService;
    this.platformId = platformId;
    this.document = document;
  }
  ngOnInit() {
    this.titleService.setTitle("10 Dicas para Landing Pages de Alta Convers\xE3o | VICS");
    this.metaService.updateTag({
      name: "description",
      content: "10 dicas pr\xE1ticas de marketing digital para criar landing pages que convertem. Aumente suas vendas online com estrat\xE9gias comprovadas."
    });
    this.metaService.updateTag({
      name: "keywords",
      content: "landing page, convers\xE3o, marketing digital, CRO, otimiza\xE7\xE3o, vendas online, dicas de marketing"
    });
    this.metaService.updateTag({
      property: "og:title",
      content: "10 Dicas para Landing Pages de Alta Convers\xE3o | VICS"
    });
    this.metaService.updateTag({
      property: "og:description",
      content: "Aprenda as estrat\xE9gias de convers\xE3o usadas pelos melhores profissionais de marketing digital."
    });
    this.metaService.updateTag({
      property: "og:url",
      content: "https://www.vics.dev.br/landing-tips"
    });
    this.metaService.updateTag({
      property: "og:type",
      content: "article"
    });
    this.metaService.updateTag({
      name: "twitter:card",
      content: "summary_large_image"
    });
    this.metaService.updateTag({
      name: "twitter:title",
      content: "10 Dicas para Landing Pages de Alta Convers\xE3o"
    });
    if (isPlatformBrowser(this.platformId)) {
      const link = this.document.querySelector("link[rel='canonical']") || this.document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", "https://www.vics.dev.br/landing-tips");
      this.document.head.appendChild(link);
    }
  }
  scrollToCTA() {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById("cta-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }
  static {
    this.\u0275fac = function LandingTipsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingTipsComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(DOCUMENT));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingTipsComponent, selectors: [["app-landing-tips"]], standalone: false, decls: 274, vars: 0, consts: [[1, "hero-section", "landing-tips-hero"], [1, "container"], [1, "row", "align-items-center", "min-vh-100"], [1, "col-lg-8", "mx-auto", "text-center"], ["data-aos", "fade-up", 1, "hero-badge", "mb-4"], [1, "badge", "bg-success-subtle", "text-success", "px-4", "py-2"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "display-3", "fw-bold", "mb-4"], [1, "text-gradient"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "lead", "fs-4", "mb-5"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "d-flex", "flex-column", "flex-sm-row", "gap-3", "justify-content-center"], [1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow-lg", 3, "click"], [1, "fas", "fa-download", "me-2"], ["href", "https://wa.me/5531975474785?text=Quero%20melhorar%20a%20convers\xE3o%20das%20minhas%20landing%20pages!", "target", "_blank", 1, "btn", "btn-outline-dark", "btn-lg", "px-5", "py-3"], [1, "fab", "fa-whatsapp", "me-2"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "trust-stats", "mt-5"], [1, "d-flex", "flex-wrap", "justify-content-center", "gap-5", "text-muted"], [1, "text-center"], [1, "fs-3", "text-success", "d-block"], [1, "py-5", "bg-light"], [1, "row", "justify-content-center"], [1, "col-lg-8", "text-center"], ["data-aos", "fade-up", 1, "display-5", "fw-bold", "mb-4"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead", "mb-4"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "alert", "alert-warning", "d-inline-block"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "py-5"], [1, "row", "g-5"], ["data-aos", "fade-up", 1, "col-12"], [1, "tip-card"], [1, "tip-number"], [1, "tip-content"], [1, "mb-3"], [1, "blockquote", "mb-3"], [1, "list-unstyled"], [1, "mb-2"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "500", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "700", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "800", 1, "col-12"], ["data-aos", "fade-up", "data-aos-delay", "900", 1, "col-12"], ["id", "cta-section", 1, "py-5", "bg-dark", "text-white"], [1, "text-center", "mb-5"], ["data-aos", "fade-up", 1, "display-5", "fw-bold", "mb-4", "text-white"], ["data-aos", "fade-up", "data-aos-delay", "100", 1, "lead", "fs-4", "text-light"], [1, "text-warning"], [1, "col-lg-8"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "cta-card", "bg-white", "rounded-4", "p-5", "shadow-lg", "text-center"], [1, "mb-4"], [1, "icon-large", "mb-3"], [1, "fas", "fa-rocket", "fa-4x", "text-success"], [1, "fw-bold", "mb-3"], [1, "lead", "text-muted", "mb-4"], [1, "row", "g-3", "mb-4"], [1, "col-md-4"], [1, "benefit-item"], [1, "fas", "fa-search", "text-success", "mb-2"], [1, "mb-0"], [1, "fas", "fa-chart-line", "text-success", "mb-2"], [1, "fas", "fa-gift", "text-success", "mb-2"], ["href", "https://wa.me/5531975474785?text=Ol\xE1!%20Vi%20as%20dicas%20de%20landing%20page%20e%20quero%20uma%20consultoria%20gratuita%20para%20meu%20neg\xF3cio!", "target", "_blank", 1, "btn", "btn-success", "btn-lg", "px-5", "py-3", "shadow-lg"], [1, "mt-4", "text-muted", "small"], [1, "fas", "fa-clock", "me-1"], ["href", "https://wa.me/5531975474785?text=Ol\xE1!%20Vi%20as%20dicas%20de%20landing%20page%20e%20quero%20saber%20mais!", "target", "_blank", "aria-label", "Consultoria WhatsApp", 1, "whatsapp-float"], [1, "fab", "fa-whatsapp", "fa-2x"], [1, "whatsapp-tooltip"]], template: function LandingTipsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "\u{1F4C8} Marketing Digital");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "h1", 6);
        \u0275\u0275text(8, " 10 Dicas para");
        \u0275\u0275element(9, "br");
        \u0275\u0275elementStart(10, "span", 7);
        \u0275\u0275text(11, "Landing Pages de Alta Convers\xE3o");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "p", 8);
        \u0275\u0275text(13, " Estrat\xE9gias pr\xE1ticas de um profissional para ");
        \u0275\u0275elementStart(14, "strong");
        \u0275\u0275text(15, "triplicar suas vendas online");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "br");
        \u0275\u0275text(17, " com p\xE1ginas que realmente convertem ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 9)(19, "button", 10);
        \u0275\u0275listener("click", function LandingTipsComponent_Template_button_click_19_listener() {
          return ctx.scrollToCTA();
        });
        \u0275\u0275element(20, "i", 11);
        \u0275\u0275text(21, " Baixar guia gratuito ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "a", 12);
        \u0275\u0275element(23, "i", 13);
        \u0275\u0275text(24, " Consultoria gratuita ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 14)(26, "div", 15)(27, "div", 16)(28, "strong", 17);
        \u0275\u0275text(29, "300%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span");
        \u0275\u0275text(31, "Aumento m\xE9dio de convers\xE3o");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 16)(33, "strong", 17);
        \u0275\u0275text(34, "50+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span");
        \u0275\u0275text(36, "Projetos otimizados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 16)(38, "strong", 17);
        \u0275\u0275text(39, "R$ 2M+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span");
        \u0275\u0275text(41, "Em vendas geradas");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(42, "section", 18)(43, "div", 1)(44, "div", 19)(45, "div", 20)(46, "h2", 21);
        \u0275\u0275text(47, " Por que 97% das landing pages falham? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 22);
        \u0275\u0275text(49, " A maioria dos empreendedores comete os mesmos erros b\xE1sicos que ");
        \u0275\u0275elementStart(50, "strong");
        \u0275\u0275text(51, "destroem a convers\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, ". Estas 10 dicas v\xE3o te ajudar a estar no ");
        \u0275\u0275elementStart(53, "strong");
        \u0275\u0275text(54, "3% que realmente converte");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 23);
        \u0275\u0275element(57, "i", 24);
        \u0275\u0275elementStart(58, "strong");
        \u0275\u0275text(59, "Aten\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " Aplicar apenas 3 dessas dicas pode dobrar sua convers\xE3o ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(61, "section", 25)(62, "div", 1)(63, "div", 26)(64, "div", 27)(65, "div", 28)(66, "div", 29);
        \u0275\u0275text(67, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 30)(69, "h3", 31);
        \u0275\u0275text(70, "\u{1F3AF} Proposta de Valor Clara (Above the Fold)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "blockquote", 32);
        \u0275\u0275text(72, ' "Os primeiros 5 segundos definem se o visitante fica ou sai." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "ul", 33)(74, "li", 34);
        \u0275\u0275text(75, "\u2705 Use um t\xEDtulo direto e impactante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li", 34);
        \u0275\u0275text(77, "\u2705 Subt\xEDtulo explicando o benef\xEDcio em poucas palavras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "li", 34);
        \u0275\u0275text(79, '\u2705 Ex: "Transforme sua ideia em uma plataforma real em 30 dias"');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(80, "div", 35)(81, "div", 28)(82, "div", 29);
        \u0275\u0275text(83, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 30)(85, "h3", 31);
        \u0275\u0275text(86, "\u{1F446} Um \xFAnico CTA claro e vis\xEDvel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "blockquote", 32);
        \u0275\u0275text(88, ' "Toda landing page deve ter um objetivo principal." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "ul", 33)(90, "li", 34);
        \u0275\u0275text(91, '\u2705 Bot\xE3o destacado ("Fale com um especialista", "Quero meu MVP", "Comece agora")');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "li", 34);
        \u0275\u0275text(93, "\u2705 Repetir o CTA ao longo da p\xE1gina com varia\xE7\xF5es sutis");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "li", 34);
        \u0275\u0275text(95, "\u2705 Cores contrastantes que chamam aten\xE7\xE3o");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(96, "div", 36)(97, "div", 28)(98, "div", 29);
        \u0275\u0275text(99, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 30)(101, "h3", 31);
        \u0275\u0275text(102, "\u{1F4F8} Imagens que reforcem o benef\xEDcio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "blockquote", 32);
        \u0275\u0275text(104, ' "Visual \xE9 mais r\xE1pido que texto." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "ul", 33)(106, "li", 34);
        \u0275\u0275text(107, "\u2705 Imagens de produto/servi\xE7o em a\xE7\xE3o (ou mockups)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "li", 34);
        \u0275\u0275text(109, "\u2705 Evite bancos de imagem gen\xE9ricos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li", 34);
        \u0275\u0275text(111, "\u2705 \xCDcones ajudam a guiar a leitura e dividir se\xE7\xF5es");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(112, "div", 37)(113, "div", 28)(114, "div", 29);
        \u0275\u0275text(115, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 30)(117, "h3", 31);
        \u0275\u0275text(118, "\u{1F4AC} Provas sociais (Depoimentos, Logos, Cases)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "blockquote", 32);
        \u0275\u0275text(120, ' "Nada \xE9 mais persuasivo que outros clientes satisfeitos." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "ul", 33)(122, "li", 34);
        \u0275\u0275text(123, "\u2705 Exibir logos de clientes (mesmo pequenos)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "li", 34);
        \u0275\u0275text(125, "\u2705 Cita\xE7\xF5es curtas de usu\xE1rios reais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "li", 34);
        \u0275\u0275text(127, "\u2705 Caso poss\xEDvel, um v\xEDdeo curto de depoimento ajuda muito");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(128, "div", 38)(129, "div", 28)(130, "div", 29);
        \u0275\u0275text(131, "5");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "div", 30)(133, "h3", 31);
        \u0275\u0275text(134, "\u{1F50D} Otimize para escaneabilidade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "blockquote", 32);
        \u0275\u0275text(136, ` "As pessoas 'escaneiam' antes de ler." `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "ul", 33)(138, "li", 34);
        \u0275\u0275text(139, "\u2705 T\xEDtulos com palavras-chave");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "li", 34);
        \u0275\u0275text(141, "\u2705 Listas com bullets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "li", 34);
        \u0275\u0275text(143, "\u2705 Par\xE1grafos curtos (m\xE1x. 3 linhas)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "li", 34);
        \u0275\u0275text(145, "\u2705 Destaque em negrito para frases-chave");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(146, "div", 39)(147, "div", 28)(148, "div", 29);
        \u0275\u0275text(149, "6");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 30)(151, "h3", 31);
        \u0275\u0275text(152, "\u{1F9E0} Foque nos benef\xEDcios, n\xE3o nas funcionalidades");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "blockquote", 32);
        \u0275\u0275text(154, ' "Ningu\xE9m compra software, compra solu\xE7\xE3o para um problema." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "ul", 33)(156, "li", 34);
        \u0275\u0275text(157, '\u2705 Ex: "Automatize sua rotina e ganhe 3h por dia"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "li", 34);
        \u0275\u0275text(159, '\u274C N\xE3o: "sistema com dashboard em tempo real"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "li", 34);
        \u0275\u0275text(161, "\u2705 Use linguagem simples e centrada no cliente");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(162, "div", 40)(163, "div", 28)(164, "div", 29);
        \u0275\u0275text(165, "7");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "div", 30)(167, "h3", 31);
        \u0275\u0275text(168, "\u{1F680} P\xE1gina leve e r\xE1pida");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "blockquote", 32);
        \u0275\u0275text(170, ' "Cada segundo conta para o Google e para o usu\xE1rio." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(171, "ul", 33)(172, "li", 34);
        \u0275\u0275text(173, "\u2705 Imagens otimizadas (WebP)");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "li", 34);
        \u0275\u0275text(175, "\u2705 Fontes locais ou Google Fonts otimizadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "li", 34);
        \u0275\u0275text(177, "\u2705 Use Lighthouse para medir performance");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(178, "div", 41)(179, "div", 28)(180, "div", 29);
        \u0275\u0275text(181, "8");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 30)(183, "h3", 31);
        \u0275\u0275text(184, "\u{1F510} Formul\xE1rio curto e objetivo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "blockquote", 32);
        \u0275\u0275text(186, ' "Quanto mais campos, menor a convers\xE3o." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "ul", 33)(188, "li", 34);
        \u0275\u0275text(189, "\u2705 Nome + e-mail (ou nome + WhatsApp) \xE9 o m\xEDnimo vi\xE1vel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(190, "li", 34);
        \u0275\u0275text(191, '\u2705 Incentive a a\xE7\xE3o: "Receba o or\xE7amento em at\xE9 24h"');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "li", 34);
        \u0275\u0275text(193, "\u2705 Pode usar bot\xE3o de WhatsApp como alternativa");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(194, "div", 42)(195, "div", 28)(196, "div", 29);
        \u0275\u0275text(197, "9");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "div", 30)(199, "h3", 31);
        \u0275\u0275text(200, "\u{1F4C8} Instale pixels e tags de rastreamento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "blockquote", 32);
        \u0275\u0275text(202, ' "Coleta de dados \xE9 fundamental para melhorar." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "ul", 33)(204, "li", 34);
        \u0275\u0275text(205, "\u2705 Google Analytics 4");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "li", 34);
        \u0275\u0275text(207, "\u2705 Meta Pixel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "li", 34);
        \u0275\u0275text(209, "\u2705 Google Tag Manager (melhor pr\xE1tica para gerenciamento)");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(210, "div", 43)(211, "div", 28)(212, "div", 29);
        \u0275\u0275text(213, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "div", 30)(215, "h3", 31);
        \u0275\u0275text(216, "\u{1F4CA} Fa\xE7a testes A/B");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "blockquote", 32);
        \u0275\u0275text(218, ' "O que funciona para um p\xFAblico pode n\xE3o funcionar para outro." ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(219, "ul", 33)(220, "li", 34);
        \u0275\u0275text(221, "\u2705 Teste varia\xE7\xF5es de t\xEDtulo, cor do bot\xE3o, ordem das se\xE7\xF5es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(222, "li", 34);
        \u0275\u0275text(223, "\u2705 Ferramentas: Google Optimize, VWO, Unbounce, Hotjar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(224, "li", 34);
        \u0275\u0275text(225, "\u2705 Sempre teste uma mudan\xE7a por vez");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(226, "section", 44)(227, "div", 1)(228, "div", 45)(229, "h2", 46);
        \u0275\u0275text(230, " Quer implementar essas dicas no seu neg\xF3cio? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "p", 47);
        \u0275\u0275text(232, " Oferecemos ");
        \u0275\u0275elementStart(233, "strong", 48);
        \u0275\u0275text(234, "consultoria gratuita");
        \u0275\u0275elementEnd();
        \u0275\u0275text(235, " para analisar sua landing page");
        \u0275\u0275element(236, "br");
        \u0275\u0275text(237, " e identificar oportunidades de melhoria ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "div", 19)(239, "div", 49)(240, "div", 50)(241, "div", 51)(242, "div", 52);
        \u0275\u0275element(243, "i", 53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "h3", 54);
        \u0275\u0275text(245, "Consultoria Gratuita de 30 minutos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "p", 55);
        \u0275\u0275text(247, " Analisamos sua landing page e mostramos exatamente como aumentar sua convers\xE3o ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(248, "div", 56)(249, "div", 57)(250, "div", 58);
        \u0275\u0275element(251, "i", 59);
        \u0275\u0275elementStart(252, "p", 60);
        \u0275\u0275text(253, "Auditoria completa");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(254, "div", 57)(255, "div", 58);
        \u0275\u0275element(256, "i", 61);
        \u0275\u0275elementStart(257, "p", 60);
        \u0275\u0275text(258, "Plano de otimiza\xE7\xE3o");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(259, "div", 57)(260, "div", 58);
        \u0275\u0275element(261, "i", 62);
        \u0275\u0275elementStart(262, "p", 60);
        \u0275\u0275text(263, "100% gratuito");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(264, "a", 63);
        \u0275\u0275element(265, "i", 13);
        \u0275\u0275text(266, " Agendar consultoria gratuita ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(267, "p", 64);
        \u0275\u0275element(268, "i", 65);
        \u0275\u0275text(269, " Resposta em at\xE9 2 horas \u2022 Consultoria via WhatsApp ou videochamada ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(270, "a", 66);
        \u0275\u0275element(271, "i", 67);
        \u0275\u0275elementStart(272, "span", 68);
        \u0275\u0275text(273, "Consultoria gratuita!");
        \u0275\u0275elementEnd()();
      }
    }, styles: ['\n\n.landing-tips-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding-top: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.landing-tips-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(25, 135, 84, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.text-gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #198754 0%,\n      #146c43 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: 1px solid rgba(25, 135, 84, 0.2);\n}\n.trust-stats[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  border-top: 1px solid #dee2e6;\n}\n.tip-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 2rem;\n  background: white;\n  padding: 2.5rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  border-left: 5px solid #198754;\n  transition: all 0.3s ease;\n}\n.tip-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.tip-number[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  background: #198754;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.tip-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.tip-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.tip-content[_ngcontent-%COMP%]   .blockquote[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #6c757d;\n  border-left: 3px solid #198754;\n  padding-left: 1rem;\n  margin-left: 0;\n}\n.cta-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.icon-large[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n.benefit-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.whatsapp-float[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background: #25d366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover {\n  background: #1ebe57;\n  transform: scale(1.1);\n  text-decoration: none;\n  color: white;\n}\n.whatsapp-float[_ngcontent-%COMP%]:hover   .whatsapp-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-10px);\n}\n.whatsapp-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 70px;\n  background: #333;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  transform: translateX(10px);\n}\n.whatsapp-tooltip[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid #333;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n@media (max-width: 768px) {\n  .tip-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n    padding: 2rem;\n  }\n  .tip-number[_ngcontent-%COMP%] {\n    align-self: flex-start;\n  }\n  .whatsapp-float[_ngcontent-%COMP%] {\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=landing-tips.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingTipsComponent, [{
    type: Component,
    args: [{ selector: "app-landing-tips", standalone: false, template: `<!-- Hero Section -->
<section class="hero-section landing-tips-hero">
  <div class="container">
    <div class="row align-items-center min-vh-100">
      <div class="col-lg-8 mx-auto text-center">
        <div class="hero-badge mb-4" data-aos="fade-up">
          <span class="badge bg-success-subtle text-success px-4 py-2">\u{1F4C8} Marketing Digital</span>
        </div>
        <h1 class="display-3 fw-bold mb-4" data-aos="fade-up" data-aos-delay="100">
          10 Dicas para<br>
          <span class="text-gradient">Landing Pages de Alta Convers\xE3o</span>
        </h1>
        <p class="lead fs-4 mb-5" data-aos="fade-up" data-aos-delay="200">
          Estrat\xE9gias pr\xE1ticas de um profissional para <strong>triplicar suas vendas online</strong><br>
          com p\xE1ginas que realmente convertem
        </p>
        <div class="d-flex flex-column flex-sm-row gap-3 justify-content-center" data-aos="fade-up" data-aos-delay="300">
          <button class="btn btn-success btn-lg px-5 py-3 shadow-lg" (click)="scrollToCTA()">
            <i class="fas fa-download me-2"></i>
            Baixar guia gratuito
          </button>
          <a href="https://wa.me/5531975474785?text=Quero%20melhorar%20a%20convers\xE3o%20das%20minhas%20landing%20pages!" 
             class="btn btn-outline-dark btn-lg px-5 py-3" target="_blank">
            <i class="fab fa-whatsapp me-2"></i>
            Consultoria gratuita
          </a>
        </div>
        <div class="trust-stats mt-5" data-aos="fade-up" data-aos-delay="400">
          <div class="d-flex flex-wrap justify-content-center gap-5 text-muted">
            <div class="text-center">
              <strong class="fs-3 text-success d-block">300%</strong>
              <span>Aumento m\xE9dio de convers\xE3o</span>
            </div>
            <div class="text-center">
              <strong class="fs-3 text-success d-block">50+</strong>
              <span>Projetos otimizados</span>
            </div>
            <div class="text-center">
              <strong class="fs-3 text-success d-block">R$ 2M+</strong>
              <span>Em vendas geradas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Introdu\xE7\xE3o -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 text-center">
        <h2 class="display-5 fw-bold mb-4" data-aos="fade-up">
          Por que 97% das landing pages falham?
        </h2>
        <p class="lead mb-4" data-aos="fade-up" data-aos-delay="100">
          A maioria dos empreendedores comete os mesmos erros b\xE1sicos que <strong>destroem a convers\xE3o</strong>. 
          Estas 10 dicas v\xE3o te ajudar a estar no <strong>3% que realmente converte</strong>.
        </p>
        <div class="alert alert-warning d-inline-block" data-aos="fade-up" data-aos-delay="200">
          <i class="fas fa-exclamation-triangle me-2"></i>
          <strong>Aten\xE7\xE3o:</strong> Aplicar apenas 3 dessas dicas pode dobrar sua convers\xE3o
        </div>
      </div>
    </div>
  </div>
</section>

<!-- As 10 Dicas -->
<section class="py-5">
  <div class="container">
    <div class="row g-5">
      
      <!-- Dica 1 -->
      <div class="col-12" data-aos="fade-up">
        <div class="tip-card">
          <div class="tip-number">1</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F3AF} Proposta de Valor Clara (Above the Fold)</h3>
            <blockquote class="blockquote mb-3">
              "Os primeiros 5 segundos definem se o visitante fica ou sai."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Use um t\xEDtulo direto e impactante</li>
              <li class="mb-2">\u2705 Subt\xEDtulo explicando o benef\xEDcio em poucas palavras</li>
              <li class="mb-2">\u2705 Ex: "Transforme sua ideia em uma plataforma real em 30 dias"</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 2 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="100">
        <div class="tip-card">
          <div class="tip-number">2</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F446} Um \xFAnico CTA claro e vis\xEDvel</h3>
            <blockquote class="blockquote mb-3">
              "Toda landing page deve ter um objetivo principal."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Bot\xE3o destacado ("Fale com um especialista", "Quero meu MVP", "Comece agora")</li>
              <li class="mb-2">\u2705 Repetir o CTA ao longo da p\xE1gina com varia\xE7\xF5es sutis</li>
              <li class="mb-2">\u2705 Cores contrastantes que chamam aten\xE7\xE3o</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 3 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="200">
        <div class="tip-card">
          <div class="tip-number">3</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F4F8} Imagens que reforcem o benef\xEDcio</h3>
            <blockquote class="blockquote mb-3">
              "Visual \xE9 mais r\xE1pido que texto."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Imagens de produto/servi\xE7o em a\xE7\xE3o (ou mockups)</li>
              <li class="mb-2">\u2705 Evite bancos de imagem gen\xE9ricos</li>
              <li class="mb-2">\u2705 \xCDcones ajudam a guiar a leitura e dividir se\xE7\xF5es</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 4 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="300">
        <div class="tip-card">
          <div class="tip-number">4</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F4AC} Provas sociais (Depoimentos, Logos, Cases)</h3>
            <blockquote class="blockquote mb-3">
              "Nada \xE9 mais persuasivo que outros clientes satisfeitos."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Exibir logos de clientes (mesmo pequenos)</li>
              <li class="mb-2">\u2705 Cita\xE7\xF5es curtas de usu\xE1rios reais</li>
              <li class="mb-2">\u2705 Caso poss\xEDvel, um v\xEDdeo curto de depoimento ajuda muito</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 5 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="400">
        <div class="tip-card">
          <div class="tip-number">5</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F50D} Otimize para escaneabilidade</h3>
            <blockquote class="blockquote mb-3">
              "As pessoas 'escaneiam' antes de ler."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 T\xEDtulos com palavras-chave</li>
              <li class="mb-2">\u2705 Listas com bullets</li>
              <li class="mb-2">\u2705 Par\xE1grafos curtos (m\xE1x. 3 linhas)</li>
              <li class="mb-2">\u2705 Destaque em negrito para frases-chave</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 6 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="500">
        <div class="tip-card">
          <div class="tip-number">6</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F9E0} Foque nos benef\xEDcios, n\xE3o nas funcionalidades</h3>
            <blockquote class="blockquote mb-3">
              "Ningu\xE9m compra software, compra solu\xE7\xE3o para um problema."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Ex: "Automatize sua rotina e ganhe 3h por dia"</li>
              <li class="mb-2">\u274C N\xE3o: "sistema com dashboard em tempo real"</li>
              <li class="mb-2">\u2705 Use linguagem simples e centrada no cliente</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 7 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="600">
        <div class="tip-card">
          <div class="tip-number">7</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F680} P\xE1gina leve e r\xE1pida</h3>
            <blockquote class="blockquote mb-3">
              "Cada segundo conta para o Google e para o usu\xE1rio."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Imagens otimizadas (WebP)</li>
              <li class="mb-2">\u2705 Fontes locais ou Google Fonts otimizadas</li>
              <li class="mb-2">\u2705 Use Lighthouse para medir performance</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 8 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="700">
        <div class="tip-card">
          <div class="tip-number">8</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F510} Formul\xE1rio curto e objetivo</h3>
            <blockquote class="blockquote mb-3">
              "Quanto mais campos, menor a convers\xE3o."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Nome + e-mail (ou nome + WhatsApp) \xE9 o m\xEDnimo vi\xE1vel</li>
              <li class="mb-2">\u2705 Incentive a a\xE7\xE3o: "Receba o or\xE7amento em at\xE9 24h"</li>
              <li class="mb-2">\u2705 Pode usar bot\xE3o de WhatsApp como alternativa</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 9 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="800">
        <div class="tip-card">
          <div class="tip-number">9</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F4C8} Instale pixels e tags de rastreamento</h3>
            <blockquote class="blockquote mb-3">
              "Coleta de dados \xE9 fundamental para melhorar."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Google Analytics 4</li>
              <li class="mb-2">\u2705 Meta Pixel</li>
              <li class="mb-2">\u2705 Google Tag Manager (melhor pr\xE1tica para gerenciamento)</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Dica 10 -->
      <div class="col-12" data-aos="fade-up" data-aos-delay="900">
        <div class="tip-card">
          <div class="tip-number">10</div>
          <div class="tip-content">
            <h3 class="mb-3">\u{1F4CA} Fa\xE7a testes A/B</h3>
            <blockquote class="blockquote mb-3">
              "O que funciona para um p\xFAblico pode n\xE3o funcionar para outro."
            </blockquote>
            <ul class="list-unstyled">
              <li class="mb-2">\u2705 Teste varia\xE7\xF5es de t\xEDtulo, cor do bot\xE3o, ordem das se\xE7\xF5es</li>
              <li class="mb-2">\u2705 Ferramentas: Google Optimize, VWO, Unbounce, Hotjar</li>
              <li class="mb-2">\u2705 Sempre teste uma mudan\xE7a por vez</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CTA Final -->
<section class="py-5 bg-dark text-white" id="cta-section">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="display-5 fw-bold mb-4 text-white" data-aos="fade-up">
        Quer implementar essas dicas no seu neg\xF3cio?
      </h2>
      <p class="lead fs-4 text-light" data-aos="fade-up" data-aos-delay="100">
        Oferecemos <strong class="text-warning">consultoria gratuita</strong> para analisar sua landing page<br>
        e identificar oportunidades de melhoria
      </p>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="cta-card bg-white rounded-4 p-5 shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
          <div class="mb-4">
            <div class="icon-large mb-3">
              <i class="fas fa-rocket fa-4x text-success"></i>
            </div>
            <h3 class="fw-bold mb-3">Consultoria Gratuita de 30 minutos</h3>
            <p class="lead text-muted mb-4">
              Analisamos sua landing page e mostramos exatamente como aumentar sua convers\xE3o
            </p>
          </div>
          
          <div class="row g-3 mb-4">
            <div class="col-md-4">
              <div class="benefit-item">
                <i class="fas fa-search text-success mb-2"></i>
                <p class="mb-0">Auditoria completa</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefit-item">
                <i class="fas fa-chart-line text-success mb-2"></i>
                <p class="mb-0">Plano de otimiza\xE7\xE3o</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="benefit-item">
                <i class="fas fa-gift text-success mb-2"></i>
                <p class="mb-0">100% gratuito</p>
              </div>
            </div>
          </div>
          
          <a href="https://wa.me/5531975474785?text=Ol\xE1!%20Vi%20as%20dicas%20de%20landing%20page%20e%20quero%20uma%20consultoria%20gratuita%20para%20meu%20neg\xF3cio!" 
             class="btn btn-success btn-lg px-5 py-3 shadow-lg" target="_blank">
            <i class="fab fa-whatsapp me-2"></i>
            Agendar consultoria gratuita
          </a>
          
          <p class="mt-4 text-muted small">
            <i class="fas fa-clock me-1"></i>
            Resposta em at\xE9 2 horas \u2022 Consultoria via WhatsApp ou videochamada
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Bot\xE3o WhatsApp Flutuante -->
<a href="https://wa.me/5531975474785?text=Ol\xE1!%20Vi%20as%20dicas%20de%20landing%20page%20e%20quero%20saber%20mais!" 
   class="whatsapp-float" target="_blank" aria-label="Consultoria WhatsApp">
  <i class="fab fa-whatsapp fa-2x"></i>
  <span class="whatsapp-tooltip">Consultoria gratuita!</span>
</a>`, styles: ['/* src/app/modules/landing-tips/landing-tips.component.scss */\n.landing-tips-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #ffffff 100%);\n  padding-top: 80px;\n  position: relative;\n  overflow: hidden;\n}\n.landing-tips-hero::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 800px;\n  height: 800px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(25, 135, 84, 0.05) 0%,\n      transparent 70%);\n  border-radius: 50%;\n}\n.text-gradient {\n  background:\n    linear-gradient(\n      135deg,\n      #198754 0%,\n      #146c43 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-badge .badge {\n  font-size: 0.875rem;\n  font-weight: 500;\n  border: 1px solid rgba(25, 135, 84, 0.2);\n}\n.trust-stats {\n  padding-top: 2rem;\n  border-top: 1px solid #dee2e6;\n}\n.tip-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 2rem;\n  background: white;\n  padding: 2.5rem;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  border-left: 5px solid #198754;\n  transition: all 0.3s ease;\n}\n.tip-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);\n}\n.tip-number {\n  flex-shrink: 0;\n  width: 60px;\n  height: 60px;\n  background: #198754;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n.tip-content {\n  flex: 1;\n}\n.tip-content h3 {\n  color: #198754;\n}\n.tip-content .blockquote {\n  font-style: italic;\n  color: #6c757d;\n  border-left: 3px solid #198754;\n  padding-left: 1rem;\n  margin-left: 0;\n}\n.cta-card {\n  position: relative;\n  z-index: 1;\n}\n.icon-large {\n  display: inline-block;\n  animation: bounce 2s infinite;\n}\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n.benefit-item i {\n  font-size: 1.5rem;\n}\n.whatsapp-float {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: 60px;\n  height: 60px;\n  background: #25d366;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n  transition: all 0.3s ease;\n  z-index: 1000;\n}\n.whatsapp-float:hover {\n  background: #1ebe57;\n  transform: scale(1.1);\n  text-decoration: none;\n  color: white;\n}\n.whatsapp-float:hover .whatsapp-tooltip {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-10px);\n}\n.whatsapp-tooltip {\n  position: absolute;\n  right: 70px;\n  background: #333;\n  color: white;\n  padding: 5px 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  white-space: nowrap;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  transform: translateX(10px);\n}\n.whatsapp-tooltip::after {\n  content: "";\n  position: absolute;\n  right: -5px;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-left: 5px solid #333;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n}\n@media (max-width: 768px) {\n  .tip-card {\n    flex-direction: column;\n    gap: 1.5rem;\n    padding: 2rem;\n  }\n  .tip-number {\n    align-self: flex-start;\n  }\n  .whatsapp-float {\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n  }\n}\n/*# sourceMappingURL=landing-tips.component.css.map */\n'] }]
  }], () => [{ type: Title }, { type: Meta }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: Document, decorators: [{
    type: Inject,
    args: [DOCUMENT]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingTipsComponent, { className: "LandingTipsComponent", filePath: "src/app/modules/landing-tips/landing-tips.component.ts", lineNumber: 12 });
})();

// src/app/modules/landing-tips/landing-tips.module.ts
var LandingTipsModule = class _LandingTipsModule {
  static {
    this.\u0275fac = function LandingTipsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingTipsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LandingTipsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      RouterModule.forChild([
        { path: "", component: LandingTipsComponent }
      ])
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingTipsModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LandingTipsComponent
      ],
      imports: [
        CommonModule,
        RouterModule.forChild([
          { path: "", component: LandingTipsComponent }
        ])
      ]
    }]
  }], null, null);
})();
export {
  LandingTipsModule
};
//# sourceMappingURL=landing-tips.module-7MINEO3N.js.map
