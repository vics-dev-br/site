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

// src/app/modules/lead/lead.component.ts
var LeadComponent = class _LeadComponent {
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
    this.\u0275fac = function LeadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeadComponent, selectors: [["lead"]], standalone: false, decls: 3, vars: 1, consts: [[3, "fixSticky"]], template: function LeadComponent_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeadComponent, [{
    type: Component,
    args: [{ selector: "lead", encapsulation: ViewEncapsulation.None, standalone: false, template: '<app-navbar [fixSticky]="true"></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeadComponent, { className: "LeadComponent", filePath: "src/app/modules/lead/lead.component.ts", lineNumber: 10 });
})();

// src/app/modules/lead/components/request_contact/request-contact.component.ts
var RequestContactComponent = class _RequestContactComponent {
  constructor() {
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function RequestContactComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestContactComponent, selectors: [["app-request-contact"]], standalone: false, decls: 9, vars: 0, consts: [[1, "request-contact", "ptb-70", "bg-fffdfd"], [1, "container"], [1, "request-contact"], ["src", "assets/icons/icon-96x96.png"]], template: function RequestContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Obrigado por Entrar em Contato!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Sua mensagem foi recebida com sucesso. Agradecemos o seu interesse na VICS. Nossa equipe analisar\xE1 sua solicita\xE7\xE3o e entrar\xE1 em contato em breve. Enquanto isso, sinta-se \xE0 vontade para explorar nosso site e conhecer mais sobre nossos servi\xE7os e como podemos ajudar a transformar os seus dados em solu\xE7\xF5es de neg\xF3cio inteligentes.");
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, " Atenciosamente, Equipe VICS ");
        \u0275\u0275elementEnd()()();
      }
    }, styles: ["\n\n.request-contact[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.request-contact[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  display: block;\n}\n.request-contact[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.request-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=request-contact.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestContactComponent, [{
    type: Component,
    args: [{ selector: "app-request-contact", standalone: false, template: '<div class="request-contact ptb-70 bg-fffdfd">\n    <div class="container">\n        <div class="request-contact">\n            <img src="assets/icons/icon-96x96.png">\n            <h1>Obrigado por Entrar em Contato!</h1>\n            <p>Sua mensagem foi recebida com sucesso. Agradecemos o seu\n                interesse na VICS. Nossa equipe analisar\xE1 sua solicita\xE7\xE3o e\n                entrar\xE1 em contato em breve. Enquanto isso, sinta-se \xE0 vontade\n                para explorar nosso site e conhecer mais sobre nossos servi\xE7os e\n                como podemos ajudar a transformar os seus dados em solu\xE7\xF5es de\n                neg\xF3cio inteligentes.</p>\n\n            Atenciosamente,\n            Equipe VICS\n        </div>\n    </div>\n</div>', styles: ["/* src/app/modules/lead/components/request_contact/request-contact.component.scss */\n.request-contact {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.request-contact img {\n  margin: 0 auto;\n  display: block;\n}\n.request-contact h1 {\n  margin-top: 20px;\n}\n.request-contact p {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=request-contact.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestContactComponent, { className: "RequestContactComponent", filePath: "src/app/modules/lead/components/request_contact/request-contact.component.ts", lineNumber: 9 });
})();

// src/app/modules/lead/lead.routing.ts
var LeadRoutes = [
  {
    path: "",
    component: LeadComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {},
    children: [
      {
        path: "",
        component: RequestContactComponent,
        resolve: {}
      }
    ]
  }
];

// src/app/modules/lead/lead.module.ts
var LeadModule = class _LeadModule {
  static {
    this.\u0275fac = function LeadModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LeadModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LeadModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      RouterModule.forChild(LeadRoutes),
      SharedModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeadModule, [{
    type: NgModule,
    args: [{
      declarations: [
        LeadComponent,
        RequestContactComponent
      ],
      imports: [
        RouterModule.forChild(LeadRoutes),
        SharedModule
      ],
      providers: []
    }]
  }], null, null);
})();
export {
  LeadModule
};
//# sourceMappingURL=lead.module-CTWYHMWY.js.map
