import {
  CommonModule,
  Component,
  Meta,
  NgModule,
  RouterModule,
  Title,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-U2PEDCZ4.js";

// src/app/modules/landing/components/landing-page/landing-page.component.ts
var LandingPageComponent = class _LandingPageComponent {
  constructor(titleService, metaService) {
    this.titleService = titleService;
    this.metaService = metaService;
  }
  ngOnInit() {
    this.titleService.setTitle("Landing Page - Desenvolvimento Web e App | VICS");
    this.metaService.addTags([
      { name: "description", content: "Transformamos ideias em solu\xE7\xF5es digitais reais. Desenvolvemos sites, sistemas e aplicativos sob medida para sua empresa." },
      { name: "keywords", content: "desenvolvimento web, cria\xE7\xE3o de sites, aplicativos personalizados, sistemas, VICS, solu\xE7\xF5es digitais" },
      { name: "author", content: "VICS Desenvolvimento Web" },
      // Open Graph (para redes sociais)
      { property: "og:title", content: "Landing Page | VICS - Desenvolvimento Web e App" },
      { property: "og:description", content: "Ajudamos empresas a tirar ideias do papel com solu\xE7\xF5es digitais sob medida." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vics.dev.br/landing" },
      { property: "og:image", content: "https://www.vics.dev.br/assets/img/vics.jpg" },
      // Twitter Card (opcional)
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Landing Page | VICS" },
      { name: "twitter:description", content: "Transforme sua ideia em site ou aplicativo com a VICS." },
      { name: "twitter:image", content: "https://www.vics.dev.br/assets/img/vics.jpg" }
    ]);
  }
  static {
    this.\u0275fac = function LandingPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingPageComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingPageComponent, selectors: [["app-landing-page"]], decls: 62, vars: 0, consts: [[1, "bg-gray-50", "text-gray-800"], [1, "text-center", "py-20", "px-6", "bg-white"], [1, "text-4xl", "md:text-5xl", "font-bold", "mb-4"], [1, "text-lg", "md:text-xl", "mb-6"], ["href", "https://wa.me/5531975474785", "target", "_blank", 1, "inline-block", "bg-green-500", "hover:bg-green-600", "text-white", "font-semibold", "py-3", "px-6", "rounded-lg", "transition"], [1, "py-16", "px-6", "max-w-6xl", "mx-auto"], [1, "text-3xl", "font-bold", "text-center", "mb-10"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6"], [1, "bg-gray-100", "py-16", "px-6"], [1, "max-w-4xl", "mx-auto", "space-y-6"], [1, "py-16", "px-6", "max-w-5xl", "mx-auto"], [1, "space-y-4"], [1, "bg-white", "text-center", "py-20", "px-6"], [1, "text-3xl", "font-bold", "mb-4"], [1, "mb-6"], [1, "text-center", "text-sm", "py-4", "text-gray-500"]], template: function LandingPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Tem uma ideia para um sistema, site ou app?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "N\xF3s desenvolvemos por voc\xEA...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "a", 4);
        \u0275\u0275text(7, "Fale conosco pelo WhatsApp");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "section", 5)(9, "h2", 6);
        \u0275\u0275text(10, "O que podemos desenvolver para sua empresa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "p");
        \u0275\u0275text(13, "\u2714\uFE0F Sistemas personalizados para automa\xE7\xE3o e gest\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, "\u2714\uFE0F Sites e portais modernos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17, "\u2714\uFE0F Aplicativos sob medida");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "\u2714\uFE0F Integra\xE7\xF5es com WhatsApp, ERPs, redes sociais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, "\u2714\uFE0F Dashboards e relat\xF3rios inteligentes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "\u2714\uFE0F Solu\xE7\xF5es em nuvem (AWS / GCP)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "section", 8)(25, "h2", 6);
        \u0275\u0275text(26, "Como funciona");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 9)(28, "div")(29, "strong");
        \u0275\u0275text(30, "1. Voc\xEA conta sua ideia ou necessidade");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "br");
        \u0275\u0275text(32, " Pode ser por WhatsApp ou uma conversa r\xE1pida.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div")(34, "strong");
        \u0275\u0275text(35, "2. A gente prop\xF5e a solu\xE7\xE3o ideal");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "br");
        \u0275\u0275text(37, " Com escopo claro, prazos e tudo explicado de forma simples.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div")(39, "strong");
        \u0275\u0275text(40, "3. Desenvolvemos e entregamos");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "br");
        \u0275\u0275text(42, " Com qualidade, transpar\xEAncia e suporte dedicado.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "section", 10)(44, "h2", 6);
        \u0275\u0275text(45, "Por que escolher a VICS?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "ul", 11)(47, "li");
        \u0275\u0275text(48, "\u2705 Experi\xEAncia com empresas reais \u2014 de escolas a distribuidoras");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "li");
        \u0275\u0275text(50, "\u2705 Foco em resultado, n\xE3o em jarg\xF5es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "li");
        \u0275\u0275text(52, "\u2705 Relacionamento pr\xF3ximo e execu\xE7\xE3o t\xE9cnica de ponta");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "section", 12)(54, "h2", 13);
        \u0275\u0275text(55, "Vamos conversar?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p", 14);
        \u0275\u0275text(57, "Conte sua ideia e vamos construir juntos a solu\xE7\xE3o ideal para o seu neg\xF3cio.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "a", 4);
        \u0275\u0275text(59, "Chamar no WhatsApp");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "footer", 15);
        \u0275\u0275text(61, " Seus dados est\xE3o seguros conosco. N\xE3o fazemos spam. ");
        \u0275\u0275elementEnd()();
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #f9fafb;\n  color: #1f2937;\n}\nsection[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nsection.bg-white[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\nsection.bg-gray-100[_ngcontent-%COMP%] {\n  background-color: #f3f4f6;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-align: center;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n@media (min-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\na[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n  display: inline-block;\n  max-width: max-content;\n  align-self: center;\n}\na.btn-primary[_ngcontent-%COMP%], \na.bg-green-500[_ngcontent-%COMP%] {\n  background-color: #10b981;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n}\na.btn-primary[_ngcontent-%COMP%]:hover, \na.bg-green-500[_ngcontent-%COMP%]:hover {\n  background-color: #059669;\n}\nul.space-y-4[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  list-style: none;\n}\nfooter[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 1rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=landing-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingPageComponent, [{
    type: Component,
    args: [{ selector: "app-landing-page", template: '<div class="bg-gray-50 text-gray-800">\n    <!-- Hero Section -->\n    <section class="text-center py-20 px-6 bg-white">\n      <h1 class="text-4xl md:text-5xl font-bold mb-4">Tem uma ideia para um sistema, site ou app?</h1>\n      <p class="text-lg md:text-xl mb-6">N\xF3s desenvolvemos por voc\xEA...</p>\n      <a href="https://wa.me/5531975474785" target="_blank" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition">Fale conosco pelo WhatsApp</a>\n    </section>\n  \n    <!-- O que fazemos -->\n    <section class="py-16 px-6 max-w-6xl mx-auto">\n      <h2 class="text-3xl font-bold text-center mb-10">O que podemos desenvolver para sua empresa</h2>\n      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n        <p>\u2714\uFE0F Sistemas personalizados para automa\xE7\xE3o e gest\xE3o</p>\n        <p>\u2714\uFE0F Sites e portais modernos</p>\n        <p>\u2714\uFE0F Aplicativos sob medida</p>\n        <p>\u2714\uFE0F Integra\xE7\xF5es com WhatsApp, ERPs, redes sociais</p>\n        <p>\u2714\uFE0F Dashboards e relat\xF3rios inteligentes</p>\n        <p>\u2714\uFE0F Solu\xE7\xF5es em nuvem (AWS / GCP)</p>\n      </div>\n    </section>\n  \n    <!-- Como funciona -->\n    <section class="bg-gray-100 py-16 px-6">\n      <h2 class="text-3xl font-bold text-center mb-10">Como funciona</h2>\n      <div class="max-w-4xl mx-auto space-y-6">\n        <div><strong>1. Voc\xEA conta sua ideia ou necessidade</strong><br> Pode ser por WhatsApp ou uma conversa r\xE1pida.</div>\n        <div><strong>2. A gente prop\xF5e a solu\xE7\xE3o ideal</strong><br> Com escopo claro, prazos e tudo explicado de forma simples.</div>\n        <div><strong>3. Desenvolvemos e entregamos</strong><br> Com qualidade, transpar\xEAncia e suporte dedicado.</div>\n      </div>\n    </section>\n  \n    <!-- Autoridade -->\n    <section class="py-16 px-6 max-w-5xl mx-auto">\n      <h2 class="text-3xl font-bold text-center mb-10">Por que escolher a VICS?</h2>\n      <ul class="space-y-4">\n        <li>\u2705 Experi\xEAncia com empresas reais \u2014 de escolas a distribuidoras</li>\n        <li>\u2705 Foco em resultado, n\xE3o em jarg\xF5es</li>\n        <li>\u2705 Relacionamento pr\xF3ximo e execu\xE7\xE3o t\xE9cnica de ponta</li>\n      </ul>\n    </section>\n  \n    <!-- CTA final -->\n    <section class="bg-white text-center py-20 px-6">\n      <h2 class="text-3xl font-bold mb-4">Vamos conversar?</h2>\n      <p class="mb-6">Conte sua ideia e vamos construir juntos a solu\xE7\xE3o ideal para o seu neg\xF3cio.</p>\n      <a href="https://wa.me/5531975474785" target="_blank" class="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition">Chamar no WhatsApp</a>\n    </section>\n  \n    <footer class="text-center text-sm py-4 text-gray-500">\n      Seus dados est\xE3o seguros conosco. N\xE3o fazemos spam.\n    </footer>\n</div>  ', styles: ["/* src/app/modules/landing/components/landing-page/landing-page.component.scss */\n:host {\n  display: block;\n  background-color: #f9fafb;\n  color: #1f2937;\n}\nsection {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n  min-height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\nsection.bg-white {\n  background-color: #ffffff;\n}\nsection.bg-gray-100 {\n  background-color: #f3f4f6;\n}\nh1,\nh2 {\n  font-weight: 700;\n  text-align: center;\n}\nh1 {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n@media (min-width: 768px) {\n  h1 {\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\na {\n  transition: all 0.3s ease;\n  display: inline-block;\n  max-width: max-content;\n  align-self: center;\n}\na.btn-primary,\na.bg-green-500 {\n  background-color: #10b981;\n  color: white;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n}\na.btn-primary:hover,\na.bg-green-500:hover {\n  background-color: #059669;\n}\nul.space-y-4 li {\n  margin-bottom: 1rem;\n  list-style: none;\n}\nfooter {\n  font-size: 0.875rem;\n  text-align: center;\n  padding: 1rem;\n  color: #6b7280;\n}\n/*# sourceMappingURL=landing-page.component.css.map */\n"] }]
  }], () => [{ type: Title }, { type: Meta }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingPageComponent, { className: "LandingPageComponent", filePath: "src/app/modules/landing/components/landing-page/landing-page.component.ts", lineNumber: 9 });
})();

// src/app/modules/landing/landing-routing.module.ts
var routes = [
  { path: "", component: LandingPageComponent }
];
var LandingRoutingModule = class _LandingRoutingModule {
  static {
    this.\u0275fac = function LandingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingRoutingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LandingRoutingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/modules/landing/landing.module.ts
var LandingModule = class _LandingModule {
  static {
    this.\u0275fac = function LandingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LandingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      CommonModule,
      LandingRoutingModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        LandingRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  LandingModule
};
//# sourceMappingURL=landing.module-POD4FS3Y.js.map
