import {
  environment
} from "./chunk-LPTTI34C.js";
import {
  CountUpDirective,
  FooterComponent,
  FormBuilder,
  NavbarComponent,
  SharedModule,
  Validators
} from "./chunk-ZV3RLNPR.js";
import {
  ActivatedRoute,
  BehaviorSubject,
  Component,
  HttpClient,
  Inject,
  Injectable,
  Meta,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  PLATFORM_ID,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  Title,
  ViewChildren,
  ViewportScroller,
  isPlatformBrowser,
  of,
  setClassMetadata,
  switchMap,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-U2PEDCZ4.js";

// src/app/modules/home/components/about/about.component.ts
var AboutComponent = class _AboutComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: false, decls: 23, vars: 0, consts: [["about", ""], ["id", "about", 1, "about-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "about-content"], [1, "about-video"], ["src", "assets/video/vics-img-1.gif", "alt", "about"], [1, "video-btn"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2)(3, "div", 3)(4, "h2");
        \u0275\u0275text(5, "\u2139\uFE0F Sobre ");
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7, "N\xF3s");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 3)(12, "p");
        \u0275\u0275text(13, "Voc\xEA tem desafios di\xE1rios: prazos que estouram, relat\xF3rios que n\xE3o batem com a realidade, estoque que falta ou sobra, clientes que somem sem explica\xE7\xE3o.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, "Na VICS, entendemos essas dores e usamos tecnologia de forma simples para resolv\xEA-las.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p")(17, "strong");
        \u0275\u0275text(18, "N\xE3o falamos em termos t\xE9cnicos complicados \u2014 falamos em redu\xE7\xE3o de custos, previsibilidade e crescimento sustent\xE1vel.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 7);
        \u0275\u0275element(21, "img", 8)(22, "div", 9);
        \u0275\u0275elementEnd()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: false, template: '<div id="about" class="about-area ptb-100" #about>\n    <div class="container">\n        <div class="section-title">\n            <h2>\u2139\uFE0F Sobre <span>N\xF3s</span></h2>\n        </div>\n        <div class="row align-items-center">\n            <div class="col-lg-6 col-md-12">\n                <div class="about-content">\n                    <div class="section-title">\n                        <p>Voc\xEA tem desafios di\xE1rios: prazos que estouram, relat\xF3rios que n\xE3o batem com a realidade, estoque que falta ou sobra, clientes que somem sem explica\xE7\xE3o.</p>\n                        \n                        <p>Na VICS, entendemos essas dores e usamos tecnologia de forma simples para resolv\xEA-las.</p>\n                        \n                        <p><strong>N\xE3o falamos em termos t\xE9cnicos complicados \u2014 falamos em redu\xE7\xE3o de custos, previsibilidade e crescimento sustent\xE1vel.</strong></p>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-6 col-md-12">\n                <div class="about-video">\n                    <img src="assets/video/vics-img-1.gif" alt="about">\n                    <div class="video-btn"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/modules/home/components/about/about.component.ts", lineNumber: 9 });
})();

// src/app/modules/home/components/strategy/strategy.component.ts
var StrategyComponent = class _StrategyComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function StrategyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StrategyComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StrategyComponent, selectors: [["app-strategy"]], standalone: false, decls: 41, vars: 0, consts: [[1, "strategy-area"], [1, "container-fluid"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "strategy-image"], ["src", "assets/img/about-strategy.webp", "alt", "image", "width", "696px"], [1, "strategy-content", "ptb-70"], [1, "section-title"], [1, "features-list"], [1, "fa", "fa-check"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function StrategyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "img", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "div", 6)(8, "div", 7)(9, "h4");
        \u0275\u0275text(10, "Nossa Estrat\xE9gia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "h2");
        \u0275\u0275text(12, "Solidez na execu\xE7\xE3o. Inova\xE7\xE3o com prop\xF3sito.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Na VICS, acreditamos que boas ideias merecem sair do papel com estrat\xE9gia, clareza e qualidade. Nossa estrat\xE9gia \xE9 simples: escutar, entender o que o cliente realmente precisa e executar com excel\xEAncia \u2014 unindo tecnologia atual, vis\xE3o de neg\xF3cio e um relacionamento pr\xF3ximo em cada etapa.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "ul", 8)(16, "li");
        \u0275\u0275element(17, "i", 9);
        \u0275\u0275text(18, "Solu\xE7\xF5es personalizadas, pensadas para cada cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275element(20, "i", 9);
        \u0275\u0275text(21, "Execu\xE7\xE3o t\xE9cnica com vis\xE3o pr\xE1tica e comercial");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275element(23, "i", 9);
        \u0275\u0275text(24, "Inova\xE7\xE3o que simplifica processos, n\xE3o complica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275element(26, "i", 9);
        \u0275\u0275text(27, "Parceria de verdade: constru\xEDmos juntos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275element(29, "i", 9);
        \u0275\u0275text(30, "Foco total na entrega e no que realmente importa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275element(32, "i", 9);
        \u0275\u0275text(33, "Projetos pensados para crescer junto com seu neg\xF3cio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "li");
        \u0275\u0275element(35, "i", 9);
        \u0275\u0275text(36, "Compartilhamos conhecimento e damos autonomia ao cliente");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, "Nosso compromisso \xE9 entregar solu\xE7\xF5es que funcionam no dia a dia \u2014 com tecnologia moderna, mas com linguagem simples e prop\xF3sito claro. Se voc\xEA tem um desafio, uma ideia ou uma necessidade, estamos prontos para transformar isso em algo concreto, funcional e escal\xE1vel.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 10);
        \u0275\u0275element(40, "img", 11);
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StrategyComponent, [{
    type: Component,
    args: [{ selector: "app-strategy", standalone: false, template: '<div class="strategy-area">\n    <div class="container-fluid">\n        <div class="row">\n            <div class="col-lg-6 col-md-12">\n                <div class="strategy-image">\n                    <img src="assets/img/about-strategy.webp" alt="image" width="696px">\n                </div>\n            </div>\n            <div class="col-lg-6 col-md-12">\n                <div class="strategy-content ptb-70">\n                    <div class="section-title">\n                        <h4>Nossa Estrat\xE9gia</h4>\n                        <h2>Solidez na execu\xE7\xE3o. Inova\xE7\xE3o com prop\xF3sito.</h2>\n                        <p>Na VICS, acreditamos que boas ideias merecem sair do papel com estrat\xE9gia, clareza e qualidade.  \n                        Nossa estrat\xE9gia \xE9 simples: escutar, entender o que o cliente realmente precisa e executar com excel\xEAncia \u2014 unindo tecnologia atual, vis\xE3o de neg\xF3cio e um relacionamento pr\xF3ximo em cada etapa.</p>\n                    </div>\n                    <ul class="features-list">\n                        <li><i class="fa fa-check"></i>Solu\xE7\xF5es personalizadas, pensadas para cada cliente</li>\n                        <li><i class="fa fa-check"></i>Execu\xE7\xE3o t\xE9cnica com vis\xE3o pr\xE1tica e comercial</li>\n                        <li><i class="fa fa-check"></i>Inova\xE7\xE3o que simplifica processos, n\xE3o complica</li>\n                        <li><i class="fa fa-check"></i>Parceria de verdade: constru\xEDmos juntos</li>\n                        <li><i class="fa fa-check"></i>Foco total na entrega e no que realmente importa</li>\n                        <li><i class="fa fa-check"></i>Projetos pensados para crescer junto com seu neg\xF3cio</li>\n                        <li><i class="fa fa-check"></i>Compartilhamos conhecimento e damos autonomia ao cliente</li>\n                    </ul>\n                    <p>Nosso compromisso \xE9 entregar solu\xE7\xF5es que funcionam no dia a dia \u2014 com tecnologia moderna, mas com linguagem simples e prop\xF3sito claro.  \n                    Se voc\xEA tem um desafio, uma ideia ou uma necessidade, estamos prontos para transformar isso em algo concreto, funcional e escal\xE1vel.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="shape1"><img src="assets/img/shape1.png" alt="image"></div>\n</div>' }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StrategyComponent, { className: "StrategyComponent", filePath: "src/app/modules/home/components/strategy/strategy.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/who-we-are/who-we-are.component.ts
var WhoWeAreComponent = class _WhoWeAreComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function WhoWeAreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WhoWeAreComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhoWeAreComponent, selectors: [["app-who-we-are"]], standalone: false, decls: 62, vars: 0, consts: [[1, "who-we-are-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-who-we-are"], [1, "fas", "fa-seedling"], [1, "fas", "fa-users"], [1, "fas", "fa-award"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-bullseye"], [1, "fas", "fa-handshake"]], template: function WhoWeAreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Nossa Origem");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "Na VICS, somos mais do que uma empresa de consultoria em ci\xEAncia de dados; somos inovadores, solucionadores de problemas e parceiros de neg\xF3cios comprometidos. Fundada por um grupo de entusiastas de dados e estrategistas de neg\xF3cios, nossa empresa nasceu da paix\xE3o por transformar dados complexos em solu\xE7\xF5es pr\xE1ticas e eficazes para empresas de todos os tamanhos.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "div", 5);
        \u0275\u0275element(10, "i", 6);
        \u0275\u0275elementStart(11, "h3");
        \u0275\u0275text(12, "Funda\xE7\xE3o Inovadora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Nascemos da paix\xE3o por unir ci\xEAncia de dados e estrat\xE9gia de neg\xF3cios, com o objetivo de criar solu\xE7\xF5es inovadoras para desafios complexos do mercado.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "span");
        \u0275\u0275text(16, "1");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 4)(18, "div", 5);
        \u0275\u0275element(19, "i", 7);
        \u0275\u0275elementStart(20, "h3");
        \u0275\u0275text(21, "Especialistas em Dados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, "Composto por cientistas de dados, analistas e especialistas em tecnologia, nosso time \xE9 dedicado a transformar dados em insights estrat\xE9gicos.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "2");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 4)(27, "div", 5);
        \u0275\u0275element(28, "i", 8);
        \u0275\u0275elementStart(29, "h3");
        \u0275\u0275text(30, "Compromisso com a Excel\xEAncia");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, "Integridade, inova\xE7\xE3o e qualidade guiam nosso trabalho, assegurando solu\xE7\xF5es de dados confi\xE1veis e de alto padr\xE3o.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span");
        \u0275\u0275text(34, "3");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 4)(36, "div", 5);
        \u0275\u0275element(37, "i", 9);
        \u0275\u0275elementStart(38, "h3");
        \u0275\u0275text(39, "An\xE1lises Personalizadas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p");
        \u0275\u0275text(41, "Nosso foco \xE9 oferecer an\xE1lises personalizadas, alinhando nossa expertise t\xE9cnica \xE0s necessidades e objetivos espec\xEDficos de cada cliente.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43, "4");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "div", 4)(45, "div", 5);
        \u0275\u0275element(46, "i", 10);
        \u0275\u0275elementStart(47, "h3");
        \u0275\u0275text(48, "Al\xE9m das Expectativas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "Ambicionamos ir al\xE9m das expectativas, proporcionando solu\xE7\xF5es que impulsionem o crescimento e inovem os processos de neg\xF3cios.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52, "5");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 4)(54, "div", 5);
        \u0275\u0275element(55, "i", 11);
        \u0275\u0275elementStart(56, "h3");
        \u0275\u0275text(57, "Parceria Rumo ao Sucesso");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "p");
        \u0275\u0275text(59, "Convidamos voc\xEA a se juntar a n\xF3s nesta jornada inovadora, onde dados s\xE3o transformados em sucesso empresarial duradouro.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "span");
        \u0275\u0275text(61, "6");
        \u0275\u0275elementEnd()()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhoWeAreComponent, [{
    type: Component,
    args: [{ selector: "app-who-we-are", standalone: false, template: '<div class="who-we-are-area pt-100 pb-70">\n    <div class="container">\n        <div class="section-title">\n            <h2>Nossa Origem</h2>\n            <p>Na VICS, somos mais do que uma empresa de consultoria em\n                ci\xEAncia\n                de dados; somos inovadores, solucionadores de problemas e\n                parceiros de neg\xF3cios comprometidos. Fundada por um grupo de\n                entusiastas de dados e estrategistas de neg\xF3cios, nossa empresa\n                nasceu da paix\xE3o por transformar dados complexos em solu\xE7\xF5es\n                pr\xE1ticas e eficazes para empresas de todos os tamanhos.</p>\n        </div>\n        <div class="row">\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-who-we-are">\n                    <i class="fas fa-seedling"></i>\n                    <h3>Funda\xE7\xE3o Inovadora</h3>\n                    <p>Nascemos da paix\xE3o por unir ci\xEAncia de dados e estrat\xE9gia\n                        de neg\xF3cios, com o objetivo de criar solu\xE7\xF5es inovadoras\n                        para desafios complexos do mercado.</p>\n                    <span>1</span>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-who-we-are">\n                    <i class="fas fa-users"></i>\n                    <h3>Especialistas em Dados</h3>\n                    <p>Composto por cientistas de dados, analistas e\n                        especialistas em tecnologia, nosso time \xE9 dedicado a\n                        transformar dados em insights estrat\xE9gicos.</p>\n                    <span>2</span>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-who-we-are">\n                    <i class="fas fa-award"></i>\n                    <h3>Compromisso com a Excel\xEAncia</h3>\n                    <p>Integridade, inova\xE7\xE3o e qualidade guiam nosso trabalho,\n                        assegurando solu\xE7\xF5es de dados confi\xE1veis e de alto\n                        padr\xE3o.</p>\n                    <span>3</span>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-who-we-are">\n                    <i class="fas fa-chart-line"></i>\n                    <h3>An\xE1lises Personalizadas</h3>\n                    <p>Nosso foco \xE9 oferecer an\xE1lises personalizadas, alinhando\n                        nossa expertise t\xE9cnica \xE0s necessidades e objetivos\n                        espec\xEDficos de cada cliente.</p>\n                    <span>4</span>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-who-we-are">\n                    <i class="fas fa-bullseye"></i>\n                    <h3>Al\xE9m das Expectativas</h3>\n                    <p>Ambicionamos ir al\xE9m das expectativas, proporcionando\n                        solu\xE7\xF5es que impulsionem o crescimento e inovem os\n                        processos de neg\xF3cios.</p>\n                    <span>5</span>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-who-we-are">\n                    <i class="fas fa-handshake"></i>\n                    <h3>Parceria Rumo ao Sucesso</h3>\n                    <p>Convidamos voc\xEA a se juntar a n\xF3s nesta jornada\n                        inovadora, onde dados s\xE3o transformados em sucesso\n                        empresarial duradouro.</p>\n                    <span>6</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhoWeAreComponent, { className: "WhoWeAreComponent", filePath: "src/app/modules/home/components/who-we-are/who-we-are.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/cta/cta.component.ts
var CtaComponent = class _CtaComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function CtaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CtaComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CtaComponent, selectors: [["app-cta"]], standalone: false, decls: 12, vars: 0, consts: [[1, "cta-area", "ptb-100"], [1, "container"], [1, "cta-content"], [1, "section-title", "mb-0"], [1, "btn", "btn-primary", "btn-lg", "me-3", 3, "click"], [1, "btn", "btn-outline-primary", "btn-lg", 3, "click"]], template: function CtaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
        \u0275\u0275text(5, "Sua empresa precisa de tecnologia para crescer?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "A VICS transforma dados em resultados e desenvolve sistemas que escalam seu neg\xF3cio.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 4);
        \u0275\u0275listener("click", function CtaComponent_Template_a_click_8_listener() {
          return ctx.onClick("contact");
        });
        \u0275\u0275text(9, "\u{1F4AC} Agende uma conversa gratuita");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 5);
        \u0275\u0275listener("click", function CtaComponent_Template_a_click_10_listener() {
          return ctx.onClick("services");
        });
        \u0275\u0275text(11, "\u{1F680} Ver nossos servi\xE7os");
        \u0275\u0275elementEnd()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CtaComponent, [{
    type: Component,
    args: [{ selector: "app-cta", standalone: false, template: `<div class="cta-area ptb-100">
    <div class="container">
        <div class="cta-content">
            <div class="section-title mb-0">
                <h4>Sua empresa precisa de tecnologia para crescer?</h4>
                <h2>A VICS transforma dados em resultados e desenvolve sistemas que escalam seu neg\xF3cio.</h2>
                <a (click)="onClick('contact')" class="btn btn-primary btn-lg me-3">\u{1F4AC} Agende uma conversa gratuita</a>
                <a (click)="onClick('services')" class="btn btn-outline-primary btn-lg">\u{1F680} Ver nossos servi\xE7os</a>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CtaComponent, { className: "CtaComponent", filePath: "src/app/modules/home/components/cta/cta.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/skill/skill.component.ts
var SkillComponent = class _SkillComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function SkillComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SkillComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SkillComponent, selectors: [["app-skill"]], standalone: false, decls: 66, vars: 0, consts: [[1, "skill-area", "ptb-100", "bg-fffdfd"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "skill-content"], [1, "section-title"], [1, "skills-list"], [1, "skill-item"], [1, "skill-header"], [1, "skill-title"], [1, "skill-percentage"], [1, "count-box"], [1, "count-text"], [1, "skill-bar"], [1, "bar-inner"], ["data-width", "92", 1, "bar", "progress-line"], ["data-width", "97", 1, "bar", "progress-line"], ["data-width", "90", 1, "bar", "progress-line"], ["data-width", "95", 1, "bar", "progress-line"], [1, "skill-video"], ["src", "assets/img/video-img.jpg", "alt", "video-img"], [1, "video-btn"], [1, "video-popup"]], template: function SkillComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h2");
        \u0275\u0275text(7, "Algumas de nossas ");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "habilidades");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "Na VICS, nos diferenciamos pela nossa abordagem personalizada e foco inabal\xE1vel na qualidade. Utilizamos tecnologias de ponta e inovamos constantemente em nossas metodologias para entregar insights precisos e acion\xE1veis. Nossa equipe de especialistas \xE9 dedicada n\xE3o apenas \xE0 an\xE1lise de dados, mas tamb\xE9m a entender as nuances de cada neg\xF3cio, garantindo solu\xE7\xF5es verdadeiramente personalizadas. O sucesso dos nossos clientes \xE9 o que nos motiva, e estamos comprometidos em ser parceiros confi\xE1veis em suas jornadas rumo ao crescimento e excel\xEAncia.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "h4", 9);
        \u0275\u0275text(16, "Branding");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 10)(18, "div", 11)(19, "span", 12);
        \u0275\u0275text(20, "92");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 13)(23, "div", 14);
        \u0275\u0275element(24, "div", 15);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 7)(26, "div", 8)(27, "h4", 9);
        \u0275\u0275text(28, "Marketing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 10)(30, "div", 11)(31, "span", 12);
        \u0275\u0275text(32, "97");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 13)(35, "div", 14);
        \u0275\u0275element(36, "div", 16);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "div", 7)(38, "div", 8)(39, "h4", 9);
        \u0275\u0275text(40, "Design");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 10)(42, "div", 11)(43, "span", 12);
        \u0275\u0275text(44, "90");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 13)(47, "div", 14);
        \u0275\u0275element(48, "div", 17);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 7)(50, "div", 8)(51, "h4", 9);
        \u0275\u0275text(52, "Development");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "div", 10)(54, "div", 11)(55, "span", 12);
        \u0275\u0275text(56, "95");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, "%");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 13)(59, "div", 14);
        \u0275\u0275element(60, "div", 18);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(61, "div", 3)(62, "div", 19);
        \u0275\u0275element(63, "img", 20)(64, "div", 21);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(65, "div", 22);
      }
    }, styles: ['\n\n[data-width="1"][_ngcontent-%COMP%] {\n  width: 1%;\n}\n[data-width="2"][_ngcontent-%COMP%] {\n  width: 2%;\n}\n[data-width="3"][_ngcontent-%COMP%] {\n  width: 3%;\n}\n[data-width="4"][_ngcontent-%COMP%] {\n  width: 4%;\n}\n[data-width="5"][_ngcontent-%COMP%] {\n  width: 5%;\n}\n[data-width="6"][_ngcontent-%COMP%] {\n  width: 6%;\n}\n[data-width="7"][_ngcontent-%COMP%] {\n  width: 7%;\n}\n[data-width="8"][_ngcontent-%COMP%] {\n  width: 8%;\n}\n[data-width="9"][_ngcontent-%COMP%] {\n  width: 9%;\n}\n[data-width="10"][_ngcontent-%COMP%] {\n  width: 10%;\n}\n[data-width="11"][_ngcontent-%COMP%] {\n  width: 11%;\n}\n[data-width="12"][_ngcontent-%COMP%] {\n  width: 12%;\n}\n[data-width="13"][_ngcontent-%COMP%] {\n  width: 13%;\n}\n[data-width="14"][_ngcontent-%COMP%] {\n  width: 14%;\n}\n[data-width="15"][_ngcontent-%COMP%] {\n  width: 15%;\n}\n[data-width="16"][_ngcontent-%COMP%] {\n  width: 16%;\n}\n[data-width="17"][_ngcontent-%COMP%] {\n  width: 17%;\n}\n[data-width="18"][_ngcontent-%COMP%] {\n  width: 18%;\n}\n[data-width="19"][_ngcontent-%COMP%] {\n  width: 19%;\n}\n[data-width="20"][_ngcontent-%COMP%] {\n  width: 20%;\n}\n[data-width="21"][_ngcontent-%COMP%] {\n  width: 21%;\n}\n[data-width="22"][_ngcontent-%COMP%] {\n  width: 22%;\n}\n[data-width="23"][_ngcontent-%COMP%] {\n  width: 23%;\n}\n[data-width="24"][_ngcontent-%COMP%] {\n  width: 24%;\n}\n[data-width="25"][_ngcontent-%COMP%] {\n  width: 25%;\n}\n[data-width="26"][_ngcontent-%COMP%] {\n  width: 26%;\n}\n[data-width="27"][_ngcontent-%COMP%] {\n  width: 27%;\n}\n[data-width="28"][_ngcontent-%COMP%] {\n  width: 28%;\n}\n[data-width="29"][_ngcontent-%COMP%] {\n  width: 29%;\n}\n[data-width="30"][_ngcontent-%COMP%] {\n  width: 30%;\n}\n[data-width="31"][_ngcontent-%COMP%] {\n  width: 31%;\n}\n[data-width="32"][_ngcontent-%COMP%] {\n  width: 32%;\n}\n[data-width="33"][_ngcontent-%COMP%] {\n  width: 33%;\n}\n[data-width="34"][_ngcontent-%COMP%] {\n  width: 34%;\n}\n[data-width="35"][_ngcontent-%COMP%] {\n  width: 35%;\n}\n[data-width="36"][_ngcontent-%COMP%] {\n  width: 36%;\n}\n[data-width="37"][_ngcontent-%COMP%] {\n  width: 37%;\n}\n[data-width="38"][_ngcontent-%COMP%] {\n  width: 38%;\n}\n[data-width="39"][_ngcontent-%COMP%] {\n  width: 39%;\n}\n[data-width="40"][_ngcontent-%COMP%] {\n  width: 40%;\n}\n[data-width="41"][_ngcontent-%COMP%] {\n  width: 41%;\n}\n[data-width="42"][_ngcontent-%COMP%] {\n  width: 42%;\n}\n[data-width="43"][_ngcontent-%COMP%] {\n  width: 43%;\n}\n[data-width="44"][_ngcontent-%COMP%] {\n  width: 44%;\n}\n[data-width="45"][_ngcontent-%COMP%] {\n  width: 45%;\n}\n[data-width="46"][_ngcontent-%COMP%] {\n  width: 46%;\n}\n[data-width="47"][_ngcontent-%COMP%] {\n  width: 47%;\n}\n[data-width="48"][_ngcontent-%COMP%] {\n  width: 48%;\n}\n[data-width="49"][_ngcontent-%COMP%] {\n  width: 49%;\n}\n[data-width="50"][_ngcontent-%COMP%] {\n  width: 50%;\n}\n[data-width="51"][_ngcontent-%COMP%] {\n  width: 51%;\n}\n[data-width="52"][_ngcontent-%COMP%] {\n  width: 52%;\n}\n[data-width="53"][_ngcontent-%COMP%] {\n  width: 53%;\n}\n[data-width="54"][_ngcontent-%COMP%] {\n  width: 54%;\n}\n[data-width="55"][_ngcontent-%COMP%] {\n  width: 55%;\n}\n[data-width="56"][_ngcontent-%COMP%] {\n  width: 56%;\n}\n[data-width="57"][_ngcontent-%COMP%] {\n  width: 57%;\n}\n[data-width="58"][_ngcontent-%COMP%] {\n  width: 58%;\n}\n[data-width="59"][_ngcontent-%COMP%] {\n  width: 59%;\n}\n[data-width="60"][_ngcontent-%COMP%] {\n  width: 60%;\n}\n[data-width="61"][_ngcontent-%COMP%] {\n  width: 61%;\n}\n[data-width="62"][_ngcontent-%COMP%] {\n  width: 62%;\n}\n[data-width="63"][_ngcontent-%COMP%] {\n  width: 63%;\n}\n[data-width="64"][_ngcontent-%COMP%] {\n  width: 64%;\n}\n[data-width="65"][_ngcontent-%COMP%] {\n  width: 65%;\n}\n[data-width="66"][_ngcontent-%COMP%] {\n  width: 66%;\n}\n[data-width="67"][_ngcontent-%COMP%] {\n  width: 67%;\n}\n[data-width="68"][_ngcontent-%COMP%] {\n  width: 68%;\n}\n[data-width="69"][_ngcontent-%COMP%] {\n  width: 69%;\n}\n[data-width="70"][_ngcontent-%COMP%] {\n  width: 70%;\n}\n[data-width="71"][_ngcontent-%COMP%] {\n  width: 71%;\n}\n[data-width="72"][_ngcontent-%COMP%] {\n  width: 72%;\n}\n[data-width="73"][_ngcontent-%COMP%] {\n  width: 73%;\n}\n[data-width="74"][_ngcontent-%COMP%] {\n  width: 74%;\n}\n[data-width="75"][_ngcontent-%COMP%] {\n  width: 75%;\n}\n[data-width="76"][_ngcontent-%COMP%] {\n  width: 76%;\n}\n[data-width="77"][_ngcontent-%COMP%] {\n  width: 77%;\n}\n[data-width="78"][_ngcontent-%COMP%] {\n  width: 78%;\n}\n[data-width="79"][_ngcontent-%COMP%] {\n  width: 79%;\n}\n[data-width="80"][_ngcontent-%COMP%] {\n  width: 80%;\n}\n[data-width="81"][_ngcontent-%COMP%] {\n  width: 81%;\n}\n[data-width="82"][_ngcontent-%COMP%] {\n  width: 82%;\n}\n[data-width="83"][_ngcontent-%COMP%] {\n  width: 83%;\n}\n[data-width="84"][_ngcontent-%COMP%] {\n  width: 84%;\n}\n[data-width="85"][_ngcontent-%COMP%] {\n  width: 85%;\n}\n[data-width="86"][_ngcontent-%COMP%] {\n  width: 86%;\n}\n[data-width="87"][_ngcontent-%COMP%] {\n  width: 87%;\n}\n[data-width="88"][_ngcontent-%COMP%] {\n  width: 88%;\n}\n[data-width="89"][_ngcontent-%COMP%] {\n  width: 89%;\n}\n[data-width="90"][_ngcontent-%COMP%] {\n  width: 90%;\n}\n[data-width="91"][_ngcontent-%COMP%] {\n  width: 91%;\n}\n[data-width="92"][_ngcontent-%COMP%] {\n  width: 92%;\n}\n[data-width="93"][_ngcontent-%COMP%] {\n  width: 93%;\n}\n[data-width="94"][_ngcontent-%COMP%] {\n  width: 94%;\n}\n[data-width="95"][_ngcontent-%COMP%] {\n  width: 95%;\n}\n[data-width="96"][_ngcontent-%COMP%] {\n  width: 96%;\n}\n[data-width="97"][_ngcontent-%COMP%] {\n  width: 97%;\n}\n[data-width="98"][_ngcontent-%COMP%] {\n  width: 98%;\n}\n[data-width="99"][_ngcontent-%COMP%] {\n  width: 99%;\n}\n[data-width="100"][_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=skill.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkillComponent, [{
    type: Component,
    args: [{ selector: "app-skill", standalone: false, template: `<div class="skill-area ptb-100 bg-fffdfd">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
                <div class="skill-content">
                    <div class="section-title">
                        <h2>Algumas de nossas <span>habilidades</span></h2>
                        <p>Na VICS, nos diferenciamos pela nossa abordagem personalizada e foco inabal\xE1vel na qualidade. Utilizamos tecnologias de ponta e inovamos constantemente em nossas metodologias para entregar insights precisos e acion\xE1veis. Nossa equipe de especialistas \xE9 dedicada n\xE3o apenas \xE0 an\xE1lise de dados, mas tamb\xE9m a entender as nuances de cada neg\xF3cio, garantindo solu\xE7\xF5es verdadeiramente personalizadas. O sucesso dos nossos clientes \xE9 o que nos motiva, e estamos comprometidos em ser parceiros confi\xE1veis em suas jornadas rumo ao crescimento e excel\xEAncia.</p>
                    </div>
                    <div class="skills-list">
                        <div class="skill-item">
                            <div class="skill-header">
                                <h4 class="skill-title">Branding</h4>
                                <div class="skill-percentage">
                                    <div class="count-box"><span class="count-text">92</span>%</div>
                                </div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner"><div class="bar progress-line" data-width="92"></div></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-header">
                                <h4 class="skill-title">Marketing</h4>
                                <div class="skill-percentage"><div class="count-box"><span class="count-text">97</span>%</div></div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner"><div class="bar progress-line" data-width="97"></div></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-header">
                                <h4 class="skill-title">Design</h4>
                                <div class="skill-percentage"><div class="count-box"><span class="count-text">90</span>%</div></div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner"><div class="bar progress-line" data-width="90"></div></div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <div class="skill-header">
                                <h4 class="skill-title">Development</h4>
                                <div class="skill-percentage"><div class="count-box"><span class="count-text">95</span>%</div></div>
                            </div>
                            <div class="skill-bar">
                                <div class="bar-inner"><div class="bar progress-line" data-width="95"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12">
                <div class="skill-video">
                    <img src="assets/img/video-img.jpg" alt="video-img">
                    <div class="video-btn">
                        <!-- <button class="popup-youtube" (click)="ngxSmartModalService.getModal('popupTwo').open()"><i class="fas fa-play"></i></button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="video-popup">
    <!-- <ngx-smart-modal #popupTwo [identifier]="'popupTwo'">
        <iframe src="https://www.youtube.com/embed/WQ119jAN4Xo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </ngx-smart-modal> -->
</div>`, styles: ['/* src/app/modules/home/components/skill/skill.component.scss */\n[data-width="1"] {\n  width: 1%;\n}\n[data-width="2"] {\n  width: 2%;\n}\n[data-width="3"] {\n  width: 3%;\n}\n[data-width="4"] {\n  width: 4%;\n}\n[data-width="5"] {\n  width: 5%;\n}\n[data-width="6"] {\n  width: 6%;\n}\n[data-width="7"] {\n  width: 7%;\n}\n[data-width="8"] {\n  width: 8%;\n}\n[data-width="9"] {\n  width: 9%;\n}\n[data-width="10"] {\n  width: 10%;\n}\n[data-width="11"] {\n  width: 11%;\n}\n[data-width="12"] {\n  width: 12%;\n}\n[data-width="13"] {\n  width: 13%;\n}\n[data-width="14"] {\n  width: 14%;\n}\n[data-width="15"] {\n  width: 15%;\n}\n[data-width="16"] {\n  width: 16%;\n}\n[data-width="17"] {\n  width: 17%;\n}\n[data-width="18"] {\n  width: 18%;\n}\n[data-width="19"] {\n  width: 19%;\n}\n[data-width="20"] {\n  width: 20%;\n}\n[data-width="21"] {\n  width: 21%;\n}\n[data-width="22"] {\n  width: 22%;\n}\n[data-width="23"] {\n  width: 23%;\n}\n[data-width="24"] {\n  width: 24%;\n}\n[data-width="25"] {\n  width: 25%;\n}\n[data-width="26"] {\n  width: 26%;\n}\n[data-width="27"] {\n  width: 27%;\n}\n[data-width="28"] {\n  width: 28%;\n}\n[data-width="29"] {\n  width: 29%;\n}\n[data-width="30"] {\n  width: 30%;\n}\n[data-width="31"] {\n  width: 31%;\n}\n[data-width="32"] {\n  width: 32%;\n}\n[data-width="33"] {\n  width: 33%;\n}\n[data-width="34"] {\n  width: 34%;\n}\n[data-width="35"] {\n  width: 35%;\n}\n[data-width="36"] {\n  width: 36%;\n}\n[data-width="37"] {\n  width: 37%;\n}\n[data-width="38"] {\n  width: 38%;\n}\n[data-width="39"] {\n  width: 39%;\n}\n[data-width="40"] {\n  width: 40%;\n}\n[data-width="41"] {\n  width: 41%;\n}\n[data-width="42"] {\n  width: 42%;\n}\n[data-width="43"] {\n  width: 43%;\n}\n[data-width="44"] {\n  width: 44%;\n}\n[data-width="45"] {\n  width: 45%;\n}\n[data-width="46"] {\n  width: 46%;\n}\n[data-width="47"] {\n  width: 47%;\n}\n[data-width="48"] {\n  width: 48%;\n}\n[data-width="49"] {\n  width: 49%;\n}\n[data-width="50"] {\n  width: 50%;\n}\n[data-width="51"] {\n  width: 51%;\n}\n[data-width="52"] {\n  width: 52%;\n}\n[data-width="53"] {\n  width: 53%;\n}\n[data-width="54"] {\n  width: 54%;\n}\n[data-width="55"] {\n  width: 55%;\n}\n[data-width="56"] {\n  width: 56%;\n}\n[data-width="57"] {\n  width: 57%;\n}\n[data-width="58"] {\n  width: 58%;\n}\n[data-width="59"] {\n  width: 59%;\n}\n[data-width="60"] {\n  width: 60%;\n}\n[data-width="61"] {\n  width: 61%;\n}\n[data-width="62"] {\n  width: 62%;\n}\n[data-width="63"] {\n  width: 63%;\n}\n[data-width="64"] {\n  width: 64%;\n}\n[data-width="65"] {\n  width: 65%;\n}\n[data-width="66"] {\n  width: 66%;\n}\n[data-width="67"] {\n  width: 67%;\n}\n[data-width="68"] {\n  width: 68%;\n}\n[data-width="69"] {\n  width: 69%;\n}\n[data-width="70"] {\n  width: 70%;\n}\n[data-width="71"] {\n  width: 71%;\n}\n[data-width="72"] {\n  width: 72%;\n}\n[data-width="73"] {\n  width: 73%;\n}\n[data-width="74"] {\n  width: 74%;\n}\n[data-width="75"] {\n  width: 75%;\n}\n[data-width="76"] {\n  width: 76%;\n}\n[data-width="77"] {\n  width: 77%;\n}\n[data-width="78"] {\n  width: 78%;\n}\n[data-width="79"] {\n  width: 79%;\n}\n[data-width="80"] {\n  width: 80%;\n}\n[data-width="81"] {\n  width: 81%;\n}\n[data-width="82"] {\n  width: 82%;\n}\n[data-width="83"] {\n  width: 83%;\n}\n[data-width="84"] {\n  width: 84%;\n}\n[data-width="85"] {\n  width: 85%;\n}\n[data-width="86"] {\n  width: 86%;\n}\n[data-width="87"] {\n  width: 87%;\n}\n[data-width="88"] {\n  width: 88%;\n}\n[data-width="89"] {\n  width: 89%;\n}\n[data-width="90"] {\n  width: 90%;\n}\n[data-width="91"] {\n  width: 91%;\n}\n[data-width="92"] {\n  width: 92%;\n}\n[data-width="93"] {\n  width: 93%;\n}\n[data-width="94"] {\n  width: 94%;\n}\n[data-width="95"] {\n  width: 95%;\n}\n[data-width="96"] {\n  width: 96%;\n}\n[data-width="97"] {\n  width: 97%;\n}\n[data-width="98"] {\n  width: 98%;\n}\n[data-width="99"] {\n  width: 99%;\n}\n[data-width="100"] {\n  width: 100%;\n}\n/*# sourceMappingURL=skill.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SkillComponent, { className: "SkillComponent", filePath: "src/app/modules/home/components/skill/skill.component.ts", lineNumber: 9 });
})();

// src/app/modules/home/components/funfacts/funfacts.component.ts
var FunfactsComponent = class _FunfactsComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function FunfactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FunfactsComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FunfactsComponent, selectors: [["app-funfacts"]], standalone: false, decls: 35, vars: 4, consts: [[1, "funfacts-area", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-3", "col-md-3", "col-6", "col-sm-3"], [1, "funfact"], [1, "far", "fa-smile"], [3, "countUp"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-award"], [1, "fas", "fa-user"]], template: function FunfactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275elementStart(6, "h3")(7, "span", 6);
        \u0275\u0275text(8, "00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Happy Clients");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 3)(12, "div", 4);
        \u0275\u0275element(13, "i", 7);
        \u0275\u0275elementStart(14, "h3")(15, "span", 6);
        \u0275\u0275text(16, "00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, "Completed Projects");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 3)(20, "div", 4);
        \u0275\u0275element(21, "i", 8);
        \u0275\u0275elementStart(22, "h3")(23, "span", 6);
        \u0275\u0275text(24, "00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Winning Awards");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "div", 3)(28, "div", 4);
        \u0275\u0275element(29, "i", 9);
        \u0275\u0275elementStart(30, "h3")(31, "span", 6);
        \u0275\u0275text(32, "00");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, "Team Members");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275property("countUp", 540);
        \u0275\u0275advance(8);
        \u0275\u0275property("countUp", 980);
        \u0275\u0275advance(8);
        \u0275\u0275property("countUp", 46);
        \u0275\u0275advance(8);
        \u0275\u0275property("countUp", 50);
      }
    }, dependencies: [CountUpDirective], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FunfactsComponent, [{
    type: Component,
    args: [{ selector: "app-funfacts", standalone: false, template: '<section class="funfacts-area pt-100 pb-70">\n    <div class="container">\n        <div class="row">\n            <div class="col-lg-3 col-md-3 col-6 col-sm-3">\n                <div class="funfact">\n                    <i class="far fa-smile"></i>\n                    <h3><span [countUp]="540">00</span></h3>\n                    <p>Happy Clients</p>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-3 col-6 col-sm-3">\n                <div class="funfact">\n                    <i class="fas fa-shield-alt"></i>\n                    <h3><span [countUp]="980">00</span></h3>\n                    <p>Completed Projects</p>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-3 col-6 col-sm-3">\n                <div class="funfact">\n                    <i class="fas fa-award"></i>\n                    <h3><span [countUp]="46">00</span></h3>\n                    <p>Winning Awards</p>\n                </div>\n            </div>\n            <div class="col-lg-3 col-md-3 col-6 col-sm-3">\n                <div class="funfact">\n                    <i class="fas fa-user"></i>\n                    <h3><span [countUp]="50">00</span></h3>\n                    <p>Team Members</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>' }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FunfactsComponent, { className: "FunfactsComponent", filePath: "src/app/modules/home/components/funfacts/funfacts.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/team/team.component.ts
function TeamComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "h3", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "ul")(10, "li");
    \u0275\u0275element(11, "a", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275element(13, "a", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li");
    \u0275\u0275element(15, "a", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275element(17, "a", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r1.img, \u0275\u0275sanitizeUrl)("alt", member_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.role);
  }
}
var TeamComponent = class _TeamComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
    this.teamMembers = [
      {
        name: "John Smith",
        role: "CEO",
        img: "assets/img/team-1.jpg"
      },
      {
        name: "David Warner",
        role: "Web Developer",
        img: "assets/img/team-2.jpg"
      },
      {
        name: "James Andy",
        role: "Back-End Developer",
        img: "assets/img/team-3.jpg"
      },
      {
        name: "David Smith",
        role: "Front-End Developer",
        img: "assets/img/team-4.jpg"
      },
      {
        name: "John Doe",
        role: "Web Developer",
        img: "assets/img/team-5.jpg"
      },
      {
        name: "Olivia Smith",
        role: "Photographer",
        img: "assets/img/team-6.jpg"
      }
    ];
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function TeamComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TeamComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamComponent, selectors: [["app-team"]], standalone: false, decls: 15, vars: 1, consts: [["id", "team", 1, "team-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "team-grid"], ["class", "single-team-box", 4, "ngFor", "ngForOf"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "shape"], [1, "single-team-box"], [1, "image"], [3, "src", "alt"], [1, "content"], [1, "title"], [1, "post"], [1, "social"], ["href", "#", "target", "_blank", 1, "fab", "fa-facebook-f"], ["href", "#", "target", "_blank", 1, "fab", "fa-twitter"], ["href", "#", "target", "_blank", 1, "fab", "fa-instagram"], ["href", "#", "target", "_blank", 1, "fab", "fa-linkedin-in"]], template: function TeamComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Conhe\xE7a a VICS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Nosso ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "time criativo");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Profissionais que unem tecnologia, dados e vis\xE3o de neg\xF3cio.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3);
        \u0275\u0275template(12, TeamComponent_div_12_Template, 18, 4, "div", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 5);
        \u0275\u0275element(14, "img", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.teamMembers);
      }
    }, dependencies: [NgForOf], styles: ["\n\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 30px;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  text-align: center;\n  padding: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 180px;\n  border-radius: 50%;\n  margin: 0 auto 15px auto;\n  display: block;\n  object-fit: cover;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .post[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 0;\n  list-style: none;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #444;\n  background: #f1f1f1;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s;\n}\n.team-grid[_ngcontent-%COMP%]   .single-team-box[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #007bff;\n  color: #fff;\n}\n/*# sourceMappingURL=team.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamComponent, [{
    type: Component,
    args: [{ selector: "app-team", standalone: false, template: '<div id="team" class="team-area ptb-100">\n  <div class="container">\n    <div class="section-title">\n      <h4>Conhe\xE7a a VICS</h4>\n      <h2>Nosso <span>time criativo</span></h2>\n      <p>Profissionais que unem tecnologia, dados e vis\xE3o de neg\xF3cio.</p>\n    </div>\n\n    <div class="team-grid">\n      <div class="single-team-box" *ngFor="let member of teamMembers">\n        <div class="image">\n          <img [src]="member.img" [alt]="member.name" />\n        </div>\n        <div class="content">\n          <h3 class="title">{{ member.name }}</h3>\n          <span class="post">{{ member.role }}</span>\n        </div>\n        <div class="social">\n          <ul>\n            <li><a href="#" target="_blank" class="fab fa-facebook-f"></a></li>\n            <li><a href="#" target="_blank" class="fab fa-twitter"></a></li>\n            <li><a href="#" target="_blank" class="fab fa-instagram"></a></li>\n            <li><a href="#" target="_blank" class="fab fa-linkedin-in"></a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="shape1">\n    <img src="assets/img/shape1.png" alt="shape">\n  </div>\n</div>\n', styles: ["/* src/app/modules/home/components/team/team.component.scss */\n.team-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 30px;\n}\n.team-grid .single-team-box {\n  background: #fff;\n  border-radius: 12px;\n  text-align: center;\n  padding: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s;\n}\n.team-grid .single-team-box:hover {\n  transform: translateY(-4px);\n}\n.team-grid .single-team-box .image img {\n  width: 100%;\n  max-width: 180px;\n  border-radius: 50%;\n  margin: 0 auto 15px auto;\n  display: block;\n  object-fit: cover;\n}\n.team-grid .single-team-box .content .title {\n  font-size: 18px;\n  margin: 0;\n}\n.team-grid .single-team-box .content .post {\n  font-size: 14px;\n  color: #666;\n}\n.team-grid .single-team-box .social {\n  margin-top: 15px;\n}\n.team-grid .single-team-box .social ul {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 0;\n  list-style: none;\n}\n.team-grid .single-team-box .social ul li a {\n  font-size: 14px;\n  color: #444;\n  background: #f1f1f1;\n  border-radius: 50%;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.3s;\n}\n.team-grid .single-team-box .social ul li a:hover {\n  background: #007bff;\n  color: #fff;\n}\n/*# sourceMappingURL=team.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamComponent, { className: "TeamComponent", filePath: "src/app/modules/home/components/team/team.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/how-we-work/how-we-work.component.ts
var HowWeWorkComponent = class _HowWeWorkComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function HowWeWorkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HowWeWorkComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HowWeWorkComponent, selectors: [["app-how-we-work"]], standalone: false, decls: 61, vars: 0, consts: [[1, "how-work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "lead", "mb-4"], [1, "features-list"], [1, "fas", "fa-check"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-how-work"], [1, "icon"], [1, "fas", "fa-search"], [1, "fas", "fa-broom"], [1, "fas", "fa-tachometer-alt"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function HowWeWorkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Como transformamos seus dados em ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "decis\xF5es inteligentes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p", 3);
        \u0275\u0275text(8, "Muitas empresas t\xEAm dados espalhados em planilhas, sistemas diferentes e fontes desorganizadas. Transformamos essa bagun\xE7a em informa\xE7\xF5es claras que ajudam voc\xEA a decidir com seguran\xE7a.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "ul", 4)(10, "li");
        \u0275\u0275element(11, "i", 5);
        \u0275\u0275elementStart(12, "strong");
        \u0275\u0275text(13, "Informa\xE7\xF5es confi\xE1veis para decidir sem medo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15, "Eliminamos dados incorretos, duplicados e confusos. Voc\xEA recebe apenas informa\xE7\xF5es precisas para tomar decis\xF5es importantes sem receio de estar baseando-se em dados errados.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "li");
        \u0275\u0275element(17, "i", 5);
        \u0275\u0275elementStart(18, "strong");
        \u0275\u0275text(19, "Mais tempo para focar no que importa");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, "Automatizamos todo o trabalho pesado de organizar dados. Sua equipe para de perder horas juntando planilhas e passa a se dedicar ao crescimento do neg\xF3cio.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "li");
        \u0275\u0275element(23, "i", 5);
        \u0275\u0275elementStart(24, "strong");
        \u0275\u0275text(25, "Acompanhamento consistente dos resultados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p");
        \u0275\u0275text(27, "Criamos um padr\xE3o para medir seu progresso ao longo do tempo. Voc\xEA consegue ver tend\xEAncias, identificar oportunidades e corrigir problemas antes que se tornem crises.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275element(29, "i", 5);
        \u0275\u0275elementStart(30, "strong");
        \u0275\u0275text(31, "Vis\xE3o completa do seu neg\xF3cio em um s\xF3 lugar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, "Unimos informa\xE7\xF5es de vendas, estoque, clientes, finan\xE7as e outras \xE1reas em pain\xE9is simples de entender. Uma vis\xE3o 360\xB0 para decis\xF5es mais assertivas.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(34, "div", 6)(35, "div", 7)(36, "div", 8)(37, "div", 9);
        \u0275\u0275element(38, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h3");
        \u0275\u0275text(40, "\u{1F4CA} Coletamos seus dados espalhados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "p");
        \u0275\u0275text(42, "Reunimos informa\xE7\xF5es de todas as suas fontes: planilhas, sistemas de venda, estoque, CRM, redes sociais e mais. N\xE3o importa onde estejam seus dados - n\xF3s encontramos e coletamos tudo o que precisa para uma vis\xE3o completa do neg\xF3cio.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 7)(44, "div", 8)(45, "div", 9);
        \u0275\u0275element(46, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h3");
        \u0275\u0275text(48, "\u{1F9F9} Limpamos e organizamos tudo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, 'Eliminamos duplicatas, corrigimos erros, padronizamos formatos e organizamos os dados de forma inteligente. Transformamos a "bagun\xE7a" em informa\xE7\xF5es organizadas e prontas para gerar insights valiosos para seu neg\xF3cio.');
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(51, "div", 7)(52, "div", 8)(53, "div", 9);
        \u0275\u0275element(54, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "h3");
        \u0275\u0275text(56, "\u{1F4C8} Entregamos pain\xE9is simples e claros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p");
        \u0275\u0275text(58, "Criamos dashboards intuitivos onde voc\xEA acompanha vendas, custos, clientes e indicadores importantes em tempo real. Informa\xE7\xF5es atualizadas automaticamente, acess\xEDveis de qualquer lugar, para decis\xF5es r\xE1pidas e assertivas.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(59, "div", 13);
        \u0275\u0275element(60, "img", 14);
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HowWeWorkComponent, [{
    type: Component,
    args: [{ selector: "app-how-we-work", standalone: false, template: '<section class="how-work-area pt-100 pb-70">\n    <div class="container">\n        <div class="section-title">\n            <h2>Como transformamos seus dados em <span>decis\xF5es inteligentes</span></h2>\n            <p class="lead mb-4">Muitas empresas t\xEAm dados espalhados em planilhas, sistemas diferentes e fontes desorganizadas. \n            Transformamos essa bagun\xE7a em informa\xE7\xF5es claras que ajudam voc\xEA a decidir com seguran\xE7a.</p>\n            \n            <ul class="features-list">\n                <li><i class="fas fa-check"></i> <strong>Informa\xE7\xF5es confi\xE1veis para decidir sem medo</strong> \n                <p>Eliminamos dados incorretos, duplicados e confusos. Voc\xEA recebe apenas informa\xE7\xF5es precisas para tomar decis\xF5es importantes sem receio de estar baseando-se em dados errados.</p></li>\n                \n                <li><i class="fas fa-check"></i> <strong>Mais tempo para focar no que importa</strong> \n                <p>Automatizamos todo o trabalho pesado de organizar dados. Sua equipe para de perder horas juntando planilhas e passa a se dedicar ao crescimento do neg\xF3cio.</p></li>\n                \n                <li><i class="fas fa-check"></i> <strong>Acompanhamento consistente dos resultados</strong> \n                <p>Criamos um padr\xE3o para medir seu progresso ao longo do tempo. Voc\xEA consegue ver tend\xEAncias, identificar oportunidades e corrigir problemas antes que se tornem crises.</p></li>\n                \n                <li><i class="fas fa-check"></i> <strong>Vis\xE3o completa do seu neg\xF3cio em um s\xF3 lugar</strong> \n                <p>Unimos informa\xE7\xF5es de vendas, estoque, clientes, finan\xE7as e outras \xE1reas em pain\xE9is simples de entender. Uma vis\xE3o 360\xB0 para decis\xF5es mais assertivas.</p></li>\n            </ul>\n            \n        </div>\n        <div class="row justify-content-center">\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-how-work">\n                    <div class="icon">\n                        <i class="fas fa-search"></i>\n                    </div>\n                    <h3>\u{1F4CA} Coletamos seus dados espalhados</h3>\n                    <p>Reunimos informa\xE7\xF5es de todas as suas fontes: planilhas, sistemas de venda, estoque, CRM, redes sociais e mais. \n                    N\xE3o importa onde estejam seus dados - n\xF3s encontramos e coletamos tudo o que precisa para uma vis\xE3o completa do neg\xF3cio.</p>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-how-work">\n                    <div class="icon">\n                        <i class="fas fa-broom"></i>\n                    </div>\n                    <h3>\u{1F9F9} Limpamos e organizamos tudo</h3>\n                    <p>Eliminamos duplicatas, corrigimos erros, padronizamos formatos e organizamos os dados de forma inteligente. \n                    Transformamos a "bagun\xE7a" em informa\xE7\xF5es organizadas e prontas para gerar insights valiosos para seu neg\xF3cio.</p>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="single-how-work">\n                    <div class="icon">\n                        <i class="fas fa-tachometer-alt"></i>\n                    </div>\n                    <h3>\u{1F4C8} Entregamos pain\xE9is simples e claros</h3>\n                    <p>Criamos dashboards intuitivos onde voc\xEA acompanha vendas, custos, clientes e indicadores importantes em tempo real. \n                    Informa\xE7\xF5es atualizadas automaticamente, acess\xEDveis de qualquer lugar, para decis\xF5es r\xE1pidas e assertivas.</p>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="shape1"><img src="assets/img/shape1.png" alt="image"></div>\n</section>' }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HowWeWorkComponent, { className: "HowWeWorkComponent", filePath: "src/app/modules/home/components/how-we-work/how-we-work.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/services/services.component.ts
var ServicesComponent = class _ServicesComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicesComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], standalone: false, decls: 117, vars: 0, consts: [["id", "services", 1, "services-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-12", "mb-4"], [1, "single-services", "h-100"], [1, "services-img"], ["src", "assets/img/bi.jpg", "alt", "services-img"], [1, "icon"], [1, "fas", "fa-chart-bar"], [1, "services-content"], [1, "problem-section", "mb-3"], [1, "text-danger"], [1, "solution-section", "mb-3"], [1, "text-primary"], [1, "benefit-section"], [1, "text-success"], ["src", "assets/img/big_data.png", "alt", "services-img"], [1, "fas", "fa-database"], ["src", "assets/img/processamento_de_dados.webp", "alt", "services-img"], [1, "fas", "fa-cogs"], ["src", "assets/img/python.jpg", "alt", "services-img"], [1, "fas", "fa-code"], [1, "text-center", "mt-5"], [1, "mb-4"], ["href", "#contact", 1, "btn", "btn-primary", "btn-lg", "me-3"], ["href", "#contact", 1, "btn", "btn-outline-primary", "btn-lg"]], template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Servi\xE7os de Tecnologia em ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "Lagoa Santa MG");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Solu\xE7\xF5es pr\xE1ticas para empresas da regi\xE3o metropolitana de BH");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "div", 6);
        \u0275\u0275element(13, "img", 7);
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275element(15, "i", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 10)(17, "div", 11)(18, "h4", 12);
        \u0275\u0275text(19, "\u274C Problema:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p")(21, "strong");
        \u0275\u0275text(22, "Relat\xF3rios cheios de erros");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 13)(24, "h4", 14);
        \u0275\u0275text(25, "\u2705 Solu\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p")(27, "strong");
        \u0275\u0275text(28, "Tratamento e padroniza\xE7\xE3o de dados");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "h4", 16);
        \u0275\u0275text(31, "\u{1F3AF} Benef\xEDcio:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p")(33, "strong");
        \u0275\u0275text(34, "Informa\xE7\xF5es confi\xE1veis para decidir sem medo");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(35, "div", 4)(36, "div", 5)(37, "div", 6);
        \u0275\u0275element(38, "img", 17);
        \u0275\u0275elementStart(39, "div", 8);
        \u0275\u0275element(40, "i", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 10)(42, "div", 11)(43, "h4", 12);
        \u0275\u0275text(44, "\u274C Problema:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p")(46, "strong");
        \u0275\u0275text(47, "Estoque descontrolado (falta ou sobra)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "div", 13)(49, "h4", 14);
        \u0275\u0275text(50, "\u2705 Solu\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p")(52, "strong");
        \u0275\u0275text(53, "Modelos de previs\xE3o de consumo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "div", 15)(55, "h4", 16);
        \u0275\u0275text(56, "\u{1F3AF} Benef\xEDcio:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p")(58, "strong");
        \u0275\u0275text(59, "Economia e mais efici\xEAncia nas compras");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(60, "div", 4)(61, "div", 5)(62, "div", 6);
        \u0275\u0275element(63, "img", 19);
        \u0275\u0275elementStart(64, "div", 8);
        \u0275\u0275element(65, "i", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 10)(67, "div", 11)(68, "h4", 12);
        \u0275\u0275text(69, "\u274C Problema:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p")(71, "strong");
        \u0275\u0275text(72, "Clientes que n\xE3o aparecem (no-show)");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "div", 13)(74, "h4", 14);
        \u0275\u0275text(75, "\u2705 Solu\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p")(77, "strong");
        \u0275\u0275text(78, "An\xE1lise preditiva de comportamento");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "div", 15)(80, "h4", 16);
        \u0275\u0275text(81, "\u{1F3AF} Benef\xEDcio:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p")(83, "strong");
        \u0275\u0275text(84, "Agenda mais eficiente, menos desperd\xEDcio de tempo");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(85, "div", 4)(86, "div", 5)(87, "div", 6);
        \u0275\u0275element(88, "img", 21);
        \u0275\u0275elementStart(89, "div", 8);
        \u0275\u0275element(90, "i", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 10)(92, "div", 11)(93, "h4", 12);
        \u0275\u0275text(94, "\u274C Problema:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p")(96, "strong");
        \u0275\u0275text(97, "Crescimento travado por falta de tecnologia");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(98, "div", 13)(99, "h4", 14);
        \u0275\u0275text(100, "\u2705 Solu\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "p")(102, "strong");
        \u0275\u0275text(103, "Desenvolvimento sob medida e integra\xE7\xE3o de sistemas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "div", 15)(105, "h4", 16);
        \u0275\u0275text(106, "\u{1F3AF} Benef\xEDcio:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "p")(108, "strong");
        \u0275\u0275text(109, "Escalabilidade e inova\xE7\xE3o sem precisar de um time interno caro");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(110, "div", 23)(111, "h3", 24);
        \u0275\u0275text(112, "Sua empresa em Lagoa Santa ou regi\xE3o precisa de tecnologia?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "a", 25);
        \u0275\u0275text(114, "\u{1F4AC} Fale com a VICS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "a", 26);
        \u0275\u0275text(116, "\u{1F680} Pe\xE7a uma proposta");
        \u0275\u0275elementEnd()()()();
      }
    }, styles: ["\n\n.single-services[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.single-services[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.problem-section[_ngcontent-%COMP%], \n.solution-section[_ngcontent-%COMP%], \n.benefit-section[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-left: 3px solid transparent;\n  padding-left: 15px;\n  margin-left: -15px;\n  transition: all 0.3s ease;\n}\n.problem-section[_ngcontent-%COMP%] {\n  border-left-color: #dc3545;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(220, 53, 69, 0.05) 0%,\n      transparent 100%);\n}\n.problem-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-weight: 600;\n}\n.solution-section[_ngcontent-%COMP%] {\n  border-left-color: #0d6efd;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(13, 110, 253, 0.05) 0%,\n      transparent 100%);\n}\n.solution-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 600;\n}\n.benefit-section[_ngcontent-%COMP%] {\n  border-left-color: #198754;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(25, 135, 84, 0.05) 0%,\n      transparent 100%);\n}\n.benefit-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 600;\n}\n.services-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}\n.services-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=services.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: false, template: '<div id="services" class="services-area pt-100 pb-70">\n  <div class="container">\n    <div class="section-title">\n      <h2>Servi\xE7os de Tecnologia em <span>Lagoa Santa MG</span></h2>\n      <p>Solu\xE7\xF5es pr\xE1ticas para empresas da regi\xE3o metropolitana de BH</p>\n    </div>\n\n    <div class="row justify-content-center">\n\n      <div class="col-lg-6 col-md-12 mb-4">\n        <div class="single-services h-100">\n          <div class="services-img">\n            <img src="assets/img/bi.jpg" alt="services-img" />\n            <div class="icon"><i class="fas fa-chart-bar"></i></div>\n          </div>\n          <div class="services-content">\n            <div class="problem-section mb-3">\n              <h4 class="text-danger">\u274C Problema:</h4>\n              <p><strong>Relat\xF3rios cheios de erros</strong></p>\n            </div>\n            <div class="solution-section mb-3">\n              <h4 class="text-primary">\u2705 Solu\xE7\xE3o:</h4>\n              <p><strong>Tratamento e padroniza\xE7\xE3o de dados</strong></p>\n            </div>\n            <div class="benefit-section">\n              <h4 class="text-success">\u{1F3AF} Benef\xEDcio:</h4>\n              <p><strong>Informa\xE7\xF5es confi\xE1veis para decidir sem medo</strong></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-lg-6 col-md-12 mb-4">\n        <div class="single-services h-100">\n          <div class="services-img">\n            <img src="assets/img/big_data.png" alt="services-img" />\n            <div class="icon"><i class="fas fa-database"></i></div>\n          </div>\n          <div class="services-content">\n            <div class="problem-section mb-3">\n              <h4 class="text-danger">\u274C Problema:</h4>\n              <p><strong>Estoque descontrolado (falta ou sobra)</strong></p>\n            </div>\n            <div class="solution-section mb-3">\n              <h4 class="text-primary">\u2705 Solu\xE7\xE3o:</h4>\n              <p><strong>Modelos de previs\xE3o de consumo</strong></p>\n            </div>\n            <div class="benefit-section">\n              <h4 class="text-success">\u{1F3AF} Benef\xEDcio:</h4>\n              <p><strong>Economia e mais efici\xEAncia nas compras</strong></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-lg-6 col-md-12 mb-4">\n        <div class="single-services h-100">\n          <div class="services-img">\n            <img src="assets/img/processamento_de_dados.webp" alt="services-img" />\n            <div class="icon"><i class="fas fa-cogs"></i></div>\n          </div>\n          <div class="services-content">\n            <div class="problem-section mb-3">\n              <h4 class="text-danger">\u274C Problema:</h4>\n              <p><strong>Clientes que n\xE3o aparecem (no-show)</strong></p>\n            </div>\n            <div class="solution-section mb-3">\n              <h4 class="text-primary">\u2705 Solu\xE7\xE3o:</h4>\n              <p><strong>An\xE1lise preditiva de comportamento</strong></p>\n            </div>\n            <div class="benefit-section">\n              <h4 class="text-success">\u{1F3AF} Benef\xEDcio:</h4>\n              <p><strong>Agenda mais eficiente, menos desperd\xEDcio de tempo</strong></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="col-lg-6 col-md-12 mb-4">\n        <div class="single-services h-100">\n          <div class="services-img">\n            <img src="assets/img/python.jpg" alt="services-img" />\n            <div class="icon"><i class="fas fa-code"></i></div>\n          </div>\n          <div class="services-content">\n            <div class="problem-section mb-3">\n              <h4 class="text-danger">\u274C Problema:</h4>\n              <p><strong>Crescimento travado por falta de tecnologia</strong></p>\n            </div>\n            <div class="solution-section mb-3">\n              <h4 class="text-primary">\u2705 Solu\xE7\xE3o:</h4>\n              <p><strong>Desenvolvimento sob medida e integra\xE7\xE3o de sistemas</strong></p>\n            </div>\n            <div class="benefit-section">\n              <h4 class="text-success">\u{1F3AF} Benef\xEDcio:</h4>\n              <p><strong>Escalabilidade e inova\xE7\xE3o sem precisar de um time interno caro</strong></p>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    \n    <div class="text-center mt-5">\n      <h3 class="mb-4">Sua empresa em Lagoa Santa ou regi\xE3o precisa de tecnologia?</h3>\n      <a href="#contact" class="btn btn-primary btn-lg me-3">\u{1F4AC} Fale com a VICS</a>\n      <a href="#contact" class="btn btn-outline-primary btn-lg">\u{1F680} Pe\xE7a uma proposta</a>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/home/components/services/services.component.scss */\n.single-services {\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n.single-services:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.problem-section,\n.solution-section,\n.benefit-section {\n  padding: 10px 0;\n  border-left: 3px solid transparent;\n  padding-left: 15px;\n  margin-left: -15px;\n  transition: all 0.3s ease;\n}\n.problem-section {\n  border-left-color: #dc3545;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(220, 53, 69, 0.05) 0%,\n      transparent 100%);\n}\n.problem-section h4 {\n  color: #dc3545;\n  font-weight: 600;\n}\n.solution-section {\n  border-left-color: #0d6efd;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(13, 110, 253, 0.05) 0%,\n      transparent 100%);\n}\n.solution-section h4 {\n  color: #0d6efd;\n  font-weight: 600;\n}\n.benefit-section {\n  border-left-color: #198754;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(25, 135, 84, 0.05) 0%,\n      transparent 100%);\n}\n.benefit-section h4 {\n  color: #198754;\n  font-weight: 600;\n}\n.services-content h4 {\n  font-size: 1.1rem;\n  margin-bottom: 8px;\n}\n.services-content p {\n  margin-bottom: 0;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=services.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/modules/home/components/services/services.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/subscribe/subscribe.component.ts
var SubscribeComponent = class _SubscribeComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function SubscribeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubscribeComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubscribeComponent, selectors: [["app-subscribe"]], standalone: false, decls: 11, vars: 0, consts: [[1, "subscribe-area", "ptb-100"], [1, "container"], [1, "newsletter"], [1, "mb-4"], [1, "newsletter-cta"], ["href", "https://wa.me/5531975474785?text=Ol\xE1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi\xE7os%20da%20VICS", "target", "_blank", "rel", "noopener", 1, "btn", "btn-success", "btn-lg"], [1, "fab", "fa-whatsapp", "me-2"]], template: function SubscribeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Fale conosco pelo WhatsApp");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6, "Entre em contato direto com nossos especialistas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4)(8, "a", 5);
        \u0275\u0275element(9, "i", 6);
        \u0275\u0275text(10, " Iniciar conversa ");
        \u0275\u0275elementEnd()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubscribeComponent, [{
    type: Component,
    args: [{ selector: "app-subscribe", standalone: false, template: '<div class="subscribe-area ptb-100">\n    <div class="container">\n        <div class="newsletter">\n            <h2>Fale conosco pelo WhatsApp</h2>\n            <p class="mb-4">Entre em contato direto com nossos especialistas</p>\n            <div class="newsletter-cta">\n                <a href="https://wa.me/5531975474785?text=Ol\xE1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi\xE7os%20da%20VICS"\n                   class="btn btn-success btn-lg" target="_blank" rel="noopener">\n                    <i class="fab fa-whatsapp me-2"></i>\n                    Iniciar conversa\n                </a>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubscribeComponent, { className: "SubscribeComponent", filePath: "src/app/modules/home/components/subscribe/subscribe.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/partner/partner.component.ts
function PartnerComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 6);
    \u0275\u0275element(2, "img", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const logo_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", logo_r1, \u0275\u0275sanitizeUrl);
  }
}
var PartnerComponent = class _PartnerComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
    this.partners = [
      "assets/img/partner-1.png",
      "assets/img/partner-2.png",
      "assets/img/partner-3.png",
      "assets/img/partner-4.png",
      "assets/img/partner-5.png",
      "assets/img/partner-6.png",
      "assets/img/partner-1.png",
      "assets/img/partner-2.png",
      "assets/img/partner-3.png",
      "assets/img/partner-4.png",
      "assets/img/partner-5.png",
      "assets/img/partner-6.png"
    ];
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function PartnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PartnerComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnerComponent, selectors: [["app-partner"]], standalone: false, decls: 12, vars: 1, consts: [[1, "partner-area", "ptb-70", "bg-fffdfd"], [1, "container"], [1, "section-title"], [1, "partner-grid"], ["class", "partner-item", 4, "ngFor", "ngForOf"], [1, "partner-item"], ["href", "#", "target", "_blank", "rel", "noopener"], ["alt", "Logo do parceiro", 3, "src"]], template: function PartnerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Nossos parceiros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Empresas que ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "confiam");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " na VICS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 3);
        \u0275\u0275template(11, PartnerComponent_div_11_Template, 3, 1, "div", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.partners);
      }
    }, dependencies: [NgForOf], styles: ["\n\n.partner-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 20px;\n  align-items: center;\n  justify-items: center;\n}\n.partner-grid[_ngcontent-%COMP%]   .partner-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 60px;\n  object-fit: contain;\n  filter: grayscale(100%);\n  transition: filter 0.3s ease;\n}\n.partner-grid[_ngcontent-%COMP%]   .partner-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: grayscale(0%);\n}\n.partner-grid[_ngcontent-%COMP%]   .partner-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=partner.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnerComponent, [{
    type: Component,
    args: [{ selector: "app-partner", standalone: false, template: '<div class="partner-area ptb-70 bg-fffdfd">\n  <div class="container">\n    <div class="section-title">\n      <h4>Nossos parceiros</h4>\n      <h2>Empresas que <span>confiam</span> na VICS</h2>\n    </div>\n\n    <div class="partner-grid">\n      <div class="partner-item" *ngFor="let logo of partners">\n        <a href="#" target="_blank" rel="noopener">\n          <img [src]="logo" alt="Logo do parceiro">\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/modules/home/components/partner/partner.component.scss */\n.partner-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n  gap: 20px;\n  align-items: center;\n  justify-items: center;\n}\n.partner-grid .partner-item img {\n  max-height: 60px;\n  object-fit: contain;\n  filter: grayscale(100%);\n  transition: filter 0.3s ease;\n}\n.partner-grid .partner-item img:hover {\n  filter: grayscale(0%);\n}\n.partner-grid .partner-item a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=partner.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnerComponent, { className: "PartnerComponent", filePath: "src/app/modules/home/components/partner/partner.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/feedback/feedback.component.ts
function FeedbackComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "img", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feedback_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1('"', feedback_r1.quote, '"');
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feedback_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feedback_r1.role);
    \u0275\u0275advance();
    \u0275\u0275property("src", feedback_r1.img, \u0275\u0275sanitizeUrl)("alt", feedback_r1.name);
  }
}
var FeedbackComponent = class _FeedbackComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
    this.feedbacks = [
      {
        quote: "\u201CN\xE3o se preocupe em entender os dados. Aprenda a entender o que os dados entendem sobre o mundo.\u201D",
        name: "Geoffrey Hinton",
        role: "Pioneiro em redes neurais e aprendizado profundo",
        img: "assets/img/geoffrey.jpg"
      },
      {
        quote: "\u201COs dados s\xE3o o novo petr\xF3leo. N\xE3o \xE9 valioso se n\xE3o refinado.\u201D",
        name: "Clive Humby",
        role: "Matem\xE1tico e arquiteto do Tesco Clubcard",
        img: "assets/img/clive.jpeg"
      },
      {
        quote: "\u201CA ci\xEAncia de dados \xE9 sobre transformar dados em a\xE7\xF5es.\u201D",
        name: "D.J. Patil",
        role: "Cientista de dados",
        img: "assets/img/djpatil.jpeg"
      },
      {
        quote: "\u201CA competi\xE7\xE3o baseada em dados requer saber o que fazer com eles.\u201D",
        name: "Tom Davenport",
        role: "Autor e professor",
        img: "assets/img/tomdavenport.jpeg"
      },
      {
        quote: "\u201CA IA \xE9 a nova eletricidade...\u201D",
        name: "Andrew Ng",
        role: "Cofundador do Google Brain",
        img: "assets/img/andrewng.jpeg"
      },
      {
        quote: "\u201CMelhor em estat\xEDstica que qualquer programador e em c\xF3digo que qualquer estat\xEDstico.\u201D",
        name: "Hilary Mason",
        role: "Cientista de dados renomada",
        img: "assets/img/hilarymason.jpeg"
      },
      {
        quote: "\u201COs dados s\xE3o como lixo. \xC9 preciso saber o que fazer com eles.\u201D",
        name: "Jim Bergeson",
        role: "Especialista em marketing e dados",
        img: "assets/img/jimbergeson.jpeg"
      }
    ];
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function FeedbackComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FeedbackComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedbackComponent, selectors: [["app-feedback"]], standalone: false, decls: 11, vars: 1, consts: [["id", "feedback", 1, "feedback-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "feedback-grid"], ["class", "single-feedback-item", 4, "ngFor", "ngForOf"], [1, "single-feedback-item"], [1, "info"], [1, "shadow", "rounded-circle", 3, "src", "alt"]], template: function FeedbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "O que dizem os especialistas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2")(6, "span");
        \u0275\u0275text(7, "Frases");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " inspiradoras sobre dados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275template(10, FeedbackComponent_div_10_Template, 9, 5, "div", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.feedbacks);
      }
    }, dependencies: [NgForOf], styles: ["\n\n.feedback-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.feedback-grid[_ngcontent-%COMP%]   .single-feedback-item[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 25px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n.feedback-grid[_ngcontent-%COMP%]   .single-feedback-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.feedback-grid[_ngcontent-%COMP%]   .single-feedback-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #333;\n  margin-bottom: 20px;\n}\n.feedback-grid[_ngcontent-%COMP%]   .single-feedback-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0;\n}\n.feedback-grid[_ngcontent-%COMP%]   .single-feedback-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #777;\n}\n.feedback-grid[_ngcontent-%COMP%]   .single-feedback-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=feedback.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeedbackComponent, [{
    type: Component,
    args: [{ selector: "app-feedback", standalone: false, template: '<section class="feedback-area ptb-100" id="feedback">\n  <div class="container">\n    <div class="section-title">\n      <h4>O que dizem os especialistas</h4>\n      <h2><span>Frases</span> inspiradoras sobre dados</h2>\n    </div>\n\n    <div class="feedback-grid">\n      <div class="single-feedback-item" *ngFor="let feedback of feedbacks">\n        <p>"{{ feedback.quote }}"</p>\n        <div class="info">\n          <h3>{{ feedback.name }}</h3>\n          <span>{{ feedback.role }}</span>\n          <img [src]="feedback.img" [alt]="feedback.name" class="shadow rounded-circle">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n', styles: ["/* src/app/modules/home/components/feedback/feedback.component.scss */\n.feedback-grid {\n  display: grid;\n  gap: 30px;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n}\n.feedback-grid .single-feedback-item {\n  background-color: #fff;\n  padding: 25px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  text-align: center;\n  transition: transform 0.3s ease;\n}\n.feedback-grid .single-feedback-item:hover {\n  transform: translateY(-4px);\n}\n.feedback-grid .single-feedback-item p {\n  font-style: italic;\n  color: #333;\n  margin-bottom: 20px;\n}\n.feedback-grid .single-feedback-item .info h3 {\n  font-size: 18px;\n  margin: 0;\n}\n.feedback-grid .single-feedback-item .info span {\n  font-size: 14px;\n  color: #777;\n}\n.feedback-grid .single-feedback-item .info img {\n  margin-top: 15px;\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=feedback.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedbackComponent, { className: "FeedbackComponent", filePath: "src/app/modules/home/components/feedback/feedback.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/faq/faq.component.ts
var _c0 = ["accordionContent"];
var _c1 = (a0) => ({ "open": a0 });
var FaqComponent = class _FaqComponent {
  constructor(viewportScroller, platformId) {
    this.viewportScroller = viewportScroller;
    this.platformId = platformId;
    this.contentHeight = 0;
    this.openSectionIndex = -1;
    this.isBrowser = false;
  }
  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  ngAfterViewInit() {
    if (this.isBrowser && this.openSectionIndex !== -1) {
      this.calculateContentHeight();
    }
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  toggleSection(index) {
    if (this.openSectionIndex === index) {
      this.openSectionIndex = -1;
    } else {
      this.openSectionIndex = index;
      if (this.isBrowser) {
        setTimeout(() => this.calculateContentHeight(), 0);
      }
    }
  }
  isSectionOpen(index) {
    return this.openSectionIndex === index;
  }
  calculateContentHeight() {
    const content = this.accordionContents.get(this.openSectionIndex);
    if (content) {
      this.contentHeight = content.nativeElement.scrollHeight;
    }
  }
  static {
    this.\u0275fac = function FaqComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FaqComponent)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FaqComponent, selectors: [["app-faq"]], viewQuery: function FaqComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.accordionContents = _t);
      }
    }, standalone: false, decls: 64, vars: 48, consts: [[1, "faq-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "faq-accordion"], [1, "accordion"], [1, "accordion-section"], [1, "accordion-header", 3, "click", "ngClass"], [1, "accordion-content", 3, "ngClass"]], template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Perguntas Frequentes ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "Sobre a VICS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Se ainda tiver d\xFAvidas, entre em contato \u2014 teremos prazer em conversar com voc\xEA.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_14_listener() {
          return ctx.toggleSection(0);
        });
        \u0275\u0275text(15, " Como a VICS pode ajudar minha empresa? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9)(17, "p");
        \u0275\u0275text(18, "Somos o bra\xE7o t\xE9cnico para empresas que t\xEAm boas ideias, mas precisam de algu\xE9m para colocar em pr\xE1tica. Desenvolvemos sites, sistemas e automa\xE7\xF5es sob medida, sempre com foco no resultado que voc\xEA busca: efici\xEAncia, organiza\xE7\xE3o, crescimento e escala.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 7)(20, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_20_listener() {
          return ctx.toggleSection(1);
        });
        \u0275\u0275text(21, " Voc\xEAs trabalham s\xF3 com dados? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 9)(23, "p");
        \u0275\u0275text(24, "N\xE3o. Atuamos com projetos que envolvem dados, sim \u2014 mas tamb\xE9m desenvolvemos aplica\xE7\xF5es web, integra\xE7\xF5es de sistemas, automa\xE7\xF5es de processos e tudo o que envolva tecnologia aplicada ao neg\xF3cio.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 7)(26, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_26_listener() {
          return ctx.toggleSection(2);
        });
        \u0275\u0275text(27, " Como voc\xEAs se integram aos sistemas que j\xE1 usamos? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 9)(29, "p");
        \u0275\u0275text(30, "Estudamos sua estrutura atual e criamos solu\xE7\xF5es que se adaptam a ela. Sempre que poss\xEDvel, evitamos mudan\xE7as bruscas, priorizando integra\xE7\xF5es suaves e eficientes.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 7)(32, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_32_listener() {
          return ctx.toggleSection(3);
        });
        \u0275\u0275text(33, " Quanto custa um projeto? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 9)(35, "p");
        \u0275\u0275text(36, "Depende do tipo de projeto, mas sempre trabalhamos com transpar\xEAncia. Pode ser por escopo fechado, por horas, ou baseado em valor entregue. Avaliamos juntos o que faz mais sentido para voc\xEA.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(37, "div", 4)(38, "div", 5)(39, "div", 6)(40, "div", 7)(41, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_41_listener() {
          return ctx.toggleSection(4);
        });
        \u0275\u0275text(42, " Qual a experi\xEAncia da equipe da VICS? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div", 9)(44, "p");
        \u0275\u0275text(45, "Temos experi\xEAncia pr\xE1tica em projetos de diversos segmentos \u2014 de escolas a distribuidores, de startups a ind\xFAstrias. Nosso foco \xE9 adaptar a tecnologia \xE0 realidade do cliente, com agilidade e responsabilidade.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "div", 7)(47, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_47_listener() {
          return ctx.toggleSection(5);
        });
        \u0275\u0275text(48, " E a seguran\xE7a dos dados? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 9)(50, "p");
        \u0275\u0275text(51, "Levamos isso muito a s\xE9rio. Utilizamos boas pr\xE1ticas de seguran\xE7a e seguimos normas de privacidade e compliance. Tudo \xE9 projetado para proteger seus dados e a confian\xE7a dos seus clientes.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(52, "div", 7)(53, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_53_listener() {
          return ctx.toggleSection(6);
        });
        \u0275\u0275text(54, " Voc\xEAs treinam nossa equipe tamb\xE9m? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 9)(56, "p");
        \u0275\u0275text(57, "Sim. Al\xE9m de entregar a solu\xE7\xE3o, podemos capacitar sua equipe para operar e at\xE9 evoluir o sistema internamente, se essa for a sua estrat\xE9gia.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "div", 7)(59, "div", 8);
        \u0275\u0275listener("click", function FaqComponent_Template_div_click_59_listener() {
          return ctx.toggleSection(7);
        });
        \u0275\u0275text(60, " Voc\xEAs t\xEAm cases de sucesso? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 9)(62, "p");
        \u0275\u0275text(63, "Sim. J\xE1 ajudamos empresas de diferentes setores a criarem solu\xE7\xF5es digitais relevantes. Podemos apresentar exemplos reais durante a nossa conversa.");
        \u0275\u0275elementEnd()()()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c1, ctx.isSectionOpen(0)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c1, ctx.isSectionOpen(0)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c1, ctx.isSectionOpen(1)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c1, ctx.isSectionOpen(1)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c1, ctx.isSectionOpen(2)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c1, ctx.isSectionOpen(2)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c1, ctx.isSectionOpen(3)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c1, ctx.isSectionOpen(3)));
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(32, _c1, ctx.isSectionOpen(4)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(34, _c1, ctx.isSectionOpen(4)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(36, _c1, ctx.isSectionOpen(5)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(38, _c1, ctx.isSectionOpen(5)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(40, _c1, ctx.isSectionOpen(6)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(42, _c1, ctx.isSectionOpen(6)));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(44, _c1, ctx.isSectionOpen(7)));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(46, _c1, ctx.isSectionOpen(7)));
      }
    }, dependencies: [NgClass], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FaqComponent, [{
    type: Component,
    args: [{ selector: "app-faq", standalone: false, template: `<div class="faq-area ptb-100">
    <div class="container">
      <div class="section-title">
        <h2>Perguntas Frequentes <span>Sobre a VICS</span></h2>
        <p>Se ainda tiver d\xFAvidas, entre em contato \u2014 teremos prazer em conversar com voc\xEA.</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="faq-accordion">
            <div class="accordion">
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(0)" [ngClass]="{ 'open': isSectionOpen(0) }">
                  Como a VICS pode ajudar minha empresa?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(0) }">
                  <p>Somos o bra\xE7o t\xE9cnico para empresas que t\xEAm boas ideias, mas precisam de algu\xE9m para colocar em pr\xE1tica.  
                    Desenvolvemos sites, sistemas e automa\xE7\xF5es sob medida, sempre com foco no resultado que voc\xEA busca: efici\xEAncia, organiza\xE7\xE3o, crescimento e escala.</p>
                </div>
              </div>
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(1)" [ngClass]="{ 'open': isSectionOpen(1) }">
                  Voc\xEAs trabalham s\xF3 com dados?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(1) }">
                  <p>N\xE3o. Atuamos com projetos que envolvem dados, sim \u2014 mas tamb\xE9m desenvolvemos aplica\xE7\xF5es web, integra\xE7\xF5es de sistemas, automa\xE7\xF5es de processos e tudo o que envolva tecnologia aplicada ao neg\xF3cio.</p>
                </div>
              </div>
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(2)" [ngClass]="{ 'open': isSectionOpen(2) }">
                  Como voc\xEAs se integram aos sistemas que j\xE1 usamos?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(2) }">
                  <p>Estudamos sua estrutura atual e criamos solu\xE7\xF5es que se adaptam a ela. Sempre que poss\xEDvel, evitamos mudan\xE7as bruscas, priorizando integra\xE7\xF5es suaves e eficientes.</p>
                </div>
              </div>
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(3)" [ngClass]="{ 'open': isSectionOpen(3) }">
                  Quanto custa um projeto?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(3) }">
                  <p>Depende do tipo de projeto, mas sempre trabalhamos com transpar\xEAncia. Pode ser por escopo fechado, por horas, ou baseado em valor entregue. Avaliamos juntos o que faz mais sentido para voc\xEA.</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
  
        <div class="col-lg-6 col-md-12">
          <div class="faq-accordion">
            <div class="accordion">
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(4)" [ngClass]="{ 'open': isSectionOpen(4) }">
                  Qual a experi\xEAncia da equipe da VICS?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(4) }">
                  <p>Temos experi\xEAncia pr\xE1tica em projetos de diversos segmentos \u2014 de escolas a distribuidores, de startups a ind\xFAstrias. Nosso foco \xE9 adaptar a tecnologia \xE0 realidade do cliente, com agilidade e responsabilidade.</p>
                </div>
              </div>
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(5)" [ngClass]="{ 'open': isSectionOpen(5) }">
                  E a seguran\xE7a dos dados?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(5) }">
                  <p>Levamos isso muito a s\xE9rio. Utilizamos boas pr\xE1ticas de seguran\xE7a e seguimos normas de privacidade e compliance. Tudo \xE9 projetado para proteger seus dados e a confian\xE7a dos seus clientes.</p>
                </div>
              </div>
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(6)" [ngClass]="{ 'open': isSectionOpen(6) }">
                  Voc\xEAs treinam nossa equipe tamb\xE9m?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(6) }">
                  <p>Sim. Al\xE9m de entregar a solu\xE7\xE3o, podemos capacitar sua equipe para operar e at\xE9 evoluir o sistema internamente, se essa for a sua estrat\xE9gia.</p>
                </div>
              </div>
  
              <div class="accordion-section">
                <div class="accordion-header" (click)="toggleSection(7)" [ngClass]="{ 'open': isSectionOpen(7) }">
                  Voc\xEAs t\xEAm cases de sucesso?
                </div>
                <div class="accordion-content" [ngClass]="{ 'open': isSectionOpen(7) }">
                  <p>Sim. J\xE1 ajudamos empresas de diferentes setores a criarem solu\xE7\xF5es digitais relevantes. Podemos apresentar exemplos reais durante a nossa conversa.</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>
</div> ` }]
  }], () => [{ type: ViewportScroller }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { accordionContents: [{
    type: ViewChildren,
    args: ["accordionContent"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FaqComponent, { className: "FaqComponent", filePath: "src/app/modules/home/components/faq/faq.component.ts", lineNumber: 19 });
})();

// src/app/modules/home/components/pricing/pricing.component.ts
var PricingComponent = class _PricingComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function PricingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingComponent, selectors: [["app-pricing"]], standalone: false, decls: 108, vars: 0, consts: [["id", "pricing", 1, "pricing-area", "pt-100", "pb-70", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "pricingTable"], [1, "title"], [1, "price-value"], [1, "currency"], [1, "amount"], [1, "month"], [1, "pricing-content"], [1, "fas", "fa-check"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "shape1"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Our Products ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "Pricing");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "h3", 6);
        \u0275\u0275text(13, "Basic");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 7)(15, "span", 8);
        \u0275\u0275text(16, "$");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "span", 9);
        \u0275\u0275text(18, "39.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 10);
        \u0275\u0275text(20, "/Per month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "ul", 11)(22, "li");
        \u0275\u0275element(23, "i", 12);
        \u0275\u0275text(24, " Any Ware Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "li");
        \u0275\u0275element(26, "i", 12);
        \u0275\u0275text(27, " 10 GB Hosting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275element(29, "i", 12);
        \u0275\u0275text(30, " 2 Unique Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275element(32, "i", 12);
        \u0275\u0275text(33, " 12 GB Capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "li");
        \u0275\u0275element(35, "i", 12);
        \u0275\u0275text(36, " Weekly Backups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275element(38, "i", 12);
        \u0275\u0275text(39, " Support 24 / hour");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "a", 13);
        \u0275\u0275text(41, "Buy Now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 4)(43, "div", 5)(44, "h3", 6);
        \u0275\u0275text(45, "Standard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 7)(47, "span", 8);
        \u0275\u0275text(48, "$");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 9);
        \u0275\u0275text(50, "49.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span", 10);
        \u0275\u0275text(52, "/Per month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "ul", 11)(54, "li");
        \u0275\u0275element(55, "i", 12);
        \u0275\u0275text(56, " Any Ware Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "li");
        \u0275\u0275element(58, "i", 12);
        \u0275\u0275text(59, " 15 GB Hosting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "li");
        \u0275\u0275element(61, "i", 12);
        \u0275\u0275text(62, " 5 Unique Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "li");
        \u0275\u0275element(64, "i", 12);
        \u0275\u0275text(65, " 17 GB Capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "li");
        \u0275\u0275element(67, "i", 12);
        \u0275\u0275text(68, " Weekly Backups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "li");
        \u0275\u0275element(70, "i", 12);
        \u0275\u0275text(71, " Support 24 / hour");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "a", 13);
        \u0275\u0275text(73, "Buy Now");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 4)(75, "div", 5)(76, "h3", 6);
        \u0275\u0275text(77, "Premium");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 7)(79, "span", 8);
        \u0275\u0275text(80, "$");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "span", 9);
        \u0275\u0275text(82, "59.00");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 10);
        \u0275\u0275text(84, "/Per month");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "ul", 11)(86, "li");
        \u0275\u0275element(87, "i", 12);
        \u0275\u0275text(88, " Any Ware Access");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "li");
        \u0275\u0275element(90, "i", 12);
        \u0275\u0275text(91, " 20 GB Hosting");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "li");
        \u0275\u0275element(93, "i", 12);
        \u0275\u0275text(94, " 10 Unique Users");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "li");
        \u0275\u0275element(96, "i", 12);
        \u0275\u0275text(97, " 21 GB Capacity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "li");
        \u0275\u0275element(99, "i", 12);
        \u0275\u0275text(100, " Weekly Backups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "li");
        \u0275\u0275element(102, "i", 12);
        \u0275\u0275text(103, " Support 24 / hour");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "a", 13);
        \u0275\u0275text(105, "Buy Now");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(106, "div", 14);
        \u0275\u0275element(107, "img", 15);
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterLink], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingComponent, [{
    type: Component,
    args: [{ selector: "app-pricing", standalone: false, template: '<div id="pricing" class="pricing-area pt-100 pb-70 bg-F7F5F4">\n    <div class="container">\n        <div class="section-title">\n            <h2>Our Products <span>Pricing</span></h2>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n        </div>\n        <div class="row justify-content-center">\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="pricingTable">\n                    <h3 class="title">Basic</h3>\n                    <div class="price-value">\n                        <span class="currency">$</span>\n                        <span class="amount">39.00</span>\n                        <span class="month">/Per month</span>\n                    </div>\n                    <ul class="pricing-content">\n                        <li><i class="fas fa-check"></i> Any Ware Access</li>\n                        <li><i class="fas fa-check"></i> 10 GB Hosting</li>\n                        <li><i class="fas fa-check"></i> 2 Unique Users</li>\n                        <li><i class="fas fa-check"></i> 12 GB Capacity</li>\n                        <li><i class="fas fa-check"></i> Weekly Backups</li>\n                        <li><i class="fas fa-check"></i> Support 24 / hour</li>\n                    </ul>\n                    <a routerLink="/" class="btn btn-primary">Buy Now</a>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="pricingTable">\n                    <h3 class="title">Standard</h3>\n                    <div class="price-value">\n                        <span class="currency">$</span>\n                        <span class="amount">49.00</span>\n                        <span class="month">/Per month</span>\n                    </div>\n                    <ul class="pricing-content">\n                        <li><i class="fas fa-check"></i> Any Ware Access</li>\n                        <li><i class="fas fa-check"></i> 15 GB Hosting</li>\n                        <li><i class="fas fa-check"></i> 5 Unique Users</li>\n                        <li><i class="fas fa-check"></i> 17 GB Capacity</li>\n                        <li><i class="fas fa-check"></i> Weekly Backups</li>\n                        <li><i class="fas fa-check"></i> Support 24 / hour</li>\n                    </ul>\n                    <a routerLink="/" class="btn btn-primary">Buy Now</a>\n                </div>\n            </div>\n            <div class="col-lg-4 col-md-6 col-sm-6">\n                <div class="pricingTable">\n                    <h3 class="title">Premium</h3>\n                    <div class="price-value">\n                        <span class="currency">$</span>\n                        <span class="amount">59.00</span>\n                        <span class="month">/Per month</span>\n                    </div>\n                    <ul class="pricing-content">\n                        <li><i class="fas fa-check"></i> Any Ware Access</li>\n                        <li><i class="fas fa-check"></i> 20 GB Hosting</li>\n                        <li><i class="fas fa-check"></i> 10 Unique Users</li>\n                        <li><i class="fas fa-check"></i> 21 GB Capacity</li>\n                        <li><i class="fas fa-check"></i> Weekly Backups</li>\n                        <li><i class="fas fa-check"></i> Support 24 / hour</li>\n                    </ul>\n                    <a routerLink="/" class="btn btn-primary">Buy Now</a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="shape1"><img src="assets/img/shape1.png" alt="image"></div>\n</div>' }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingComponent, { className: "PricingComponent", filePath: "src/app/modules/home/components/pricing/pricing.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/work/work.component.ts
var _c02 = (a0) => ({ "active": a0 });
function WorkComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "img", 18);
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7, "An\xE1lise de dados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul")(9, "li")(10, "a", 20);
    \u0275\u0275text(11, "Varejo");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(12, "div", 16)(13, "div", 17);
    \u0275\u0275element(14, "img", 21);
    \u0275\u0275elementStart(15, "div", 19)(16, "h3");
    \u0275\u0275text(17, "An\xE1lise de dados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li")(20, "a", 22);
    \u0275\u0275text(21, "Pet shop");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function WorkComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "img", 24);
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7, "Estat\xEDstica");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul")(9, "li")(10, "a", 22);
    \u0275\u0275text(11, "Descritiva");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(12, "div", 16)(13, "div", 17);
    \u0275\u0275element(14, "img", 25);
    \u0275\u0275elementStart(15, "div", 19)(16, "h3");
    \u0275\u0275text(17, "Tela de persona");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ul")(19, "li")(20, "a", 26);
    \u0275\u0275text(21, "Desenvolvimento");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(22, "div", 16)(23, "div", 17);
    \u0275\u0275element(24, "img", 27);
    \u0275\u0275elementStart(25, "div", 19)(26, "h3");
    \u0275\u0275text(27, "Projeto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ul")(29, "li")(30, "a", 22);
    \u0275\u0275text(31, "Desenvolvimento");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(32, "div", 16)(33, "div", 17);
    \u0275\u0275element(34, "img", 28);
    \u0275\u0275elementStart(35, "div", 19)(36, "h3");
    \u0275\u0275text(37, "Projeto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ul")(39, "li")(40, "a", 22);
    \u0275\u0275text(41, "Desenvolvimento");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(42, "div", 16)(43, "div", 17);
    \u0275\u0275element(44, "img", 29);
    \u0275\u0275elementStart(45, "div", 19)(46, "h3");
    \u0275\u0275text(47, "Processamento de dados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "ul")(49, "li")(50, "a", 30);
    \u0275\u0275text(51, "Big data");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "li");
    \u0275\u0275text(53, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "li")(55, "a", 30);
    \u0275\u0275text(56, "Saiba mais");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
function WorkComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 15)(2, "div", 32)(3, "div", 17);
    \u0275\u0275element(4, "img", 33);
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7, "Resultados que Geram Valor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul")(9, "li")(10, "strong");
    \u0275\u0275text(11, "Decis\xF5es mais inteligentes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " nossos relat\xF3rios e sistemas ajudam empresas a agir com base em dados reais, n\xE3o achismos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li")(14, "strong");
    \u0275\u0275text(15, "Mais efici\xEAncia:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " automatizamos tarefas, organizamos processos e reduzimos retrabalho com solu\xE7\xF5es personalizadas.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "li")(18, "strong");
    \u0275\u0275text(19, "Redu\xE7\xE3o de custos:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " ajudamos empresas a identificar desperd\xEDcios, melhorar log\xEDstica e ter mais controle operacional.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "li")(22, "strong");
    \u0275\u0275text(23, "Crescimento digital:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " nossos projetos impulsionam a presen\xE7a online, melhoram a experi\xEAncia dos clientes e abrem novas oportunidades de receita.");
    \u0275\u0275elementEnd()()()()()()();
  }
}
function WorkComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 15)(2, "div", 35)(3, "div", 36)(4, "h4");
    \u0275\u0275text(5, "\u{1F3E6} Setor Financeiro \u2013 Banco Digital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p")(7, "strong");
    \u0275\u0275text(8, "Desafio:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Alto volume de pagamentos via Pix, com gargalos de performance.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "strong");
    \u0275\u0275text(12, "Solu\xE7\xE3o:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Reestruturamos o backend com arquitetura ass\xEDncrona, reduzindo o tempo de processamento em 70%.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p")(15, "strong");
    \u0275\u0275text(16, "Tecnologias:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Ruby on Rails, Sidekiq, PostgreSQL, Redis, Kubernetes (GCP).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 36)(19, "h4");
    \u0275\u0275text(20, "\u{1F3E5} Setor Hospitalar \u2013 Sistema de Interna\xE7\xF5es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Desafio:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " Falta de visibilidade em tempo real dos leitos ocupados e disponibilidade por setor.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "strong");
    \u0275\u0275text(27, "Solu\xE7\xE3o:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Criamos um data warehouse com dados hist\xF3ricos e tempo real, integrando fontes via Airflow e Kafka.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p")(30, "strong");
    \u0275\u0275text(31, "Resultado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " BI operacional com dashboards que reduziram o tempo de decis\xE3o cl\xEDnica.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p")(34, "strong");
    \u0275\u0275text(35, "Tecnologias:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, " Apache Airflow, PostgreSQL, Superset, Kafka, Python.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 35)(38, "div", 36)(39, "h4");
    \u0275\u0275text(40, "\u2696\uFE0F Setor Jur\xEDdico \u2013 Plataforma SaaS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p")(42, "strong");
    \u0275\u0275text(43, "Desafio:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Alto custo operacional com integra\xE7\xF5es manuais entre sistemas jur\xEDdicos.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p")(46, "strong");
    \u0275\u0275text(47, "Solu\xE7\xE3o:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, " Desenvolvemos microservi\xE7os que automatizam leitura de intima\xE7\xF5es, envio de documentos e notifica\xE7\xF5es.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p")(50, "strong");
    \u0275\u0275text(51, "Resultado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, " Redu\xE7\xE3o de 40% no tempo m\xE9dio de atendimento e elimina\xE7\xE3o de retrabalho.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p")(54, "strong");
    \u0275\u0275text(55, "Tecnologias:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(56, " Ruby, Redis, Docker, APIs RESTful.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 36)(58, "h4");
    \u0275\u0275text(59, "\u{1F30E} Solu\xE7\xE3o Crossborder \u2013 Plataforma de Exporta\xE7\xE3o");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "p")(61, "strong");
    \u0275\u0275text(62, "Desafio:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63, " Pequenos produtores queriam exportar lotes com burocracia reduzida e baixo custo.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "p")(65, "strong");
    \u0275\u0275text(66, "Solu\xE7\xE3o:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Plataforma web com automa\xE7\xE3o de cadastro, c\xE2mbio e DU-E, integrada ao Pix e \xE0 Receita Federal.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p")(69, "strong");
    \u0275\u0275text(70, "Resultado:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, " Exporta\xE7\xE3o viabilizada em 5 cliques, com economia de at\xE9 40% no custo total.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p")(73, "strong");
    \u0275\u0275text(74, "Tecnologias:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(75, " Rails, Python, APIs p\xFAblicas, bancos Azure e GCP.");
    \u0275\u0275elementEnd()()()()();
  }
}
function WorkComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275element(4, "img", 38);
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7, "Ci\xEAncias de Dados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul")(9, "li")(10, "a", 39);
    \u0275\u0275text(11, "M inera\xE7\xE3o de Dados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li");
    \u0275\u0275text(13, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "li")(15, "a", 39);
    \u0275\u0275text(16, "Saiba mais");
    \u0275\u0275elementEnd()()()()()()()();
  }
}
var WorkComponent = class _WorkComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
    this.currentTab = "tab1";
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  static {
    this.\u0275fac = function WorkComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WorkComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkComponent, selectors: [["app-work"]], standalone: false, decls: 35, vars: 20, consts: [["id", "work", 1, "work-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "container-fluid"], [1, "work-tabs"], [1, "nav-tabset"], [1, "nav-tab", 3, "ngClass"], [3, "click"], [1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["class", "pane", "id", "tab4", 4, "ngIf"], ["class", "pane", "id", "tab5", 4, "ngIf"], ["class", "pane", "id", "tab6", 4, "ngIf"], ["id", "tab1", 1, "pane"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-work"], ["src", "assets/img/analise_dados_varejo.png", "alt", "work-img"], [1, "work-content"], ["href", "https://blog.engenhariadedados.tec.br/?p=76"], ["src", "assets/img/analise_dados_pet_shop.png", "alt", "work-img"], ["routerLink", "/"], ["id", "tab2", 1, "pane"], ["src", "assets/img/metodo.jpeg", "alt", "work-img"], ["src", "assets/img/persona.png", "alt", "work-img"], ["href", "#"], ["src", "assets/img/project-model-canvas.jpeg", "alt", "work-img"], ["src", "assets/img/imagem-gerenciamento-integracao-dheka-v3-1.jpeg", "alt", "work-img"], ["src", "assets/img/processamento_de_dados.webp", "alt", "work-img"], ["routerLink", "https://blog.engenhariadedados.tec.br/?p=119&utm_source=site&utm_medium=link&utm_campaign=link_para_post&utm_id=trabalhos&utm_term=ciencia_de_dados&utm_content=link_para_o_blog"], ["id", "tab4", 1, "pane"], [1, "col-lg-12"], ["src", "assets/img/impacto_resultados.jpg", "alt", "work-img"], ["id", "tab5", 1, "pane"], [1, "col-lg-6", "col-md-12"], [1, "case-study", "mb-4"], ["id", "tab6", 1, "pane"], ["src", "assets/img/ciencia_de_dados.jpg", "alt", "work-img"], ["href", "https://blog.engenhariadedados.tec.br/?p=137&utm_source=site&utm_medium=link&utm_campaign=link_para_post&utm_id=trabalhos&utm_term=ciencia_de_dados&utm_content=link_para_o_blog", "target", "_blank"]], template: function WorkComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Casos de ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "Sucesso");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Resultados reais com solu\xE7\xF5es sob medida.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Combinamos tecnologia, agilidade e vis\xE3o estrat\xE9gica para resolver desafios t\xE9cnicos e acelerar neg\xF3cios. Confira alguns exemplos de impacto que geramos para nossos clientes:");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 3)(12, "div", 4)(13, "ul", 5)(14, "li", 6)(15, "span", 7);
        \u0275\u0275listener("click", function WorkComponent_Template_span_click_15_listener($event) {
          return ctx.switchTab($event, "tab1");
        });
        \u0275\u0275text(16, " Natureza dos Servi\xE7os ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "li", 6)(18, "span", 7);
        \u0275\u0275listener("click", function WorkComponent_Template_span_click_18_listener($event) {
          return ctx.switchTab($event, "tab2");
        });
        \u0275\u0275text(19, " Abordagem Metodol\xF3gica ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "li", 6)(21, "span", 7);
        \u0275\u0275listener("click", function WorkComponent_Template_span_click_21_listener($event) {
          return ctx.switchTab($event, "tab4");
        });
        \u0275\u0275text(22, " Impacto do Trabalho ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li", 6)(24, "span", 7);
        \u0275\u0275listener("click", function WorkComponent_Template_span_click_24_listener($event) {
          return ctx.switchTab($event, "tab5");
        });
        \u0275\u0275text(25, " Casos de Sucesso ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "li", 6)(27, "span", 7);
        \u0275\u0275listener("click", function WorkComponent_Template_span_click_27_listener($event) {
          return ctx.switchTab($event, "tab6");
        });
        \u0275\u0275text(28, " Tecnologias Utilizadas ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 8);
        \u0275\u0275template(30, WorkComponent_div_30_Template, 22, 0, "div", 9)(31, WorkComponent_div_31_Template, 57, 0, "div", 10)(32, WorkComponent_div_32_Template, 25, 0, "div", 11)(33, WorkComponent_div_33_Template, 76, 0, "div", 12)(34, WorkComponent_div_34_Template, 17, 0, "div", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c02, ctx.currentTab === "tab1"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c02, ctx.currentTab === "tab2"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c02, ctx.currentTab === "tab4"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c02, ctx.currentTab === "tab5"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c02, ctx.currentTab === "tab6"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.currentTab === "tab1");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentTab === "tab2");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentTab === "tab4");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentTab === "tab5");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.currentTab === "tab6");
      }
    }, dependencies: [NgClass, NgIf, RouterLink], styles: ["\n\n.case-study[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-left: 4px solid #007bff;\n  background-color: #f8f9fa;\n  border-radius: 5px;\n}\n.case-study[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #333;\n  font-weight: 600;\n}\n.case-study[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  line-height: 1.6;\n}\n.case-study[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.case-study[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #007bff;\n}\n/*# sourceMappingURL=work.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkComponent, [{
    type: Component,
    args: [{ selector: "app-work", standalone: false, template: `<div id="work" class="work-area pt-100 pb-70">
    <div class="container">
        <div class="section-title">
            <h2>Casos de <span>Sucesso</span></h2>
            <p>Resultados reais com solu\xE7\xF5es sob medida.</p>
            <p>Combinamos tecnologia, agilidade e vis\xE3o estrat\xE9gica para resolver desafios t\xE9cnicos e acelerar neg\xF3cios. Confira alguns exemplos de impacto que geramos para nossos clientes:</p>
        </div>
    </div>
    <div class="container-fluid">
        <div class="work-tabs">
            <ul class="nav-tabset">
                <li class="nav-tab"
                    [ngClass]="{'active': currentTab === 'tab1'}">
                    <span (click)="switchTab($event, 'tab1')">
                        Natureza dos Servi\xE7os
                    </span>
                </li>
                <li class="nav-tab"
                    [ngClass]="{'active': currentTab === 'tab2'}">
                    <span (click)="switchTab($event, 'tab2')">
                        Abordagem Metodol\xF3gica
                    </span>
                </li>
                <li class="nav-tab"
                    [ngClass]="{'active': currentTab === 'tab4'}">
                    <span (click)="switchTab($event, 'tab4')">
                        Impacto do Trabalho
                    </span>
                </li>
                <li class="nav-tab"
                    [ngClass]="{'active': currentTab === 'tab5'}">
                    <span (click)="switchTab($event, 'tab5')">
                        Casos de Sucesso
                    </span>
                </li>
                <li class="nav-tab"
                    [ngClass]="{'active': currentTab === 'tab6'}">
                    <span (click)="switchTab($event, 'tab6')">
                        Tecnologias Utilizadas
                    </span>
                </li>
            </ul>
            <div class="tabs-container">
                <div class="pane" id="tab1" *ngIf="currentTab === 'tab1'">
                    <div class="row">

                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img src="assets/img/analise_dados_varejo.png"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>An\xE1lise de dados</h3>
                                    <ul>
                                        <li><a
                                                href="https://blog.engenhariadedados.tec.br/?p=76">Varejo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img src="assets/img/analise_dados_pet_shop.png"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>An\xE1lise de dados</h3>
                                    <ul>
                                        <li><a routerLink="/">Pet shop</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="pane" id="tab2" *ngIf="currentTab === 'tab2'">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img src="assets/img/metodo.jpeg"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>Estat\xEDstica</h3>
                                    <ul>
                                        <li><a routerLink="/">Descritiva</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img src="assets/img/persona.png"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>Tela de persona</h3>
                                    <ul>
                                        <li><a href="#">Desenvolvimento</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img src="assets/img/project-model-canvas.jpeg"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>Projeto</h3>
                                    <ul>
                                        <li><a routerLink="/">Desenvolvimento</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img
                                    src="assets/img/imagem-gerenciamento-integracao-dheka-v3-1.jpeg"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>Projeto</h3>
                                    <ul>
                                        <li><a routerLink="/">Desenvolvimento</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img
                                    src="assets/img/processamento_de_dados.webp"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>Processamento de dados</h3>
                                    <ul>
                                        <li><a
                                                routerLink="https://blog.engenhariadedados.tec.br/?p=119&utm_source=site&utm_medium=link&utm_campaign=link_para_post&utm_id=trabalhos&utm_term=ciencia_de_dados&utm_content=link_para_o_blog">Big
                                                data</a></li>
                                        <li>.</li>
                                        <li><a
                                                routerLink="https://blog.engenhariadedados.tec.br/?p=119&utm_source=site&utm_medium=link&utm_campaign=link_para_post&utm_id=trabalhos&utm_term=ciencia_de_dados&utm_content=link_para_o_blog">Saiba
                                                mais</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pane" id="tab4" *ngIf="currentTab === 'tab4'">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-work">
                                <img src="assets/img/impacto_resultados.jpg" alt="work-img">
                                <div class="work-content">
                                    <h3>Resultados que Geram Valor</h3>
                                    <ul>
                                        <li><strong>Decis\xF5es mais inteligentes:</strong> nossos relat\xF3rios e sistemas ajudam empresas a agir com base em dados reais, n\xE3o achismos.</li>
                                        <li><strong>Mais efici\xEAncia:</strong> automatizamos tarefas, organizamos processos e reduzimos retrabalho com solu\xE7\xF5es personalizadas.</li>
                                        <li><strong>Redu\xE7\xE3o de custos:</strong> ajudamos empresas a identificar desperd\xEDcios, melhorar log\xEDstica e ter mais controle operacional.</li>
                                        <li><strong>Crescimento digital:</strong> nossos projetos impulsionam a presen\xE7a online, melhoram a experi\xEAncia dos clientes e abrem novas oportunidades de receita.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="pane" id="tab5" *ngIf="currentTab === 'tab5'">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="case-study mb-4">
                                <h4>\u{1F3E6} Setor Financeiro \u2013 Banco Digital</h4>
                                <p><strong>Desafio:</strong> Alto volume de pagamentos via Pix, com gargalos de performance.</p>
                                <p><strong>Solu\xE7\xE3o:</strong> Reestruturamos o backend com arquitetura ass\xEDncrona, reduzindo o tempo de processamento em 70%.</p>
                                <p><strong>Tecnologias:</strong> Ruby on Rails, Sidekiq, PostgreSQL, Redis, Kubernetes (GCP).</p>
                            </div>
                            
                            <div class="case-study mb-4">
                                <h4>\u{1F3E5} Setor Hospitalar \u2013 Sistema de Interna\xE7\xF5es</h4>
                                <p><strong>Desafio:</strong> Falta de visibilidade em tempo real dos leitos ocupados e disponibilidade por setor.</p>
                                <p><strong>Solu\xE7\xE3o:</strong> Criamos um data warehouse com dados hist\xF3ricos e tempo real, integrando fontes via Airflow e Kafka.</p>
                                <p><strong>Resultado:</strong> BI operacional com dashboards que reduziram o tempo de decis\xE3o cl\xEDnica.</p>
                                <p><strong>Tecnologias:</strong> Apache Airflow, PostgreSQL, Superset, Kafka, Python.</p>
                            </div>
                        </div>
                        
                        <div class="col-lg-6 col-md-12">
                            <div class="case-study mb-4">
                                <h4>\u2696\uFE0F Setor Jur\xEDdico \u2013 Plataforma SaaS</h4>
                                <p><strong>Desafio:</strong> Alto custo operacional com integra\xE7\xF5es manuais entre sistemas jur\xEDdicos.</p>
                                <p><strong>Solu\xE7\xE3o:</strong> Desenvolvemos microservi\xE7os que automatizam leitura de intima\xE7\xF5es, envio de documentos e notifica\xE7\xF5es.</p>
                                <p><strong>Resultado:</strong> Redu\xE7\xE3o de 40% no tempo m\xE9dio de atendimento e elimina\xE7\xE3o de retrabalho.</p>
                                <p><strong>Tecnologias:</strong> Ruby, Redis, Docker, APIs RESTful.</p>
                            </div>
                            
                            <div class="case-study mb-4">
                                <h4>\u{1F30E} Solu\xE7\xE3o Crossborder \u2013 Plataforma de Exporta\xE7\xE3o</h4>
                                <p><strong>Desafio:</strong> Pequenos produtores queriam exportar lotes com burocracia reduzida e baixo custo.</p>
                                <p><strong>Solu\xE7\xE3o:</strong> Plataforma web com automa\xE7\xE3o de cadastro, c\xE2mbio e DU-E, integrada ao Pix e \xE0 Receita Federal.</p>
                                <p><strong>Resultado:</strong> Exporta\xE7\xE3o viabilizada em 5 cliques, com economia de at\xE9 40% no custo total.</p>
                                <p><strong>Tecnologias:</strong> Rails, Python, APIs p\xFAblicas, bancos Azure e GCP.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pane" id="tab6" *ngIf="currentTab === 'tab6'">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="single-work">
                                <img src="assets/img/ciencia_de_dados.jpg"
                                    alt="work-img">
                                <div class="work-content">
                                    <h3>Ci\xEAncias de Dados</h3>
                                    <ul>
                                        <li><a
                                                href="https://blog.engenhariadedados.tec.br/?p=137&utm_source=site&utm_medium=link&utm_campaign=link_para_post&utm_id=trabalhos&utm_term=ciencia_de_dados&utm_content=link_para_o_blog"
                                                target="_blank">M inera\xE7\xE3o de
                                                Dados</a></li>
                                        <li>.</li>
                                        <li><a
                                                href="https://blog.engenhariadedados.tec.br/?p=137&utm_source=site&utm_medium=link&utm_campaign=link_para_post&utm_id=trabalhos&utm_term=ciencia_de_dados&utm_content=link_para_o_blog"
                                                target="_blank">Saiba mais</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`, styles: ["/* src/app/modules/home/components/work/work.component.scss */\n.case-study {\n  padding: 20px;\n  border-left: 4px solid #007bff;\n  background-color: #f8f9fa;\n  border-radius: 5px;\n}\n.case-study h4 {\n  margin-bottom: 15px;\n  color: #333;\n  font-weight: 600;\n}\n.case-study p {\n  margin-bottom: 10px;\n  line-height: 1.6;\n}\n.case-study p:last-child {\n  margin-bottom: 0;\n}\n.case-study strong {\n  color: #007bff;\n}\n/*# sourceMappingURL=work.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkComponent, { className: "WorkComponent", filePath: "src/app/modules/home/components/work/work.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/why-we-different/why-we-different.component.ts
var WhyWeDifferentComponent = class _WhyWeDifferentComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function WhyWeDifferentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WhyWeDifferentComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhyWeDifferentComponent, selectors: [["app-why-we-different"]], standalone: false, decls: 143, vars: 0, consts: [[1, "why-we-different", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "tabset", "why-we-different-tabset"], ["type", "radio", "name", "tabset", "id", "tab1", "aria-controls", "speed-flexibility", "checked", ""], ["for", "tab1"], ["type", "radio", "name", "tabset", "id", "tab2", "aria-controls", "profeesional-work"], ["for", "tab2"], ["type", "radio", "name", "tabset", "id", "tab3", "aria-controls", "experienced-staff"], ["for", "tab3"], ["type", "radio", "name", "tabset", "id", "tab4", "aria-controls", "custom-support"], ["for", "tab4"], [1, "tab-panels"], ["id", "speed-flexibility", 1, "tab-panel"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "why-we-different-img"], ["src", "assets/img/speed.webp", "alt", "img"], [1, "why-we-different-content"], [1, "fas", "fa-check"], ["id", "profeesional-work", 1, "tab-panel"], ["src", "assets/img/work.webp", "alt", "img"], ["id", "experienced-staff", 1, "tab-panel"], ["src", "assets/img/experiencia.webp", "alt", "img"], ["id", "custom-support", 1, "tab-panel"], ["src", "assets/img/suporte.webp", "alt", "img"]], template: function WhyWeDifferentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Por que somos ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "diferentes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Na VICS, nos diferenciamos pela nossa abordagem personalizada e foco inabal\xE1vel na qualidade. Utilizamos tecnologias de ponta e inovamos constantemente em nossas metodologias para entregar insights precisos e acion\xE1veis. Nossa equipe de especialistas \xE9 dedicada n\xE3o apenas \xE0 an\xE1lise de dados, mas tamb\xE9m a entender as nuances de cada neg\xF3cio, garantindo solu\xE7\xF5es verdadeiramente personalizadas. O sucesso dos nossos clientes \xE9 o que nos motiva, e estamos comprometidos em ser parceiros confi\xE1veis em suas jornadas rumo ao crescimento e excel\xEAncia.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275element(10, "input", 4);
        \u0275\u0275elementStart(11, "label", 5);
        \u0275\u0275text(12, "Velocidade, flexibilidade");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 6);
        \u0275\u0275elementStart(14, "label", 7);
        \u0275\u0275text(15, "Trabalho profissional");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 8);
        \u0275\u0275elementStart(17, "label", 9);
        \u0275\u0275text(18, "Equipe experiente");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "input", 10);
        \u0275\u0275elementStart(20, "label", 11);
        \u0275\u0275text(21, "Suporte personalizado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 12)(23, "div", 13)(24, "div", 14)(25, "div", 15)(26, "div", 16);
        \u0275\u0275element(27, "img", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 15)(29, "div", 18)(30, "h3");
        \u0275\u0275text(31, "Velocidade, flexibilidade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, "Na VICS, valorizamos a velocidade e a flexibilidade como aspectos essenciais do nosso servi\xE7o de consultoria em ci\xEAncia de dados. Respondemos rapidamente \xE0s necessidades dos nossos clientes, adaptando-nos \xE0s mudan\xE7as do mercado e aos desafios espec\xEDficos com agilidade e efici\xEAncia. Nossos processos otimizados e o uso de tecnologias de ponta nos permitem entregar an\xE1lises e insights de forma r\xE1pida e precisa. Al\xE9m disso, nossa abordagem flex\xEDvel significa que podemos personalizar nossos servi\xE7os para atender exatamente \xE0s necessidades de cada cliente, seja em projetos pequenos ou em demandas que requerem r\xE1pida escalabilidade. Nossa meta \xE9 assegurar que nossos clientes sempre recebam solu\xE7\xF5es de dados r\xE1pidas, eficazes e perfeitamente alinhadas com seus objetivos de neg\xF3cios.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "ul")(35, "li");
        \u0275\u0275element(36, "i", 19);
        \u0275\u0275text(37, " Resposta R\xE1pida \xE0s Necessidades do Cliente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "li");
        \u0275\u0275element(39, "i", 19);
        \u0275\u0275text(40, " Adapta\xE7\xE3o a Mudan\xE7as e Desafios");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "li");
        \u0275\u0275element(42, "i", 19);
        \u0275\u0275text(43, " Processos Eficientes e Metodologia \xC1gil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "li");
        \u0275\u0275element(45, "i", 19);
        \u0275\u0275text(46, " Tecnologias Avan\xE7adas para An\xE1lise R\xE1pida");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li");
        \u0275\u0275element(48, "i", 19);
        \u0275\u0275text(49, " Personaliza\xE7\xE3o de Servi\xE7os");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "li");
        \u0275\u0275element(51, "i", 19);
        \u0275\u0275text(52, " Capacidade de Escalar Servi\xE7os");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 20)(54, "div", 14)(55, "div", 15)(56, "div", 16);
        \u0275\u0275element(57, "img", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 15)(59, "div", 18)(60, "h3");
        \u0275\u0275text(61, "Trabalho profissional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, "Na VICS, nos orgulhamos do trabalho profissional que realizamos em consultoria de ci\xEAncia de dados. Nosso compromisso inabal\xE1vel com a qualidade, combinado com uma \xE9tica profissional rigorosa, nos permite entregar resultados excepcionais. Nossa equipe, composta por especialistas altamente capacitados, aplica uma abordagem meticulosa em cada projeto, garantindo precis\xE3o e confiabilidade. Damos grande \xEAnfase \xE0 aten\xE7\xE3o aos detalhes e estamos sempre focados em gerar resultados orientados que excedam as expectativas dos nossos clientes. Al\xE9m disso, a constante busca pela inova\xE7\xE3o e a atualiza\xE7\xE3o de nossas pr\xE1ticas nos mant\xE9m \xE0 frente no campo da ci\xEAncia de dados. \xC9 essa dedica\xE7\xE3o ao profissionalismo e \xE0 excel\xEAncia que nos define e diferencia no mercado.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "ul")(65, "li");
        \u0275\u0275element(66, "i", 19);
        \u0275\u0275text(67, " Compromisso com a Qualidade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "li");
        \u0275\u0275element(69, "i", 19);
        \u0275\u0275text(70, " Profissionalismo e \xC9tica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "li");
        \u0275\u0275element(72, "i", 19);
        \u0275\u0275text(73, " Experi\xEAncia e Expertise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275element(75, "i", 19);
        \u0275\u0275text(76, " Aten\xE7\xE3o aos Detalhes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "li");
        \u0275\u0275element(78, "i", 19);
        \u0275\u0275text(79, " Resultados Orientados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "li");
        \u0275\u0275element(81, "i", 19);
        \u0275\u0275text(82, " Atualiza\xE7\xE3o e Inova\xE7\xE3o Cont\xEDnua");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(83, "div", 22)(84, "div", 14)(85, "div", 15)(86, "div", 16);
        \u0275\u0275element(87, "img", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 15)(89, "div", 18)(90, "h3");
        \u0275\u0275text(91, "Pessoal experiente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p");
        \u0275\u0275text(93, "Na VICS, orgulhamo-nos do nosso pessoal experiente, que \xE9 o alicerce do nosso sucesso. Com forma\xE7\xF5es acad\xEAmicas s\xF3lidas e anos de experi\xEAncia pr\xE1tica, nossa equipe de cientistas de dados \xE9 composta por alguns dos melhores profissionais do setor. Eles possuem habilidades t\xE9cnicas avan\xE7adas em programa\xE7\xE3o, an\xE1lise estat\xEDstica e machine learning, permitindo-nos fornecer solu\xE7\xF5es de dados robustas e personalizadas. Al\xE9m disso, nossa equipe est\xE1 sempre aprendendo e se adaptando, garantindo que estamos sempre na vanguarda da inova\xE7\xE3o em ci\xEAncia de dados. Atrav\xE9s de seu trabalho, j\xE1 alcan\xE7amos in\xFAmeros sucessos e reconhecimentos, reafirmando nosso compromisso com a excel\xEAncia e a lideran\xE7a no campo da an\xE1lise de dados.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "ul")(95, "li");
        \u0275\u0275element(96, "i", 19);
        \u0275\u0275text(97, " Qualifica\xE7\xF5es e Forma\xE7\xE3o Acad\xEAmica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "li");
        \u0275\u0275element(99, "i", 19);
        \u0275\u0275text(100, " Experi\xEAncia Profissional");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "li");
        \u0275\u0275element(102, "i", 19);
        \u0275\u0275text(103, " Habilidades T\xE9cnicas e Especializa\xE7\xF5es");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "li");
        \u0275\u0275element(105, "i", 19);
        \u0275\u0275text(106, " Capacidade de Solu\xE7\xE3o de Problemas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li");
        \u0275\u0275element(108, "i", 19);
        \u0275\u0275text(109, " Compromisso com a Atualiza\xE7\xE3o Cont\xEDnua");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "li");
        \u0275\u0275element(111, "i", 19);
        \u0275\u0275text(112, " Casos de Sucesso e Reconhecimento");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(113, "div", 24)(114, "div", 14)(115, "div", 15)(116, "div", 16);
        \u0275\u0275element(117, "img", 25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "div", 15)(119, "div", 18)(120, "h3");
        \u0275\u0275text(121, "Suporte");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "p");
        \u0275\u0275text(123, "Em nossa consultoria de ci\xEAncia de dados, o 'Suporte Personalizado' vai al\xE9m do atendimento ao cliente \u2013 \xE9 uma filosofia central. Cada cliente \xE9 \xFAnico, e nossa abordagem reflete isso, com solu\xE7\xF5es e assist\xEAncia moldadas \xE0s necessidades espec\xEDficas de cada neg\xF3cio. Estamos sempre dispon\xEDveis para responder d\xFAvidas e oferecer suporte, seja atrav\xE9s de comunica\xE7\xE3o direta ou treinamento especializado. Nos adaptamos flexivelmente a mudan\xE7as e mantemos um di\xE1logo cont\xEDnuo, assegurando que nossos servi\xE7os estejam sempre em sintonia com os objetivos em evolu\xE7\xE3o dos nossos clientes. Nosso compromisso \xE9 com a constru\xE7\xE3o de relacionamentos de longo prazo, apoiando cada cliente em cada etapa de sua jornada com dados.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "ul")(125, "li");
        \u0275\u0275element(126, "i", 19);
        \u0275\u0275text(127, " Atendimento Individualizado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "li");
        \u0275\u0275element(129, "i", 19);
        \u0275\u0275text(130, " Disponibilidade e Acessibilidade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "li");
        \u0275\u0275element(132, "i", 19);
        \u0275\u0275text(133, " Treinamento e Educa\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "li");
        \u0275\u0275element(135, "i", 19);
        \u0275\u0275text(136, " Comunica\xE7\xE3o Cont\xEDnua e Feedback");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "li");
        \u0275\u0275element(138, "i", 19);
        \u0275\u0275text(139, " Adapta\xE7\xE3o e Flexibilidade");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "li");
        \u0275\u0275element(141, "i", 19);
        \u0275\u0275text(142, " Relacionamento de Longo Prazo");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhyWeDifferentComponent, [{
    type: Component,
    args: [{ selector: "app-why-we-different", standalone: false, template: `<div class="why-we-different ptb-100 bg-F7F5F4">
    <div class="container">
        <div class="section-title">
            <h2>Por que somos <span>diferentes</span></h2>
            <p>Na VICS, nos diferenciamos pela nossa abordagem personalizada e
                foco inabal\xE1vel na qualidade. Utilizamos tecnologias de ponta e
                inovamos constantemente em nossas metodologias para entregar
                insights precisos e acion\xE1veis. Nossa equipe de especialistas \xE9
                dedicada n\xE3o apenas \xE0 an\xE1lise de dados, mas tamb\xE9m a entender as
                nuances de cada neg\xF3cio, garantindo solu\xE7\xF5es verdadeiramente
                personalizadas. O sucesso dos nossos clientes \xE9 o que nos
                motiva, e estamos comprometidos em ser parceiros confi\xE1veis em
                suas jornadas rumo ao crescimento e excel\xEAncia.</p>
        </div>
        <div class="tabset why-we-different-tabset">
            <!-- Tab 1 -->
            <input type="radio" name="tabset" id="tab1"
                aria-controls="speed-flexibility" checked>
            <label for="tab1">Velocidade, flexibilidade</label>
            <!-- Tab 2 -->
            <input type="radio" name="tabset" id="tab2"
                aria-controls="profeesional-work">
            <label for="tab2">Trabalho profissional</label>
            <!-- Tab 3 -->
            <input type="radio" name="tabset" id="tab3"
                aria-controls="experienced-staff">
            <label for="tab3">Equipe experiente</label>
            <!-- Tab 4 -->
            <input type="radio" name="tabset" id="tab4"
                aria-controls="custom-support">
            <label for="tab4">Suporte personalizado</label>
            <div class="tab-panels">
                <div id="speed-flexibility" class="tab-panel">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-img">
                                <img src="assets/img/speed.webp" alt="img">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-content">
                                <h3>Velocidade, flexibilidade</h3>
                                <p>Na VICS, valorizamos a velocidade e a
                                    flexibilidade como aspectos essenciais do
                                    nosso servi\xE7o de consultoria em ci\xEAncia de
                                    dados. Respondemos rapidamente \xE0s
                                    necessidades dos nossos clientes,
                                    adaptando-nos \xE0s mudan\xE7as do mercado e aos
                                    desafios espec\xEDficos com agilidade e
                                    efici\xEAncia. Nossos processos otimizados e o
                                    uso de tecnologias de ponta nos permitem
                                    entregar an\xE1lises e insights de forma r\xE1pida
                                    e precisa. Al\xE9m disso, nossa abordagem
                                    flex\xEDvel significa que podemos personalizar
                                    nossos servi\xE7os para atender exatamente \xE0s
                                    necessidades de cada cliente, seja em
                                    projetos pequenos ou em demandas que
                                    requerem r\xE1pida escalabilidade. Nossa meta \xE9
                                    assegurar que nossos clientes sempre recebam
                                    solu\xE7\xF5es de dados r\xE1pidas, eficazes e
                                    perfeitamente alinhadas com seus objetivos
                                    de neg\xF3cios.</p>
                                <ul>
                                    <li><i class="fas fa-check"></i> Resposta
                                        R\xE1pida \xE0s Necessidades do Cliente</li>
                                    <li><i class="fas fa-check"></i> Adapta\xE7\xE3o a
                                        Mudan\xE7as e Desafios</li>
                                    <li><i class="fas fa-check"></i> Processos
                                        Eficientes e Metodologia \xC1gil</li>
                                    <li><i class="fas fa-check"></i> Tecnologias
                                        Avan\xE7adas para An\xE1lise R\xE1pida</li>
                                    <li><i class="fas fa-check"></i>
                                        Personaliza\xE7\xE3o de Servi\xE7os</li>
                                    <li><i class="fas fa-check"></i> Capacidade
                                        de Escalar Servi\xE7os</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="profeesional-work" class="tab-panel">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-img">
                                <img
                                    src="assets/img/work.webp"
                                    alt="img">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-content">
                                <h3>Trabalho profissional</h3>
                                <p>Na VICS, nos orgulhamos do trabalho
                                    profissional que realizamos em consultoria
                                    de ci\xEAncia de dados. Nosso compromisso
                                    inabal\xE1vel com a qualidade, combinado com
                                    uma \xE9tica profissional rigorosa, nos permite
                                    entregar resultados excepcionais. Nossa
                                    equipe, composta por especialistas altamente
                                    capacitados, aplica uma abordagem meticulosa
                                    em cada projeto, garantindo precis\xE3o e
                                    confiabilidade. Damos grande \xEAnfase \xE0
                                    aten\xE7\xE3o aos detalhes e estamos sempre
                                    focados em gerar resultados orientados que
                                    excedam as expectativas dos nossos clientes.
                                    Al\xE9m disso, a constante busca pela inova\xE7\xE3o
                                    e a atualiza\xE7\xE3o de nossas pr\xE1ticas nos
                                    mant\xE9m \xE0 frente no campo da ci\xEAncia de
                                    dados. \xC9 essa dedica\xE7\xE3o ao profissionalismo
                                    e \xE0 excel\xEAncia que nos define e diferencia
                                    no mercado.</p>
                                <ul>
                                    <li><i class="fas fa-check"></i> Compromisso
                                        com a Qualidade</li>
                                    <li><i class="fas fa-check"></i>
                                        Profissionalismo e \xC9tica</li>
                                    <li><i class="fas fa-check"></i> Experi\xEAncia
                                        e Expertise</li>
                                    <li><i class="fas fa-check"></i> Aten\xE7\xE3o aos
                                        Detalhes</li>
                                    <li><i class="fas fa-check"></i> Resultados
                                        Orientados</li>
                                    <li><i class="fas fa-check"></i> Atualiza\xE7\xE3o
                                        e Inova\xE7\xE3o Cont\xEDnua</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="experienced-staff" class="tab-panel">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-img">
                                <img src="assets/img/experiencia.webp" alt="img">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-content">
                                <h3>Pessoal experiente</h3>
                                <p>Na VICS, orgulhamo-nos do nosso pessoal
                                    experiente, que \xE9 o alicerce do nosso
                                    sucesso. Com forma\xE7\xF5es acad\xEAmicas s\xF3lidas e
                                    anos de experi\xEAncia pr\xE1tica, nossa equipe de
                                    cientistas de dados \xE9 composta por alguns
                                    dos melhores profissionais do setor. Eles
                                    possuem habilidades t\xE9cnicas avan\xE7adas em
                                    programa\xE7\xE3o, an\xE1lise estat\xEDstica e machine
                                    learning, permitindo-nos fornecer solu\xE7\xF5es
                                    de dados robustas e personalizadas. Al\xE9m
                                    disso, nossa equipe est\xE1 sempre aprendendo e
                                    se adaptando, garantindo que estamos sempre
                                    na vanguarda da inova\xE7\xE3o em ci\xEAncia de
                                    dados. Atrav\xE9s de seu trabalho, j\xE1
                                    alcan\xE7amos in\xFAmeros sucessos e
                                    reconhecimentos, reafirmando nosso
                                    compromisso com a excel\xEAncia e a lideran\xE7a
                                    no campo da an\xE1lise de dados.</p>
                                <ul>
                                    <li><i class="fas fa-check"></i>
                                        Qualifica\xE7\xF5es e Forma\xE7\xE3o Acad\xEAmica</li>
                                    <li><i class="fas fa-check"></i> Experi\xEAncia
                                        Profissional</li>
                                    <li><i class="fas fa-check"></i> Habilidades
                                        T\xE9cnicas e Especializa\xE7\xF5es</li>
                                    <li><i class="fas fa-check"></i> Capacidade
                                        de Solu\xE7\xE3o de Problemas</li>
                                    <li><i class="fas fa-check"></i> Compromisso
                                        com a Atualiza\xE7\xE3o Cont\xEDnua</li>
                                    <li><i class="fas fa-check"></i> Casos de
                                        Sucesso e Reconhecimento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="custom-support" class="tab-panel">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-img">
                                <img src="assets/img/suporte.webp" alt="img">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="why-we-different-content">
                                <h3>Suporte</h3>
                                <p>Em nossa consultoria de ci\xEAncia de dados, o
                                    'Suporte Personalizado' vai al\xE9m do
                                    atendimento ao cliente \u2013 \xE9 uma filosofia
                                    central. Cada cliente \xE9 \xFAnico, e nossa
                                    abordagem reflete isso, com solu\xE7\xF5es e
                                    assist\xEAncia moldadas \xE0s necessidades
                                    espec\xEDficas de cada neg\xF3cio. Estamos sempre
                                    dispon\xEDveis para responder d\xFAvidas e
                                    oferecer suporte, seja atrav\xE9s de
                                    comunica\xE7\xE3o direta ou treinamento
                                    especializado. Nos adaptamos flexivelmente a
                                    mudan\xE7as e mantemos um di\xE1logo cont\xEDnuo,
                                    assegurando que nossos servi\xE7os estejam
                                    sempre em sintonia com os objetivos em
                                    evolu\xE7\xE3o dos nossos clientes. Nosso
                                    compromisso \xE9 com a constru\xE7\xE3o de
                                    relacionamentos de longo prazo, apoiando
                                    cada cliente em cada etapa de sua jornada
                                    com dados.</p>
                                <ul>
                                    <li><i class="fas fa-check"></i> Atendimento
                                        Individualizado</li>
                                    <li><i class="fas fa-check"></i>
                                        Disponibilidade e Acessibilidade</li>
                                    <li><i class="fas fa-check"></i> Treinamento
                                        e Educa\xE7\xE3o</li>
                                    <li><i class="fas fa-check"></i> Comunica\xE7\xE3o
                                        Cont\xEDnua e Feedback</li>
                                    <li><i class="fas fa-check"></i> Adapta\xE7\xE3o e
                                        Flexibilidade</li>
                                    <li><i class="fas fa-check"></i>
                                        Relacionamento de Longo Prazo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>` }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhyWeDifferentComponent, { className: "WhyWeDifferentComponent", filePath: "src/app/modules/home/components/why-we-different/why-we-different.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/home.component.ts
var HomeComponent = class _HomeComponent {
  constructor(metaService, titleService, viewportScroller, activatedRoute, platformId) {
    this.metaService = metaService;
    this.titleService = titleService;
    this.viewportScroller = viewportScroller;
    this.activatedRoute = activatedRoute;
    this.platformId = platformId;
    this.isBrowser = false;
  }
  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.titleService.setTitle("Servi\xE7os de Engenharia de Dados e Solu\xE7\xF5es Tecnol\xF3gicas - Cristiano Ara\xFAjo");
    this.metaService.addTags([
      {
        name: "description",
        content: "Oferecemos solu\xE7\xF5es em engenharia de dados, an\xE1lise de Big Data, Business Intelligence e muito mais para ajudar sua empresa a transformar dados em insights estrat\xE9gicos."
      },
      {
        name: "keywords",
        content: "Engenharia de Dados, Big Data, Business Intelligence, Desenvolvimento Backend, Desenvolvimento Web, Data Warehousing, Machine Learning"
      },
      { name: "robots", content: "index, follow" },
      { name: "author", content: "Cristiano Ara\xFAjo" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]);
    if (this.isBrowser) {
      this.createSchema();
    }
  }
  createSchema() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Engenharia de Dados - Cristiano Ara\xFAjo",
      "url": "https://www.vics.dev.br",
      "logo": "https://www.vics.dev.br/favicon.ico",
      "sameAs": [
        "https://www.linkedin.com/company/vicsdevbr/?viewAsMember=true"
      ],
      "description": "Solu\xE7\xF5es personalizadas em engenharia de dados e desenvolvimento de software para transformar dados em insights acion\xE1veis e decis\xF5es estrat\xE9gicas.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55 31 97547-4785",
        "contactType": "Customer Service",
        "areaServed": "BR"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
  ngAfterContentInit() {
    if (this.isBrowser) {
      this.activatedRoute.fragment.subscribe((fragment) => {
        if (fragment) {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100);
        }
      });
    }
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: false, decls: 3, vars: 0, template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar")(1, "router-outlet")(2, "app-footer");
      }
    }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: false, template: "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>" }]
  }], () => [{ type: Meta }, { type: Title }, { type: ViewportScroller }, { type: ActivatedRoute }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/modules/home/home.component.ts", lineNumber: 18 });
})();

// src/app/modules/home/components/index/index.component.ts
function IndexComponent_div_90_li_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1);
  }
}
function IndexComponent_div_90_li_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(reason_r2);
  }
}
function IndexComponent_div_90_a_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46);
    \u0275\u0275text(1, "Ver diagn\xF3stico");
    \u0275\u0275elementEnd();
  }
}
function IndexComponent_div_90_a_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1, "Ver blindagem");
    \u0275\u0275elementEnd();
  }
}
function IndexComponent_div_90_a_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275text(1, "Ver governan\xE7a");
    \u0275\u0275elementEnd();
  }
}
function IndexComponent_div_90_a_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275text(1, "Ver ML Start");
    \u0275\u0275elementEnd();
  }
}
function IndexComponent_div_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 34)(2, "div", 35)(3, "div", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h5");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 37);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 38)(13, "h6");
    \u0275\u0275text(14, "O que voc\xEA vende");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 38)(18, "h6");
    \u0275\u0275text(19, "Escopo r\xE1pido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ul", 39);
    \u0275\u0275template(21, IndexComponent_div_90_li_21_Template, 2, 1, "li", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 38)(23, "h6");
    \u0275\u0275text(24, "Por que isso escala");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul", 39);
    \u0275\u0275template(26, IndexComponent_div_90_li_26_Template, 2, 1, "li", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 41);
    \u0275\u0275template(28, IndexComponent_div_90_a_28_Template, 2, 0, "a", 42)(29, IndexComponent_div_90_a_29_Template, 2, 0, "a", 43)(30, IndexComponent_div_90_a_30_Template, 2, 0, "a", 44)(31, IndexComponent_div_90_a_31_Template, 2, 0, "a", 45);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(product_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r3.pitch);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(product_r3.offer);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", product_r3.scope);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", product_r3.scale);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", product_r3.label === "Produto 1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.label === "Produto 2");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.label === "Produto 3");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", product_r3.label === "Produto 4");
  }
}
var IndexComponent = class _IndexComponent {
  constructor(title, meta, viewportScroller) {
    this.title = title;
    this.meta = meta;
    this.viewportScroller = viewportScroller;
    this.products = [
      {
        icon: "\u{1F6E1}\uFE0F",
        label: "Produto 1",
        title: "Diagn\xF3stico de Performance para Sistemas Cr\xEDticos",
        pitch: "Mapa claro de gargalos de aplica\xE7\xE3o, banco e infra em at\xE9 15 dias.",
        offer: "Diagn\xF3stico t\xE9cnico pago com plano de a\xE7\xE3o priorizado antes de escalar infraestrutura.",
        scope: [
          "Levantamento de m\xE9tricas, logs e configura\xE7\xE3o",
          "An\xE1lise de aplica\xE7\xE3o, banco e infraestrutura",
          "Plano de a\xE7\xE3o priorizado com impacto t\xE9cnico e financeiro",
          "Entreg\xE1veis documentados"
        ],
        scale: [
          "Entrada clara e de baixo risco",
          "Define onde agir primeiro",
          "Abatimento do valor na execu\xE7\xE3o"
        ]
      },
      {
        icon: "\u2699\uFE0F",
        label: "Produto 2",
        title: "Blindagem de Performance & Infra",
        pitch: "Execu\xE7\xE3o controlada das otimiza\xE7\xF5es cr\xEDticas em 15 a 30 dias.",
        offer: "Implementa\xE7\xE3o com m\xE9todo, rollback e valida\xE7\xE3o de m\xE9tricas para sistemas que n\xE3o podem parar.",
        scope: [
          "Planejamento t\xE9cnico e janelas de execu\xE7\xE3o",
          "Otimiza\xE7\xE3o de queries, \xEDndices e cache",
          "Ajustes de aplica\xE7\xE3o e servidores",
          "Monitoramento e valida\xE7\xE3o p\xF3s-implanta\xE7\xE3o"
        ],
        scale: [
          "Plano j\xE1 validado no diagn\xF3stico",
          "Entrega fechada com escopo claro",
          "Evita aumento desnecess\xE1rio de infraestrutura"
        ]
      },
      {
        icon: "\u{1F4C8}",
        label: "Produto 3",
        title: "Monitoramento & Governan\xE7a de Performance",
        pitch: "Assinatura recorrente para manter performance e evitar novas crises.",
        offer: "Monitoramento estrat\xE9gico, revis\xF5es peri\xF3dicas e governan\xE7a t\xE9cnica com relat\xF3rios executivos.",
        scope: [
          "Indicadores cr\xEDticos e an\xE1lise de tend\xEAncia",
          "Revis\xF5es t\xE9cnicas mensais ou trimestrais",
          "Boas pr\xE1ticas e orienta\xE7\xE3o para novas features",
          "Relat\xF3rios executivos com riscos e recomenda\xE7\xF5es"
        ],
        scale: [
          "Receita previs\xEDvel e rela\xE7\xE3o de longo prazo",
          "Menos incidentes e menos press\xE3o por infra",
          "Produto recorrente, sem horas abertas"
        ]
      },
      {
        icon: "\u{1F916}",
        label: "Produto 4",
        title: "ML Start \u2014 Decis\xF5es que Escalam",
        pitch: "Primeiro modelo de Machine Learning em produ\xE7\xE3o em 6 semanas.",
        offer: "Modelo de ML funcional para startups que querem automatizar decis\xF5es com dados.",
        scope: [
          "Diagn\xF3stico e mapeamento de dados",
          "Prepara\xE7\xE3o e feature engineering",
          "Treinamento e valida\xE7\xE3o do modelo",
          "Integra\xE7\xE3o via API ou batch"
        ],
        scale: [
          "Entrega r\xE1pida com escopo fechado",
          "Modelo pronto para consumo",
          "Base para escalar com dados"
        ]
      }
    ];
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
    this.title.setTitle("VICS | Diagn\xF3stico, Blindagem e Governan\xE7a de Performance");
    this.meta.updateTag({
      name: "description",
      content: "Trip\xE9 completo para sistemas cr\xEDticos: diagn\xF3stico de performance, blindagem de execu\xE7\xE3o e governan\xE7a cont\xEDnua. Estabilidade, previsibilidade e redu\xE7\xE3o de custos de infraestrutura."
    });
    this.meta.updateTag({
      name: "keywords",
      content: "diagn\xF3stico de performance, blindagem de performance, governan\xE7a de performance, sistemas cr\xEDticos, finops, estabilidade em produ\xE7\xE3o"
    });
    this.meta.updateTag({ property: "og:type", content: "website" });
    this.meta.updateTag({
      property: "og:title",
      content: "VICS \u2013 Diagn\xF3stico, Blindagem e Governan\xE7a de Performance"
    });
    this.meta.updateTag({
      property: "og:description",
      content: "Entrada com diagn\xF3stico pago, execu\xE7\xE3o controlada com blindagem e recorr\xEAncia com governan\xE7a de performance para sistemas cr\xEDticos."
    });
  }
  static {
    this.\u0275fac = function IndexComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IndexComponent)(\u0275\u0275directiveInject(Title), \u0275\u0275directiveInject(Meta), \u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IndexComponent, selectors: [["app-index"]], standalone: false, decls: 127, vars: 1, consts: [["id", "home", 1, "main-banner", "item-bg-one", "crisis-hero"], [1, "d-table"], [1, "d-table-cell"], [1, "container"], [1, "main-banner-text", "text-start"], [1, "hero-badge"], [1, "hero-actions"], ["routerLink", "/performance-infra", 1, "btn", "btn-primary", "btn-lg"], ["href", "https://wa.me/5531975474785?text=Quero%20agendar%20o%20Diagn%C3%B3stico%20de%20Performance", "target", "_blank", "rel", "noopener", 1, "btn", "btn-light", "btn-lg"], [1, "hero-meta"], ["id", "realidade", 1, "section-tight", "bg-fffdfd"], [1, "section-title", "simple"], [1, "row", "g-4"], [1, "col-lg-6"], [1, "case-card"], [1, "eyebrow"], [1, "bullet-list"], [1, "tagline"], ["id", "erro", 1, "section-tight"], [1, "row", "g-4", "align-items-start"], [1, "quote-box"], [1, "quote"], [1, "pill-list"], [1, "alert-line"], ["id", "produtos", 1, "section-tight", "bg-F7F5F4"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], ["id", "plano", 1, "section-tight"], [1, "process-steps"], [1, "key-phrase"], ["id", "contact", 1, "cta-final"], [1, "cta-actions"], ["href", "https://wa.me/5531975474785?text=Quero%20transformar%20um%20caso%20em%20produto", "target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-lg"], ["href", "mailto:cristiano@engenhariadedados.tec.br?subject=Transformar%20um%20caso%20em%20produto", 1, "btn", "btn-light", "btn-lg"], [1, "cta-meta"], [1, "product-card"], [1, "product-head"], [1, "icon"], [1, "pitch"], [1, "product-section"], [1, "dash-list"], [4, "ngFor", "ngForOf"], [1, "product-actions"], ["routerLink", "/performance-infra", "class", "btn btn-primary btn-sm", 4, "ngIf"], ["routerLink", "/blindagem-performance-infra", "class", "btn btn-primary btn-sm", 4, "ngIf"], ["routerLink", "/monitoramento-governanca-performance", "class", "btn btn-primary btn-sm", 4, "ngIf"], ["routerLink", "/ml-start", "class", "btn btn-primary btn-sm", 4, "ngIf"], ["routerLink", "/performance-infra", 1, "btn", "btn-primary", "btn-sm"], ["routerLink", "/blindagem-performance-infra", 1, "btn", "btn-primary", "btn-sm"], ["routerLink", "/monitoramento-governanca-performance", 1, "btn", "btn-primary", "btn-sm"], ["routerLink", "/ml-start", 1, "btn", "btn-primary", "btn-sm"]], template: function IndexComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, "Trip\xE9 de performance: Diagn\xF3stico \u2192 Blindagem \u2192 Governan\xE7a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h1");
        \u0275\u0275text(8, "Diagn\xF3stico, execu\xE7\xE3o e governan\xE7a para sistemas cr\xEDticos que n\xE3o podem parar.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Come\xE7amos pelo diagn\xF3stico pago, executamos a blindagem com m\xE9todo e mantemos a estabilidade com governan\xE7a recorrente. Resultado: performance sustentada e custo previs\xEDvel.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 6)(12, "a", 7);
        \u0275\u0275text(13, " \u{1F534} Diagn\xF3stico de Performance (Produto 1) ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "a", 8);
        \u0275\u0275text(15, " Falar com especialista ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 9);
        \u0275\u0275text(17, "Prazo do diagn\xF3stico: 10 a 15 dias \u2022 Execu\xE7\xE3o pelos s\xF3cios");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(18, "section", 10)(19, "div", 3)(20, "div", 11)(21, "h4");
        \u0275\u0275text(22, "O que voc\xEA realmente faz");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "Blindagem e engenharia, n\xE3o \u201Cotimiza\xE7\xE3o t\xE9cnica\u201D");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "p", 15);
        \u0275\u0275text(29, "\u{1F539} Caso 1 \u2014 Sistema hospitalar lento");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h5");
        \u0275\u0275text(31, "Voc\xEA blindou o neg\xF3cio, n\xE3o s\xF3 o c\xF3digo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ul", 16)(33, "li");
        \u0275\u0275text(34, "Evito queda de sistema cr\xEDtico e aumento de custo de infraestrutura");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275text(36, "Entrego confiabilidade operacional e redu\xE7\xE3o de risco pol\xEDtico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275text(38, "Protejo a imagem do fornecedor e garantimos continuidade do contrato");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "p", 17);
        \u0275\u0275text(40, "Isso \xE9 blindagem operacional.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 13)(42, "div", 14)(43, "p", 15);
        \u0275\u0275text(44, "\u{1F539} Caso 2 \u2014 Termo de refer\xEAncia + licita\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h5");
        \u0275\u0275text(46, "Voc\xEA vendeu vit\xF3ria, n\xE3o requisito");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "ul", 16)(48, "li");
        \u0275\u0275text(49, "Traduzo requisito t\xE9cnico em linguagem compr\xE1vel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "li");
        \u0275\u0275text(51, "Antecipa\xE7\xE3o de crit\xE9rios de julgamento e blindagem contra impugna\xE7\xE3o");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "li");
        \u0275\u0275text(53, "Maior chance de vit\xF3ria no edital e menos retrabalho futuro");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "p", 17);
        \u0275\u0275text(55, "Isso \xE9 engenharia de vit\xF3ria em licita\xE7\xE3o.");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(56, "section", 18)(57, "div", 3)(58, "div", 11)(59, "h4");
        \u0275\u0275text(60, "Erro invis\xEDvel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "h2");
        \u0275\u0275text(62, "O mercado te usa como bombeiro, n\xE3o como produto");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div", 19)(64, "div", 13)(65, "div", 20)(66, "p", 21);
        \u0275\u0275text(67, "\u201CSou o cara que resolve quando d\xE1 problema.\u201D");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "p");
        \u0275\u0275text(69, "Esse posicionamento gera depend\xEAncia, trabalho reativo e vendas dif\xEDceis. A dor \xE9 urgente, mas epis\xF3dica.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "div", 13)(71, "ul", 22)(72, "li");
        \u0275\u0275text(73, "Depend\xEAncia em voc\xEA e escala imposs\xEDvel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275text(75, "Zero previsibilidade de receita");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li");
        \u0275\u0275text(77, "Venda dif\xEDcil por falta de oferta clara");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "li");
        \u0275\u0275text(79, "O mercado n\xE3o enxerga o valor acumulado");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "p", 23);
        \u0275\u0275text(81, "O que voc\xEA faz j\xE1 \xE9 produto \u2014 s\xF3 est\xE1 sendo vendido como improviso.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(82, "section", 24)(83, "div", 3)(84, "div", 11)(85, "h4");
        \u0275\u0275text(86, "Tr\xEAs produtos claros");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "h2");
        \u0275\u0275text(88, "Entrada, execu\xE7\xE3o e recorr\xEAncia previs\xEDvel");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "div", 12);
        \u0275\u0275template(90, IndexComponent_div_90_Template, 32, 11, "div", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(91, "section", 26)(92, "div", 3)(93, "div", 11)(94, "h4");
        \u0275\u0275text(95, "Sobreviv\xEAncia + escala");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "h2");
        \u0275\u0275text(97, "Plano realista: trip\xE9 em 3 passos");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "ol", 27)(99, "li")(100, "span");
        \u0275\u0275text(101, "1");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, " Diagn\xF3stico de Performance (10 a 15 dias) \u2014 entrada paga, plano priorizado e abatimento na execu\xE7\xE3o.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "li")(104, "span");
        \u0275\u0275text(105, "2");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, " Blindagem de Performance & Infra (15 a 30 dias) \u2014 execu\xE7\xE3o controlada das otimiza\xE7\xF5es com rollback e valida\xE7\xE3o.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "li")(108, "span");
        \u0275\u0275text(109, "3");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, " Monitoramento & Governan\xE7a (recorrente) \u2014 evitar regress\xE3o, orientar novas features e manter previsibilidade.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "div", 28)(112, "p");
        \u0275\u0275text(113, "\u201CPerformance n\xE3o \xE9 projeto. \xC9 diagn\xF3stico, blindagem e governan\xE7a cont\xEDnua.\u201D");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(114, "section", 29)(115, "div", 3)(116, "h2");
        \u0275\u0275text(117, "Quer transformar um caso em produto agora?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "p");
        \u0275\u0275text(119, "Podemos criar a p\xE1gina de produto, pitch de venda, escopo e pre\xE7o a partir de um caso real \u2014 sem parar o caixa.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 30)(121, "a", 31);
        \u0275\u0275text(122, "\u{1F534} Agendar conversa agora");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "a", 32);
        \u0275\u0275text(124, "Ou envie detalhes por email");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "p", 33);
        \u0275\u0275text(126, "Resposta em at\xE9 2h \xFAteis | Base Lagoa Santa/MG \u2022 Brasil e Portugal");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(90);
        \u0275\u0275property("ngForOf", ctx.products);
      }
    }, dependencies: [NgForOf, NgIf, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.crisis-hero[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 720px;\n  padding: 140px 0 120px;\n}\n.crisis-hero[_ngcontent-%COMP%]   .main-banner-text[_ngcontent-%COMP%] {\n  max-width: 820px;\n}\n.crisis-hero[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #f5f5f5;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  margin-bottom: 22px;\n}\n.crisis-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #ffffff;\n  line-height: 1.15;\n  font-size: clamp(32px, 4vw, 48px);\n}\n.crisis-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  font-size: 17px;\n  margin-bottom: 24px;\n  max-width: 680px;\n}\n.crisis-hero[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.crisis-hero[_ngcontent-%COMP%]   .hero-meta[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  font-size: 14px;\n}\n.section-tight[_ngcontent-%COMP%] {\n  padding: 90px 0;\n}\n.section-title.simple[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-bottom: 32px;\n}\n.section-title.simple[_ngcontent-%COMP%]::before, \n.section-title.simple[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.section-title.simple[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.section-title.simple[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3vw, 36px);\n  line-height: 1.2;\n  font-weight: 600;\n}\n.pill-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n  padding: 0;\n}\n.pill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  background: #f7f5f4;\n  border: 1px solid #ede9e8;\n  border-radius: 14px;\n  padding: 14px 16px;\n  font-weight: 500;\n  color: #2d2828;\n}\n.alert-box[_ngcontent-%COMP%] {\n  background: #161313;\n  color: #ffffff;\n  padding: 22px;\n  border-radius: 14px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.14);\n}\n.alert-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #ffffff;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.alert-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #f1f1f1;\n}\n.crisis-card[_ngcontent-%COMP%], \n.service-card[_ngcontent-%COMP%], \n.case-card[_ngcontent-%COMP%], \n.product-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #ede9e8;\n  border-radius: 14px;\n  padding: 22px;\n  height: 100%;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.crisis-card[_ngcontent-%COMP%]:hover, \n.service-card[_ngcontent-%COMP%]:hover, \n.case-card[_ngcontent-%COMP%]:hover, \n.product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.12);\n}\n.crisis-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 12px;\n}\n.crisis-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.crisis-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #565050;\n  margin: 0;\n  line-height: 1.6;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.service-card[_ngcontent-%COMP%]   .service-head[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n.service-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.service-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.service-card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n  font-weight: 600;\n}\n.service-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  margin: 0;\n  display: grid;\n  gap: 6px;\n}\n.service-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #565050;\n  line-height: 1.6;\n}\n.checklist[_ngcontent-%COMP%] {\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 28px;\n  position: relative;\n  font-weight: 500;\n  color: #2d2828;\n}\n.checklist[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2714";\n  position: absolute;\n  left: 0;\n  color: var(--mainColor);\n  font-weight: 700;\n}\n.process-steps[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n  max-width: 720px;\n}\n.process-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f7f5f4;\n  border: 1px solid #ede9e8;\n  border-radius: 12px;\n  padding: 14px 16px;\n  font-weight: 500;\n}\n.process-steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 32px;\n  height: 32px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgb(255, 29.05, 75.0966824645);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.cta-final[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      #0f0d0e,\n      #361525);\n  color: #ffffff;\n  padding: 80px 0;\n  text-align: center;\n}\n.cta-final[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 12px;\n  font-size: clamp(26px, 3vw, 34px);\n}\n.cta-final[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  margin-bottom: 22px;\n}\n.cta-final[_ngcontent-%COMP%]   .cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.cta-final[_ngcontent-%COMP%]   .btn-light[_ngcontent-%COMP%] {\n  color: #2d2828;\n  border-color: #ffffff;\n}\n.cta-final[_ngcontent-%COMP%]   .cta-meta[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  margin: 0;\n}\n.case-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.case-card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n  font-weight: 600;\n  margin: 0;\n}\n.case-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.case-card[_ngcontent-%COMP%]   .bullet-list[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  margin: 0;\n  display: grid;\n  gap: 8px;\n}\n.case-card[_ngcontent-%COMP%]   .bullet-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: #4a4444;\n  line-height: 1.6;\n  list-style: disc;\n}\n.case-card[_ngcontent-%COMP%]   .tagline[_ngcontent-%COMP%] {\n  color: #2d2828;\n  font-weight: 600;\n}\n.quote-box[_ngcontent-%COMP%] {\n  background: #161313;\n  color: #ffffff;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.14);\n  height: 100%;\n}\n.quote-box[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.quote-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #f1f1f1;\n  margin: 0;\n}\n.alert-line[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-weight: 600;\n  color: #2d2828;\n}\n.product-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 14px;\n}\n.product-card[_ngcontent-%COMP%]   .product-head[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.product-card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.product-card[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 12px;\n  color: #6b6161;\n}\n.product-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 2px 0 6px;\n  font-weight: 700;\n}\n.product-card[_ngcontent-%COMP%]   .pitch[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #4a4444;\n}\n.product-card[_ngcontent-%COMP%]   .product-section[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0eceb;\n  padding-top: 10px;\n  display: grid;\n  gap: 6px;\n}\n.product-card[_ngcontent-%COMP%]   .product-section[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  color: #6b6161;\n}\n.product-card[_ngcontent-%COMP%]   .product-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2d2828;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.product-card[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.product-card[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.dash-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  padding-left: 0;\n  margin: 0;\n}\n.dash-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  position: relative;\n  padding-left: 16px;\n  color: #4a4444;\n  line-height: 1.6;\n}\n.dash-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2014";\n  position: absolute;\n  left: 0;\n  color: var(--mainColor);\n  font-weight: 700;\n}\n.key-phrase[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 18px 20px;\n  background: #161313;\n  color: #ffffff;\n  border-radius: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n.key-phrase[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #ffffff;\n}\n@media (max-width: 991px) {\n  .crisis-hero[_ngcontent-%COMP%] {\n    padding: 120px 0 90px;\n  }\n  .crisis-hero[_ngcontent-%COMP%]   .main-banner-text[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .section-tight[_ngcontent-%COMP%] {\n    padding: 70px 0;\n  }\n}\n/*# sourceMappingURL=index.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndexComponent, [{
    type: Component,
    args: [{ selector: "app-index", standalone: false, template: `
<div class="main-banner item-bg-one crisis-hero" id="home">
  <div class="d-table">
    <div class="d-table-cell">
      <div class="container">
        <div class="main-banner-text text-start">
          <div class="hero-badge">Trip\xE9 de performance: Diagn\xF3stico \u2192 Blindagem \u2192 Governan\xE7a</div>
          <h1>Diagn\xF3stico, execu\xE7\xE3o e governan\xE7a para sistemas cr\xEDticos que n\xE3o podem parar.</h1>
          <p>Come\xE7amos pelo diagn\xF3stico pago, executamos a blindagem com m\xE9todo e mantemos a estabilidade com governan\xE7a recorrente. Resultado: performance sustentada e custo previs\xEDvel.</p>
          <div class="hero-actions">
            <a routerLink="/performance-infra"
               class="btn btn-primary btn-lg">
              \u{1F534} Diagn\xF3stico de Performance (Produto 1)
            </a>
            <a href="https://wa.me/5531975474785?text=Quero%20agendar%20o%20Diagn%C3%B3stico%20de%20Performance"
               target="_blank"
               rel="noopener"
               class="btn btn-light btn-lg">
              Falar com especialista
            </a>
            <div class="hero-meta">Prazo do diagn\xF3stico: 10 a 15 dias \u2022 Execu\xE7\xE3o pelos s\xF3cios</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section id="realidade" class="section-tight bg-fffdfd">
  <div class="container">
    <div class="section-title simple">
      <h4>O que voc\xEA realmente faz</h4>
      <h2>Blindagem e engenharia, n\xE3o \u201Cotimiza\xE7\xE3o t\xE9cnica\u201D</h2>
    </div>
    <div class="row g-4">
      <div class="col-lg-6">
        <div class="case-card">
          <p class="eyebrow">\u{1F539} Caso 1 \u2014 Sistema hospitalar lento</p>
          <h5>Voc\xEA blindou o neg\xF3cio, n\xE3o s\xF3 o c\xF3digo</h5>
          <ul class="bullet-list">
            <li>Evito queda de sistema cr\xEDtico e aumento de custo de infraestrutura</li>
            <li>Entrego confiabilidade operacional e redu\xE7\xE3o de risco pol\xEDtico</li>
            <li>Protejo a imagem do fornecedor e garantimos continuidade do contrato</li>
          </ul>
          <p class="tagline">Isso \xE9 blindagem operacional.</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="case-card">
          <p class="eyebrow">\u{1F539} Caso 2 \u2014 Termo de refer\xEAncia + licita\xE7\xE3o</p>
          <h5>Voc\xEA vendeu vit\xF3ria, n\xE3o requisito</h5>
          <ul class="bullet-list">
            <li>Traduzo requisito t\xE9cnico em linguagem compr\xE1vel</li>
            <li>Antecipa\xE7\xE3o de crit\xE9rios de julgamento e blindagem contra impugna\xE7\xE3o</li>
            <li>Maior chance de vit\xF3ria no edital e menos retrabalho futuro</li>
          </ul>
          <p class="tagline">Isso \xE9 engenharia de vit\xF3ria em licita\xE7\xE3o.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="erro" class="section-tight">
  <div class="container">
    <div class="section-title simple">
      <h4>Erro invis\xEDvel</h4>
      <h2>O mercado te usa como bombeiro, n\xE3o como produto</h2>
    </div>
    <div class="row g-4 align-items-start">
      <div class="col-lg-6">
        <div class="quote-box">
          <p class="quote">\u201CSou o cara que resolve quando d\xE1 problema.\u201D</p>
          <p>Esse posicionamento gera depend\xEAncia, trabalho reativo e vendas dif\xEDceis. A dor \xE9 urgente, mas epis\xF3dica.</p>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="pill-list">
          <li>Depend\xEAncia em voc\xEA e escala imposs\xEDvel</li>
          <li>Zero previsibilidade de receita</li>
          <li>Venda dif\xEDcil por falta de oferta clara</li>
          <li>O mercado n\xE3o enxerga o valor acumulado</li>
        </ul>
        <p class="alert-line">O que voc\xEA faz j\xE1 \xE9 produto \u2014 s\xF3 est\xE1 sendo vendido como improviso.</p>
      </div>
    </div>
  </div>
</section>

<section id="produtos" class="section-tight bg-F7F5F4">
  <div class="container">
    <div class="section-title simple">
      <h4>Tr\xEAs produtos claros</h4>
      <h2>Entrada, execu\xE7\xE3o e recorr\xEAncia previs\xEDvel</h2>
    </div>
    <div class="row g-4">
      <div class="col-lg-6" *ngFor="let product of products">
        <div class="product-card">
          <div class="product-head">
            <div class="icon">{{ product.icon }}</div>
            <div>
              <p class="eyebrow">{{ product.label }}</p>
              <h5>{{ product.title }}</h5>
              <p class="pitch">{{ product.pitch }}</p>
            </div>
          </div>
          <div class="product-section">
            <h6>O que voc\xEA vende</h6>
            <p>{{ product.offer }}</p>
          </div>
          <div class="product-section">
            <h6>Escopo r\xE1pido</h6>
            <ul class="dash-list">
              <li *ngFor="let item of product.scope">{{ item }}</li>
            </ul>
          </div>
          <div class="product-section">
            <h6>Por que isso escala</h6>
            <ul class="dash-list">
              <li *ngFor="let reason of product.scale">{{ reason }}</li>
            </ul>
            <div class="product-actions">
              <a *ngIf="product.label === 'Produto 1'" routerLink="/performance-infra" class="btn btn-primary btn-sm">Ver diagn\xF3stico</a>
              <a *ngIf="product.label === 'Produto 2'" routerLink="/blindagem-performance-infra" class="btn btn-primary btn-sm">Ver blindagem</a>
              <a *ngIf="product.label === 'Produto 3'" routerLink="/monitoramento-governanca-performance" class="btn btn-primary btn-sm">Ver governan\xE7a</a>
              <a *ngIf="product.label === 'Produto 4'" routerLink="/ml-start" class="btn btn-primary btn-sm">Ver ML Start</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="plano" class="section-tight">
  <div class="container">
    <div class="section-title simple">
      <h4>Sobreviv\xEAncia + escala</h4>
      <h2>Plano realista: trip\xE9 em 3 passos</h2>
    </div>
    <ol class="process-steps">
      <li><span>1</span> Diagn\xF3stico de Performance (10 a 15 dias) \u2014 entrada paga, plano priorizado e abatimento na execu\xE7\xE3o.</li>
      <li><span>2</span> Blindagem de Performance & Infra (15 a 30 dias) \u2014 execu\xE7\xE3o controlada das otimiza\xE7\xF5es com rollback e valida\xE7\xE3o.</li>
      <li><span>3</span> Monitoramento & Governan\xE7a (recorrente) \u2014 evitar regress\xE3o, orientar novas features e manter previsibilidade.</li>
    </ol>
    <div class="key-phrase">
      <p>\u201CPerformance n\xE3o \xE9 projeto. \xC9 diagn\xF3stico, blindagem e governan\xE7a cont\xEDnua.\u201D</p>
    </div>
  </div>
</section>

<section id="contact" class="cta-final">
  <div class="container">
    <h2>Quer transformar um caso em produto agora?</h2>
    <p>Podemos criar a p\xE1gina de produto, pitch de venda, escopo e pre\xE7o a partir de um caso real \u2014 sem parar o caixa.</p>
    <div class="cta-actions">
      <a href="https://wa.me/5531975474785?text=Quero%20transformar%20um%20caso%20em%20produto"
         target="_blank"
         rel="noopener"
         class="btn btn-primary btn-lg">\u{1F534} Agendar conversa agora</a>
      <a href="mailto:cristiano@engenhariadedados.tec.br?subject=Transformar%20um%20caso%20em%20produto"
         class="btn btn-light btn-lg">Ou envie detalhes por email</a>
    </div>
    <p class="cta-meta">Resposta em at\xE9 2h \xFAteis | Base Lagoa Santa/MG \u2022 Brasil e Portugal</p>
  </div>
</section>
`, styles: ['@charset "UTF-8";\n\n/* src/app/modules/home/components/index/index.component.scss */\n.crisis-hero {\n  height: auto;\n  min-height: 720px;\n  padding: 140px 0 120px;\n}\n.crisis-hero .main-banner-text {\n  max-width: 820px;\n}\n.crisis-hero .hero-badge {\n  display: inline-block;\n  padding: 10px 16px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #f5f5f5;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  margin-bottom: 22px;\n}\n.crisis-hero h1 {\n  font-weight: 600;\n  color: #ffffff;\n  line-height: 1.15;\n  font-size: clamp(32px, 4vw, 48px);\n}\n.crisis-hero p {\n  color: #f1f1f1;\n  font-size: 17px;\n  margin-bottom: 24px;\n  max-width: 680px;\n}\n.crisis-hero .hero-actions {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n.crisis-hero .hero-meta {\n  color: #f1f1f1;\n  font-size: 14px;\n}\n.section-tight {\n  padding: 90px 0;\n}\n.section-title.simple {\n  padding-left: 0;\n  margin-bottom: 32px;\n}\n.section-title.simple::before,\n.section-title.simple::after {\n  display: none;\n}\n.section-title.simple h4 {\n  color: var(--mainColor);\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.section-title.simple h2 {\n  font-size: clamp(26px, 3vw, 36px);\n  line-height: 1.2;\n  font-weight: 600;\n}\n.pill-list {\n  display: grid;\n  gap: 12px;\n  padding: 0;\n}\n.pill-list li {\n  list-style: none;\n  background: #f7f5f4;\n  border: 1px solid #ede9e8;\n  border-radius: 14px;\n  padding: 14px 16px;\n  font-weight: 500;\n  color: #2d2828;\n}\n.alert-box {\n  background: #161313;\n  color: #ffffff;\n  padding: 22px;\n  border-radius: 14px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.14);\n}\n.alert-box h5 {\n  color: #ffffff;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\n.alert-box p {\n  margin: 0;\n  color: #f1f1f1;\n}\n.crisis-card,\n.service-card,\n.case-card,\n.product-card {\n  background: #ffffff;\n  border: 1px solid #ede9e8;\n  border-radius: 14px;\n  padding: 22px;\n  height: 100%;\n  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.crisis-card:hover,\n.service-card:hover,\n.case-card:hover,\n.product-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 22px 60px rgba(0, 0, 0, 0.12);\n}\n.crisis-card .icon {\n  font-size: 26px;\n  margin-bottom: 12px;\n}\n.crisis-card h5 {\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.crisis-card p {\n  color: #565050;\n  margin: 0;\n  line-height: 1.6;\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.service-card .service-head {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n}\n.service-card .icon {\n  font-size: 28px;\n}\n.service-card h5 {\n  margin: 0 0 4px;\n  font-weight: 600;\n}\n.service-card .price {\n  color: var(--mainColor);\n  font-weight: 600;\n}\n.service-card ul {\n  padding-left: 18px;\n  margin: 0;\n  display: grid;\n  gap: 6px;\n}\n.service-card ul li {\n  color: #565050;\n  line-height: 1.6;\n}\n.checklist {\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n}\n.checklist li {\n  list-style: none;\n  padding-left: 28px;\n  position: relative;\n  font-weight: 500;\n  color: #2d2828;\n}\n.checklist li::before {\n  content: "\\2714";\n  position: absolute;\n  left: 0;\n  color: var(--mainColor);\n  font-weight: 700;\n}\n.process-steps {\n  list-style: none;\n  padding-left: 0;\n  display: grid;\n  gap: 12px;\n  max-width: 720px;\n}\n.process-steps li {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f7f5f4;\n  border: 1px solid #ede9e8;\n  border-radius: 12px;\n  padding: 14px 16px;\n  font-weight: 500;\n}\n.process-steps li span {\n  display: inline-flex;\n  width: 32px;\n  height: 32px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgb(255, 29.05, 75.0966824645);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.cta-final {\n  background:\n    linear-gradient(\n      120deg,\n      #0f0d0e,\n      #361525);\n  color: #ffffff;\n  padding: 80px 0;\n  text-align: center;\n}\n.cta-final h2 {\n  font-weight: 700;\n  margin-bottom: 12px;\n  font-size: clamp(26px, 3vw, 34px);\n}\n.cta-final p {\n  color: #f1f1f1;\n  margin-bottom: 22px;\n}\n.cta-final .cta-actions {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n.cta-final .btn-light {\n  color: #2d2828;\n  border-color: #ffffff;\n}\n.cta-final .cta-meta {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 14px;\n  margin: 0;\n}\n.case-card {\n  display: grid;\n  gap: 12px;\n}\n.case-card .eyebrow {\n  color: var(--mainColor);\n  font-weight: 600;\n  margin: 0;\n}\n.case-card h5 {\n  font-weight: 700;\n  margin: 0;\n}\n.case-card .bullet-list {\n  padding-left: 18px;\n  margin: 0;\n  display: grid;\n  gap: 8px;\n}\n.case-card .bullet-list li {\n  color: #4a4444;\n  line-height: 1.6;\n  list-style: disc;\n}\n.case-card .tagline {\n  color: #2d2828;\n  font-weight: 600;\n}\n.quote-box {\n  background: #161313;\n  color: #ffffff;\n  padding: 24px;\n  border-radius: 16px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.14);\n  height: 100%;\n}\n.quote-box .quote {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.quote-box p {\n  color: #f1f1f1;\n  margin: 0;\n}\n.alert-line {\n  margin-top: 14px;\n  font-weight: 600;\n  color: #2d2828;\n}\n.product-card {\n  display: grid;\n  gap: 14px;\n}\n.product-card .product-head {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n.product-card .icon {\n  font-size: 28px;\n}\n.product-card .eyebrow {\n  margin: 0;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-size: 12px;\n  color: #6b6161;\n}\n.product-card h5 {\n  margin: 2px 0 6px;\n  font-weight: 700;\n}\n.product-card .pitch {\n  margin: 0;\n  color: #4a4444;\n}\n.product-card .product-section {\n  border-top: 1px solid #f0eceb;\n  padding-top: 10px;\n  display: grid;\n  gap: 6px;\n}\n.product-card .product-section h6 {\n  margin: 0;\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n  color: #6b6161;\n}\n.product-card .product-section p {\n  margin: 0;\n  color: #2d2828;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.product-card .product-actions {\n  margin-top: 8px;\n}\n.product-card .product-actions .btn {\n  font-weight: 700;\n}\n.dash-list {\n  display: grid;\n  gap: 6px;\n  padding-left: 0;\n  margin: 0;\n}\n.dash-list li {\n  list-style: none;\n  position: relative;\n  padding-left: 16px;\n  color: #4a4444;\n  line-height: 1.6;\n}\n.dash-list li::before {\n  content: "\\2014";\n  position: absolute;\n  left: 0;\n  color: var(--mainColor);\n  font-weight: 700;\n}\n.key-phrase {\n  margin-top: 30px;\n  padding: 18px 20px;\n  background: #161313;\n  color: #ffffff;\n  border-radius: 14px;\n  text-align: center;\n  font-weight: 700;\n}\n.key-phrase p {\n  margin: 0;\n  color: #ffffff;\n}\n@media (max-width: 991px) {\n  .crisis-hero {\n    padding: 120px 0 90px;\n  }\n  .crisis-hero .main-banner-text {\n    text-align: left;\n  }\n  .section-tight {\n    padding: 70px 0;\n  }\n}\n/*# sourceMappingURL=index.component.css.map */\n'] }]
  }], () => [{ type: Title }, { type: Meta }, { type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IndexComponent, { className: "IndexComponent", filePath: "src/app/modules/home/components/index/index.component.ts", lineNumber: 11 });
})();

// src/app/modules/blog/blog.data.ts
var posts = {
  "data": [
    {
      "id": 1,
      "type": "post",
      "attributes": {
        "title": "Maximizando o Potencial do Seu Neg\xF3cio: A Sinergia entre Engenharia de Dados e Ci\xEAncia de Dados",
        "blockquote": "A sinergia entre engenharia de dados e ci\xEAncia de dados n\xE3o \xE9 apenas uma alavanca para inova\xE7\xE3o; \xE9 o alicerce fundamental para transformar dados em decis\xF5es estrat\xE9gicas e vantagem competitiva no mundo dos neg\xF3cios modernos.",
        "paragraphs": [
          "A engenharia de dados \xE9 a espinha dorsal do gerenciamento de dados. Ela envolve a organiza\xE7\xE3o, armazenamento e processamento de dados para torn\xE1-los acess\xEDveis e \xFAteis. Uma infraestrutura de dados bem projetada \xE9 fundamental para an\xE1lises eficazes, pois garante que os dados sejam confi\xE1veis, seguros e prontamente dispon\xEDveis para os cientistas de dados.",
          "A ci\xEAncia de dados utiliza m\xE9todos anal\xEDticos, processos e algoritmos para extrair insights e conhecimento de dados. Os cientistas de dados empregam an\xE1lises preditivas, descritivas e prescritivas para descobrir tend\xEAncias, fazer previs\xF5es e recomendar a\xE7\xF5es. Eles transformam grandes volumes de dados em intelig\xEAncia de neg\xF3cios acion\xE1vel.",
          "Engenharia e ci\xEAncia de dados s\xE3o duas faces da mesma moeda. Enquanto a engenharia de dados foca em preparar os dados, a ci\xEAncia de dados se concentra em analis\xE1-los. Por exemplo, a coleta e organiza\xE7\xE3o otimizadas de dados pela engenharia de dados permite que os cientistas de dados realizem an\xE1lises mais avan\xE7adas e precisas.",
          "A fus\xE3o da engenharia e da ci\xEAncia de dados oferece in\xFAmeros benef\xEDcios para as empresas, incluindo aumento da efici\xEAncia operacional, melhor entendimento do cliente e inova\xE7\xE3o no desenvolvimento de produtos e servi\xE7os. Uma abordagem integrada \xE0 gest\xE3o de dados pode levar a uma tomada de decis\xE3o mais informada e orientada por dados.",
          "Integrar engenharia e ci\xEAncia de dados em sua estrat\xE9gia de neg\xF3cios requer uma equipe qualificada e o uso de ferramentas adequadas. Investir em treinamento, tecnologia e uma cultura de dados pode ser um grande diferencial competitivo."
        ],
        "image": "assets/img/post-1.webp",
        "conclusion": "A engenharia de dados e a ci\xEAncia de dados, quando combinadas, podem desbloquear um potencial incr\xEDvel para o seu neg\xF3cio. Encorajamos nossos leitores a explorar essas \xE1reas e considerar como elas podem ser aplicadas para melhorar seus processos, produtos e decis\xF5es estrat\xE9gicas."
      },
      "relationships": {
        "author": {
          "data": { "type": "people", "id": 1 }
        }
      }
    },
    {
      "id": 2,
      "type": "post",
      "attributes": {
        "title": "Descobrindo Oportunidades Ocultas: Como a An\xE1lise de Dados Pode Revelar Novos Mercados",
        "blockquote": "No vasto oceano de dados, as oportunidades de neg\xF3cio s\xE3o como correntes ocultas, esperando serem descobertas. A an\xE1lise de dados \xE9 a b\xFAssola que guia as empresas atrav\xE9s dessas \xE1guas desconhecidas, revelando novos mercados e possibilidades inexploradas.",
        "paragraphs": [
          "Na era digital atual, o poder da an\xE1lise de dados est\xE1 remodelando o panorama empresarial. Com a capacidade de transformar vastas quantidades de informa\xE7\xF5es brutas em insights acion\xE1veis, a an\xE1lise de dados est\xE1 se tornando uma ferramenta essencial para empresas em busca de novas oportunidades de mercado. Este post explora como a an\xE1lise de dados pode ser usada para descobrir e capitalizar essas oportunidades inexploradas.",
          "Os dados s\xE3o o novo petr\xF3leo do mundo dos neg\xF3cios. No varejo, finan\xE7as, sa\xFAde, ou tecnologia, os dados est\xE3o impulsionando inova\xE7\xF5es e estrat\xE9gias de crescimento. Por exemplo, empresas de varejo est\xE3o usando an\xE1lises de dados para personalizar experi\xEAncias de compra, enquanto institui\xE7\xF5es financeiras as utilizam para prever tend\xEAncias do mercado e mitigar riscos.",
          "A an\xE1lise de dados permite que as empresas vejam al\xE9m do horizonte \xF3bvio. Ela pode revelar padr\xF5es de consumo emergentes, necessidades de mercado n\xE3o atendidas e nichos lucrativos. Por exemplo, uma startup de tecnologia pode usar an\xE1lise de dados para identificar uma demanda crescente por solu\xE7\xF5es de seguran\xE7a cibern\xE9tica em pequenas empresas, abrindo um novo mercado alvo.",
          "T\xE9cnicas como an\xE1lise preditiva, segmenta\xE7\xE3o de clientes e an\xE1lise de sentimentos s\xE3o essenciais para explorar novos mercados. A an\xE1lise preditiva pode ajudar a prever tend\xEAncias futuras, a segmenta\xE7\xE3o de clientes permite identificar subgrupos dentro de um mercado, e a an\xE1lise de sentimentos pode oferecer insights sobre as atitudes dos consumidores.",
          "A an\xE1lise de dados n\xE3o est\xE1 isenta de desafios. Dados de m\xE1 qualidade ou incompletos podem levar a insights enganosos. Al\xE9m disso, \xE9 crucial equilibrar a an\xE1lise quantitativa com insights qualitativos para obter uma compreens\xE3o mais profunda das necessidades e comportamentos do cliente.",
          "Para pequenas e m\xE9dias empresas, iniciar a jornada de an\xE1lise de dados pode parecer desafiador. Comece com uma estrat\xE9gia clara, definindo o que voc\xEA quer alcan\xE7ar. Colabore com diferentes departamentos para coletar dados relevantes e considere ferramentas de an\xE1lise de dados que se encaixem no seu or\xE7amento e capacidades t\xE9cnicas."
        ],
        "image": "assets/img/post-2.webp",
        "conclusion": "A an\xE1lise de dados \xE9 uma ferramenta poderosa na identifica\xE7\xE3o de novos mercados. Ao adotar uma abordagem orientada a dados, as empresas podem descobrir oportunidades ocultas, ganhando uma vantagem competitiva significativa. Encorajamos as empresas a explorar o mundo da an\xE1lise de dados e a aproveitar seu potencial transformador."
      },
      "relationships": {
        "author": {
          "data": { "type": "people", "id": 1 }
        }
      }
    }
  ]
};

// src/app/modules/home/home.service.ts
var HomeService = class _HomeService {
  /**
   * Constructor
   */
  constructor() {
    this._posts = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for posts
   */
  get posts$() {
    return this._posts.asObservable();
  }
  /**
  * Getter for posts
  */
  getPosts() {
    return of(posts).pipe(tap((response) => {
      this._posts.next(response.data);
    }), switchMap((response) => {
      if (response.data === null) {
        return throwError({
          message: "Requested page is not available!"
        });
      }
      return of(response.data);
    }));
  }
  static {
    this.\u0275fac = function HomeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomeService, factory: _HomeService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/modules/home/home.resolvers.ts
var HomePostsResolver = class _HomePostsResolver {
  /**
   * Constructor
   */
  constructor(_homeService, _router) {
    this._homeService = _homeService;
    this._router = _router;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Resolver
   *
   * @param route
   * @param state
   */
  resolve(route, state) {
    return this._homeService.getPosts();
  }
  static {
    this.\u0275fac = function HomePostsResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomePostsResolver)(\u0275\u0275inject(HomeService), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HomePostsResolver, factory: _HomePostsResolver.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomePostsResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HomeService }, { type: Router }], null);
})();

// src/app/modules/home/home.routing.ts
var HomeRoutes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
      posts: HomePostsResolver
    },
    children: [
      {
        path: "",
        component: IndexComponent,
        resolve: {}
      }
    ]
  }
];

// src/app/modules/home/components/welcome/welcome.component.ts
var WelcomeComponent = class _WelcomeComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function WelcomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WelcomeComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], standalone: false, decls: 51, vars: 0, consts: [["id", "welcome", 1, "welcome-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "col-sm-6"], [1, "single-box"], [1, "icon"], [1, "fas", "fa-database"], ["title", "Fale conosco", 1, "btn", "btn-sm", "btn-primary", "mt-2", 3, "click"], [1, "fas", "fa-user-friends"], [1, "fas", "fa-chart-line"], [1, "text-center", "mt-5"], [1, "mb-4"], [1, "btn", "btn-primary", "btn-lg", "me-3", 3, "click"], [1, "btn", "btn-outline-primary", "btn-lg", 3, "click"], [1, "shape2"], ["src", "assets/img/shape1.png", "alt", "image"]], template: function WelcomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Como podemos ajudar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "O que fazemos na ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "VICS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Baseados em Lagoa Santa MG, atendemos empresas de toda regi\xE3o metropolitana de Belo Horizonte. Transformamos dados em decis\xF5es inteligentes, desenvolvemos sistemas que crescem junto com sua empresa e integramos plataformas para que voc\xEA trabalhe menos e produza mais.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 3)(12, "div", 4)(13, "div", 5)(14, "div", 6);
        \u0275\u0275element(15, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "h3");
        \u0275\u0275text(17, "Resultados Reais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "Entregamos ferramentas que realmente funcionam no seu dia a dia. Redu\xE7\xE3o de custos, ganho de efici\xEAncia e crescimento sustent\xE1vel.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "a", 8);
        \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_20_listener() {
          return ctx.onClick("contact");
        });
        \u0275\u0275text(21, "Fale conosco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 4)(23, "div", 5)(24, "div", 6);
        \u0275\u0275element(25, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h3");
        \u0275\u0275text(27, "Entendemos seu Neg\xF3cio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Primeiro escutamos, depois agimos. Constru\xEDmos exatamente o que voc\xEA precisa para o momento atual da sua empresa, sem complica\xE7\xF5es desnecess\xE1rias.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "a", 8);
        \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_30_listener() {
          return ctx.onClick("contact");
        });
        \u0275\u0275text(31, "Fale conosco");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 4)(33, "div", 5)(34, "div", 6);
        \u0275\u0275element(35, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3");
        \u0275\u0275text(37, "Tecnologia que Escala");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "Criamos solu\xE7\xF5es que crescem junto com sua empresa. Tecnologia moderna, estrutura s\xF3lida e espa\xE7o para evoluir conforme seus resultados aumentam.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "a", 8);
        \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_40_listener() {
          return ctx.onClick("contact");
        });
        \u0275\u0275text(41, "Fale conosco");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(42, "div", 11)(43, "h3", 12);
        \u0275\u0275text(44, "Pronto para transformar sua empresa com tecnologia?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 13);
        \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_45_listener() {
          return ctx.onClick("contact");
        });
        \u0275\u0275text(46, "\u{1F4AC} Agende uma conversa gratuita");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 14);
        \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_47_listener() {
          return ctx.onClick("services");
        });
        \u0275\u0275text(48, "\u{1F680} Ver como fazemos");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 15);
        \u0275\u0275element(50, "img", 16);
        \u0275\u0275elementEnd()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeComponent, [{
    type: Component,
    args: [{ selector: "app-welcome", standalone: false, template: `<div id="welcome" class="welcome-area pt-100 pb-70">
    <div class="container">
        <div class="section-title">
            <h4>Como podemos ajudar</h4>
            <h2>O que fazemos na <span>VICS</span></h2>
            <p>Baseados em Lagoa Santa MG, atendemos empresas de toda regi\xE3o metropolitana de Belo Horizonte. Transformamos dados em decis\xF5es inteligentes, desenvolvemos sistemas que crescem junto com sua empresa e integramos plataformas para que voc\xEA trabalhe menos e produza mais.</p>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-box">
                    <div class="icon">
                        <i class="fas fa-database"></i>
                    </div>
                    <h3>Resultados Reais</h3>
                    <p>Entregamos ferramentas que realmente funcionam no seu dia a dia. Redu\xE7\xE3o de custos, ganho de efici\xEAncia e crescimento sustent\xE1vel.</p>
                    <a (click)="onClick('contact')" title="Fale conosco"
                        class="btn btn-sm btn-primary mt-2">Fale conosco</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-box">
                    <div class="icon">
                        <i class="fas fa-user-friends"></i>
                    </div>
                    <h3>Entendemos seu Neg\xF3cio</h3>
                    <p>Primeiro escutamos, depois agimos. Constru\xEDmos exatamente o que voc\xEA precisa para o momento atual da sua empresa, sem complica\xE7\xF5es desnecess\xE1rias.</p>
                    <a (click)="onClick('contact')" title="Fale conosco"
                        class="btn btn-sm btn-primary mt-2">Fale conosco</a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-box">
                    <div class="icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Tecnologia que Escala</h3>
                    <p>Criamos solu\xE7\xF5es que crescem junto com sua empresa. Tecnologia moderna, estrutura s\xF3lida e espa\xE7o para evoluir conforme seus resultados aumentam.</p>
                    <a (click)="onClick('contact')" title="Fale conosco"
                        class="btn btn-sm btn-primary mt-2">Fale conosco</a>
                </div>
            </div>
        </div>
        
        <div class="text-center mt-5">
            <h3 class="mb-4">Pronto para transformar sua empresa com tecnologia?</h3>
            <a (click)="onClick('contact')" class="btn btn-primary btn-lg me-3">\u{1F4AC} Agende uma conversa gratuita</a>
            <a (click)="onClick('services')" class="btn btn-outline-primary btn-lg">\u{1F680} Ver como fazemos</a>
        </div>
    </div>
    <div class="shape2"><img src="assets/img/shape1.png" alt="image"></div>
</div>
` }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent", filePath: "src/app/modules/home/components/welcome/welcome.component.ts", lineNumber: 10 });
})();

// src/app/modules/home/components/blog-home/blog-home.component.ts
var _c03 = (a0) => ["/post", a0];
function BlogHomeComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span");
    \u0275\u0275text(2, "Engenharia de dados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3")(4, "a", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 7);
    \u0275\u0275element(9, "i", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c03, post_r1.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(post_r1.attributes.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r1.attributes.blockquote);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c03, post_r1.id));
  }
}
var BlogHomeComponent = class _BlogHomeComponent {
  constructor(viewportScroller, _homeService) {
    this.viewportScroller = viewportScroller;
    this._homeService = _homeService;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
    this._homeService.getPosts().subscribe((posts2) => {
      this.posts = posts2;
    });
  }
  static {
    this.\u0275fac = function BlogHomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BlogHomeComponent)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(HomeService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogHomeComponent, selectors: [["app-blog-home"]], standalone: false, decls: 11, vars: 1, consts: [["id", "blog", 1, "blog-area", "ptb-100"], [1, "container"], [1, "section-title"], [1, "blog-list-scroll"], ["class", "single-blog-item bg1", 4, "ngFor", "ngForOf"], [1, "single-blog-item", "bg1"], [3, "routerLink"], ["title", "Leia mais", 1, "link-btn", 3, "routerLink"], [1, "fas", "fa-arrow-right"]], template: function BlogHomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Nossas novidades");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2")(6, "span");
        \u0275\u0275text(7, "Posts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " mais recentes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3);
        \u0275\u0275template(10, BlogHomeComponent_div_10_Template, 10, 8, "div", 4);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.posts);
      }
    }, dependencies: [NgForOf, RouterLink], styles: ["\n\n.blog-list-scroll[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 1rem;\n  padding-left: 5px;\n}\n.blog-list-scroll[_ngcontent-%COMP%]   .single-blog-item[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  min-width: 280px;\n  max-width: 350px;\n  scroll-snap-align: start;\n  background: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s;\n}\n.blog-list-scroll[_ngcontent-%COMP%]   .single-blog-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.blog-list-scroll[_ngcontent-%COMP%]   .single-blog-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 10px 0;\n}\n.blog-list-scroll[_ngcontent-%COMP%]   .single-blog-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n@media (min-width: 1024px) {\n  .blog-list-scroll[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    overflow-x: unset;\n  }\n  .blog-list-scroll[_ngcontent-%COMP%]   .single-blog-item[_ngcontent-%COMP%] {\n    flex: 1 1 calc(33.333% - 20px);\n  }\n}\n/*# sourceMappingURL=blog-home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogHomeComponent, [{
    type: Component,
    args: [{ selector: "app-blog-home", standalone: false, template: `<section class="blog-area ptb-100" id="blog">
  <div class="container">
    <div class="section-title">
      <h4>Nossas novidades</h4>
      <h2><span>Posts</span> mais recentes</h2>
    </div>

    <div class="blog-list-scroll">
      <div class="single-blog-item bg1" *ngFor="let post of posts">
        <span>Engenharia de dados</span>
        <h3><a [routerLink]="['/post', post.id]">{{ post.attributes.title }}</a></h3>
        <p>{{ post.attributes.blockquote }}</p>
        <a [routerLink]="['/post', post.id]" class="link-btn" title="Leia mais">
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</section>
`, styles: ["/* src/app/modules/home/components/blog-home/blog-home.component.scss */\n.blog-list-scroll {\n  display: flex;\n  gap: 30px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  -webkit-overflow-scrolling: touch;\n  padding-bottom: 1rem;\n  padding-left: 5px;\n}\n.blog-list-scroll .single-blog-item {\n  flex: 0 0 auto;\n  min-width: 280px;\n  max-width: 350px;\n  scroll-snap-align: start;\n  background: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n  transition: transform 0.3s;\n}\n.blog-list-scroll .single-blog-item:hover {\n  transform: translateY(-4px);\n}\n.blog-list-scroll .single-blog-item h3 {\n  font-size: 18px;\n  margin: 10px 0;\n}\n.blog-list-scroll .single-blog-item p {\n  font-size: 14px;\n  color: #666;\n}\n@media (min-width: 1024px) {\n  .blog-list-scroll {\n    flex-wrap: wrap;\n    overflow-x: unset;\n  }\n  .blog-list-scroll .single-blog-item {\n    flex: 1 1 calc(33.333% - 20px);\n  }\n}\n/*# sourceMappingURL=blog-home.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }, { type: HomeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogHomeComponent, { className: "BlogHomeComponent", filePath: "src/app/modules/home/components/blog-home/blog-home.component.ts", lineNumber: 12 });
})();

// src/app/core/base-service.component.ts
var BaseServiceComponent = class {
  constructor(authHttpd) {
    this.authHttpd = authHttpd;
    this.apiGateway = environment.apiGateway;
  }
  getBaseUrl(url) {
    return this.apiGateway.concat(url);
  }
};

// src/app/modules/home/components/contact/contact.service.ts
var ContactService = class _ContactService extends BaseServiceComponent {
  constructor(authHttp) {
    super(authHttp);
    this.authHttp = authHttp;
  }
  requestContact(contact) {
    const url = `request_contact`;
    return this.authHttp.post(this.getBaseUrl(url), contact);
  }
  subscrible(email) {
    const url = `subscrible`;
    return this.authHttp.post(this.getBaseUrl(url), email);
  }
  static {
    this.\u0275fac = function ContactService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactService, factory: _ContactService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/modules/home/components/contact/form.component.ts
var ContactFormComponent = class _ContactFormComponent {
  constructor(_router, _contactService, _formBuilder) {
    this._router = _router;
    this._contactService = _contactService;
    this._formBuilder = _formBuilder;
  }
  ngOnInit() {
    this.form = this._formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]]
    });
  }
  get name() {
    return this.form.get("name");
  }
  get email() {
    return this.form.get("email");
  }
  get phone() {
    return this.form.get("phone");
  }
  get subject() {
    return this.form.get("subject");
  }
  get message() {
    return this.form.get("message");
  }
  submit() {
    if (this.form.valid) {
      this._contactService.requestContact(this.form.value).subscribe((response) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          "event": "contact_form_submit",
          "form_type": "contact",
          "form_location": "home_page",
          "form_subject": this.form.value.subject
        });
        this._router.navigate([`/lead`]);
      }, (error) => {
        console.log(error);
      });
    }
  }
  static {
    this.\u0275fac = function ContactFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactFormComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ContactService), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactFormComponent, selectors: [["app-contact-form"]], standalone: false, decls: 46, vars: 0, consts: [["id", "contact", "name", "contato", 1, "contact-area", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-7", "col-md-12"], [1, "contact-form"], [1, "mb-4"], [1, "whatsapp-contact", "mb-4"], ["href", "https://wa.me/5531975474785", "target", "_blank", 1, "btn", "btn-success", "btn-lg"], [1, "fab", "fa-whatsapp"], [1, "col-lg-5", "col-md-12"], [1, "contact-info"], [1, "d-table"], [1, "d-table-cell"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-envelope"], ["href", "mailto:cristiano@engenhariadedados.tec.br"], [1, "fas", "fa-phone-alt"], ["href", "https://wa.me/5531975474785"]], template: function ContactFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Fale com a Gente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2");
        \u0275\u0275text(6, "Vamos conversar sobre o seu ");
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8, "projeto");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "Se voc\xEA tem uma ideia, um sistema para evoluir ou um desafio t\xE9cnico para resolver, a VICS pode ajudar. Atuamos como bra\xE7o t\xE9cnico de startups, empresas e \xF3rg\xE3os p\xFAblicos com agilidade, profundidade t\xE9cnica e transpar\xEAncia.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 3)(13, "div", 4)(14, "div", 5)(15, "p", 6)(16, "strong");
        \u0275\u0275text(17, "\u{1F4CD} Baseados em Lagoa Santa/MG, atendemos empresas de todo o Brasil e Portugal.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 7)(19, "h4");
        \u0275\u0275text(20, "\u{1F4AC} Fale direto no WhatsApp:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 8);
        \u0275\u0275element(22, "i", 9);
        \u0275\u0275text(23, " (31) 97547-4785 ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 10)(25, "div", 11)(26, "div", 12)(27, "div", 13)(28, "ul")(29, "li");
        \u0275\u0275element(30, "i", 14);
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "Localiza\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "Lagoa Santa, Minas Gerais");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "li");
        \u0275\u0275element(35, "i", 15);
        \u0275\u0275elementStart(36, "a", 16)(37, "span");
        \u0275\u0275text(38, "Email:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "cristiano@engenhariadedados.tec.br");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "li");
        \u0275\u0275element(41, "i", 17);
        \u0275\u0275elementStart(42, "a", 18)(43, "span");
        \u0275\u0275text(44, "WhatsApp:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "(31) 97547-4785");
        \u0275\u0275elementEnd()()()()()()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactFormComponent, [{
    type: Component,
    args: [{ selector: "app-contact-form", standalone: false, template: '<div id="contact" name="contato" class="contact-area ptb-100 bg-F7F5F4">\n    <div class="container">\n        <div class="section-title">\n            <h4>Fale com a Gente</h4>\n            <h2>Vamos conversar sobre o seu <span>projeto</span>?</h2>\n            <p>Se voc\xEA tem uma ideia, um sistema para evoluir ou um desafio t\xE9cnico para resolver, a VICS pode ajudar. Atuamos como bra\xE7o t\xE9cnico de startups, empresas e \xF3rg\xE3os p\xFAblicos com agilidade, profundidade t\xE9cnica e transpar\xEAncia.</p>\n        </div>\n        <div class="row">\n            <div class="col-lg-7 col-md-12">\n                <div class="contact-form">\n                    <p class="mb-4"><strong>\u{1F4CD} Baseados em Lagoa Santa/MG, atendemos empresas de todo o Brasil e Portugal.</strong></p>\n                    \n                    <div class="whatsapp-contact mb-4">\n                        <h4>\u{1F4AC} Fale direto no WhatsApp:</h4>\n                        <a href="https://wa.me/5531975474785" target="_blank" class="btn btn-success btn-lg">\n                            <i class="fab fa-whatsapp"></i> (31) 97547-4785\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class="col-lg-5 col-md-12">                \n                <div class="contact-info">\n                    <div class="d-table">\n                        <div class="d-table-cell">\n                            <ul>\n                                <li><i class="fas fa-map-marker-alt"></i> <span>Localiza\xE7\xE3o:</span>Lagoa Santa, Minas Gerais</li>\n                                <li><i class="far fa-envelope"></i> <a href="mailto:cristiano@engenhariadedados.tec.br"><span>Email:</span>cristiano&#64;engenhariadedados.tec.br</a></li>\n                                <li><i class="fas fa-phone-alt"></i> <a href="https://wa.me/5531975474785"><span>WhatsApp:</span>(31) 97547-4785</a></li>                                \n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>' }]
  }], () => [{ type: Router }, { type: ContactService }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactFormComponent, { className: "ContactFormComponent", filePath: "src/app/modules/home/components/contact/form.component.ts", lineNumber: 18 });
})();

// src/app/modules/home/components/tech-equity-cta/tech-equity-cta.component.ts
var TechEquityCtaComponent = class _TechEquityCtaComponent {
  constructor() {
  }
  static {
    this.\u0275fac = function TechEquityCtaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TechEquityCtaComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechEquityCtaComponent, selectors: [["app-tech-equity-cta"]], standalone: false, decls: 31, vars: 0, consts: [[1, "tech-equity-cta-section", "py-5"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-8"], [1, "mb-3"], [1, "lead", "mb-4"], [1, "list-unstyled"], [1, "mb-2"], [1, "fas", "fa-check-circle", "text-success", "me-2"], [1, "col-lg-4", "text-center"], [1, "cta-box"], ["routerLink", "/tech-equity", 1, "btn", "btn-primary", "btn-lg", "mb-3"], [1, "small", "text-muted", "mb-0"]], template: function TechEquityCtaComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5, "\u{1F680} Novo: Modelo Tech for Equity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h3", 4);
        \u0275\u0275text(7, "Tem uma ideia inovadora mas falta equipe t\xE9cnica?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 5);
        \u0275\u0275text(9, " A VICS agora tamb\xE9m atua como ");
        \u0275\u0275elementStart(10, "strong");
        \u0275\u0275text(11, "cofundador t\xE9cnico");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, " do seu projeto! Desenvolvemos seu MVP e acompanhamos o crescimento em troca de participa\xE7\xE3o societ\xE1ria. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "ul", 6)(14, "li", 7);
        \u0275\u0275element(15, "i", 8);
        \u0275\u0275text(16, " MVP completo com tecnologia de ponta ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "li", 7);
        \u0275\u0275element(18, "i", 8);
        \u0275\u0275text(19, " Suporte t\xE9cnico at\xE9 os primeiros R$ 100 mil ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "li", 7);
        \u0275\u0275element(21, "i", 8);
        \u0275\u0275text(22, " Parceria com at\xE9 30% de participa\xE7\xE3o ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(23, "div", 9)(24, "div", 10)(25, "h4", 4);
        \u0275\u0275text(26, "Transforme sua ideia em neg\xF3cio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "a", 11);
        \u0275\u0275text(28, " Conhecer o Programa ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p", 12);
        \u0275\u0275text(30, " Sele\xE7\xE3o limitada de projetos por m\xEAs ");
        \u0275\u0275elementEnd()()()()()();
      }
    }, dependencies: [RouterLink], styles: ['\n\n.tech-equity-cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  position: relative;\n  overflow: hidden;\n}\n.tech-equity-cta-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 500px;\n  height: 500px;\n  background: rgba(13, 110, 253, 0.1);\n  border-radius: 50%;\n}\n.cta-box[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n}\n.cta-box[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  transition: all 0.3s ease;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=tech-equity-cta.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TechEquityCtaComponent, [{
    type: Component,
    args: [{ selector: "app-tech-equity-cta", standalone: false, template: '<section class="tech-equity-cta-section py-5">\n  <div class="container">\n    <div class="row align-items-center">\n      <div class="col-lg-8">\n        <h2 class="mb-3">\u{1F680} Novo: Modelo Tech for Equity</h2>\n        <h3 class="mb-3">Tem uma ideia inovadora mas falta equipe t\xE9cnica?</h3>\n        <p class="lead mb-4">\n          A VICS agora tamb\xE9m atua como <strong>cofundador t\xE9cnico</strong> do seu projeto! \n          Desenvolvemos seu MVP e acompanhamos o crescimento em troca de participa\xE7\xE3o societ\xE1ria.\n        </p>\n        <ul class="list-unstyled">\n          <li class="mb-2">\n            <i class="fas fa-check-circle text-success me-2"></i>\n            MVP completo com tecnologia de ponta\n          </li>\n          <li class="mb-2">\n            <i class="fas fa-check-circle text-success me-2"></i>\n            Suporte t\xE9cnico at\xE9 os primeiros R$ 100 mil\n          </li>\n          <li class="mb-2">\n            <i class="fas fa-check-circle text-success me-2"></i>\n            Parceria com at\xE9 30% de participa\xE7\xE3o\n          </li>\n        </ul>\n      </div>\n      <div class="col-lg-4 text-center">\n        <div class="cta-box">\n          <h4 class="mb-3">Transforme sua ideia em neg\xF3cio</h4>\n          <a routerLink="/tech-equity" class="btn btn-primary btn-lg mb-3">\n            Conhecer o Programa\n          </a>\n          <p class="small text-muted mb-0">\n            Sele\xE7\xE3o limitada de projetos por m\xEAs\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>', styles: ['/* src/app/modules/home/components/tech-equity-cta/tech-equity-cta.component.scss */\n.tech-equity-cta-section {\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  position: relative;\n  overflow: hidden;\n}\n.tech-equity-cta-section::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -10%;\n  width: 500px;\n  height: 500px;\n  background: rgba(13, 110, 253, 0.1);\n  border-radius: 50%;\n}\n.cta-box {\n  background: white;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  position: relative;\n  z-index: 1;\n}\n.cta-box:hover {\n  transform: translateY(-5px);\n  transition: all 0.3s ease;\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n}\n/*# sourceMappingURL=tech-equity-cta.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechEquityCtaComponent, { className: "TechEquityCtaComponent", filePath: "src/app/modules/home/components/tech-equity-cta/tech-equity-cta.component.ts", lineNumber: 9 });
})();

// src/app/modules/home/components/storytelling/storytelling.component.ts
var StorytellingComponent = class _StorytellingComponent {
  static {
    this.\u0275fac = function StorytellingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StorytellingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StorytellingComponent, selectors: [["app-storytelling"]], standalone: false, decls: 50, vars: 0, consts: [["id", "storytelling", 1, "storytelling-area", "ptb-100", "bg-F7F5F4"], [1, "container"], [1, "section-title"], [1, "row", "justify-content-center"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "single-box", "text-center"], [1, "icon"], [1, "fas", "fa-calendar-check"], [1, "fas", "fa-chart-line"], [1, "fas", "fa-tachometer-alt"], [1, "text-center", "mt-4"], [1, "mb-4"], ["href", "#contact", 1, "btn", "btn-primary", "btn-lg", "me-3"], ["href", "#contact", 1, "btn", "btn-outline-primary", "btn-lg"]], template: function StorytellingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        \u0275\u0275text(4, "Resultados ");
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6, "Reais");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Empresas que confiam na VICS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "div", 5)(12, "div", 6);
        \u0275\u0275element(13, "i", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "h3");
        \u0275\u0275text(15, "Cl\xEDnica M\xE9dica");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "p")(17, "strong");
        \u0275\u0275text(18, "30% menos hor\xE1rios perdidos");
        \u0275\u0275elementEnd();
        \u0275\u0275element(19, "br");
        \u0275\u0275text(20, "Agenda otimizada com previs\xE3o de faltas");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 4)(22, "div", 5)(23, "div", 6);
        \u0275\u0275element(24, "i", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h3");
        \u0275\u0275text(26, "Empresa de Varejo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p")(28, "strong");
        \u0275\u0275text(29, "40% redu\xE7\xE3o em custos");
        \u0275\u0275elementEnd();
        \u0275\u0275element(30, "br");
        \u0275\u0275text(31, "Estoque inteligente que n\xE3o falta nem sobra");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 4)(33, "div", 5)(34, "div", 6);
        \u0275\u0275element(35, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h3");
        \u0275\u0275text(37, "Ind\xFAstria");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p")(39, "strong");
        \u0275\u0275text(40, "50% menos tempo");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "br");
        \u0275\u0275text(42, "Relat\xF3rios confi\xE1veis para decis\xF5es r\xE1pidas");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(43, "div", 10)(44, "h3", 11);
        \u0275\u0275text(45, "Sua empresa pode ter resultados similares");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "a", 12);
        \u0275\u0275text(47, "\u{1F4AC} Fale com a VICS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "a", 13);
        \u0275\u0275text(49, "\u{1F680} Pe\xE7a uma proposta");
        \u0275\u0275elementEnd()()()();
      }
    }, styles: ['\n\n.storytelling-area[_ngcontent-%COMP%] {\n  background: #f7f5f4;\n}\n.storytelling-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  padding: 30px;\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e3e3e3;\n  position: relative;\n  overflow: hidden;\n}\n.storytelling-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n}\n.storytelling-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b35,\n      #f7931e,\n      #00b4db);\n}\n.story-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.story-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #ff6b35;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35,\n      #f7931e);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.story-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 1.3rem;\n}\n.story-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  padding: 15px;\n  border-radius: 10px;\n  border-left: 4px solid transparent;\n  transition: all 0.3s ease;\n}\n.story-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.story-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.story-section.pain[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 53, 69, 0.05),\n      rgba(220, 53, 69, 0.02));\n  border-left-color: #dc3545;\n}\n.story-section.pain[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.story-section.challenge[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 193, 7, 0.05),\n      rgba(255, 193, 7, 0.02));\n  border-left-color: #ffc107;\n}\n.story-section.challenge[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #f57c00;\n}\n.story-section.solution[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 110, 253, 0.05),\n      rgba(13, 110, 253, 0.02));\n  border-left-color: #0d6efd;\n}\n.story-section.solution[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n.story-section.result[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(25, 135, 84, 0.05),\n      rgba(25, 135, 84, 0.02));\n  border-left-color: #198754;\n}\n.story-section.result[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #198754;\n}\n.story-section.result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #198754;\n  font-weight: 700;\n}\n@media (max-width: 768px) {\n  .storytelling-card[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  .story-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .story-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .story-section[_ngcontent-%COMP%] {\n    padding: 12px;\n    margin-bottom: 15px;\n  }\n  .story-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .story-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.storytelling-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n.col-lg-4[_ngcontent-%COMP%]:nth-child(1)   .storytelling-card[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.col-lg-4[_ngcontent-%COMP%]:nth-child(2)   .storytelling-card[_ngcontent-%COMP%] {\n  animation-delay: 0.2s;\n}\n.col-lg-4[_ngcontent-%COMP%]:nth-child(3)   .storytelling-card[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n/*# sourceMappingURL=storytelling.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorytellingComponent, [{
    type: Component,
    args: [{ selector: "app-storytelling", standalone: false, template: '<div id="storytelling" class="storytelling-area ptb-100 bg-F7F5F4">\n  <div class="container">\n    <div class="section-title">\n      <h2>Resultados <span>Reais</span></h2>\n      <p>Empresas que confiam na VICS</p>\n    </div>\n\n    <div class="row justify-content-center">\n      <div class="col-lg-4 col-md-6 mb-4">\n        <div class="single-box text-center">\n          <div class="icon">\n            <i class="fas fa-calendar-check"></i>\n          </div>\n          <h3>Cl\xEDnica M\xE9dica</h3>\n          <p><strong>30% menos hor\xE1rios perdidos</strong><br>Agenda otimizada com previs\xE3o de faltas</p>\n        </div>\n      </div>\n\n      <div class="col-lg-4 col-md-6 mb-4">\n        <div class="single-box text-center">\n          <div class="icon">\n            <i class="fas fa-chart-line"></i>\n          </div>\n          <h3>Empresa de Varejo</h3>\n          <p><strong>40% redu\xE7\xE3o em custos</strong><br>Estoque inteligente que n\xE3o falta nem sobra</p>\n        </div>\n      </div>\n\n      <div class="col-lg-4 col-md-6 mb-4">\n        <div class="single-box text-center">\n          <div class="icon">\n            <i class="fas fa-tachometer-alt"></i>\n          </div>\n          <h3>Ind\xFAstria</h3>\n          <p><strong>50% menos tempo</strong><br>Relat\xF3rios confi\xE1veis para decis\xF5es r\xE1pidas</p>\n        </div>\n      </div>\n    </div>\n\n    <div class="text-center mt-4">\n      <h3 class="mb-4">Sua empresa pode ter resultados similares</h3>\n      <a href="#contact" class="btn btn-primary btn-lg me-3">\u{1F4AC} Fale com a VICS</a>\n      <a href="#contact" class="btn btn-outline-primary btn-lg">\u{1F680} Pe\xE7a uma proposta</a>\n    </div>\n  </div>\n</div>\n', styles: ['/* src/app/modules/home/components/storytelling/storytelling.component.scss */\n.storytelling-area {\n  background: #f7f5f4;\n}\n.storytelling-card {\n  background: white;\n  border-radius: 15px;\n  padding: 30px;\n  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border: 1px solid #e3e3e3;\n  position: relative;\n  overflow: hidden;\n}\n.storytelling-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);\n}\n.storytelling-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b35,\n      #f7931e,\n      #00b4db);\n}\n.story-icon {\n  text-align: center;\n  margin-bottom: 25px;\n}\n.story-icon i {\n  font-size: 3rem;\n  color: #ff6b35;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35,\n      #f7931e);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.story-content h3 {\n  color: #2c3e50;\n  font-weight: 700;\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 1.3rem;\n}\n.story-section {\n  margin-bottom: 20px;\n  padding: 15px;\n  border-radius: 10px;\n  border-left: 4px solid transparent;\n  transition: all 0.3s ease;\n}\n.story-section h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.story-section p {\n  margin: 0;\n  line-height: 1.6;\n  font-size: 0.95rem;\n}\n.story-section.pain {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(220, 53, 69, 0.05),\n      rgba(220, 53, 69, 0.02));\n  border-left-color: #dc3545;\n}\n.story-section.pain h4 {\n  color: #dc3545;\n}\n.story-section.challenge {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 193, 7, 0.05),\n      rgba(255, 193, 7, 0.02));\n  border-left-color: #ffc107;\n}\n.story-section.challenge h4 {\n  color: #f57c00;\n}\n.story-section.solution {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 110, 253, 0.05),\n      rgba(13, 110, 253, 0.02));\n  border-left-color: #0d6efd;\n}\n.story-section.solution h4 {\n  color: #0d6efd;\n}\n.story-section.result {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(25, 135, 84, 0.05),\n      rgba(25, 135, 84, 0.02));\n  border-left-color: #198754;\n}\n.story-section.result h4 {\n  color: #198754;\n}\n.story-section.result p strong {\n  color: #198754;\n  font-weight: 700;\n}\n@media (max-width: 768px) {\n  .storytelling-card {\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  .story-icon i {\n    font-size: 2.5rem;\n  }\n  .story-content h3 {\n    font-size: 1.2rem;\n  }\n  .story-section {\n    padding: 12px;\n    margin-bottom: 15px;\n  }\n  .story-section h4 {\n    font-size: 0.95rem;\n  }\n  .story-section p {\n    font-size: 0.9rem;\n  }\n}\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.storytelling-card {\n  animation: fadeInUp 0.6s ease-out;\n}\n.col-lg-4:nth-child(1) .storytelling-card {\n  animation-delay: 0.1s;\n}\n.col-lg-4:nth-child(2) .storytelling-card {\n  animation-delay: 0.2s;\n}\n.col-lg-4:nth-child(3) .storytelling-card {\n  animation-delay: 0.3s;\n}\n/*# sourceMappingURL=storytelling.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StorytellingComponent, { className: "StorytellingComponent", filePath: "src/app/modules/home/components/storytelling/storytelling.component.ts", lineNumber: 9 });
})();

// src/app/modules/home/home.module.ts
var HomeModule = class _HomeModule {
  static {
    this.\u0275fac = function HomeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [HomeService, HomePostsResolver, ContactService], imports: [
      SharedModule,
      RouterModule.forChild(HomeRoutes)
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeModule, [{
    type: NgModule,
    args: [{
      declarations: [
        IndexComponent,
        HomeComponent,
        AboutComponent,
        BlogHomeComponent,
        StrategyComponent,
        WhoWeAreComponent,
        CtaComponent,
        SkillComponent,
        FunfactsComponent,
        TeamComponent,
        HowWeWorkComponent,
        ServicesComponent,
        SubscribeComponent,
        PartnerComponent,
        FeedbackComponent,
        FaqComponent,
        PricingComponent,
        WorkComponent,
        WhyWeDifferentComponent,
        WelcomeComponent,
        ContactFormComponent,
        TechEquityCtaComponent,
        StorytellingComponent
      ],
      imports: [
        SharedModule,
        RouterModule.forChild(HomeRoutes)
      ],
      providers: [HomeService, HomePostsResolver, ContactService]
    }]
  }], null, null);
})();
export {
  HomeModule
};
//# sourceMappingURL=home.module-NBSIPEGP.js.map
