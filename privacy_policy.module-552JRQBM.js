import {
  FooterComponent,
  NavbarComponent,
  SharedModule
} from "./chunk-ZV3RLNPR.js";
import {
  Component,
  NgModule,
  RouterModule,
  RouterOutlet,
  Subject,
  ViewEncapsulation,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-U2PEDCZ4.js";

// src/app/modules/privacy_policy/privacy_policy.component.ts
var PrivacyPolicyComponent = class _PrivacyPolicyComponent {
  /**
   * Constructor
   */
  constructor() {
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  static {
    this.\u0275fac = function PrivacyPolicyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrivacyPolicyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicyComponent, selectors: [["privacy_policy"]], standalone: false, decls: 3, vars: 1, consts: [[3, "fixSticky"]], template: function PrivacyPolicyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar", 0)(1, "router-outlet")(2, "app-footer");
      }
      if (rf & 2) {
        \u0275\u0275property("fixSticky", true);
      }
    }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyPolicyComponent, [{
    type: Component,
    args: [{ selector: "privacy_policy", encapsulation: ViewEncapsulation.None, standalone: false, template: '<app-navbar [fixSticky]="true"></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicyComponent, { className: "PrivacyPolicyComponent", filePath: "src/app/modules/privacy_policy/privacy_policy.component.ts", lineNumber: 10 });
})();

// src/app/modules/privacy_policy/components/privace_policy_page.component.ts
var PrivacyPolicyPageComponent = class _PrivacyPolicyPageComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function PrivacyPolicyPageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrivacyPolicyPageComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrivacyPolicyPageComponent, selectors: [["app-privace-policy-page"]], standalone: false, decls: 43, vars: 0, consts: [["id", "privace_policy_page", 1, "privace_policy_page", "ptb-100"], [1, "container"], [1, "section-title"], [1, "privace-policy-page"], [1, "features-list"]], template: function PrivacyPolicyPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        \u0275\u0275text(4, "Pol\xEDtica de Privacidade da VICS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h2")(6, "span");
        \u0275\u0275text(7, "\xDAltima Atualiza\xE7\xE3o:");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " 01/01/2023");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 3)(10, "ul", 4)(11, "li");
        \u0275\u0275text(12, "1. Introdu\xE7\xE3o ");
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, 'Esta Pol\xEDtica de Privacidade descreve como a VICS ("n\xF3s", "nosso") coleta, usa, compartilha e protege as informa\xE7\xF5es pessoais dos usu\xE1rios ("voc\xEA") do nosso site https://vics.dev.br. Levamos sua privacidade a s\xE9rio e estamos comprometidos em proteger suas informa\xE7\xF5es pessoais.');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "li");
        \u0275\u0275text(16, "2. Informa\xE7\xF5es Coletadas");
        \u0275\u0275elementStart(17, "p");
        \u0275\u0275text(18, " N\xF3s coletamos informa\xE7\xF5es que voc\xEA nos fornece diretamente, como nome, e-mail, telefone, etc., ao preencher formul\xE1rios em nosso site. Tamb\xE9m coletamos automaticamente algumas informa\xE7\xF5es sobre seu dispositivo e uso do site, incluindo endere\xE7o IP, informa\xE7\xF5es do navegador, p\xE1ginas visitadas e outras atividades no site.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "li");
        \u0275\u0275text(20, "3. Uso das Informa\xE7\xF5es");
        \u0275\u0275elementStart(21, "p");
        \u0275\u0275text(22, " Utilizamos suas informa\xE7\xF5es para: Fornecer, operar e melhorar nossos servi\xE7os. Comunicar-nos com voc\xEA, incluindo responder a suas consultas e fornecer suporte ao cliente. Para fins de marketing e promocionais, de acordo com as prefer\xEAncias que voc\xEA expressou.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "li");
        \u0275\u0275text(24, "4. Compartilhamento de Informa\xE7\xF5es");
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " Podemos compartilhar suas informa\xE7\xF5es com terceiros nas seguintes circunst\xE2ncias: Com fornecedores ou prestadores de servi\xE7os que nos apoiam nos neg\xF3cios. Para cumprir com a lei, regulamentos ou um processo legal v\xE1lido. Para proteger os direitos e a seguran\xE7a da VICS e dos seus usu\xE1rios.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275text(28, "5. Seguran\xE7a dos Dados");
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, " Empregamos medidas de seguran\xE7a apropriadas para proteger suas informa\xE7\xF5es contra acesso n\xE3o autorizado, altera\xE7\xE3o, divulga\xE7\xE3o ou destrui\xE7\xE3o.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275text(32, "6. Seus Direitos");
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, " Voc\xEA tem o direito de acessar, corrigir, excluir ou limitar o uso de suas informa\xE7\xF5es pessoais. Se deseja exercer esses direitos, entre em contato conosco pelo e-mail cristiano@engenhariadedados.tec.br.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275text(36, "7. Altera\xE7\xF5es \xE0 Pol\xEDtica de Privacidade");
        \u0275\u0275elementStart(37, "p");
        \u0275\u0275text(38, " Reservamo-nos o direito de modificar esta pol\xEDtica a qualquer momento. Qualquer altera\xE7\xE3o ser\xE1 efetiva imediatamente ap\xF3s a publica\xE7\xE3o da pol\xEDtica revisada no site.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, "8. Contato");
        \u0275\u0275elementStart(41, "p");
        \u0275\u0275text(42, " Se tiver d\xFAvidas ou preocupa\xE7\xF5es sobre esta Pol\xEDtica de Privacidade, entre em contato conosco em cristiano@engenhariadedados.tec.br.");
        \u0275\u0275elementEnd()()()()()();
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyPolicyPageComponent, [{
    type: Component,
    args: [{ selector: "app-privace-policy-page", standalone: false, template: '<div id="privace_policy_page" class="privace_policy_page ptb-100">\n    <div class="container">\n        <div class="section-title">\n            <h4>Pol\xEDtica de Privacidade da VICS</h4>\n            <h2><span>\xDAltima Atualiza\xE7\xE3o:</span> 01/01/2023</h2>\n        </div>\n        <div class="privace-policy-page">\n            <ul class="features-list">\n                <li>1. Introdu\xE7\xE3o\n                    <p>Esta Pol\xEDtica de Privacidade descreve como a VICS ("n\xF3s",\n                        "nosso")\n                        coleta, usa,\n                        compartilha e protege as informa\xE7\xF5es pessoais dos\n                        usu\xE1rios ("voc\xEA")\n                        do\n                        nosso\n                        site https://vics.dev.br. Levamos sua privacidade a\n                        s\xE9rio e\n                        estamos\n                        comprometidos em proteger suas informa\xE7\xF5es pessoais.</p></li>\n\n                <li>2. Informa\xE7\xF5es Coletadas<p>\n                        N\xF3s coletamos informa\xE7\xF5es que voc\xEA nos fornece\n                        diretamente,\n                        como\n                        nome,\n                        e-mail,\n                        telefone, etc., ao preencher formul\xE1rios em nosso site.\n                        Tamb\xE9m\n                        coletamos\n                        automaticamente algumas informa\xE7\xF5es sobre seu\n                        dispositivo e\n                        uso\n                        do\n                        site,\n                        incluindo endere\xE7o IP, informa\xE7\xF5es do navegador, p\xE1ginas\n                        visitadas e\n                        outras\n                        atividades no site.</p></li>\n\n                <li>3. Uso das Informa\xE7\xF5es<p>\n                        Utilizamos suas informa\xE7\xF5es para:\n\n                        Fornecer, operar e melhorar nossos servi\xE7os.\n                        Comunicar-nos com voc\xEA, incluindo responder a suas\n                        consultas\n                        e\n                        fornecer\n                        suporte\n                        ao cliente.\n                        Para fins de marketing e promocionais, de acordo com as\n                        prefer\xEAncias\n                        que\n                        voc\xEA\n                        expressou.</p></li>\n                <li>4. Compartilhamento de Informa\xE7\xF5es<p>\n                        Podemos compartilhar suas informa\xE7\xF5es com terceiros nas\n                        seguintes\n                        circunst\xE2ncias:\n\n                        Com fornecedores ou prestadores de servi\xE7os que nos\n                        apoiam\n                        nos\n                        neg\xF3cios.\n                        Para cumprir com a lei, regulamentos ou um processo\n                        legal\n                        v\xE1lido.\n                        Para proteger os direitos e a seguran\xE7a da VICS e dos\n                        seus\n                        usu\xE1rios.</p></li>\n                <li>5. Seguran\xE7a dos Dados<p>\n                        Empregamos medidas de seguran\xE7a apropriadas para\n                        proteger\n                        suas\n                        informa\xE7\xF5es\n                        contra acesso n\xE3o autorizado, altera\xE7\xE3o, divulga\xE7\xE3o ou\n                        destrui\xE7\xE3o.</p></li>\n\n                <li>6. Seus Direitos<p>\n                        Voc\xEA tem o direito de acessar, corrigir, excluir ou\n                        limitar\n                        o\n                        uso de\n                        suas\n                        informa\xE7\xF5es pessoais. Se deseja exercer esses direitos,\n                        entre em\n                        contato\n                        conosco\n                        pelo e-mail cristiano&#64;engenhariadedados.tec.br.</p></li>\n\n                <li>7. Altera\xE7\xF5es \xE0 Pol\xEDtica de Privacidade<p>\n                        Reservamo-nos o direito de modificar esta pol\xEDtica a\n                        qualquer\n                        momento.\n                        Qualquer\n                        altera\xE7\xE3o ser\xE1 efetiva imediatamente ap\xF3s a publica\xE7\xE3o\n                        da\n                        pol\xEDtica\n                        revisada no\n                        site.</p></li>\n\n                <li>8. Contato<p>\n                        Se tiver d\xFAvidas ou preocupa\xE7\xF5es sobre esta Pol\xEDtica de\n                        Privacidade,\n                        entre em\n                        contato conosco em cristiano&#64;engenhariadedados.tec.br.</p> </li>\n            </ul>\n\n        </div>\n\n    </div>\n</div>\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrivacyPolicyPageComponent, { className: "PrivacyPolicyPageComponent", filePath: "src/app/modules/privacy_policy/components/privace_policy_page.component.ts", lineNumber: 10 });
})();

// src/app/modules/privacy_policy/privacy_policy.routing.ts
var PrivacyPolicyRoutes = [
  {
    path: "",
    component: PrivacyPolicyComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {},
    children: [
      {
        path: "",
        component: PrivacyPolicyPageComponent,
        resolve: {}
      }
    ]
  }
];

// src/app/modules/privacy_policy/privacy_policy.module.ts
var PrivacyPolicyModule = class _PrivacyPolicyModule {
  static {
    this.\u0275fac = function PrivacyPolicyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrivacyPolicyModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PrivacyPolicyModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      RouterModule.forChild(PrivacyPolicyRoutes),
      SharedModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrivacyPolicyModule, [{
    type: NgModule,
    args: [{
      declarations: [
        PrivacyPolicyComponent,
        PrivacyPolicyPageComponent
      ],
      imports: [
        RouterModule.forChild(PrivacyPolicyRoutes),
        SharedModule
      ],
      providers: []
    }]
  }], null, null);
})();
export {
  PrivacyPolicyModule
};
//# sourceMappingURL=privacy_policy.module-552JRQBM.js.map
