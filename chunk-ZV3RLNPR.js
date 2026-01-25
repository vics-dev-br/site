import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgClass,
  NgIf,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RouterLink,
  RouterModule,
  RuntimeError,
  Self,
  SkipSelf,
  Subject,
  Version,
  ViewChild,
  ViewportScroller,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  computed,
  forkJoin,
  forwardRef,
  from,
  getDOM,
  inject,
  input,
  isPlatformBrowser,
  isPromise,
  isSubscribable,
  map,
  provideHttpClient,
  setClassMetadata,
  signal,
  untracked,
  withFetch,
  withInterceptorsFromDi,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-U2PEDCZ4.js";

// node_modules/@angular/forms/fesm2022/forms.mjs
var BaseControlValueAccessor = class _BaseControlValueAccessor {
  _renderer;
  _elementRef;
  /**
   * The registered callback function called when a change or input event occurs on the input
   * element.
   * @docs-private
   */
  onChange = (_) => {
  };
  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @docs-private
   */
  onTouched = () => {
  };
  constructor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
  }
  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @docs-private
   */
  setProperty(key, value) {
    this._renderer.setProperty(this._elementRef.nativeElement, key, value);
  }
  /**
   * Registers a function called when the control is touched.
   * @docs-private
   */
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  /**
   * Registers a function called when the control value changes.
   * @docs-private
   */
  registerOnChange(fn) {
    this.onChange = fn;
  }
  /**
   * Sets the "disabled" property on the range input element.
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.setProperty("disabled", isDisabled);
  }
  static \u0275fac = function BaseControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseControlValueAccessor
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseControlValueAccessor, [{
    type: Directive
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }], null);
})();
var BuiltInControlValueAccessor = class _BuiltInControlValueAccessor extends BaseControlValueAccessor {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275BuiltInControlValueAccessor_BaseFactory;
    return function BuiltInControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275BuiltInControlValueAccessor_BaseFactory || (\u0275BuiltInControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_BuiltInControlValueAccessor)))(__ngFactoryType__ || _BuiltInControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BuiltInControlValueAccessor,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BuiltInControlValueAccessor, [{
    type: Directive
  }], null, null);
})();
var NG_VALUE_ACCESSOR = new InjectionToken(ngDevMode ? "NgValueAccessor" : "");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CheckboxControlValueAccessor),
  multi: true
};
var CheckboxControlValueAccessor = class _CheckboxControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "checked" property on the input element.
   * @docs-private
   */
  writeValue(value) {
    this.setProperty("checked", value);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxControlValueAccessor_BaseFactory;
    return function CheckboxControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275CheckboxControlValueAccessor_BaseFactory || (\u0275CheckboxControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxControlValueAccessor)))(__ngFactoryType__ || _CheckboxControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxControlValueAccessor,
    selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
    hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.checked);
        })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]",
      host: {
        "(change)": "onChange($event.target.checked)",
        "(blur)": "onTouched()"
      },
      providers: [CHECKBOX_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var DEFAULT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DefaultValueAccessor),
  multi: true
};
function _isAndroid() {
  const userAgent = getDOM() ? getDOM().getUserAgent() : "";
  return /android (\d+)/.test(userAgent.toLowerCase());
}
var COMPOSITION_BUFFER_MODE = new InjectionToken(ngDevMode ? "CompositionEventMode" : "");
var DefaultValueAccessor = class _DefaultValueAccessor extends BaseControlValueAccessor {
  _compositionMode;
  /** Whether the user is creating a composition string (IME events). */
  _composing = false;
  constructor(renderer, elementRef, _compositionMode) {
    super(renderer, elementRef);
    this._compositionMode = _compositionMode;
    if (this._compositionMode == null) {
      this._compositionMode = !_isAndroid();
    }
  }
  /**
   * Sets the "value" property on the input element.
   * @docs-private
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /** @internal */
  _handleInput(value) {
    if (!this._compositionMode || this._compositionMode && !this._composing) {
      this.onChange(value);
    }
  }
  /** @internal */
  _compositionStart() {
    this._composing = true;
  }
  /** @internal */
  _compositionEnd(value) {
    this._composing = false;
    this._compositionMode && this.onChange(value);
  }
  static \u0275fac = function DefaultValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DefaultValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(COMPOSITION_BUFFER_MODE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DefaultValueAccessor,
    selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
    hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
          return ctx._handleInput($event.target.value);
        })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
          return ctx._compositionStart();
        })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
          return ctx._compositionEnd($event.target.value);
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([DEFAULT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]",
      // TODO: vsavkin replace the above selector with the one below it once
      // https://github.com/angular/angular/issues/3011 is implemented
      // selector: '[ngModel],[formControl],[formControlName]',
      host: {
        "(input)": "$any(this)._handleInput($event.target.value)",
        "(blur)": "onTouched()",
        "(compositionstart)": "$any(this)._compositionStart()",
        "(compositionend)": "$any(this)._compositionEnd($event.target.value)"
      },
      providers: [DEFAULT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [COMPOSITION_BUFFER_MODE]
    }]
  }], null);
})();
function isEmptyInputValue(value) {
  return value == null || lengthOrSize(value) === 0;
}
function lengthOrSize(value) {
  if (value == null) {
    return null;
  } else if (Array.isArray(value) || typeof value === "string") {
    return value.length;
  } else if (value instanceof Set) {
    return value.size;
  }
  return null;
}
var NG_VALIDATORS = new InjectionToken(ngDevMode ? "NgValidators" : "");
var NG_ASYNC_VALIDATORS = new InjectionToken(ngDevMode ? "NgAsyncValidators" : "");
var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
var Validators = class {
  /**
   * @description
   * Validator that requires the control's value to be greater than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a minimum of 3
   *
   * ```ts
   * const control = new FormControl(2, Validators.min(3));
   *
   * console.log(control.errors); // {min: {min: 3, actual: 2}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `min` property if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static min(min) {
    return minValidator(min);
  }
  /**
   * @description
   * Validator that requires the control's value to be less than or equal to the provided number.
   *
   * @usageNotes
   *
   * ### Validate against a maximum of 15
   *
   * ```ts
   * const control = new FormControl(16, Validators.max(15));
   *
   * console.log(control.errors); // {max: {max: 15, actual: 16}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `max` property if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static max(max) {
    return maxValidator(max);
  }
  /**
   * @description
   * Validator that requires the control have a non-empty value.
   *
   * @usageNotes
   *
   * ### Validate that the field is non-empty
   *
   * ```ts
   * const control = new FormControl('', Validators.required);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map with the `required` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static required(control) {
    return requiredValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value be true. This validator is commonly
   * used for required checkboxes.
   *
   * @usageNotes
   *
   * ### Validate that the field value is true
   *
   * ```ts
   * const control = new FormControl('some value', Validators.requiredTrue);
   *
   * console.log(control.errors); // {required: true}
   * ```
   *
   * @returns An error map that contains the `required` property
   * set to `true` if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static requiredTrue(control) {
    return requiredTrueValidator(control);
  }
  /**
   * @description
   * Validator that requires the control's value pass an email validation test.
   *
   * Tests the value using a [regular
   * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
   * pattern suitable for common use cases. The pattern is based on the definition of a valid email
   * address in the [WHATWG HTML
   * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
   * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
   * lengths of different parts of the address).
   *
   * The differences from the WHATWG version include:
   * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
   * - Disallow `local-part` to be longer than 64 characters.
   * - Disallow the whole address to be longer than 254 characters.
   *
   * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
   * validate the value against a different pattern.
   *
   * @usageNotes
   *
   * ### Validate that the field matches a valid email pattern
   *
   * ```ts
   * const control = new FormControl('bad@', Validators.email);
   *
   * console.log(control.errors); // {email: true}
   * ```
   *
   * @returns An error map with the `email` property
   * if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static email(control) {
    return emailValidator(control);
  }
  /**
   * @description
   * Validator that requires the number of items in the control's value to be greater than or equal
   * to the provided minimum length. This validator is also provided by default if you use
   * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
   * only for types that have a numeric `length` or `size` property, such as strings, arrays or
   * sets. The `minLength` validator logic is also not invoked for values when their `length` or
   * `size` property is 0 (for example in case of an empty string or an empty array), to support
   * optional controls. You can use the standard `required` validator if empty values should not be
   * considered valid.
   *
   * @usageNotes
   *
   * ### Validate that the field has a minimum of 3 characters
   *
   * ```ts
   * const control = new FormControl('ng', Validators.minLength(3));
   *
   * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
   * ```
   *
   * ```html
   * <input minlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `minlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static minLength(minLength) {
    return minLengthValidator(minLength);
  }
  /**
   * @description
   * Validator that requires the number of items in the control's value to be less than or equal
   * to the provided maximum length. This validator is also provided by default if you use
   * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
   * only for types that have a numeric `length` or `size` property, such as strings, arrays or
   * sets.
   *
   * @usageNotes
   *
   * ### Validate that the field has maximum of 5 characters
   *
   * ```ts
   * const control = new FormControl('Angular', Validators.maxLength(5));
   *
   * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
   * ```
   *
   * ```html
   * <input maxlength="5">
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `maxlength` property if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static maxLength(maxLength) {
    return maxLengthValidator(maxLength);
  }
  /**
   * @description
   * Validator that requires the control's value to match a regex pattern. This validator is also
   * provided by default if you use the HTML5 `pattern` attribute.
   *
   * @usageNotes
   *
   * ### Validate that the field only contains letters or spaces
   *
   * ```ts
   * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
   *
   * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
   * ```
   *
   * ```html
   * <input pattern="[a-zA-Z ]*">
   * ```
   *
   * ### Pattern matching with the global or sticky flag
   *
   * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
   * can produce different results on the same input when validations are run consecutively. This is
   * due to how the behavior of `RegExp.prototype.test` is
   * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
   * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
   * Due to this behavior, it is recommended that when using
   * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
   * flag enabled.
   *
   * ```ts
   * // Not recommended (since the `g` flag is used)
   * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
   *
   * // Good
   * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
   * ```
   *
   * @param pattern A regular expression to be used as is to test the values, or a string.
   * If a string is passed, the `^` character is prepended and the `$` character is
   * appended to the provided string (if not already present), and the resulting regular
   * expression is used to test the values.
   *
   * @returns A validator function that returns an error map with the
   * `pattern` property if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static pattern(pattern) {
    return patternValidator(pattern);
  }
  /**
   * @description
   * Validator that performs no operation.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static nullValidator(control) {
    return nullValidator();
  }
  static compose(validators) {
    return compose(validators);
  }
  /**
   * @description
   * Compose multiple async validators into a single function that returns the union
   * of the individual error objects for the provided control.
   *
   * @returns A validator function that returns an error map with the
   * merged error objects of the async validators if the validation check fails, otherwise `null`.
   *
   * @see {@link /api/forms/AbstractControl#updateValueAndValidity updateValueAndValidity}
   *
   */
  static composeAsync(validators) {
    return composeAsync(validators);
  }
};
function minValidator(min) {
  return (control) => {
    if (control.value == null || min == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value < min ? {
      "min": {
        "min": min,
        "actual": control.value
      }
    } : null;
  };
}
function maxValidator(max) {
  return (control) => {
    if (control.value == null || max == null) {
      return null;
    }
    const value = parseFloat(control.value);
    return !isNaN(value) && value > max ? {
      "max": {
        "max": max,
        "actual": control.value
      }
    } : null;
  };
}
function requiredValidator(control) {
  return isEmptyInputValue(control.value) ? {
    "required": true
  } : null;
}
function requiredTrueValidator(control) {
  return control.value === true ? null : {
    "required": true
  };
}
function emailValidator(control) {
  if (isEmptyInputValue(control.value)) {
    return null;
  }
  return EMAIL_REGEXP.test(control.value) ? null : {
    "email": true
  };
}
function minLengthValidator(minLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length === null || length === 0) {
      return null;
    }
    return length < minLength ? {
      "minlength": {
        "requiredLength": minLength,
        "actualLength": length
      }
    } : null;
  };
}
function maxLengthValidator(maxLength) {
  return (control) => {
    const length = control.value?.length ?? lengthOrSize(control.value);
    if (length !== null && length > maxLength) {
      return {
        "maxlength": {
          "requiredLength": maxLength,
          "actualLength": length
        }
      };
    }
    return null;
  };
}
function patternValidator(pattern) {
  if (!pattern) return nullValidator;
  let regex;
  let regexStr;
  if (typeof pattern === "string") {
    regexStr = "";
    if (pattern.charAt(0) !== "^") regexStr += "^";
    regexStr += pattern;
    if (pattern.charAt(pattern.length - 1) !== "$") regexStr += "$";
    regex = new RegExp(regexStr);
  } else {
    regexStr = pattern.toString();
    regex = pattern;
  }
  return (control) => {
    if (isEmptyInputValue(control.value)) {
      return null;
    }
    const value = control.value;
    return regex.test(value) ? null : {
      "pattern": {
        "requiredPattern": regexStr,
        "actualValue": value
      }
    };
  };
}
function nullValidator(control) {
  return null;
}
function isPresent(o) {
  return o != null;
}
function toObservable(value) {
  const obs = isPromise(value) ? from(value) : value;
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !isSubscribable(obs)) {
    let errorMessage = `Expected async validator to return Promise or Observable.`;
    if (typeof value === "object") {
      errorMessage += " Are you using a synchronous validator where an async validator is expected?";
    }
    throw new RuntimeError(-1101, errorMessage);
  }
  return obs;
}
function mergeErrors(arrayOfErrors) {
  let res = {};
  arrayOfErrors.forEach((errors) => {
    res = errors != null ? __spreadValues(__spreadValues({}, res), errors) : res;
  });
  return Object.keys(res).length === 0 ? null : res;
}
function executeValidators(control, validators) {
  return validators.map((validator) => validator(control));
}
function isValidatorFn(validator) {
  return !validator.validate;
}
function normalizeValidators(validators) {
  return validators.map((validator) => {
    return isValidatorFn(validator) ? validator : (c) => validator.validate(c);
  });
}
function compose(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    return mergeErrors(executeValidators(control, presentValidators));
  };
}
function composeValidators(validators) {
  return validators != null ? compose(normalizeValidators(validators)) : null;
}
function composeAsync(validators) {
  if (!validators) return null;
  const presentValidators = validators.filter(isPresent);
  if (presentValidators.length == 0) return null;
  return function(control) {
    const observables = executeValidators(control, presentValidators).map(toObservable);
    return forkJoin(observables).pipe(map(mergeErrors));
  };
}
function composeAsyncValidators(validators) {
  return validators != null ? composeAsync(normalizeValidators(validators)) : null;
}
function mergeValidators(controlValidators, dirValidator) {
  if (controlValidators === null) return [dirValidator];
  return Array.isArray(controlValidators) ? [...controlValidators, dirValidator] : [controlValidators, dirValidator];
}
function getControlValidators(control) {
  return control._rawValidators;
}
function getControlAsyncValidators(control) {
  return control._rawAsyncValidators;
}
function makeValidatorsArray(validators) {
  if (!validators) return [];
  return Array.isArray(validators) ? validators : [validators];
}
function hasValidator(validators, validator) {
  return Array.isArray(validators) ? validators.includes(validator) : validators === validator;
}
function addValidators(validators, currentValidators) {
  const current = makeValidatorsArray(currentValidators);
  const validatorsToAdd = makeValidatorsArray(validators);
  validatorsToAdd.forEach((v) => {
    if (!hasValidator(current, v)) {
      current.push(v);
    }
  });
  return current;
}
function removeValidators(validators, currentValidators) {
  return makeValidatorsArray(currentValidators).filter((v) => !hasValidator(validators, v));
}
var AbstractControlDirective = class {
  /**
   * @description
   * Reports the value of the control if it is present, otherwise null.
   */
  get value() {
    return this.control ? this.control.value : null;
  }
  /**
   * @description
   * Reports whether the control is valid. A control is considered valid if no
   * validation errors exist with the current value.
   * If the control is not present, null is returned.
   */
  get valid() {
    return this.control ? this.control.valid : null;
  }
  /**
   * @description
   * Reports whether the control is invalid, meaning that an error exists in the input value.
   * If the control is not present, null is returned.
   */
  get invalid() {
    return this.control ? this.control.invalid : null;
  }
  /**
   * @description
   * Reports whether a control is pending, meaning that async validation is occurring and
   * errors are not yet available for the input value. If the control is not present, null is
   * returned.
   */
  get pending() {
    return this.control ? this.control.pending : null;
  }
  /**
   * @description
   * Reports whether the control is disabled, meaning that the control is disabled
   * in the UI and is exempt from validation checks and excluded from aggregate
   * values of ancestor controls. If the control is not present, null is returned.
   */
  get disabled() {
    return this.control ? this.control.disabled : null;
  }
  /**
   * @description
   * Reports whether the control is enabled, meaning that the control is included in ancestor
   * calculations of validity or value. If the control is not present, null is returned.
   */
  get enabled() {
    return this.control ? this.control.enabled : null;
  }
  /**
   * @description
   * Reports the control's validation errors. If the control is not present, null is returned.
   */
  get errors() {
    return this.control ? this.control.errors : null;
  }
  /**
   * @description
   * Reports whether the control is pristine, meaning that the user has not yet changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get pristine() {
    return this.control ? this.control.pristine : null;
  }
  /**
   * @description
   * Reports whether the control is dirty, meaning that the user has changed
   * the value in the UI. If the control is not present, null is returned.
   */
  get dirty() {
    return this.control ? this.control.dirty : null;
  }
  /**
   * @description
   * Reports whether the control is touched, meaning that the user has triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get touched() {
    return this.control ? this.control.touched : null;
  }
  /**
   * @description
   * Reports the validation status of the control. Possible values include:
   * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
   * If the control is not present, null is returned.
   */
  get status() {
    return this.control ? this.control.status : null;
  }
  /**
   * @description
   * Reports whether the control is untouched, meaning that the user has not yet triggered
   * a `blur` event on it. If the control is not present, null is returned.
   */
  get untouched() {
    return this.control ? this.control.untouched : null;
  }
  /**
   * @description
   * Returns a multicasting observable that emits a validation status whenever it is
   * calculated for the control. If the control is not present, null is returned.
   */
  get statusChanges() {
    return this.control ? this.control.statusChanges : null;
  }
  /**
   * @description
   * Returns a multicasting observable of value changes for the control that emits every time the
   * value of the control changes in the UI or programmatically.
   * If the control is not present, null is returned.
   */
  get valueChanges() {
    return this.control ? this.control.valueChanges : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return null;
  }
  /**
   * Contains the result of merging synchronous validators into a single validator function
   * (combined using `Validators.compose`).
   */
  _composedValidatorFn;
  /**
   * Contains the result of merging asynchronous validators into a single validator function
   * (combined using `Validators.composeAsync`).
   */
  _composedAsyncValidatorFn;
  /**
   * Set of synchronous validators as they were provided while calling `setValidators` function.
   * @internal
   */
  _rawValidators = [];
  /**
   * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
   * function.
   * @internal
   */
  _rawAsyncValidators = [];
  /**
   * Sets synchronous validators for this directive.
   * @internal
   */
  _setValidators(validators) {
    this._rawValidators = validators || [];
    this._composedValidatorFn = composeValidators(this._rawValidators);
  }
  /**
   * Sets asynchronous validators for this directive.
   * @internal
   */
  _setAsyncValidators(validators) {
    this._rawAsyncValidators = validators || [];
    this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
  }
  /**
   * @description
   * Synchronous validator function composed of all the synchronous validators registered with this
   * directive.
   */
  get validator() {
    return this._composedValidatorFn || null;
  }
  /**
   * @description
   * Asynchronous validator function composed of all the asynchronous validators registered with
   * this directive.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn || null;
  }
  /*
   * The set of callbacks to be invoked when directive instance is being destroyed.
   */
  _onDestroyCallbacks = [];
  /**
   * Internal function to register callbacks that should be invoked
   * when directive instance is being destroyed.
   * @internal
   */
  _registerOnDestroy(fn) {
    this._onDestroyCallbacks.push(fn);
  }
  /**
   * Internal function to invoke all registered "on destroy" callbacks.
   * Note: calling this function also clears the list of callbacks.
   * @internal
   */
  _invokeOnDestroyCallbacks() {
    this._onDestroyCallbacks.forEach((fn) => fn());
    this._onDestroyCallbacks = [];
  }
  /**
   * @description
   * Resets the control with the provided value if the control is present.
   */
  reset(value = void 0) {
    if (this.control) this.control.reset(value);
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```ts
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return this.control ? this.control.hasError(errorCode, path) : false;
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```ts
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    return this.control ? this.control.getError(errorCode, path) : null;
  }
};
var ControlContainer = class extends AbstractControlDirective {
  /**
   * @description
   * The name for the control
   */
  name;
  /**
   * @description
   * The top-level form directive for the control.
   */
  get formDirective() {
    return null;
  }
  /**
   * @description
   * The path to this group.
   */
  get path() {
    return null;
  }
};
var NgControl = class extends AbstractControlDirective {
  /**
   * @description
   * The parent form for the control.
   *
   * @internal
   */
  _parent = null;
  /**
   * @description
   * The name for the control
   */
  name = null;
  /**
   * @description
   * The value accessor for the control
   */
  valueAccessor = null;
};
var AbstractControlStatus = class {
  _cd;
  constructor(cd) {
    this._cd = cd;
  }
  get isTouched() {
    this._cd?.control?._touched?.();
    return !!this._cd?.control?.touched;
  }
  get isUntouched() {
    return !!this._cd?.control?.untouched;
  }
  get isPristine() {
    this._cd?.control?._pristine?.();
    return !!this._cd?.control?.pristine;
  }
  get isDirty() {
    return !!this._cd?.control?.dirty;
  }
  get isValid() {
    this._cd?.control?._status?.();
    return !!this._cd?.control?.valid;
  }
  get isInvalid() {
    return !!this._cd?.control?.invalid;
  }
  get isPending() {
    return !!this._cd?.control?.pending;
  }
  get isSubmitted() {
    this._cd?._submitted?.();
    return !!this._cd?.submitted;
  }
};
var ngControlStatusHost = {
  "[class.ng-untouched]": "isUntouched",
  "[class.ng-touched]": "isTouched",
  "[class.ng-pristine]": "isPristine",
  "[class.ng-dirty]": "isDirty",
  "[class.ng-valid]": "isValid",
  "[class.ng-invalid]": "isInvalid",
  "[class.ng-pending]": "isPending"
};
var ngGroupStatusHost = __spreadProps(__spreadValues({}, ngControlStatusHost), {
  "[class.ng-submitted]": "isSubmitted"
});
var NgControlStatus = class _NgControlStatus extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatus_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatus)(\u0275\u0275directiveInject(NgControl, 2));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatus,
    selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
    hostVars: 14,
    hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatus, [{
    type: Directive,
    args: [{
      selector: "[formControlName],[ngModel],[formControl]",
      host: ngControlStatusHost,
      standalone: false
    }]
  }], () => [{
    type: NgControl,
    decorators: [{
      type: Self
    }]
  }], null);
})();
var NgControlStatusGroup = class _NgControlStatusGroup extends AbstractControlStatus {
  constructor(cd) {
    super(cd);
  }
  static \u0275fac = function NgControlStatusGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgControlStatusGroup)(\u0275\u0275directiveInject(ControlContainer, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgControlStatusGroup,
    selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
    hostVars: 16,
    hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ng-untouched", ctx.isUntouched)("ng-touched", ctx.isTouched)("ng-pristine", ctx.isPristine)("ng-dirty", ctx.isDirty)("ng-valid", ctx.isValid)("ng-invalid", ctx.isInvalid)("ng-pending", ctx.isPending)("ng-submitted", ctx.isSubmitted);
      }
    },
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgControlStatusGroup, [{
    type: Directive,
    args: [{
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]",
      host: ngGroupStatusHost,
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], null);
})();
var formControlNameExample = `
  <div [formGroup]="myGroup">
    <input formControlName="firstName">
  </div>

  In your class:

  this.myGroup = new FormGroup({
      firstName: new FormControl()
  });`;
var formGroupNameExample = `
  <div [formGroup]="myGroup">
      <div formGroupName="person">
        <input formControlName="firstName">
      </div>
  </div>

  In your class:

  this.myGroup = new FormGroup({
      person: new FormGroup({ firstName: new FormControl() })
  });`;
var formArrayNameExample = `
  <div [formGroup]="myGroup">
    <div formArrayName="cities">
      <div *ngFor="let city of cityArray.controls; index as i">
        <input [formControlName]="i">
      </div>
    </div>
  </div>

  In your class:

  this.cityArray = new FormArray([new FormControl('SF')]);
  this.myGroup = new FormGroup({
    cities: this.cityArray
  });`;
var ngModelGroupExample = `
  <form>
      <div ngModelGroup="person">
        <input [(ngModel)]="person.name" name="firstName">
      </div>
  </form>`;
var ngModelWithFormGroupExample = `
  <div [formGroup]="myGroup">
      <input formControlName="firstName">
      <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
  </div>
`;
function controlParentException(nameOrIndex) {
  return new RuntimeError(1050, `formControlName must be used with a parent formGroup directive. You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      ${describeFormControl(nameOrIndex)}

    Example:

    ${formControlNameExample}`);
}
function describeFormControl(nameOrIndex) {
  if (nameOrIndex == null || nameOrIndex === "") {
    return "";
  }
  const valueType = typeof nameOrIndex === "string" ? "name" : "index";
  return `Affected Form Control ${valueType}: "${nameOrIndex}"`;
}
function ngModelGroupException() {
  return new RuntimeError(1051, `formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents
      that also have a "form" prefix: formGroupName, formArrayName, or formGroup.

      Option 1:  Update the parent to be formGroupName (reactive form strategy)

      ${formGroupNameExample}

      Option 2: Use ngModel instead of formControlName (template-driven strategy)

      ${ngModelGroupExample}`);
}
function missingFormException() {
  return new RuntimeError(1052, `formGroup expects a FormGroup instance. Please pass one in.

      Example:

      ${formControlNameExample}`);
}
function groupParentException() {
  return new RuntimeError(1053, `formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup
    directive and pass it an existing FormGroup instance (you can create one in your class).

    Example:

    ${formGroupNameExample}`);
}
function arrayParentException() {
  return new RuntimeError(1054, `formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup
      directive and pass it an existing FormGroup instance (you can create one in your class).

      Example:

      ${formArrayNameExample}`);
}
var disabledAttrWarning = `
  It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true
  when you set up this control in your component class, the disabled attribute will actually be set in the DOM for
  you. We recommend using this approach to avoid 'changed after checked' errors.

  Example:
  // Specify the \`disabled\` property at control creation time:
  form = new FormGroup({
    first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),
    last: new FormControl('Drew', Validators.required)
  });

  // Controls can also be enabled/disabled after creation:
  form.get('first')?.enable();
  form.get('last')?.disable();
`;
var asyncValidatorsDroppedWithOptsWarning = `
  It looks like you're constructing using a FormControl with both an options argument and an
  async validators argument. Mixing these arguments will cause your async validators to be dropped.
  You should either put all your validators in the options object, or in separate validators
  arguments. For example:

  // Using validators arguments
  fc = new FormControl(42, Validators.required, myAsyncValidator);

  // Using AbstractControlOptions
  fc = new FormControl(42, {validators: Validators.required, asyncValidators: myAV});

  // Do NOT mix them: async validators will be dropped!
  fc = new FormControl(42, {validators: Validators.required}, /* Oops! */ myAsyncValidator);
`;
function ngModelWarning(directiveName) {
  return `
  It looks like you're using ngModel on the same form field as ${directiveName}.
  Support for using the ngModel input property and ngModelChange event with
  reactive form directives has been deprecated in Angular v6 and will be removed
  in a future version of Angular.

  For more information on this, see our API docs here:
  https://angular.io/api/forms/${directiveName === "formControl" ? "FormControlDirective" : "FormControlName"}#use-with-ngmodel
  `;
}
function describeKey(isFormGroup, key) {
  return isFormGroup ? `with name: '${key}'` : `at index: ${key}`;
}
function noControlsError(isFormGroup) {
  return `
    There are no form controls registered with this ${isFormGroup ? "group" : "array"} yet. If you're using ngModel,
    you may want to check next tick (e.g. use setTimeout).
  `;
}
function missingControlError(isFormGroup, key) {
  return `Cannot find form control ${describeKey(isFormGroup, key)}`;
}
function missingControlValueError(isFormGroup, key) {
  return `Must supply a value for form control ${describeKey(isFormGroup, key)}`;
}
var VALID = "VALID";
var INVALID = "INVALID";
var PENDING = "PENDING";
var DISABLED = "DISABLED";
var ControlEvent = class {
};
var ValueChangeEvent = class extends ControlEvent {
  value;
  source;
  constructor(value, source) {
    super();
    this.value = value;
    this.source = source;
  }
};
var PristineChangeEvent = class extends ControlEvent {
  pristine;
  source;
  constructor(pristine, source) {
    super();
    this.pristine = pristine;
    this.source = source;
  }
};
var TouchedChangeEvent = class extends ControlEvent {
  touched;
  source;
  constructor(touched, source) {
    super();
    this.touched = touched;
    this.source = source;
  }
};
var StatusChangeEvent = class extends ControlEvent {
  status;
  source;
  constructor(status, source) {
    super();
    this.status = status;
    this.source = source;
  }
};
var FormSubmittedEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
var FormResetEvent = class extends ControlEvent {
  source;
  constructor(source) {
    super();
    this.source = source;
  }
};
function pickValidators(validatorOrOpts) {
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
}
function coerceToValidator(validator) {
  return Array.isArray(validator) ? composeValidators(validator) : validator || null;
}
function pickAsyncValidators(asyncValidator, validatorOrOpts) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (isOptionsObj(validatorOrOpts) && asyncValidator) {
      console.warn(asyncValidatorsDroppedWithOptsWarning);
    }
  }
  return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
}
function coerceToAsyncValidator(asyncValidator) {
  return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
}
function isOptionsObj(validatorOrOpts) {
  return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === "object";
}
function assertControlPresent(parent, isGroup, key) {
  const controls = parent.controls;
  const collection = isGroup ? Object.keys(controls) : controls;
  if (!collection.length) {
    throw new RuntimeError(1e3, typeof ngDevMode === "undefined" || ngDevMode ? noControlsError(isGroup) : "");
  }
  if (!controls[key]) {
    throw new RuntimeError(1001, typeof ngDevMode === "undefined" || ngDevMode ? missingControlError(isGroup, key) : "");
  }
}
function assertAllValuesPresent(control, isGroup, value) {
  control._forEachChild((_, key) => {
    if (value[key] === void 0) {
      throw new RuntimeError(1002, typeof ngDevMode === "undefined" || ngDevMode ? missingControlValueError(isGroup, key) : "");
    }
  });
}
var AbstractControl = class {
  /** @internal */
  _pendingDirty = false;
  /**
   * Indicates that a control has its own pending asynchronous validation in progress.
   * It also stores if the control should emit events when the validation status changes.
   *
   * @internal
   */
  _hasOwnPendingAsyncValidator = null;
  /** @internal */
  _pendingTouched = false;
  /** @internal */
  _onCollectionChange = () => {
  };
  /** @internal */
  _updateOn;
  _parent = null;
  _asyncValidationSubscription;
  /**
   * Contains the result of merging synchronous validators into a single validator function
   * (combined using `Validators.compose`).
   *
   * @internal
   */
  _composedValidatorFn;
  /**
   * Contains the result of merging asynchronous validators into a single validator function
   * (combined using `Validators.composeAsync`).
   *
   * @internal
   */
  _composedAsyncValidatorFn;
  /**
   * Synchronous validators as they were provided:
   *  - in `AbstractControl` constructor
   *  - as an argument while calling `setValidators` function
   *  - while calling the setter on the `validator` field (e.g. `control.validator = validatorFn`)
   *
   * @internal
   */
  _rawValidators;
  /**
   * Asynchronous validators as they were provided:
   *  - in `AbstractControl` constructor
   *  - as an argument while calling `setAsyncValidators` function
   *  - while calling the setter on the `asyncValidator` field (e.g. `control.asyncValidator =
   * asyncValidatorFn`)
   *
   * @internal
   */
  _rawAsyncValidators;
  /**
   * The current value of the control.
   *
   * * For a `FormControl`, the current value.
   * * For an enabled `FormGroup`, the values of enabled controls as an object
   * with a key-value pair for each member of the group.
   * * For a disabled `FormGroup`, the values of all controls as an object
   * with a key-value pair for each member of the group.
   * * For a `FormArray`, the values of enabled controls as an array.
   *
   */
  value;
  /**
   * Initialize the AbstractControl instance.
   *
   * @param validators The function or array of functions that is used to determine the validity of
   *     this control synchronously.
   * @param asyncValidators The function or array of functions that is used to determine validity of
   *     this control asynchronously.
   */
  constructor(validators, asyncValidators) {
    this._assignValidators(validators);
    this._assignAsyncValidators(asyncValidators);
  }
  /**
   * Returns the function that is used to determine the validity of this control synchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get validator() {
    return this._composedValidatorFn;
  }
  set validator(validatorFn) {
    this._rawValidators = this._composedValidatorFn = validatorFn;
  }
  /**
   * Returns the function that is used to determine the validity of this control asynchronously.
   * If multiple validators have been added, this will be a single composed function.
   * See `Validators.compose()` for additional information.
   */
  get asyncValidator() {
    return this._composedAsyncValidatorFn;
  }
  set asyncValidator(asyncValidatorFn) {
    this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
  }
  /**
   * The parent control.
   */
  get parent() {
    return this._parent;
  }
  /**
   * The validation status of the control.
   *
   * @see {@link FormControlStatus}
   *
   * These status values are mutually exclusive, so a control cannot be
   * both valid AND invalid or invalid AND disabled.
   */
  get status() {
    return untracked(this.statusReactive);
  }
  set status(v) {
    untracked(() => this.statusReactive.set(v));
  }
  /** @internal */
  _status = computed(() => this.statusReactive());
  statusReactive = signal(void 0);
  /**
   * A control is `valid` when its `status` is `VALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control has passed all of its validation tests,
   * false otherwise.
   */
  get valid() {
    return this.status === VALID;
  }
  /**
   * A control is `invalid` when its `status` is `INVALID`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control has failed one or more of its validation checks,
   * false otherwise.
   */
  get invalid() {
    return this.status === INVALID;
  }
  /**
   * A control is `pending` when its `status` is `PENDING`.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if this control is in the process of conducting a validation check,
   * false otherwise.
   */
  get pending() {
    return this.status == PENDING;
  }
  /**
   * A control is `disabled` when its `status` is `DISABLED`.
   *
   * Disabled controls are exempt from validation checks and
   * are not included in the aggregate value of their ancestor
   * controls.
   *
   * @see {@link AbstractControl.status}
   *
   * @returns True if the control is disabled, false otherwise.
   */
  get disabled() {
    return this.status === DISABLED;
  }
  /**
   * A control is `enabled` as long as its `status` is not `DISABLED`.
   *
   * @returns True if the control has any status other than 'DISABLED',
   * false if the status is 'DISABLED'.
   *
   * @see {@link AbstractControl.status}
   *
   */
  get enabled() {
    return this.status !== DISABLED;
  }
  /**
   * An object containing any errors generated by failing validation,
   * or null if there are no errors.
   */
  errors;
  /**
   * A control is `pristine` if the user has not yet changed
   * the value in the UI.
   *
   * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get pristine() {
    return untracked(this.pristineReactive);
  }
  set pristine(v) {
    untracked(() => this.pristineReactive.set(v));
  }
  /** @internal */
  _pristine = computed(() => this.pristineReactive());
  pristineReactive = signal(true);
  /**
   * A control is `dirty` if the user has changed the value
   * in the UI.
   *
   * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
   * Programmatic changes to a control's value do not mark it dirty.
   */
  get dirty() {
    return !this.pristine;
  }
  /**
   * True if the control is marked as `touched`.
   *
   * A control is marked `touched` once the user has triggered
   * a `blur` event on it.
   */
  get touched() {
    return untracked(this.touchedReactive);
  }
  set touched(v) {
    untracked(() => this.touchedReactive.set(v));
  }
  /** @internal */
  _touched = computed(() => this.touchedReactive());
  touchedReactive = signal(false);
  /**
   * True if the control has not been marked as touched
   *
   * A control is `untouched` if the user has not yet triggered
   * a `blur` event on it.
   */
  get untouched() {
    return !this.touched;
  }
  /**
   * Exposed as observable, see below.
   *
   * @internal
   */
  _events = new Subject();
  /**
   * A multicasting observable that emits an event every time the state of the control changes.
   * It emits for value, status, pristine or touched changes.
   *
   * **Note**: On value change, the emit happens right after a value of this control is updated. The
   * value of a parent control (for example if this FormControl is a part of a FormGroup) is updated
   * later, so accessing a value of a parent control (using the `value` property) from the callback
   * of this event might result in getting a value that has not been updated yet. Subscribe to the
   * `events` of the parent control instead.
   * For other event types, the events are emitted after the parent control has been updated.
   *
   */
  events = this._events.asObservable();
  /**
   * A multicasting observable that emits an event every time the value of the control changes, in
   * the UI or programmatically. It also emits an event each time you call enable() or disable()
   * without passing along {emitEvent: false} as a function argument.
   *
   * **Note**: the emit happens right after a value of this control is updated. The value of a
   * parent control (for example if this FormControl is a part of a FormGroup) is updated later, so
   * accessing a value of a parent control (using the `value` property) from the callback of this
   * event might result in getting a value that has not been updated yet. Subscribe to the
   * `valueChanges` event of the parent control instead.
   */
  valueChanges;
  /**
   * A multicasting observable that emits an event every time the validation `status` of the control
   * recalculates.
   *
   * @see {@link FormControlStatus}
   * @see {@link AbstractControl.status}
   */
  statusChanges;
  /**
   * Reports the update strategy of the `AbstractControl` (meaning
   * the event on which the control updates itself).
   * Possible values: `'change'` | `'blur'` | `'submit'`
   * Default value: `'change'`
   */
  get updateOn() {
    return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : "change";
  }
  /**
   * Sets the synchronous validators that are active on this control.  Calling
   * this overwrites any existing synchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addValidators()` method instead.
   */
  setValidators(validators) {
    this._assignValidators(validators);
  }
  /**
   * Sets the asynchronous validators that are active on this control. Calling this
   * overwrites any existing asynchronous validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * If you want to add a new validator without affecting existing ones, consider
   * using `addAsyncValidators()` method instead.
   */
  setAsyncValidators(validators) {
    this._assignAsyncValidators(validators);
  }
  /**
   * Add a synchronous validator or validators to this control, without affecting other validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect. If duplicate validator functions
   * are present in the `validators` array, only the first instance would be added to a form
   * control.
   *
   * @param validators The new validator function or functions to add to this control.
   */
  addValidators(validators) {
    this.setValidators(addValidators(validators, this._rawValidators));
  }
  /**
   * Add an asynchronous validator or validators to this control, without affecting other
   * validators.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * Adding a validator that already exists will have no effect.
   *
   * @param validators The new asynchronous validator function or functions to add to this control.
   */
  addAsyncValidators(validators) {
    this.setAsyncValidators(addValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Remove a synchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found,
   * it is ignored.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<string | null>('', Validators.required);
   * ctrl.removeValidators(Validators.required);
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<string | null>('', minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   *
   * ctrl.removeValidators(minValidator);
   * ```
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The validator or validators to remove.
   */
  removeValidators(validators) {
    this.setValidators(removeValidators(validators, this._rawValidators));
  }
  /**
   * Remove an asynchronous validator from this control, without affecting other validators.
   * Validators are compared by function reference; you must pass a reference to the exact same
   * validator function as the one that was originally set. If a provided validator is not found, it
   * is ignored.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   * @param validators The asynchronous validator or validators to remove.
   */
  removeAsyncValidators(validators) {
    this.setAsyncValidators(removeValidators(validators, this._rawAsyncValidators));
  }
  /**
   * Check whether a synchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @usageNotes
   *
   * ### Reference to a ValidatorFn
   *
   * ```
   * // Reference to the RequiredValidator
   * const ctrl = new FormControl<number | null>(0, Validators.required);
   * expect(ctrl.hasValidator(Validators.required)).toEqual(true)
   *
   * // Reference to anonymous function inside MinValidator
   * const minValidator = Validators.min(3);
   * const ctrl = new FormControl<number | null>(0, minValidator);
   * expect(ctrl.hasValidator(minValidator)).toEqual(true)
   * expect(ctrl.hasValidator(Validators.min(3))).toEqual(false)
   * ```
   *
   * @param validator The validator to check for presence. Compared by function reference.
   * @returns Whether the provided validator was found on this control.
   */
  hasValidator(validator) {
    return hasValidator(this._rawValidators, validator);
  }
  /**
   * Check whether an asynchronous validator function is present on this control. The provided
   * validator must be a reference to the exact same function that was provided.
   *
   * @param validator The asynchronous validator to check for presence. Compared by function
   *     reference.
   * @returns Whether the provided asynchronous validator was found on this control.
   */
  hasAsyncValidator(validator) {
    return hasValidator(this._rawAsyncValidators, validator);
  }
  /**
   * Empties out the synchronous validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearValidators() {
    this.validator = null;
  }
  /**
   * Empties out the async validator list.
   *
   * When you add or remove a validator at run time, you must call
   * `updateValueAndValidity()` for the new validation to take effect.
   *
   */
  clearAsyncValidators() {
    this.asyncValidator = null;
  }
  markAsTouched(opts = {}) {
    const changed = this.touched === false;
    this.touched = true;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsTouched(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(true, sourceControl));
    }
  }
  /**
   * Marks the control and all its descendant controls as `touched`.
   * @see {@link markAsTouched()}
   *
   * @param opts Configuration options that determine how the control propagates changes
   * and emits events after marking is applied.
   * * `emitEvent`: When true or not supplied (the default), the `events`
   * observable emits a `TouchedChangeEvent` with the `touched` property being `true`.
   * When false, no events are emitted.
   */
  markAllAsTouched(opts = {}) {
    this.markAsTouched({
      onlySelf: true,
      emitEvent: opts.emitEvent,
      sourceControl: this
    });
    this._forEachChild((control) => control.markAllAsTouched(opts));
  }
  markAsUntouched(opts = {}) {
    const changed = this.touched === true;
    this.touched = false;
    this._pendingTouched = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsUntouched({
        onlySelf: true,
        emitEvent: opts.emitEvent,
        sourceControl
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new TouchedChangeEvent(false, sourceControl));
    }
  }
  markAsDirty(opts = {}) {
    const changed = this.pristine === true;
    this.pristine = false;
    const sourceControl = opts.sourceControl ?? this;
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsDirty(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(false, sourceControl));
    }
  }
  markAsPristine(opts = {}) {
    const changed = this.pristine === false;
    this.pristine = true;
    this._pendingDirty = false;
    const sourceControl = opts.sourceControl ?? this;
    this._forEachChild((control) => {
      control.markAsPristine({
        onlySelf: true,
        emitEvent: opts.emitEvent
      });
    });
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, sourceControl);
    }
    if (changed && opts.emitEvent !== false) {
      this._events.next(new PristineChangeEvent(true, sourceControl));
    }
  }
  markAsPending(opts = {}) {
    this.status = PENDING;
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.markAsPending(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  disable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = DISABLED;
    this.errors = null;
    this._forEachChild((control) => {
      control.disable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this._updateValue();
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(true));
  }
  /**
   * Enables the control. This means the control is included in validation checks and
   * the aggregate value of its parent. Its status recalculates based on its value and
   * its validators.
   *
   * By default, if the control has children, all children are enabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configure options that control how the control propagates changes and
   * emits events when marked as untouched
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), the `statusChanges`,
   * `valueChanges` and `events`
   * observables emit events with the latest status and value when the control is enabled.
   * When false, no events are emitted.
   */
  enable(opts = {}) {
    const skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);
    this.status = VALID;
    this._forEachChild((control) => {
      control.enable(__spreadProps(__spreadValues({}, opts), {
        onlySelf: true
      }));
    });
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
    this._updateAncestors(__spreadProps(__spreadValues({}, opts), {
      skipPristineCheck
    }), this);
    this._onDisabledChange.forEach((changeFn) => changeFn(false));
  }
  _updateAncestors(opts, sourceControl) {
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(opts);
      if (!opts.skipPristineCheck) {
        this._parent._updatePristine({}, sourceControl);
      }
      this._parent._updateTouched({}, sourceControl);
    }
  }
  /**
   * Sets the parent of the control
   *
   * @param parent The new parent.
   */
  setParent(parent) {
    this._parent = parent;
  }
  /**
   * The raw value of this control. For most control implementations, the raw value will include
   * disabled children.
   */
  getRawValue() {
    return this.value;
  }
  updateValueAndValidity(opts = {}) {
    this._setInitialStatus();
    this._updateValue();
    if (this.enabled) {
      const shouldHaveEmitted = this._cancelExistingSubscription();
      this.errors = this._runValidator();
      this.status = this._calculateStatus();
      if (this.status === VALID || this.status === PENDING) {
        this._runAsyncValidator(shouldHaveEmitted, opts.emitEvent);
      }
    }
    const sourceControl = opts.sourceControl ?? this;
    if (opts.emitEvent !== false) {
      this._events.next(new ValueChangeEvent(this.value, sourceControl));
      this._events.next(new StatusChangeEvent(this.status, sourceControl));
      this.valueChanges.emit(this.value);
      this.statusChanges.emit(this.status);
    }
    if (this._parent && !opts.onlySelf) {
      this._parent.updateValueAndValidity(__spreadProps(__spreadValues({}, opts), {
        sourceControl
      }));
    }
  }
  /** @internal */
  _updateTreeValidity(opts = {
    emitEvent: true
  }) {
    this._forEachChild((ctrl) => ctrl._updateTreeValidity(opts));
    this.updateValueAndValidity({
      onlySelf: true,
      emitEvent: opts.emitEvent
    });
  }
  _setInitialStatus() {
    this.status = this._allControlsDisabled() ? DISABLED : VALID;
  }
  _runValidator() {
    return this.validator ? this.validator(this) : null;
  }
  _runAsyncValidator(shouldHaveEmitted, emitEvent) {
    if (this.asyncValidator) {
      this.status = PENDING;
      this._hasOwnPendingAsyncValidator = {
        emitEvent: emitEvent !== false
      };
      const obs = toObservable(this.asyncValidator(this));
      this._asyncValidationSubscription = obs.subscribe((errors) => {
        this._hasOwnPendingAsyncValidator = null;
        this.setErrors(errors, {
          emitEvent,
          shouldHaveEmitted
        });
      });
    }
  }
  _cancelExistingSubscription() {
    if (this._asyncValidationSubscription) {
      this._asyncValidationSubscription.unsubscribe();
      const shouldHaveEmitted = this._hasOwnPendingAsyncValidator?.emitEvent ?? false;
      this._hasOwnPendingAsyncValidator = null;
      return shouldHaveEmitted;
    }
    return false;
  }
  setErrors(errors, opts = {}) {
    this.errors = errors;
    this._updateControlsErrors(opts.emitEvent !== false, this, opts.shouldHaveEmitted);
  }
  /**
   * Retrieves a child control given the control's name or path.
   *
   * @param path A dot-delimited string or array of string/number values that define the path to the
   * control. If a string is provided, passing it as a string literal will result in improved type
   * information. Likewise, if an array is provided, passing it `as const` will cause improved type
   * information to be available.
   *
   * @usageNotes
   * ### Retrieve a nested control
   *
   * For example, to get a `name` control nested within a `person` sub-group:
   *
   * * `this.form.get('person.name');`
   *
   * -OR-
   *
   * * `this.form.get(['person', 'name'] as const);` // `as const` gives improved typings
   *
   * ### Retrieve a control in a FormArray
   *
   * When accessing an element inside a FormArray, you can use an element index.
   * For example, to get a `price` control from the first element in an `items` array you can use:
   *
   * * `this.form.get('items.0.price');`
   *
   * -OR-
   *
   * * `this.form.get(['items', 0, 'price']);`
   */
  get(path) {
    let currPath = path;
    if (currPath == null) return null;
    if (!Array.isArray(currPath)) currPath = currPath.split(".");
    if (currPath.length === 0) return null;
    return currPath.reduce((control, name) => control && control._find(name), this);
  }
  /**
   * @description
   * Reports error data for the control with the given path.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```ts
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * @returns error data for that particular error. If the control or error is not present,
   * null is returned.
   */
  getError(errorCode, path) {
    const control = path ? this.get(path) : this;
    return control && control.errors ? control.errors[errorCode] : null;
  }
  /**
   * @description
   * Reports whether the control with the given path has the error specified.
   *
   * @param errorCode The code of the error to check
   * @param path A list of control names that designates how to move from the current control
   * to the control that should be queried for errors.
   *
   * @usageNotes
   * For example, for the following `FormGroup`:
   *
   * ```ts
   * form = new FormGroup({
   *   address: new FormGroup({ street: new FormControl() })
   * });
   * ```
   *
   * The path to the 'street' control from the root form would be 'address' -> 'street'.
   *
   * It can be provided to this method in one of two formats:
   *
   * 1. An array of string control names, e.g. `['address', 'street']`
   * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
   *
   * If no path is given, this method checks for the error on the current control.
   *
   * @returns whether the given error is present in the control at the given path.
   *
   * If the control is not present, false is returned.
   */
  hasError(errorCode, path) {
    return !!this.getError(errorCode, path);
  }
  /**
   * Retrieves the top-level ancestor of this control.
   */
  get root() {
    let x = this;
    while (x._parent) {
      x = x._parent;
    }
    return x;
  }
  /** @internal */
  _updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted) {
    this.status = this._calculateStatus();
    if (emitEvent) {
      this.statusChanges.emit(this.status);
    }
    if (emitEvent || shouldHaveEmitted) {
      this._events.next(new StatusChangeEvent(this.status, changedControl));
    }
    if (this._parent) {
      this._parent._updateControlsErrors(emitEvent, changedControl, shouldHaveEmitted);
    }
  }
  /** @internal */
  _initObservables() {
    this.valueChanges = new EventEmitter();
    this.statusChanges = new EventEmitter();
  }
  _calculateStatus() {
    if (this._allControlsDisabled()) return DISABLED;
    if (this.errors) return INVALID;
    if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
    if (this._anyControlsHaveStatus(INVALID)) return INVALID;
    return VALID;
  }
  /** @internal */
  _anyControlsHaveStatus(status) {
    return this._anyControls((control) => control.status === status);
  }
  /** @internal */
  _anyControlsDirty() {
    return this._anyControls((control) => control.dirty);
  }
  /** @internal */
  _anyControlsTouched() {
    return this._anyControls((control) => control.touched);
  }
  /** @internal */
  _updatePristine(opts, changedControl) {
    const newPristine = !this._anyControlsDirty();
    const changed = this.pristine !== newPristine;
    this.pristine = newPristine;
    if (this._parent && !opts.onlySelf) {
      this._parent._updatePristine(opts, changedControl);
    }
    if (changed) {
      this._events.next(new PristineChangeEvent(this.pristine, changedControl));
    }
  }
  /** @internal */
  _updateTouched(opts = {}, changedControl) {
    this.touched = this._anyControlsTouched();
    this._events.next(new TouchedChangeEvent(this.touched, changedControl));
    if (this._parent && !opts.onlySelf) {
      this._parent._updateTouched(opts, changedControl);
    }
  }
  /** @internal */
  _onDisabledChange = [];
  /** @internal */
  _registerOnCollectionChange(fn) {
    this._onCollectionChange = fn;
  }
  /** @internal */
  _setUpdateStrategy(opts) {
    if (isOptionsObj(opts) && opts.updateOn != null) {
      this._updateOn = opts.updateOn;
    }
  }
  /**
   * Check to see if parent has been marked artificially dirty.
   *
   * @internal
   */
  _parentMarkedDirty(onlySelf) {
    const parentDirty = this._parent && this._parent.dirty;
    return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
  }
  /** @internal */
  _find(name) {
    return null;
  }
  /**
   * Internal implementation of the `setValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignValidators(validators) {
    this._rawValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedValidatorFn = coerceToValidator(this._rawValidators);
  }
  /**
   * Internal implementation of the `setAsyncValidators` method. Needs to be separated out into a
   * different method, because it is called in the constructor and it can break cases where
   * a control is extended.
   */
  _assignAsyncValidators(validators) {
    this._rawAsyncValidators = Array.isArray(validators) ? validators.slice() : validators;
    this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
  }
};
var FormGroup = class extends AbstractControl {
  /**
   * Creates a new `FormGroup` instance.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    (typeof ngDevMode === "undefined" || ngDevMode) && validateFormGroupControls(controls);
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
      // so we set `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  registerControl(name, control) {
    if (this.controls[name]) return this.controls[name];
    this.controls[name] = control;
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
    return control;
  }
  addControl(name, control, options = {}) {
    this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Remove a control from this group. In a strongly-typed group, required controls cannot be
   * removed.
   *
   * This method also updates the value and validity of the control.
   *
   * @param name The control name to remove from the collection
   * @param options Specifies whether this FormGroup instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeControl(name, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  setControl(name, control, options = {}) {
    if (this.controls[name]) this.controls[name]._registerOnCollectionChange(() => {
    });
    delete this.controls[name];
    if (control) this.registerControl(name, control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  contains(controlName) {
    return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
  }
  /**
   * Sets the value of the `FormGroup`. It accepts an object that matches
   * the structure of the group, with control names as keys.
   *
   * @usageNotes
   * ### Set the complete value for the form group
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl(),
   *   last: new FormControl()
   * });
   *
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.setValue({first: 'Nancy', last: 'Drew'});
   * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
   * ```
   *
   * @throws When strict checks fail, such as setting the value of a control
   * that doesn't exist or if you exclude a value of a control that does exist.
   *
   * @param value The new value for the control that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes
   * and emits events after the value changes.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, true, value);
    Object.keys(value).forEach((name) => {
      assertControlPresent(this, true, name);
      this.controls[name].setValue(value[name], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormGroup`. It accepts an object with control
   * names as keys, and does its best to match the values to the correct controls
   * in the group.
   *
   * It accepts both super-sets and sub-sets of the group without throwing an error.
   *
   * @usageNotes
   * ### Patch the value for a form group
   *
   * ```ts
   * const form = new FormGroup({
   *    first: new FormControl(),
   *    last: new FormControl()
   * });
   * console.log(form.value);   // {first: null, last: null}
   *
   * form.patchValue({first: 'Nancy'});
   * console.log(form.value);   // {first: 'Nancy', last: null}
   * ```
   *
   * @param value The object that matches the structure of the group.
   * @param options Configuration options that determine how the control propagates changes and
   * emits events after the value is patched.
   * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
   * true.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control value
   * is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    Object.keys(value).forEach((name) => {
      const control = this.controls[name];
      if (control) {
        control.patchValue(
          /* Guaranteed to be present, due to the outer forEach. */
          value[name],
          {
            onlySelf: true,
            emitEvent: options.emitEvent
          }
        );
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
   * the value of all descendants to their default values, or null if no defaults were provided.
   *
   * You reset to a specific form state by passing in a map of states
   * that matches the structure of your form, with control names as keys. The state
   * is a standalone value or a form state object with both a value and a disabled
   * status.
   *
   * @param value Resets the control with an initial value,
   * or an object that defines the initial value and disabled state.
   *
   * @param options Configuration options that determine how the control propagates changes
   * and emits events when the group is reset.
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
   * false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   *
   * @usageNotes
   *
   * ### Reset the form group values
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * console.log(form.value);  // {first: 'first name', last: 'last name'}
   *
   * form.reset({ first: 'name', last: 'last name' });
   *
   * console.log(form.value);  // {first: 'name', last: 'last name'}
   * ```
   *
   * ### Reset the form group values and disabled status
   *
   * ```ts
   * const form = new FormGroup({
   *   first: new FormControl('first name'),
   *   last: new FormControl('last name')
   * });
   *
   * form.reset({
   *   first: {value: 'name', disabled: true},
   *   last: 'last'
   * });
   *
   * console.log(form.value);  // {last: 'last'}
   * console.log(form.get('first').status);  // 'DISABLED'
   * ```
   */
  reset(value = {}, options = {}) {
    this._forEachChild((control, name) => {
      control.reset(value ? value[name] : null, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the `FormGroup`, including any disabled controls.
   *
   * Retrieves all values regardless of disabled status.
   */
  getRawValue() {
    return this._reduceChildren({}, (acc, control, name) => {
      acc[name] = control.getRawValue();
      return acc;
    });
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this._reduceChildren(false, (updated, child) => {
      return child._syncPendingControls() ? true : updated;
    });
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    Object.keys(this.controls).forEach((key) => {
      const control = this.controls[key];
      control && cb(control, key);
    });
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => {
      control.setParent(this);
      control._registerOnCollectionChange(this._onCollectionChange);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this._reduceValue();
  }
  /** @internal */
  _anyControls(condition) {
    for (const [controlName, control] of Object.entries(this.controls)) {
      if (this.contains(controlName) && condition(control)) {
        return true;
      }
    }
    return false;
  }
  /** @internal */
  _reduceValue() {
    let acc = {};
    return this._reduceChildren(acc, (acc2, control, name) => {
      if (control.enabled || this.disabled) {
        acc2[name] = control.value;
      }
      return acc2;
    });
  }
  /** @internal */
  _reduceChildren(initValue, fn) {
    let res = initValue;
    this._forEachChild((control, name) => {
      res = fn(res, control, name);
    });
    return res;
  }
  /** @internal */
  _allControlsDisabled() {
    for (const controlName of Object.keys(this.controls)) {
      if (this.controls[controlName].enabled) {
        return false;
      }
    }
    return Object.keys(this.controls).length > 0 || this.disabled;
  }
  /** @internal */
  _find(name) {
    return this.controls.hasOwnProperty(name) ? this.controls[name] : null;
  }
};
function validateFormGroupControls(controls) {
  const invalidKeys = Object.keys(controls).filter((key) => key.includes("."));
  if (invalidKeys.length > 0) {
    console.warn(`FormGroup keys cannot include \`.\`, please replace the keys for: ${invalidKeys.join(",")}.`);
  }
}
var FormRecord = class extends FormGroup {
};
var CALL_SET_DISABLED_STATE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "CallSetDisabledState" : "", {
  providedIn: "root",
  factory: () => setDisabledStateDefault
});
var setDisabledStateDefault = "always";
function controlPath(name, parent) {
  return [...parent.path, name];
}
function setUpControl(control, dir, callSetDisabledState = setDisabledStateDefault) {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (!control) _throwError(dir, "Cannot find control with");
    if (!dir.valueAccessor) _throwMissingValueAccessorError(dir);
  }
  setUpValidators(control, dir);
  dir.valueAccessor.writeValue(control.value);
  if (control.disabled || callSetDisabledState === "always") {
    dir.valueAccessor.setDisabledState?.(control.disabled);
  }
  setUpViewChangePipeline(control, dir);
  setUpModelChangePipeline(control, dir);
  setUpBlurPipeline(control, dir);
  setUpDisabledChangeHandler(control, dir);
}
function cleanUpControl(control, dir, validateControlPresenceOnChange = true) {
  const noop = () => {
    if (validateControlPresenceOnChange && (typeof ngDevMode === "undefined" || ngDevMode)) {
      _noControlError(dir);
    }
  };
  if (dir.valueAccessor) {
    dir.valueAccessor.registerOnChange(noop);
    dir.valueAccessor.registerOnTouched(noop);
  }
  cleanUpValidators(control, dir);
  if (control) {
    dir._invokeOnDestroyCallbacks();
    control._registerOnCollectionChange(() => {
    });
  }
}
function registerOnValidatorChange(validators, onChange) {
  validators.forEach((validator) => {
    if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
  });
}
function setUpDisabledChangeHandler(control, dir) {
  if (dir.valueAccessor.setDisabledState) {
    const onDisabledChange = (isDisabled) => {
      dir.valueAccessor.setDisabledState(isDisabled);
    };
    control.registerOnDisabledChange(onDisabledChange);
    dir._registerOnDestroy(() => {
      control._unregisterOnDisabledChange(onDisabledChange);
    });
  }
}
function setUpValidators(control, dir) {
  const validators = getControlValidators(control);
  if (dir.validator !== null) {
    control.setValidators(mergeValidators(validators, dir.validator));
  } else if (typeof validators === "function") {
    control.setValidators([validators]);
  }
  const asyncValidators = getControlAsyncValidators(control);
  if (dir.asyncValidator !== null) {
    control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
  } else if (typeof asyncValidators === "function") {
    control.setAsyncValidators([asyncValidators]);
  }
  const onValidatorChange = () => control.updateValueAndValidity();
  registerOnValidatorChange(dir._rawValidators, onValidatorChange);
  registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
}
function cleanUpValidators(control, dir) {
  let isControlUpdated = false;
  if (control !== null) {
    if (dir.validator !== null) {
      const validators = getControlValidators(control);
      if (Array.isArray(validators) && validators.length > 0) {
        const updatedValidators = validators.filter((validator) => validator !== dir.validator);
        if (updatedValidators.length !== validators.length) {
          isControlUpdated = true;
          control.setValidators(updatedValidators);
        }
      }
    }
    if (dir.asyncValidator !== null) {
      const asyncValidators = getControlAsyncValidators(control);
      if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
        const updatedAsyncValidators = asyncValidators.filter((asyncValidator) => asyncValidator !== dir.asyncValidator);
        if (updatedAsyncValidators.length !== asyncValidators.length) {
          isControlUpdated = true;
          control.setAsyncValidators(updatedAsyncValidators);
        }
      }
    }
  }
  const noop = () => {
  };
  registerOnValidatorChange(dir._rawValidators, noop);
  registerOnValidatorChange(dir._rawAsyncValidators, noop);
  return isControlUpdated;
}
function setUpViewChangePipeline(control, dir) {
  dir.valueAccessor.registerOnChange((newValue) => {
    control._pendingValue = newValue;
    control._pendingChange = true;
    control._pendingDirty = true;
    if (control.updateOn === "change") updateControl(control, dir);
  });
}
function setUpBlurPipeline(control, dir) {
  dir.valueAccessor.registerOnTouched(() => {
    control._pendingTouched = true;
    if (control.updateOn === "blur" && control._pendingChange) updateControl(control, dir);
    if (control.updateOn !== "submit") control.markAsTouched();
  });
}
function updateControl(control, dir) {
  if (control._pendingDirty) control.markAsDirty();
  control.setValue(control._pendingValue, {
    emitModelToViewChange: false
  });
  dir.viewToModelUpdate(control._pendingValue);
  control._pendingChange = false;
}
function setUpModelChangePipeline(control, dir) {
  const onChange = (newValue, emitModelEvent) => {
    dir.valueAccessor.writeValue(newValue);
    if (emitModelEvent) dir.viewToModelUpdate(newValue);
  };
  control.registerOnChange(onChange);
  dir._registerOnDestroy(() => {
    control._unregisterOnChange(onChange);
  });
}
function setUpFormContainer(control, dir) {
  if (control == null && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "Cannot find control with");
  setUpValidators(control, dir);
}
function cleanUpFormContainer(control, dir) {
  return cleanUpValidators(control, dir);
}
function _noControlError(dir) {
  return _throwError(dir, "There is no FormControl instance attached to form control element with");
}
function _throwError(dir, message) {
  const messageEnd = _describeControlLocation(dir);
  throw new Error(`${message} ${messageEnd}`);
}
function _describeControlLocation(dir) {
  const path = dir.path;
  if (path && path.length > 1) return `path: '${path.join(" -> ")}'`;
  if (path?.[0]) return `name: '${path}'`;
  return "unspecified name attribute";
}
function _throwMissingValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(-1203, `No value accessor for form control ${loc}.`);
}
function _throwInvalidValueAccessorError(dir) {
  const loc = _describeControlLocation(dir);
  throw new RuntimeError(1200, `Value accessor was not provided as an array for form control with ${loc}. Check that the \`NG_VALUE_ACCESSOR\` token is configured as a \`multi: true\` provider.`);
}
function isPropertyUpdated(changes, viewModel) {
  if (!changes.hasOwnProperty("model")) return false;
  const change = changes["model"];
  if (change.isFirstChange()) return true;
  return !Object.is(viewModel, change.currentValue);
}
function isBuiltInAccessor(valueAccessor) {
  return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
}
function syncPendingControls(form, directives) {
  form._syncPendingControls();
  directives.forEach((dir) => {
    const control = dir.control;
    if (control.updateOn === "submit" && control._pendingChange) {
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }
  });
}
function selectValueAccessor(dir, valueAccessors) {
  if (!valueAccessors) return null;
  if (!Array.isArray(valueAccessors) && (typeof ngDevMode === "undefined" || ngDevMode)) _throwInvalidValueAccessorError(dir);
  let defaultAccessor = void 0;
  let builtinAccessor = void 0;
  let customAccessor = void 0;
  valueAccessors.forEach((v) => {
    if (v.constructor === DefaultValueAccessor) {
      defaultAccessor = v;
    } else if (isBuiltInAccessor(v)) {
      if (builtinAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one built-in value accessor matches form control with");
      builtinAccessor = v;
    } else {
      if (customAccessor && (typeof ngDevMode === "undefined" || ngDevMode)) _throwError(dir, "More than one custom value accessor matches form control with");
      customAccessor = v;
    }
  });
  if (customAccessor) return customAccessor;
  if (builtinAccessor) return builtinAccessor;
  if (defaultAccessor) return defaultAccessor;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    _throwError(dir, "No valid value accessor for form control with");
  }
  return null;
}
function removeListItem$1(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function _ngModelWarning(name, type, instance, warningConfig) {
  if (warningConfig === "never") return;
  if ((warningConfig === null || warningConfig === "once") && !type._ngModelWarningSentOnce || warningConfig === "always" && !instance._ngModelWarningSent) {
    console.warn(ngModelWarning(name));
    type._ngModelWarningSentOnce = true;
    instance._ngModelWarningSent = true;
  }
}
var formDirectiveProvider$1 = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgForm)
};
var resolvedPromise$1 = (() => Promise.resolve())();
var NgForm = class _NgForm extends ControlContainer {
  callSetDisabledState;
  /**
   * @description
   * Returns whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this.submittedReactive);
  }
  /** @internal */
  _submitted = computed(() => this.submittedReactive());
  submittedReactive = signal(false);
  _directives = /* @__PURE__ */ new Set();
  /**
   * @description
   * The `FormGroup` instance created for this form.
   */
  form;
  /**
   * @description
   * Event emitter for the "ngSubmit" event
   */
  ngSubmit = new EventEmitter();
  /**
   * @description
   * Tracks options for the `NgForm` instance.
   *
   * **updateOn**: Sets the default `updateOn` value for all child `NgModels` below it
   * unless explicitly set by a child `NgModel` using `ngModelOptions`). Defaults to 'change'.
   * Possible values: `'change'` | `'blur'` | `'submit'`.
   *
   */
  options;
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
  }
  /** @docs-private */
  ngAfterViewInit() {
    this._setUpdateStrategy();
  }
  /**
   * @description
   * The directive instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * The internal `FormGroup` instance.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it is always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Returns a map of the controls in this group.
   */
  get controls() {
    return this.form.controls;
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `NgModel` directive instance.
   */
  addControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      dir.control = container.registerControl(dir.name, dir.control);
      setUpControl(dir.control, dir, this.callSetDisabledState);
      dir.control.updateValueAndValidity({
        emitEvent: false
      });
      this._directives.add(dir);
    });
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `NgModel` directive.
   *
   * @param dir The `NgModel` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `NgModel` instance from the internal list of directives
   *
   * @param dir The `NgModel` directive instance.
   */
  removeControl(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
      this._directives.delete(dir);
    });
  }
  /**
   * @description
   * Adds a new `NgModelGroup` directive instance to the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  addFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      const group = new FormGroup({});
      setUpFormContainer(group, dir);
      container.registerControl(dir.name, group);
      group.updateValueAndValidity({
        emitEvent: false
      });
    });
  }
  /**
   * @description
   * Removes the `NgModelGroup` directive instance from the form.
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  removeFormGroup(dir) {
    resolvedPromise$1.then(() => {
      const container = this._findContainer(dir.path);
      if (container) {
        container.removeControl(dir.name);
      }
    });
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
   *
   * @param dir The `NgModelGroup` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `NgControl` directive.
   *
   * @param dir The `NgControl` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    resolvedPromise$1.then(() => {
      const ctrl = this.form.get(dir.path);
      ctrl.setValue(value);
    });
  }
  /**
   * @description
   * Sets the value for this `FormGroup`.
   *
   * @param value The new value
   */
  setValue(value) {
    this.control.setValue(value);
  }
  /**
   * @description
   * Method called when the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this.submittedReactive.set(true);
    syncPendingControls(this.form, this._directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this.submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.form._updateOn = this.options.updateOn;
    }
  }
  _findContainer(path) {
    path.pop();
    return path.length ? this.form.get(path) : this.form;
  }
  static \u0275fac = function NgForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgForm)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgForm,
    selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
    hostBindings: function NgForm_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function NgForm_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function NgForm_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      options: [0, "ngFormOptions", "options"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider$1]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgForm, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]",
      providers: [formDirectiveProvider$1],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      outputs: ["ngSubmit"],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    options: [{
      type: Input,
      args: ["ngFormOptions"]
    }]
  });
})();
function removeListItem(list, el) {
  const index = list.indexOf(el);
  if (index > -1) list.splice(index, 1);
}
function isFormControlState(formState) {
  return typeof formState === "object" && formState !== null && Object.keys(formState).length === 2 && "value" in formState && "disabled" in formState;
}
var FormControl = class FormControl2 extends AbstractControl {
  /** @publicApi */
  defaultValue = null;
  /** @internal */
  _onChange = [];
  /** @internal */
  _pendingValue;
  /** @internal */
  _pendingChange = false;
  constructor(formState = null, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this._applyFormState(formState);
    this._setUpdateStrategy(validatorOrOpts);
    this._initObservables();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set
      // `emitEvent` to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
    if (isOptionsObj(validatorOrOpts) && (validatorOrOpts.nonNullable || validatorOrOpts.initialValueIsDefault)) {
      if (isFormControlState(formState)) {
        this.defaultValue = formState.value;
      } else {
        this.defaultValue = formState;
      }
    }
  }
  setValue(value, options = {}) {
    this.value = this._pendingValue = value;
    if (this._onChange.length && options.emitModelToViewChange !== false) {
      this._onChange.forEach((changeFn) => changeFn(this.value, options.emitViewToModelChange !== false));
    }
    this.updateValueAndValidity(options);
  }
  patchValue(value, options = {}) {
    this.setValue(value, options);
  }
  reset(formState = this.defaultValue, options = {}) {
    this._applyFormState(formState);
    this.markAsPristine(options);
    this.markAsUntouched(options);
    this.setValue(this.value, options);
    this._pendingChange = false;
  }
  /**  @internal */
  _updateValue() {
  }
  /**  @internal */
  _anyControls(condition) {
    return false;
  }
  /**  @internal */
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(fn) {
    this._onChange.push(fn);
  }
  /** @internal */
  _unregisterOnChange(fn) {
    removeListItem(this._onChange, fn);
  }
  registerOnDisabledChange(fn) {
    this._onDisabledChange.push(fn);
  }
  /** @internal */
  _unregisterOnDisabledChange(fn) {
    removeListItem(this._onDisabledChange, fn);
  }
  /** @internal */
  _forEachChild(cb) {
  }
  /** @internal */
  _syncPendingControls() {
    if (this.updateOn === "submit") {
      if (this._pendingDirty) this.markAsDirty();
      if (this._pendingTouched) this.markAsTouched();
      if (this._pendingChange) {
        this.setValue(this._pendingValue, {
          onlySelf: true,
          emitModelToViewChange: false
        });
        return true;
      }
    }
    return false;
  }
  _applyFormState(formState) {
    if (isFormControlState(formState)) {
      this.value = this._pendingValue = formState.value;
      formState.disabled ? this.disable({
        onlySelf: true,
        emitEvent: false
      }) : this.enable({
        onlySelf: true,
        emitEvent: false
      });
    } else {
      this.value = this._pendingValue = formState;
    }
  }
};
var isFormControl = (control) => control instanceof FormControl;
var AbstractFormGroupDirective = class _AbstractFormGroupDirective extends ControlContainer {
  /**
   * @description
   * The parent control for the group
   *
   * @internal
   */
  _parent;
  /** @docs-private */
  ngOnInit() {
    this._checkParentType();
    this.formDirective.addFormGroup(this);
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeFormGroup(this);
    }
  }
  /**
   * @description
   * The `FormGroup` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormGroup(this);
  }
  /**
   * @description
   * The path to this group from the top-level directive.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /** @internal */
  _checkParentType() {
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AbstractFormGroupDirective_BaseFactory;
    return function AbstractFormGroupDirective_Factory(__ngFactoryType__) {
      return (\u0275AbstractFormGroupDirective_BaseFactory || (\u0275AbstractFormGroupDirective_BaseFactory = \u0275\u0275getInheritedFactory(_AbstractFormGroupDirective)))(__ngFactoryType__ || _AbstractFormGroupDirective);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractFormGroupDirective,
    standalone: false,
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractFormGroupDirective, [{
    type: Directive,
    args: [{
      standalone: false
    }]
  }], null, null);
})();
function modelParentException() {
  return new RuntimeError(1350, `
    ngModel cannot be used to register form controls with a parent formGroup directive.  Try using
    formGroup's partner directive "formControlName" instead.  Example:

    ${formControlNameExample}

    Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:

    Example:

    ${ngModelWithFormGroupExample}`);
}
function formGroupNameException() {
  return new RuntimeError(1351, `
    ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.

    Option 1: Use formControlName instead of ngModel (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):

    ${ngModelGroupExample}`);
}
function missingNameException() {
  return new RuntimeError(1352, `If ngModel is used within a form tag, either the name attribute must be set or the form
    control must be defined as 'standalone' in ngModelOptions.

    Example 1: <input [(ngModel)]="person.firstName" name="first">
    Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">`);
}
function modelGroupParentException() {
  return new RuntimeError(1353, `
    ngModelGroup cannot be used with a parent formGroup directive.

    Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):

    ${formGroupNameExample}

    Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):

    ${ngModelGroupExample}`);
}
var modelGroupProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => NgModelGroup)
};
var NgModelGroup = class _NgModelGroup extends AbstractFormGroupDirective {
  /**
   * @description
   * Tracks the name of the `NgModelGroup` bound to the directive. The name corresponds
   * to a key in the parent `NgForm`.
   */
  name = "";
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof NgForm) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw modelGroupParentException();
    }
  }
  static \u0275fac = function NgModelGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModelGroup)(\u0275\u0275directiveInject(ControlContainer, 5), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModelGroup,
    selectors: [["", "ngModelGroup", ""]],
    inputs: {
      name: [0, "ngModelGroup", "name"]
    },
    exportAs: ["ngModelGroup"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([modelGroupProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModelGroup, [{
    type: Directive,
    args: [{
      selector: "[ngModelGroup]",
      providers: [modelGroupProvider],
      exportAs: "ngModelGroup",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["ngModelGroup"]
    }]
  });
})();
var formControlBinding$1 = {
  provide: NgControl,
  useExisting: forwardRef(() => NgModel)
};
var resolvedPromise = (() => Promise.resolve())();
var NgModel = class _NgModel extends NgControl {
  _changeDetectorRef;
  callSetDisabledState;
  control = new FormControl();
  // At runtime we coerce arbitrary values assigned to the "disabled" input to a "boolean".
  // This is not reflected in the type of the property because outside of templates, consumers
  // should only deal with booleans. In templates, a string is allowed for convenience and to
  // match the native "disabled attribute" semantics which can be observed on input elements.
  // This static member tells the compiler that values of type "string" can also be assigned
  // to the input in a template.
  /** @docs-private */
  static ngAcceptInputType_isDisabled;
  /** @internal */
  _registered = false;
  /**
   * Internal reference to the view model value.
   * @docs-private
   */
  viewModel;
  /**
   * @description
   * Tracks the name bound to the directive. If a parent form exists, it
   * uses this name as a key to retrieve this control's value.
   */
  name = "";
  /**
   * @description
   * Tracks whether the control is disabled.
   */
  isDisabled;
  /**
   * @description
   * Tracks the value bound to this directive.
   */
  model;
  /**
   * @description
   * Tracks the configuration options for this `ngModel` instance.
   *
   * **name**: An alternative to setting the name attribute on the form control element. See
   * the [example](api/forms/NgModel#using-ngmodel-on-a-standalone-control) for using `NgModel`
   * as a standalone control.
   *
   * **standalone**: When set to true, the `ngModel` will not register itself with its parent form,
   * and acts as if it's not in the form. Defaults to false. If no parent form exists, this option
   * has no effect.
   *
   * **updateOn**: Defines the event upon which the form control value and validity update.
   * Defaults to 'change'. Possible values: `'change'` | `'blur'` | `'submit'`.
   *
   */
  options;
  /**
   * @description
   * Event emitter for producing the `ngModelChange` event after
   * the view model updates.
   */
  update = new EventEmitter();
  constructor(parent, validators, asyncValidators, valueAccessors, _changeDetectorRef, callSetDisabledState) {
    super();
    this._changeDetectorRef = _changeDetectorRef;
    this.callSetDisabledState = callSetDisabledState;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @docs-private */
  ngOnChanges(changes) {
    this._checkForErrors();
    if (!this._registered || "name" in changes) {
      if (this._registered) {
        this._checkName();
        if (this.formDirective) {
          const oldName = changes["name"].previousValue;
          this.formDirective.removeControl({
            name: oldName,
            path: this._getPath(oldName)
          });
        }
      }
      this._setUpControl();
    }
    if ("isDisabled" in changes) {
      this._updateDisabled(changes);
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      this._updateValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @docs-private */
  ngOnDestroy() {
    this.formDirective && this.formDirective.removeControl(this);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return this._getPath(this.name);
  }
  /**
   * @description
   * The top-level directive for this control if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value emitted by `ngModelChange`.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _setUpControl() {
    this._setUpdateStrategy();
    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
    this._registered = true;
  }
  _setUpdateStrategy() {
    if (this.options && this.options.updateOn != null) {
      this.control._updateOn = this.options.updateOn;
    }
  }
  _isStandalone() {
    return !this._parent || !!(this.options && this.options.standalone);
  }
  _setUpStandalone() {
    setUpControl(this.control, this, this.callSetDisabledState);
    this.control.updateValueAndValidity({
      emitEvent: false
    });
  }
  _checkForErrors() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._isStandalone()) {
      checkParentType$1(this._parent);
    }
    this._checkName();
  }
  _checkName() {
    if (this.options && this.options.name) this.name = this.options.name;
    if (!this._isStandalone() && !this.name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw missingNameException();
    }
  }
  _updateValue(value) {
    resolvedPromise.then(() => {
      this.control.setValue(value, {
        emitViewToModelChange: false
      });
      this._changeDetectorRef?.markForCheck();
    });
  }
  _updateDisabled(changes) {
    const disabledValue = changes["isDisabled"].currentValue;
    const isDisabled = disabledValue !== 0 && booleanAttribute(disabledValue);
    resolvedPromise.then(() => {
      if (isDisabled && !this.control.disabled) {
        this.control.disable();
      } else if (!isDisabled && this.control.disabled) {
        this.control.enable();
      }
      this._changeDetectorRef?.markForCheck();
    });
  }
  _getPath(controlName) {
    return this._parent ? controlPath(controlName, this._parent) : [controlName];
  }
  static \u0275fac = function NgModel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgModel)(\u0275\u0275directiveInject(ControlContainer, 9), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(ChangeDetectorRef, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgModel,
    selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
    inputs: {
      name: "name",
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"],
      options: [0, "ngModelOptions", "options"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngModel"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding$1]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgModel, [{
    type: Directive,
    args: [{
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      providers: [formControlBinding$1],
      exportAs: "ngModel",
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: ChangeDetectorRef,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ChangeDetectorRef]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    name: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    options: [{
      type: Input,
      args: ["ngModelOptions"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType$1(parent) {
  if (!(parent instanceof NgModelGroup) && parent instanceof AbstractFormGroupDirective) {
    throw formGroupNameException();
  } else if (!(parent instanceof NgModelGroup) && !(parent instanceof NgForm)) {
    throw modelParentException();
  }
}
var \u0275NgNoValidate = class _\u0275NgNoValidate {
  static \u0275fac = function \u0275NgNoValidate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgNoValidate)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgNoValidate,
    selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
    hostAttrs: ["novalidate", ""],
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgNoValidate, [{
    type: Directive,
    args: [{
      selector: "form:not([ngNoForm]):not([ngNativeValidate])",
      host: {
        "novalidate": ""
      },
      standalone: false
    }]
  }], null, null);
})();
var NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NumberValueAccessor),
  multi: true
};
var NumberValueAccessor = class _NumberValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @docs-private
   */
  writeValue(value) {
    const normalizedValue = value == null ? "" : value;
    this.setProperty("value", normalizedValue);
  }
  /**
   * Registers a function called when the control value changes.
   * @docs-private
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NumberValueAccessor_BaseFactory;
    return function NumberValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275NumberValueAccessor_BaseFactory || (\u0275NumberValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_NumberValueAccessor)))(__ngFactoryType__ || _NumberValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumberValueAccessor,
    selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
    hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NumberValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([NUMBER_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumberValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]",
      host: {
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [NUMBER_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioControlValueAccessor),
  multi: true
};
function throwNameError() {
  throw new RuntimeError(1202, `
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `);
}
var RadioControlRegistry = class _RadioControlRegistry {
  _accessors = [];
  /**
   * @description
   * Adds a control to the internal registry. For internal use only.
   */
  add(control, accessor) {
    this._accessors.push([control, accessor]);
  }
  /**
   * @description
   * Removes a control from the internal registry. For internal use only.
   */
  remove(accessor) {
    for (let i3 = this._accessors.length - 1; i3 >= 0; --i3) {
      if (this._accessors[i3][1] === accessor) {
        this._accessors.splice(i3, 1);
        return;
      }
    }
  }
  /**
   * @description
   * Selects a radio button. For internal use only.
   */
  select(accessor) {
    this._accessors.forEach((c) => {
      if (this._isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].fireUncheck(accessor.value);
      }
    });
  }
  _isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) return false;
    return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioControlValueAccessor = class _RadioControlValueAccessor extends BuiltInControlValueAccessor {
  _registry;
  _injector;
  /** @internal */
  _state;
  /** @internal */
  _control;
  /** @internal */
  _fn;
  setDisabledStateFired = false;
  /**
   * The registered callback function called when a change event occurs on the input element.
   * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
   * to override the `onChange` function (which expects 1 argument) in the parent
   * `BaseControlValueAccessor` class.
   * @docs-private
   */
  onChange = () => {
  };
  /**
   * @description
   * Tracks the name of the radio input element.
   */
  name;
  /**
   * @description
   * Tracks the name of the `FormControl` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   */
  formControlName;
  /**
   * @description
   * Tracks the value of the radio input element
   */
  value;
  callSetDisabledState = inject(CALL_SET_DISABLED_STATE, {
    optional: true
  }) ?? setDisabledStateDefault;
  constructor(renderer, elementRef, _registry, _injector) {
    super(renderer, elementRef);
    this._registry = _registry;
    this._injector = _injector;
  }
  /** @docs-private */
  ngOnInit() {
    this._control = this._injector.get(NgControl);
    this._checkName();
    this._registry.add(this._control, this);
  }
  /** @docs-private */
  ngOnDestroy() {
    this._registry.remove(this);
  }
  /**
   * Sets the "checked" property value on the radio input element.
   * @docs-private
   */
  writeValue(value) {
    this._state = value === this.value;
    this.setProperty("checked", this._state);
  }
  /**
   * Registers a function called when the control value changes.
   * @docs-private
   */
  registerOnChange(fn) {
    this._fn = fn;
    this.onChange = () => {
      fn(this.value);
      this._registry.select(this);
    };
  }
  /** @docs-private */
  setDisabledState(isDisabled) {
    if (this.setDisabledStateFired || isDisabled || this.callSetDisabledState === "whenDisabledForLegacyCode") {
      this.setProperty("disabled", isDisabled);
    }
    this.setDisabledStateFired = true;
  }
  /**
   * Sets the "value" on the radio input element and unchecks it.
   *
   * @param value
   */
  fireUncheck(value) {
    this.writeValue(value);
  }
  _checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwNameError();
    }
    if (!this.name && this.formControlName) this.name = this.formControlName;
  }
  static \u0275fac = function RadioControlValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlValueAccessor)(\u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(Injector));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RadioControlValueAccessor,
    selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
    hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RadioControlValueAccessor_change_HostBindingHandler() {
          return ctx.onChange();
        })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      name: "name",
      formControlName: "formControlName",
      value: "value"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]",
      host: {
        "(change)": "onChange()",
        "(blur)": "onTouched()"
      },
      providers: [RADIO_VALUE_ACCESSOR],
      standalone: false
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: RadioControlRegistry
  }, {
    type: Injector
  }], {
    name: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RANGE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RangeValueAccessor),
  multi: true
};
var RangeValueAccessor = class _RangeValueAccessor extends BuiltInControlValueAccessor {
  /**
   * Sets the "value" property on the input element.
   * @docs-private
   */
  writeValue(value) {
    this.setProperty("value", parseFloat(value));
  }
  /**
   * Registers a function called when the control value changes.
   * @docs-private
   */
  registerOnChange(fn) {
    this.onChange = (value) => {
      fn(value == "" ? null : parseFloat(value));
    };
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RangeValueAccessor_BaseFactory;
    return function RangeValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275RangeValueAccessor_BaseFactory || (\u0275RangeValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_RangeValueAccessor)))(__ngFactoryType__ || _RangeValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RangeValueAccessor,
    selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
    hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function RangeValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([RANGE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeValueAccessor, [{
    type: Directive,
    args: [{
      selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(input)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [RANGE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, null);
})();
var NG_MODEL_WITH_FORM_CONTROL_WARNING = new InjectionToken(ngDevMode ? "NgModelWithFormControlWarning" : "");
var formControlBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlDirective)
};
var FormControlDirective = class _FormControlDirective extends NgControl {
  _ngModelWarningConfig;
  callSetDisabledState;
  /**
   * Internal reference to the view model value.
   * @docs-private
   */
  viewModel;
  /**
   * @description
   * Tracks the `FormControl` instance bound to the directive.
   */
  form;
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  // TODO(kara): remove next 4 properties once deprecation period is over
  /** @deprecated as of v6 */
  model;
  /** @deprecated as of v6 */
  update = new EventEmitter();
  /**
   * @description
   * Static property used to track whether any ngModel warnings have been sent across
   * all instances of FormControlDirective. Used to support warning config of "once".
   *
   * @internal
   */
  static _ngModelWarningSentOnce = false;
  /**
   * @description
   * Instance property used to track whether an ngModel warning has been sent out for this
   * particular `FormControlDirective` instance. Used to support warning config of "always".
   *
   * @internal
   */
  _ngModelWarningSent = false;
  constructor(validators, asyncValidators, valueAccessors, _ngModelWarningConfig, callSetDisabledState) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @docs-private */
  ngOnChanges(changes) {
    if (this._isControlChanged(changes)) {
      const previousForm = changes["form"].previousValue;
      if (previousForm) {
        cleanUpControl(
          previousForm,
          this,
          /* validateControlPresenceOnChange */
          false
        );
      }
      setUpControl(this.form, this, this.callSetDisabledState);
      this.form.updateValueAndValidity({
        emitEvent: false
      });
    }
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControl", _FormControlDirective, this, this._ngModelWarningConfig);
      }
      this.form.setValue(this.model);
      this.viewModel = this.model;
    }
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.form) {
      cleanUpControl(
        this.form,
        this,
        /* validateControlPresenceOnChange */
        false
      );
    }
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * The `FormControl` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  _isControlChanged(changes) {
    return changes.hasOwnProperty("form");
  }
  static \u0275fac = function FormControlDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlDirective,
    selectors: [["", "formControl", ""]],
    inputs: {
      form: [0, "formControl", "form"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formControlBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlDirective, [{
    type: Directive,
    args: [{
      selector: "[formControl]",
      providers: [formControlBinding],
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formControl"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
var formDirectiveProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupDirective)
};
var FormGroupDirective = class _FormGroupDirective extends ControlContainer {
  callSetDisabledState;
  /**
   * @description
   * Reports whether the form submission has been triggered.
   */
  get submitted() {
    return untracked(this._submittedReactive);
  }
  // TODO(atscott): Remove once invalid API usage is cleaned up internally
  set submitted(value) {
    this._submittedReactive.set(value);
  }
  /** @internal */
  _submitted = computed(() => this._submittedReactive());
  _submittedReactive = signal(false);
  /**
   * Reference to an old form group input value, which is needed to cleanup
   * old instance in case it was replaced with a new one.
   */
  _oldForm;
  /**
   * Callback that should be invoked when controls in FormGroup or FormArray collection change
   * (added or removed). This callback triggers corresponding DOM updates.
   */
  _onCollectionChange = () => this._updateDomValue();
  /**
   * @description
   * Tracks the list of added `FormControlName` instances
   */
  directives = [];
  /**
   * @description
   * Tracks the `FormGroup` bound to this directive.
   */
  form = null;
  /**
   * @description
   * Emits an event when the form submission has been triggered.
   */
  ngSubmit = new EventEmitter();
  constructor(validators, asyncValidators, callSetDisabledState) {
    super();
    this.callSetDisabledState = callSetDisabledState;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @docs-private */
  ngOnChanges(changes) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !this.form) {
      throw missingFormException();
    }
    if (changes.hasOwnProperty("form")) {
      this._updateValidators();
      this._updateDomValue();
      this._updateRegistrations();
      this._oldForm = this.form;
    }
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.form) {
      cleanUpValidators(this.form, this);
      if (this.form._onCollectionChange === this._onCollectionChange) {
        this.form._registerOnCollectionChange(() => {
        });
      }
    }
  }
  /**
   * @description
   * Returns this directive's instance.
   */
  get formDirective() {
    return this;
  }
  /**
   * @description
   * Returns the `FormGroup` bound to this directive.
   */
  get control() {
    return this.form;
  }
  /**
   * @description
   * Returns an array representing the path to this group. Because this directive
   * always lives at the top level of a form, it always an empty array.
   */
  get path() {
    return [];
  }
  /**
   * @description
   * Method that sets up the control directive in this group, re-calculates its value
   * and validity, and adds the instance to the internal list of directives.
   *
   * @param dir The `FormControlName` directive instance.
   */
  addControl(dir) {
    const ctrl = this.form.get(dir.path);
    setUpControl(ctrl, dir, this.callSetDisabledState);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
    this.directives.push(dir);
    return ctrl;
  }
  /**
   * @description
   * Retrieves the `FormControl` instance from the provided `FormControlName` directive
   *
   * @param dir The `FormControlName` directive instance.
   */
  getControl(dir) {
    return this.form.get(dir.path);
  }
  /**
   * @description
   * Removes the `FormControlName` instance from the internal list of directives
   *
   * @param dir The `FormControlName` directive instance.
   */
  removeControl(dir) {
    cleanUpControl(
      dir.control || null,
      dir,
      /* validateControlPresenceOnChange */
      false
    );
    removeListItem$1(this.directives, dir);
  }
  /**
   * Adds a new `FormGroupName` directive instance to the form.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  addFormGroup(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormGroupName` directive instance.
   */
  removeFormGroup(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
   *
   * @param dir The `FormGroupName` directive instance.
   */
  getFormGroup(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  addFormArray(dir) {
    this._setUpFormContainer(dir);
  }
  /**
   * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
   * view.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  removeFormArray(dir) {
    this._cleanUpFormContainer(dir);
  }
  /**
   * @description
   * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
   *
   * @param dir The `FormArrayName` directive instance.
   */
  getFormArray(dir) {
    return this.form.get(dir.path);
  }
  /**
   * Sets the new value for the provided `FormControlName` directive.
   *
   * @param dir The `FormControlName` directive instance.
   * @param value The new value for the directive's control.
   */
  updateModel(dir, value) {
    const ctrl = this.form.get(dir.path);
    ctrl.setValue(value);
  }
  /**
   * @description
   * Method called with the "submit" event is triggered on the form.
   * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
   *
   * @param $event The "submit" event object
   */
  onSubmit($event) {
    this._submittedReactive.set(true);
    syncPendingControls(this.form, this.directives);
    this.ngSubmit.emit($event);
    this.form._events.next(new FormSubmittedEvent(this.control));
    return $event?.target?.method === "dialog";
  }
  /**
   * @description
   * Method called when the "reset" event is triggered on the form.
   */
  onReset() {
    this.resetForm();
  }
  /**
   * @description
   * Resets the form to an initial value and resets its submitted status.
   *
   * @param value The new value for the form.
   */
  resetForm(value = void 0) {
    this.form.reset(value);
    this._submittedReactive.set(false);
    this.form._events.next(new FormResetEvent(this.form));
  }
  /** @internal */
  _updateDomValue() {
    this.directives.forEach((dir) => {
      const oldCtrl = dir.control;
      const newCtrl = this.form.get(dir.path);
      if (oldCtrl !== newCtrl) {
        cleanUpControl(oldCtrl || null, dir);
        if (isFormControl(newCtrl)) {
          setUpControl(newCtrl, dir, this.callSetDisabledState);
          dir.control = newCtrl;
        }
      }
    });
    this.form._updateTreeValidity({
      emitEvent: false
    });
  }
  _setUpFormContainer(dir) {
    const ctrl = this.form.get(dir.path);
    setUpFormContainer(ctrl, dir);
    ctrl.updateValueAndValidity({
      emitEvent: false
    });
  }
  _cleanUpFormContainer(dir) {
    if (this.form) {
      const ctrl = this.form.get(dir.path);
      if (ctrl) {
        const isControlUpdated = cleanUpFormContainer(ctrl, dir);
        if (isControlUpdated) {
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
      }
    }
  }
  _updateRegistrations() {
    this.form._registerOnCollectionChange(this._onCollectionChange);
    if (this._oldForm) {
      this._oldForm._registerOnCollectionChange(() => {
      });
    }
  }
  _updateValidators() {
    setUpValidators(this.form, this);
    if (this._oldForm) {
      cleanUpValidators(this._oldForm, this);
    }
  }
  static \u0275fac = function FormGroupDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupDirective)(\u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(CALL_SET_DISABLED_STATE, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupDirective,
    selectors: [["", "formGroup", ""]],
    hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        })("reset", function FormGroupDirective_reset_HostBindingHandler() {
          return ctx.onReset();
        });
      }
    },
    inputs: {
      form: [0, "formGroup", "form"]
    },
    outputs: {
      ngSubmit: "ngSubmit"
    },
    exportAs: ["ngForm"],
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formDirectiveProvider]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupDirective, [{
    type: Directive,
    args: [{
      selector: "[formGroup]",
      providers: [formDirectiveProvider],
      host: {
        "(submit)": "onSubmit($event)",
        "(reset)": "onReset()"
      },
      exportAs: "ngForm",
      standalone: false
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CALL_SET_DISABLED_STATE]
    }]
  }], {
    form: [{
      type: Input,
      args: ["formGroup"]
    }],
    ngSubmit: [{
      type: Output
    }]
  });
})();
var formGroupNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormGroupName)
};
var FormGroupName = class _FormGroupName extends AbstractFormGroupDirective {
  /**
   * @description
   * Tracks the name of the `FormGroup` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   * Accepts a name as a string or a number.
   * The name in the form of a string is useful for individual forms,
   * while the numerical form allows for form groups to be bound
   * to indices when iterating over groups in a `FormArray`.
   */
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /** @internal */
  _checkParentType() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw groupParentException();
    }
  }
  static \u0275fac = function FormGroupName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormGroupName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormGroupName,
    selectors: [["", "formGroupName", ""]],
    inputs: {
      name: [0, "formGroupName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formGroupNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormGroupName, [{
    type: Directive,
    args: [{
      selector: "[formGroupName]",
      providers: [formGroupNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formGroupName"]
    }]
  });
})();
var formArrayNameProvider = {
  provide: ControlContainer,
  useExisting: forwardRef(() => FormArrayName)
};
var FormArrayName = class _FormArrayName extends ControlContainer {
  /** @internal */
  _parent;
  /**
   * @description
   * Tracks the name of the `FormArray` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   * Accepts a name as a string or a number.
   * The name in the form of a string is useful for individual forms,
   * while the numerical form allows for form arrays to be bound
   * to indices when iterating over arrays in a `FormArray`.
   */
  name = null;
  constructor(parent, validators, asyncValidators) {
    super();
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
  }
  /**
   * A lifecycle method called when the directive's inputs are initialized. For internal use only.
   * @throws If the directive does not have a valid parent.
   * @docs-private
   */
  ngOnInit() {
    if (hasInvalidParent(this._parent) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw arrayParentException();
    }
    this.formDirective.addFormArray(this);
  }
  /**
   * A lifecycle method called before the directive's instance is destroyed. For internal use only.
   * @docs-private
   */
  ngOnDestroy() {
    this.formDirective?.removeFormArray(this);
  }
  /**
   * @description
   * The `FormArray` bound to this directive.
   */
  get control() {
    return this.formDirective.getFormArray(this);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  static \u0275fac = function FormArrayName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormArrayName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormArrayName,
    selectors: [["", "formArrayName", ""]],
    inputs: {
      name: [0, "formArrayName", "name"]
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([formArrayNameProvider]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormArrayName, [{
    type: Directive,
    args: [{
      selector: "[formArrayName]",
      providers: [formArrayNameProvider],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formArrayName"]
    }]
  });
})();
function hasInvalidParent(parent) {
  return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
}
var controlNameBinding = {
  provide: NgControl,
  useExisting: forwardRef(() => FormControlName)
};
var FormControlName = class _FormControlName extends NgControl {
  _ngModelWarningConfig;
  _added = false;
  /**
   * Internal reference to the view model value.
   * @internal
   */
  viewModel;
  /**
   * @description
   * Tracks the `FormControl` instance bound to the directive.
   */
  control;
  /**
   * @description
   * Tracks the name of the `FormControl` bound to the directive. The name corresponds
   * to a key in the parent `FormGroup` or `FormArray`.
   * Accepts a name as a string or a number.
   * The name in the form of a string is useful for individual forms,
   * while the numerical form allows for form controls to be bound
   * to indices when iterating over controls in a `FormArray`.
   */
  name = null;
  /**
   * @description
   * Triggers a warning in dev mode that this input should not be used with reactive forms.
   */
  set isDisabled(isDisabled) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      console.warn(disabledAttrWarning);
    }
  }
  // TODO(kara): remove next 4 properties once deprecation period is over
  /** @deprecated as of v6 */
  model;
  /** @deprecated as of v6 */
  update = new EventEmitter();
  /**
   * @description
   * Static property used to track whether any ngModel warnings have been sent across
   * all instances of FormControlName. Used to support warning config of "once".
   *
   * @internal
   */
  static _ngModelWarningSentOnce = false;
  /**
   * @description
   * Instance property used to track whether an ngModel warning has been sent out for this
   * particular FormControlName instance. Used to support warning config of "always".
   *
   * @internal
   */
  _ngModelWarningSent = false;
  constructor(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
    super();
    this._ngModelWarningConfig = _ngModelWarningConfig;
    this._parent = parent;
    this._setValidators(validators);
    this._setAsyncValidators(asyncValidators);
    this.valueAccessor = selectValueAccessor(this, valueAccessors);
  }
  /** @docs-private */
  ngOnChanges(changes) {
    if (!this._added) this._setUpControl();
    if (isPropertyUpdated(changes, this.viewModel)) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        _ngModelWarning("formControlName", _FormControlName, this, this._ngModelWarningConfig);
      }
      this.viewModel = this.model;
      this.formDirective.updateModel(this, this.model);
    }
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this.formDirective) {
      this.formDirective.removeControl(this);
    }
  }
  /**
   * @description
   * Sets the new value for the view model and emits an `ngModelChange` event.
   *
   * @param newValue The new value for the view model.
   */
  viewToModelUpdate(newValue) {
    this.viewModel = newValue;
    this.update.emit(newValue);
  }
  /**
   * @description
   * Returns an array that represents the path from the top-level form to this control.
   * Each index is the string name of the control on that level.
   */
  get path() {
    return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
  }
  /**
   * @description
   * The top-level directive for this group if present, otherwise null.
   */
  get formDirective() {
    return this._parent ? this._parent.formDirective : null;
  }
  _setUpControl() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkParentType(this._parent, this.name);
    }
    this.control = this.formDirective.addControl(this);
    this._added = true;
  }
  static \u0275fac = function FormControlName_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormControlName)(\u0275\u0275directiveInject(ControlContainer, 13), \u0275\u0275directiveInject(NG_VALIDATORS, 10), \u0275\u0275directiveInject(NG_ASYNC_VALIDATORS, 10), \u0275\u0275directiveInject(NG_VALUE_ACCESSOR, 10), \u0275\u0275directiveInject(NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormControlName,
    selectors: [["", "formControlName", ""]],
    inputs: {
      name: [0, "formControlName", "name"],
      isDisabled: [0, "disabled", "isDisabled"],
      model: [0, "ngModel", "model"]
    },
    outputs: {
      update: "ngModelChange"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([controlNameBinding]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormControlName, [{
    type: Directive,
    args: [{
      selector: "[formControlName]",
      providers: [controlNameBinding],
      standalone: false
    }]
  }], () => [{
    type: ControlContainer,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }, {
      type: SkipSelf
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_ASYNC_VALIDATORS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }, {
      type: Inject,
      args: [NG_VALUE_ACCESSOR]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
    }]
  }], {
    name: [{
      type: Input,
      args: ["formControlName"]
    }],
    isDisabled: [{
      type: Input,
      args: ["disabled"]
    }],
    model: [{
      type: Input,
      args: ["ngModel"]
    }],
    update: [{
      type: Output,
      args: ["ngModelChange"]
    }]
  });
})();
function checkParentType(parent, name) {
  if (!(parent instanceof FormGroupName) && parent instanceof AbstractFormGroupDirective) {
    throw ngModelGroupException();
  } else if (!(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName)) {
    throw controlParentException(name);
  }
}
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectControlValueAccessor),
  multi: true
};
function _buildValueString$1(id, value) {
  if (id == null) return `${value}`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId$1(valueString) {
  return valueString.split(":")[0];
}
var SelectControlValueAccessor = class _SelectControlValueAccessor extends BuiltInControlValueAccessor {
  /** @docs-private */
  value;
  /** @internal */
  _optionMap = /* @__PURE__ */ new Map();
  /** @internal */
  _idCounter = 0;
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  /**
   * Sets the "value" property on the select element.
   * @docs-private
   */
  writeValue(value) {
    this.value = value;
    const id = this._getOptionId(value);
    const valueString = _buildValueString$1(id, value);
    this.setProperty("value", valueString);
  }
  /**
   * Registers a function called when the control value changes.
   * @docs-private
   */
  registerOnChange(fn) {
    this.onChange = (valueString) => {
      this.value = this._getOptionValue(valueString);
      fn(this.value);
    };
  }
  /** @internal */
  _registerOption() {
    return (this._idCounter++).toString();
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id), value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId$1(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectControlValueAccessor_BaseFactory;
    return function SelectControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectControlValueAccessor_BaseFactory || (\u0275SelectControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectControlValueAccessor)))(__ngFactoryType__ || _SelectControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectControlValueAccessor,
    selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
    hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target.value);
        })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]",
      host: {
        "(change)": "onChange($event.target.value)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var NgSelectOption = class _NgSelectOption {
  _element;
  _renderer;
  _select;
  /**
   * @description
   * ID of the option element
   */
  id;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) this.id = this._select._registerOption();
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._select._optionMap.set(this.id, value);
    this._setElementValue(_buildValueString$1(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    this._setElementValue(value);
    if (this._select) this._select.writeValue(this._select.value);
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function NgSelectOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgSelectOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NgSelectOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgSelectOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
var SELECT_MULTIPLE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectMultipleControlValueAccessor),
  multi: true
};
function _buildValueString(id, value) {
  if (id == null) return `${value}`;
  if (typeof value === "string") value = `'${value}'`;
  if (value && typeof value === "object") value = "Object";
  return `${id}: ${value}`.slice(0, 50);
}
function _extractId(valueString) {
  return valueString.split(":")[0];
}
var SelectMultipleControlValueAccessor = class _SelectMultipleControlValueAccessor extends BuiltInControlValueAccessor {
  /**
   * The current value.
   * @docs-private
   */
  value;
  /** @internal */
  _optionMap = /* @__PURE__ */ new Map();
  /** @internal */
  _idCounter = 0;
  /**
   * @description
   * Tracks the option comparison algorithm for tracking identities when
   * checking for changes.
   */
  set compareWith(fn) {
    if (typeof fn !== "function" && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new RuntimeError(1201, `compareWith must be a function, but received ${JSON.stringify(fn)}`);
    }
    this._compareWith = fn;
  }
  _compareWith = Object.is;
  /**
   * Sets the "value" property on one or of more of the select's options.
   * @docs-private
   */
  writeValue(value) {
    this.value = value;
    let optionSelectedStateSetter;
    if (Array.isArray(value)) {
      const ids = value.map((v) => this._getOptionId(v));
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(ids.indexOf(o.toString()) > -1);
      };
    } else {
      optionSelectedStateSetter = (opt, o) => {
        opt._setSelected(false);
      };
    }
    this._optionMap.forEach(optionSelectedStateSetter);
  }
  /**
   * Registers a function called when the control value changes
   * and writes an array of the selected options.
   * @docs-private
   */
  registerOnChange(fn) {
    this.onChange = (element) => {
      const selected = [];
      const selectedOptions = element.selectedOptions;
      if (selectedOptions !== void 0) {
        const options = selectedOptions;
        for (let i3 = 0; i3 < options.length; i3++) {
          const opt = options[i3];
          const val = this._getOptionValue(opt.value);
          selected.push(val);
        }
      } else {
        const options = element.options;
        for (let i3 = 0; i3 < options.length; i3++) {
          const opt = options[i3];
          if (opt.selected) {
            const val = this._getOptionValue(opt.value);
            selected.push(val);
          }
        }
      }
      this.value = selected;
      fn(selected);
    };
  }
  /** @internal */
  _registerOption(value) {
    const id = (this._idCounter++).toString();
    this._optionMap.set(id, value);
    return id;
  }
  /** @internal */
  _getOptionId(value) {
    for (const id of this._optionMap.keys()) {
      if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
    }
    return null;
  }
  /** @internal */
  _getOptionValue(valueString) {
    const id = _extractId(valueString);
    return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectMultipleControlValueAccessor_BaseFactory;
    return function SelectMultipleControlValueAccessor_Factory(__ngFactoryType__) {
      return (\u0275SelectMultipleControlValueAccessor_BaseFactory || (\u0275SelectMultipleControlValueAccessor_BaseFactory = \u0275\u0275getInheritedFactory(_SelectMultipleControlValueAccessor)))(__ngFactoryType__ || _SelectMultipleControlValueAccessor);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectMultipleControlValueAccessor,
    selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
    hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event.target);
        })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    inputs: {
      compareWith: "compareWith"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([SELECT_MULTIPLE_VALUE_ACCESSOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMultipleControlValueAccessor, [{
    type: Directive,
    args: [{
      selector: "select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]",
      host: {
        "(change)": "onChange($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [SELECT_MULTIPLE_VALUE_ACCESSOR],
      standalone: false
    }]
  }], null, {
    compareWith: [{
      type: Input
    }]
  });
})();
var \u0275NgSelectMultipleOption = class _\u0275NgSelectMultipleOption {
  _element;
  _renderer;
  _select;
  id;
  /** @internal */
  _value;
  constructor(_element, _renderer, _select) {
    this._element = _element;
    this._renderer = _renderer;
    this._select = _select;
    if (this._select) {
      this.id = this._select._registerOption(this);
    }
  }
  /**
   * @description
   * Tracks the value bound to the option element. Unlike the value binding,
   * ngValue supports binding to objects.
   */
  set ngValue(value) {
    if (this._select == null) return;
    this._value = value;
    this._setElementValue(_buildValueString(this.id, value));
    this._select.writeValue(this._select.value);
  }
  /**
   * @description
   * Tracks simple string values bound to the option element.
   * For objects, use the `ngValue` input binding.
   */
  set value(value) {
    if (this._select) {
      this._value = value;
      this._setElementValue(_buildValueString(this.id, value));
      this._select.writeValue(this._select.value);
    } else {
      this._setElementValue(value);
    }
  }
  /** @internal */
  _setElementValue(value) {
    this._renderer.setProperty(this._element.nativeElement, "value", value);
  }
  /** @internal */
  _setSelected(selected) {
    this._renderer.setProperty(this._element.nativeElement, "selected", selected);
  }
  /** @docs-private */
  ngOnDestroy() {
    if (this._select) {
      this._select._optionMap.delete(this.id);
      this._select.writeValue(this._select.value);
    }
  }
  static \u0275fac = function \u0275NgSelectMultipleOption_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275NgSelectMultipleOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(SelectMultipleControlValueAccessor, 9));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _\u0275NgSelectMultipleOption,
    selectors: [["option"]],
    inputs: {
      ngValue: "ngValue",
      value: "value"
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275NgSelectMultipleOption, [{
    type: Directive,
    args: [{
      selector: "option",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: SelectMultipleControlValueAccessor,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }], {
    ngValue: [{
      type: Input,
      args: ["ngValue"]
    }],
    value: [{
      type: Input,
      args: ["value"]
    }]
  });
})();
function toInteger(value) {
  return typeof value === "number" ? value : parseInt(value, 10);
}
function toFloat(value) {
  return typeof value === "number" ? value : parseFloat(value);
}
var AbstractValidatorDirective = class _AbstractValidatorDirective {
  _validator = nullValidator;
  _onChange;
  /**
   * A flag that tracks whether this validator is enabled.
   *
   * Marking it `internal` (vs `protected`), so that this flag can be used in host bindings of
   * directive classes that extend this base class.
   * @internal
   */
  _enabled;
  /** @docs-private */
  ngOnChanges(changes) {
    if (this.inputName in changes) {
      const input2 = this.normalizeInput(changes[this.inputName].currentValue);
      this._enabled = this.enabled(input2);
      this._validator = this._enabled ? this.createValidator(input2) : nullValidator;
      if (this._onChange) {
        this._onChange();
      }
    }
  }
  /** @docs-private */
  validate(control) {
    return this._validator(control);
  }
  /** @docs-private */
  registerOnValidatorChange(fn) {
    this._onChange = fn;
  }
  /**
   * @description
   * Determines whether this validator should be active or not based on an input.
   * Base class implementation checks whether an input is defined (if the value is different from
   * `null` and `undefined`). Validator classes that extend this base class can override this
   * function with the logic specific to a particular validator directive.
   */
  enabled(input2) {
    return input2 != null;
  }
  static \u0275fac = function AbstractValidatorDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AbstractValidatorDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _AbstractValidatorDirective,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractValidatorDirective, [{
    type: Directive
  }], null, null);
})();
var MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};
var MaxValidator = class _MaxValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the max bound to this directive.
   */
  max;
  /** @internal */
  inputName = "max";
  /** @internal */
  normalizeInput = (input2) => toFloat(input2);
  /** @internal */
  createValidator = (max) => maxValidator(max);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxValidator_BaseFactory;
    return function MaxValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxValidator_BaseFactory || (\u0275MaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxValidator)))(__ngFactoryType__ || _MaxValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxValidator,
    selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    inputs: {
      max: "max"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]",
      providers: [MAX_VALIDATOR],
      host: {
        "[attr.max]": "_enabled ? max : null"
      },
      standalone: false
    }]
  }], null, {
    max: [{
      type: Input
    }]
  });
})();
var MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};
var MinValidator = class _MinValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the min bound to this directive.
   */
  min;
  /** @internal */
  inputName = "min";
  /** @internal */
  normalizeInput = (input2) => toFloat(input2);
  /** @internal */
  createValidator = (min) => minValidator(min);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinValidator_BaseFactory;
    return function MinValidator_Factory(__ngFactoryType__) {
      return (\u0275MinValidator_BaseFactory || (\u0275MinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinValidator)))(__ngFactoryType__ || _MinValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinValidator,
    selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    inputs: {
      min: "min"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]",
      providers: [MIN_VALIDATOR],
      host: {
        "[attr.min]": "_enabled ? min : null"
      },
      standalone: false
    }]
  }], null, {
    min: [{
      type: Input
    }]
  });
})();
var REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RequiredValidator),
  multi: true
};
var CHECKBOX_REQUIRED_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CheckboxRequiredValidator),
  multi: true
};
var RequiredValidator = class _RequiredValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the required attribute bound to this directive.
   */
  required;
  /** @internal */
  inputName = "required";
  /** @internal */
  normalizeInput = booleanAttribute;
  /** @internal */
  createValidator = (input2) => requiredValidator;
  /** @docs-private */
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RequiredValidator_BaseFactory;
    return function RequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275RequiredValidator_BaseFactory || (\u0275RequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_RequiredValidator)))(__ngFactoryType__ || _RequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RequiredValidator,
    selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
    hostVars: 1,
    hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    inputs: {
      required: "required"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequiredValidator, [{
    type: Directive,
    args: [{
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      providers: [REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, {
    required: [{
      type: Input
    }]
  });
})();
var CheckboxRequiredValidator = class _CheckboxRequiredValidator extends RequiredValidator {
  /** @internal */
  createValidator = (input2) => requiredTrueValidator;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxRequiredValidator_BaseFactory;
    return function CheckboxRequiredValidator_Factory(__ngFactoryType__) {
      return (\u0275CheckboxRequiredValidator_BaseFactory || (\u0275CheckboxRequiredValidator_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxRequiredValidator)))(__ngFactoryType__ || _CheckboxRequiredValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CheckboxRequiredValidator,
    selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("required", ctx._enabled ? "" : null);
      }
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_REQUIRED_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxRequiredValidator, [{
    type: Directive,
    args: [{
      selector: "input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]",
      providers: [CHECKBOX_REQUIRED_VALIDATOR],
      host: {
        "[attr.required]": '_enabled ? "" : null'
      },
      standalone: false
    }]
  }], null, null);
})();
var EMAIL_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EmailValidator),
  multi: true
};
var EmailValidator = class _EmailValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the email attribute bound to this directive.
   */
  email;
  /** @internal */
  inputName = "email";
  /** @internal */
  normalizeInput = booleanAttribute;
  /** @internal */
  createValidator = (input2) => emailValidator;
  /** @docs-private */
  enabled(input2) {
    return input2;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275EmailValidator_BaseFactory;
    return function EmailValidator_Factory(__ngFactoryType__) {
      return (\u0275EmailValidator_BaseFactory || (\u0275EmailValidator_BaseFactory = \u0275\u0275getInheritedFactory(_EmailValidator)))(__ngFactoryType__ || _EmailValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _EmailValidator,
    selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
    inputs: {
      email: "email"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([EMAIL_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmailValidator, [{
    type: Directive,
    args: [{
      selector: "[email][formControlName],[email][formControl],[email][ngModel]",
      providers: [EMAIL_VALIDATOR],
      standalone: false
    }]
  }], null, {
    email: [{
      type: Input
    }]
  });
})();
var MIN_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinLengthValidator),
  multi: true
};
var MinLengthValidator = class _MinLengthValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the minimum length bound to this directive.
   */
  minlength;
  /** @internal */
  inputName = "minlength";
  /** @internal */
  normalizeInput = (input2) => toInteger(input2);
  /** @internal */
  createValidator = (minlength) => minLengthValidator(minlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinLengthValidator_BaseFactory;
    return function MinLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MinLengthValidator_BaseFactory || (\u0275MinLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MinLengthValidator)))(__ngFactoryType__ || _MinLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MinLengthValidator,
    selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("minlength", ctx._enabled ? ctx.minlength : null);
      }
    },
    inputs: {
      minlength: "minlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MIN_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]",
      providers: [MIN_LENGTH_VALIDATOR],
      host: {
        "[attr.minlength]": "_enabled ? minlength : null"
      },
      standalone: false
    }]
  }], null, {
    minlength: [{
      type: Input
    }]
  });
})();
var MAX_LENGTH_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxLengthValidator),
  multi: true
};
var MaxLengthValidator = class _MaxLengthValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the maximum length bound to this directive.
   */
  maxlength;
  /** @internal */
  inputName = "maxlength";
  /** @internal */
  normalizeInput = (input2) => toInteger(input2);
  /** @internal */
  createValidator = (maxlength) => maxLengthValidator(maxlength);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MaxLengthValidator_BaseFactory;
    return function MaxLengthValidator_Factory(__ngFactoryType__) {
      return (\u0275MaxLengthValidator_BaseFactory || (\u0275MaxLengthValidator_BaseFactory = \u0275\u0275getInheritedFactory(_MaxLengthValidator)))(__ngFactoryType__ || _MaxLengthValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MaxLengthValidator,
    selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("maxlength", ctx._enabled ? ctx.maxlength : null);
      }
    },
    inputs: {
      maxlength: "maxlength"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([MAX_LENGTH_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaxLengthValidator, [{
    type: Directive,
    args: [{
      selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]",
      providers: [MAX_LENGTH_VALIDATOR],
      host: {
        "[attr.maxlength]": "_enabled ? maxlength : null"
      },
      standalone: false
    }]
  }], null, {
    maxlength: [{
      type: Input
    }]
  });
})();
var PATTERN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PatternValidator),
  multi: true
};
var PatternValidator = class _PatternValidator extends AbstractValidatorDirective {
  /**
   * @description
   * Tracks changes to the pattern bound to this directive.
   */
  pattern;
  // This input is always defined, since the name matches selector.
  /** @internal */
  inputName = "pattern";
  /** @internal */
  normalizeInput = (input2) => input2;
  /** @internal */
  createValidator = (input2) => patternValidator(input2);
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PatternValidator_BaseFactory;
    return function PatternValidator_Factory(__ngFactoryType__) {
      return (\u0275PatternValidator_BaseFactory || (\u0275PatternValidator_BaseFactory = \u0275\u0275getInheritedFactory(_PatternValidator)))(__ngFactoryType__ || _PatternValidator);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _PatternValidator,
    selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function PatternValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("pattern", ctx._enabled ? ctx.pattern : null);
      }
    },
    inputs: {
      pattern: "pattern"
    },
    standalone: false,
    features: [\u0275\u0275ProvidersFeature([PATTERN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PatternValidator, [{
    type: Directive,
    args: [{
      selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]",
      providers: [PATTERN_VALIDATOR],
      host: {
        "[attr.pattern]": "_enabled ? pattern : null"
      },
      standalone: false
    }]
  }], null, {
    pattern: [{
      type: Input
    }]
  });
})();
var SHARED_FORM_DIRECTIVES = [\u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator, MinValidator, MaxValidator];
var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
var \u0275InternalFormsSharedModule = class _\u0275InternalFormsSharedModule {
  static \u0275fac = function \u0275InternalFormsSharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _\u0275InternalFormsSharedModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _\u0275InternalFormsSharedModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(\u0275InternalFormsSharedModule, [{
    type: NgModule,
    args: [{
      declarations: SHARED_FORM_DIRECTIVES,
      exports: SHARED_FORM_DIRECTIVES
    }]
  }], null, null);
})();
var FormArray = class extends AbstractControl {
  /**
   * Creates a new `FormArray` instance.
   *
   * @param controls An array of child controls. Each child control is given an index
   * where it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or an `AbstractControlOptions` object that contains validation functions
   * and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions
   *
   */
  constructor(controls, validatorOrOpts, asyncValidator) {
    super(pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
    this.controls = controls;
    this._initObservables();
    this._setUpdateStrategy(validatorOrOpts);
    this._setUpControls();
    this.updateValueAndValidity({
      onlySelf: true,
      // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
      // `VALID` or `INVALID`.
      // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
      // to `true` to allow that during the control creation process.
      emitEvent: !!this.asyncValidator
    });
  }
  controls;
  /**
   * Get the `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to retrieve the control. If `index` is negative, it will wrap
   *     around from the back, and if index is greatly negative (less than `-length`), the result is
   * undefined. This behavior is the same as `Array.at(index)`.
   */
  at(index) {
    return this.controls[this._adjustIndex(index)];
  }
  /**
   * Insert a new `AbstractControl` at the end of the array.
   *
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is added.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  push(control, options = {}) {
    this.controls.push(control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Insert a new `AbstractControl` at the given `index` in the array.
   *
   * @param index Index in the array to insert the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), prepends to the array.
   * This behavior is the same as `Array.splice(index, 0, control)`.
   * @param control Form control to be inserted
   * @param options Specifies whether this FormArray instance should emit events after a new
   *     control is inserted.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * inserted. When false, no events are emitted.
   */
  insert(index, control, options = {}) {
    this.controls.splice(index, 0, control);
    this._registerControl(control);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Remove the control at the given `index` in the array.
   *
   * @param index Index in the array to remove the control.  If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), removes the first
   *     element. This behavior is the same as `Array.splice(index, 1)`.
   * @param options Specifies whether this FormArray instance should emit events after a
   *     control is removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * removed. When false, no events are emitted.
   */
  removeAt(index, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Replace an existing control.
   *
   * @param index Index in the array to replace the control. If `index` is negative, wraps around
   *     from the back. If `index` is greatly negative (less than `-length`), replaces the first
   *     element. This behavior is the same as `Array.splice(index, 1, control)`.
   * @param control The `AbstractControl` control to replace the existing control
   * @param options Specifies whether this FormArray instance should emit events after an
   *     existing control is replaced with a new one.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control is
   * replaced with a new one. When false, no events are emitted.
   */
  setControl(index, control, options = {}) {
    let adjustedIndex = this._adjustIndex(index);
    if (adjustedIndex < 0) adjustedIndex = 0;
    if (this.controls[adjustedIndex]) this.controls[adjustedIndex]._registerOnCollectionChange(() => {
    });
    this.controls.splice(adjustedIndex, 1);
    if (control) {
      this.controls.splice(adjustedIndex, 0, control);
      this._registerControl(control);
    }
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
    this._onCollectionChange();
  }
  /**
   * Length of the control array.
   */
  get length() {
    return this.controls.length;
  }
  /**
   * Sets the value of the `FormArray`. It accepts an array that matches
   * the structure of the control.
   *
   * This method performs strict checks, and throws an error if you try
   * to set the value of a control that doesn't exist or if you exclude the
   * value of a control.
   *
   * @usageNotes
   * ### Set the values for the controls in the form array
   *
   * ```ts
   * const arr = new FormArray([
   *   new FormControl(),
   *   new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.setValue(['Nancy', 'Drew']);
   * console.log(arr.value);   // ['Nancy', 'Drew']
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control value is updated.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  setValue(value, options = {}) {
    assertAllValuesPresent(this, false, value);
    value.forEach((newValue, index) => {
      assertControlPresent(this, false, index);
      this.at(index).setValue(newValue, {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Patches the value of the `FormArray`. It accepts an array that matches the
   * structure of the control, and does its best to match the values to the correct
   * controls in the group.
   *
   * It accepts both super-sets and sub-sets of the array without throwing an error.
   *
   * @usageNotes
   * ### Patch the values for controls in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.value);   // [null, null]
   *
   * arr.patchValue(['Nancy']);
   * console.log(arr.value);   // ['Nancy', null]
   * ```
   *
   * @param value Array of latest values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when the control
   * value is updated. When false, no events are emitted. The configuration options are passed to
   * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
   */
  patchValue(value, options = {}) {
    if (value == null) return;
    value.forEach((newValue, index) => {
      if (this.at(index)) {
        this.at(index).patchValue(newValue, {
          onlySelf: true,
          emitEvent: options.emitEvent
        });
      }
    });
    this.updateValueAndValidity(options);
  }
  /**
   * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
   * value of all descendants to null or null maps.
   *
   * You reset to a specific form state by passing in an array of states
   * that matches the structure of the control. The state is a standalone value
   * or a form state object with both a value and a disabled status.
   *
   * @usageNotes
   * ### Reset the values in a form array
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * arr.reset(['name', 'last name']);
   *
   * console.log(arr.value);  // ['name', 'last name']
   * ```
   *
   * ### Reset the values in a form array and the disabled status for the first control
   *
   * ```ts
   * arr.reset([
   *   {value: 'name', disabled: true},
   *   'last'
   * ]);
   *
   * console.log(arr.value);  // ['last']
   * console.log(arr.at(0).status);  // 'DISABLED'
   * ```
   *
   * @param value Array of values for the controls
   * @param options Configure options that determine how the control propagates changes and
   * emits events after the value changes
   *
   * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
   * is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is reset.
   * When false, no events are emitted.
   * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
   * updateValueAndValidity} method.
   */
  reset(value = [], options = {}) {
    this._forEachChild((control, index) => {
      control.reset(value[index], {
        onlySelf: true,
        emitEvent: options.emitEvent
      });
    });
    this._updatePristine(options, this);
    this._updateTouched(options, this);
    this.updateValueAndValidity(options);
  }
  /**
   * The aggregate value of the array, including any disabled controls.
   *
   * Reports all values regardless of disabled status.
   */
  getRawValue() {
    return this.controls.map((control) => control.getRawValue());
  }
  /**
   * Remove all controls in the `FormArray`.
   *
   * @param options Specifies whether this FormArray instance should emit events after all
   *     controls are removed.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges` observables emit events with the latest status and value when all controls
   * in this FormArray instance are removed. When false, no events are emitted.
   *
   * @usageNotes
   * ### Remove all elements from a FormArray
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   * console.log(arr.length);  // 2
   *
   * arr.clear();
   * console.log(arr.length);  // 0
   * ```
   *
   * It's a simpler and more efficient alternative to removing all elements one by one:
   *
   * ```ts
   * const arr = new FormArray([
   *    new FormControl(),
   *    new FormControl()
   * ]);
   *
   * while (arr.length) {
   *    arr.removeAt(0);
   * }
   * ```
   */
  clear(options = {}) {
    if (this.controls.length < 1) return;
    this._forEachChild((control) => control._registerOnCollectionChange(() => {
    }));
    this.controls.splice(0);
    this.updateValueAndValidity({
      emitEvent: options.emitEvent
    });
  }
  /**
   * Adjusts a negative index by summing it with the length of the array. For very negative
   * indices, the result may remain negative.
   * @internal
   */
  _adjustIndex(index) {
    return index < 0 ? index + this.length : index;
  }
  /** @internal */
  _syncPendingControls() {
    let subtreeUpdated = this.controls.reduce((updated, child) => {
      return child._syncPendingControls() ? true : updated;
    }, false);
    if (subtreeUpdated) this.updateValueAndValidity({
      onlySelf: true
    });
    return subtreeUpdated;
  }
  /** @internal */
  _forEachChild(cb) {
    this.controls.forEach((control, index) => {
      cb(control, index);
    });
  }
  /** @internal */
  _updateValue() {
    this.value = this.controls.filter((control) => control.enabled || this.disabled).map((control) => control.value);
  }
  /** @internal */
  _anyControls(condition) {
    return this.controls.some((control) => control.enabled && condition(control));
  }
  /** @internal */
  _setUpControls() {
    this._forEachChild((control) => this._registerControl(control));
  }
  /** @internal */
  _allControlsDisabled() {
    for (const control of this.controls) {
      if (control.enabled) return false;
    }
    return this.controls.length > 0 || this.disabled;
  }
  _registerControl(control) {
    control.setParent(this);
    control._registerOnCollectionChange(this._onCollectionChange);
  }
  /** @internal */
  _find(name) {
    return this.at(name) ?? null;
  }
};
function isAbstractControlOptions(options) {
  return !!options && (options.asyncValidators !== void 0 || options.validators !== void 0 || options.updateOn !== void 0);
}
var FormBuilder = class _FormBuilder {
  useNonNullable = false;
  /**
   * @description
   * Returns a FormBuilder in which automatically constructed `FormControl` elements
   * have `{nonNullable: true}` and are non-nullable.
   *
   * **Constructing non-nullable controls**
   *
   * When constructing a control, it will be non-nullable, and will reset to its initial value.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.control('Alex'); // FormControl<string>
   * name.reset();
   * console.log(name); // 'Alex'
   * ```
   *
   * **Constructing non-nullable groups or arrays**
   *
   * When constructing a group or array, all automatically created inner controls will be
   * non-nullable, and will reset to their initial values.
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * let name = nnfb.group({who: 'Alex'}); // FormGroup<{who: FormControl<string>}>
   * name.reset();
   * console.log(name); // {who: 'Alex'}
   * ```
   * **Constructing *nullable* fields on groups or arrays**
   *
   * It is still possible to have a nullable field. In particular, any `FormControl` which is
   * *already* constructed will not be altered. For example:
   *
   * ```ts
   * let nnfb = new FormBuilder().nonNullable;
   * // FormGroup<{who: FormControl<string|null>}>
   * let name = nnfb.group({who: new FormControl('Alex')});
   * name.reset(); console.log(name); // {who: null}
   * ```
   *
   * Because the inner control is constructed explicitly by the caller, the builder has
   * no control over how it is created, and cannot exclude the `null`.
   */
  get nonNullable() {
    const nnfb = new _FormBuilder();
    nnfb.useNonNullable = true;
    return nnfb;
  }
  group(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    let newOptions = {};
    if (isAbstractControlOptions(options)) {
      newOptions = options;
    } else if (options !== null) {
      newOptions.validators = options.validator;
      newOptions.asyncValidators = options.asyncValidator;
    }
    return new FormGroup(reducedControls, newOptions);
  }
  /**
   * @description
   * Constructs a new `FormRecord` instance. Accepts a single generic argument, which is an object
   * containing all the keys and corresponding inner control types.
   *
   * @param controls A collection of child controls. The key for each child is the name
   * under which it is registered.
   *
   * @param options Configuration options object for the `FormRecord`. The object should have the
   * `AbstractControlOptions` type and might contain the following fields:
   * * `validators`: A synchronous validator function, or an array of validator functions.
   * * `asyncValidators`: A single async validator or array of async validator functions.
   * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur'
   * | submit').
   */
  record(controls, options = null) {
    const reducedControls = this._reduceControls(controls);
    return new FormRecord(reducedControls, options);
  }
  /**
   * @description
   * Constructs a new `FormControl` with the given state, validators and options. Sets
   * `{nonNullable: true}` in the options to get a non-nullable control. Otherwise, the
   * control will be nullable. Accepts a single generic argument, which is the type  of the
   * control's value.
   *
   * @param formState Initializes the control with an initial state value, or
   * with an object that contains both a value and a disabled status.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of
   * such functions, or a `FormControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator
   * functions.
   *
   * @usageNotes
   *
   * ### Initialize a control as disabled
   *
   * The following example returns a control with an initial value in a disabled state.
   *
   * {@example forms/ts/formBuilder/form_builder_example.ts region='disabled-control'}
   */
  control(formState, validatorOrOpts, asyncValidator) {
    let newOptions = {};
    if (!this.useNonNullable) {
      return new FormControl(formState, validatorOrOpts, asyncValidator);
    }
    if (isAbstractControlOptions(validatorOrOpts)) {
      newOptions = validatorOrOpts;
    } else {
      newOptions.validators = validatorOrOpts;
      newOptions.asyncValidators = asyncValidator;
    }
    return new FormControl(formState, __spreadProps(__spreadValues({}, newOptions), {
      nonNullable: true
    }));
  }
  /**
   * Constructs a new `FormArray` from the given array of configurations,
   * validators and options. Accepts a single generic argument, which is the type of each control
   * inside the array.
   *
   * @param controls An array of child controls or control configs. Each child control is given an
   *     index when it is registered.
   *
   * @param validatorOrOpts A synchronous validator function, or an array of such functions, or an
   *     `AbstractControlOptions` object that contains
   * validation functions and a validation trigger.
   *
   * @param asyncValidator A single async validator or array of async validator functions.
   */
  array(controls, validatorOrOpts, asyncValidator) {
    const createdControls = controls.map((c) => this._createControl(c));
    return new FormArray(createdControls, validatorOrOpts, asyncValidator);
  }
  /** @internal */
  _reduceControls(controls) {
    const createdControls = {};
    Object.keys(controls).forEach((controlName) => {
      createdControls[controlName] = this._createControl(controls[controlName]);
    });
    return createdControls;
  }
  /** @internal */
  _createControl(controls) {
    if (controls instanceof FormControl) {
      return controls;
    } else if (controls instanceof AbstractControl) {
      return controls;
    } else if (Array.isArray(controls)) {
      const value = controls[0];
      const validator = controls.length > 1 ? controls[1] : null;
      const asyncValidator = controls.length > 2 ? controls[2] : null;
      return this.control(value, validator, asyncValidator);
    } else {
      return this.control(controls);
    }
  }
  static \u0275fac = function FormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FormBuilder,
    factory: _FormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var NonNullableFormBuilder = class _NonNullableFormBuilder {
  static \u0275fac = function NonNullableFormBuilder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NonNullableFormBuilder)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NonNullableFormBuilder,
    factory: () => (() => inject(FormBuilder).nonNullable)(),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NonNullableFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(FormBuilder).nonNullable
    }]
  }], null, null);
})();
var UntypedFormBuilder = class _UntypedFormBuilder extends FormBuilder {
  group(controlsConfig, options = null) {
    return super.group(controlsConfig, options);
  }
  /**
   * Like `FormBuilder#control`, except the resulting control is untyped.
   */
  control(formState, validatorOrOpts, asyncValidator) {
    return super.control(formState, validatorOrOpts, asyncValidator);
  }
  /**
   * Like `FormBuilder#array`, except the resulting array is untyped.
   */
  array(controlsConfig, validatorOrOpts, asyncValidator) {
    return super.array(controlsConfig, validatorOrOpts, asyncValidator);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UntypedFormBuilder_BaseFactory;
    return function UntypedFormBuilder_Factory(__ngFactoryType__) {
      return (\u0275UntypedFormBuilder_BaseFactory || (\u0275UntypedFormBuilder_BaseFactory = \u0275\u0275getInheritedFactory(_UntypedFormBuilder)))(__ngFactoryType__ || _UntypedFormBuilder);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _UntypedFormBuilder,
    factory: _UntypedFormBuilder.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UntypedFormBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = new Version("19.2.11");
var FormsModule = class _FormsModule {
  /**
   * @description
   * Provides options for configuring the forms module.
   *
   * @param opts An object of configuration options
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _FormsModule,
      providers: [{
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function FormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FormsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormsModule, [{
    type: NgModule,
    args: [{
      declarations: TEMPLATE_DRIVEN_DIRECTIVES,
      exports: [\u0275InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();
var ReactiveFormsModule = class _ReactiveFormsModule {
  /**
   * @description
   * Provides options for configuring the reactive forms module.
   *
   * @param opts An object of configuration options
   * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
   * binding is used with reactive form directives.
   * * `callSetDisabledState` Configures whether to `always` call `setDisabledState`, which is more
   * correct, or to only call it `whenDisabled`, which is the legacy behavior.
   */
  static withConfig(opts) {
    return {
      ngModule: _ReactiveFormsModule,
      providers: [{
        provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
        useValue: opts.warnOnNgModelWithFormControl ?? "always"
      }, {
        provide: CALL_SET_DISABLED_STATE,
        useValue: opts.callSetDisabledState ?? setDisabledStateDefault
      }]
    };
  }
  static \u0275fac = function ReactiveFormsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReactiveFormsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ReactiveFormsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [\u0275InternalFormsSharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReactiveFormsModule, [{
    type: NgModule,
    args: [{
      declarations: [REACTIVE_DRIVEN_DIRECTIVES],
      exports: [\u0275InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/shared/components/navbar/navbar.component.ts
var _c0 = (a0, a1) => ({ "sticky": a0, "minimal": a1 });
function NavbarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function NavbarComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleClass());
    });
    \u0275\u0275elementStart(1, "span", 7);
    \u0275\u0275element(2, "span", 8)(3, "span", 9)(4, "span", 10);
    \u0275\u0275elementEnd()();
  }
}
function NavbarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "ul", 12)(2, "li", 13)(3, "a", 14)(4, "span", 15);
    \u0275\u0275text(5, "In\xEDcio");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "li", 13)(7, "a", 16)(8, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick("realidade"));
    });
    \u0275\u0275text(9, "Realidade");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "li", 13)(11, "a", 18)(12, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick("erro"));
    });
    \u0275\u0275text(13, "Erro invis\xEDvel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "li", 13)(15, "a", 19)(16, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick("produtos"));
    });
    \u0275\u0275text(17, "Produtos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "li", 13)(19, "a", 20)(20, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_20_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick("plano"));
    });
    \u0275\u0275text(21, "Plano");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "li", 13)(23, "a", 21)(24, "span", 15);
    \u0275\u0275text(25, "Contato");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "ul", 22)(27, "li", 13)(28, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleClass();
      return \u0275\u0275resetView(ctx_r1.onClick("home"));
    });
    \u0275\u0275text(29, "In\xEDcio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li", 13)(31, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_31_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleClass();
      return \u0275\u0275resetView(ctx_r1.onClick("realidade"));
    });
    \u0275\u0275text(32, "Realidade");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "li", 13)(34, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleClass();
      return \u0275\u0275resetView(ctx_r1.onClick("erro"));
    });
    \u0275\u0275text(35, "Erro invis\xEDvel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "li", 13)(37, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_37_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleClass();
      return \u0275\u0275resetView(ctx_r1.onClick("produtos"));
    });
    \u0275\u0275text(38, "Produtos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "li", 13)(40, "span", 17);
    \u0275\u0275listener("click", function NavbarComponent_div_7_Template_span_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.toggleClass();
      return \u0275\u0275resetView(ctx_r1.onClick("plano"));
    });
    \u0275\u0275text(41, "Plano");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "li", 13)(43, "a", 23)(44, "span", 15);
    \u0275\u0275text(45, "Contato");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("routerLink", "/");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/");
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", "/");
  }
}
function NavbarComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "a", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.ctaHref, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ctaLabel);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(viewportScroller, platformId) {
    this.viewportScroller = viewportScroller;
    this.platformId = platformId;
    this.fixSticky = false;
    this.minimalNav = false;
    this.ctaHref = "https://wa.me/5531975474785?text=Quero%20falar%20com%20a%20VICS";
    this.ctaLabel = "Falar com a VICS";
    this.isSticky = false;
    this.isBrowser = false;
    this.classApplied = false;
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  onWindowScroll() {
    if (this.isBrowser) {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.isSticky = scrollPosition >= 50;
    }
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
    this.isSticky = this.fixSticky;
  }
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(ViewportScroller), \u0275\u0275directiveInject(PLATFORM_ID));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, inputs: { fixSticky: "fixSticky", minimalNav: "minimalNav", ctaHref: "ctaHref", ctaLabel: "ctaLabel" }, standalone: false, decls: 9, vars: 9, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 3, "ngClass"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], ["class", "navbar-toggler", "type", "button", 3, "click", 4, "ngIf"], ["class", "collapse navbar-collapse", "id", "navbarSupportedContent", 4, "ngIf"], ["class", "navbar-actions", 4, "ngIf"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "/"], [1, "nav-link"], ["fragment", "realidade", 3, "routerLink"], [1, "nav-link", 3, "click"], ["fragment", "erro", 3, "routerLink"], ["fragment", "produtos", 3, "routerLink"], ["fragment", "plano", 3, "routerLink"], ["fragment", "contact", 3, "routerLink"], [1, "navbar-nav", "ml-auto", "for-responsive"], ["routerLink", "/", "fragment", "contact"], [1, "navbar-actions"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", "btn-sm", 3, "href"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span");
        \u0275\u0275text(4, "V");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, "ICS");
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, NavbarComponent_button_6_Template, 5, 0, "button", 3)(7, NavbarComponent_div_7_Template, 46, 5, "div", 4)(8, NavbarComponent_div_8_Template, 3, 2, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("active", ctx.classApplied);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c0, ctx.isSticky, ctx.minimalNav));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", !ctx.minimalNav);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.minimalNav);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.minimalNav);
      }
    }, dependencies: [NgClass, NgIf, RouterLink], styles: ["\n\n.navbar.minimal[_ngcontent-%COMP%] {\n  background: rgba(11, 10, 12, 0.92);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);\n}\n.navbar.minimal[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #f5f5f5;\n  font-weight: 800;\n}\n.navbar.minimal[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--mainColor);\n}\n.navbar.minimal[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.navbar.minimal[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 10px 14px;\n  background-color: #ff2c57;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n}\n.navbar.minimal[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover, \n.navbar.minimal[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  background-color: #ff4c73;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: false, template: `<nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        [class.active]="classApplied"
        [ngClass]="{'sticky': isSticky, 'minimal': minimalNav}">
        <div class="container">
                <a class="navbar-brand" routerLink="/"><span>V</span>ICS</a>
                <button class="navbar-toggler" type="button"
                        *ngIf="!minimalNav"
                        (click)="toggleClass()">
                        <span class="burger-menu">
                                <span class="top-bar"></span>
                                <span class="middle-bar"></span>
                                <span class="bottom-bar"></span>
                        </span>
                </button>
                <div class="collapse navbar-collapse"
                        id="navbarSupportedContent" *ngIf="!minimalNav">
                        <ul class="navbar-nav ml-auto">
                                <li class="nav-item"><a href="/"><span
                                                        class="nav-link">In\xEDcio</span></a></li>
                                <li class="nav-item"><a [routerLink]="'/'"
                                                fragment="realidade"><span
                                                        class="nav-link"
                                                        (click)="onClick('realidade')">Realidade</span></a></li>
                                <li class="nav-item"><a [routerLink]="'/'"
                                                fragment="erro"><span
                                                        class="nav-link"
                                                        (click)="onClick('erro')">Erro invis\xEDvel</span></a></li>
                                <li class="nav-item"><a [routerLink]="'/'"
                                                fragment="produtos"><span
                                                        class="nav-link"
                                                        (click)="onClick('produtos')">Produtos</span></a></li>
                                <li class="nav-item"><a [routerLink]="'/'"
                                                fragment="plano"><span
                                                        class="nav-link"
                                                        (click)="onClick('plano')">Plano</span></a></li>
                                <li class="nav-item"><a
                                                [routerLink]="'/'"
                                                fragment="contact"><span
                                                        class="nav-link">Contato</span></a></li>
                        </ul>
                        <ul class="navbar-nav ml-auto for-responsive">
                                <li class="nav-item"><span class="nav-link"
                                                (click)="toggleClass(); onClick('home')">In\xEDcio</span></li>
                                <li class="nav-item"><span class="nav-link"
                                                (click)="toggleClass(); onClick('realidade')">Realidade</span></li>
                                <li class="nav-item"><span class="nav-link"
                                                (click)="toggleClass(); onClick('erro')">Erro invis\xEDvel</span></li>
                                <li class="nav-item"><span class="nav-link"
                                                (click)="toggleClass(); onClick('produtos')">Produtos</span></li>
                                <li class="nav-item"><span class="nav-link"
                                                (click)="toggleClass(); onClick('plano')">Plano</span></li>
                                <li class="nav-item"><a routerLink="/"
                                                fragment="contact"><span
                                                        class="nav-link">Contato</span></a></li>
                        </ul>
                </div>
                <div class="navbar-actions" *ngIf="minimalNav">
                        <a class="btn btn-primary btn-sm" [href]="ctaHref" target="_blank" rel="noopener">{{ ctaLabel }}</a>
                </div>
        </div>
</nav>
`, styles: ["/* src/app/shared/components/navbar/navbar.component.scss */\n.navbar.minimal {\n  background: rgba(11, 10, 12, 0.92);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);\n}\n.navbar.minimal .navbar-brand {\n  color: #f5f5f5;\n  font-weight: 800;\n}\n.navbar.minimal .navbar-brand span {\n  color: var(--mainColor);\n}\n.navbar.minimal .navbar-actions {\n  margin-left: auto;\n}\n.navbar.minimal .navbar-actions .btn {\n  font-weight: 700;\n  padding: 10px 14px;\n  background-color: #ff2c57;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n}\n.navbar.minimal .navbar-actions .btn:hover,\n.navbar.minimal .navbar-actions .btn:focus {\n  background-color: #ff4c73;\n  border-color: #ff2c57;\n  color: #0b0a0c;\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], { fixSticky: [{
    type: Input
  }], minimalNav: [{
    type: Input
  }], ctaHref: [{
    type: Input
  }], ctaLabel: [{
    type: Input
  }], onWindowScroll: [{
    type: HostListener,
    args: ["window:scroll", []]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 17 });
})();

// node_modules/seamless-scroll-polyfill/lib/common.js
var checkBehavior = (behavior) => {
  return behavior === void 0 || behavior === "auto" || behavior === "instant" || behavior === "smooth";
};
function elementScrollXY(x, y) {
  this.scrollLeft = x;
  this.scrollTop = y;
}
var failedExecute = (method, object, reason = "cannot convert to dictionary.") => `Failed to execute '${method}' on '${object}': ${reason}`;
var failedExecuteInvalidEnumValue = (method, object, value) => failedExecute(method, object, `The provided value '${value}' is not a valid enum value of type ScrollBehavior.`);
var backupMethod = (proto, method, fallback) => {
  var _a;
  const backup = `__SEAMLESS.BACKUP$${method}`;
  if (!proto[backup] && proto[method] && !((_a = proto[method]) === null || _a === void 0 ? void 0 : _a.__isPolyfill)) {
    proto[backup] = proto[method];
  }
  return proto[backup] || fallback;
};
var isObject = (value) => {
  const type = typeof value;
  return value !== null && (type === "object" || type === "function");
};
var isScrollBehaviorSupported = (config) => "scrollBehavior" in window.document.documentElement.style && (config === null || config === void 0 ? void 0 : config.forcePolyfill) !== true;
var markPolyfill = (method) => {
  Object.defineProperty(method, "__isPolyfill", {
    value: true
  });
};
var modifyPrototypes = (prop, func) => {
  markPolyfill(func);
  [HTMLElement.prototype, SVGElement.prototype, Element.prototype].forEach((prototype) => {
    backupMethod(prototype, prop);
    prototype[prop] = func;
  });
};
var scrollingElement = (element) => element.ownerDocument.scrollingElement || element.ownerDocument.documentElement;

// node_modules/seamless-scroll-polyfill/lib/scroll-end-event.js
function scrollEndEvent(bubbles) {
  if (typeof Event === "function") {
    return new Event("scrollend", {
      bubbles,
      cancelable: false
    });
  }
  const event = document.createEvent("Event");
  event.initEvent("scrollend", bubbles, false);
  return event;
}

// node_modules/seamless-scroll-polyfill/lib/scroll-step.js
var ease = (k) => {
  return 0.5 * (1 - Math.cos(Math.PI * k));
};
function now() {
  var _a;
  let fn;
  if ((_a = window.performance) === null || _a === void 0 ? void 0 : _a.now) {
    fn = () => window.performance.now();
  } else {
    fn = () => window.Date.now();
  }
  now = fn;
  return fn();
}
var DURATION = 500;
var step = (context) => {
  const currentTime = now();
  const elapsed = (currentTime - context.timeStamp) / (context.duration || DURATION);
  if (elapsed > 1) {
    context.method(context.targetX, context.targetY);
    context.callback();
    return;
  }
  const value = (context.timingFunc || ease)(elapsed);
  const currentX = context.startX + (context.targetX - context.startX) * value;
  const currentY = context.startY + (context.targetY - context.startY) * value;
  context.method(currentX, currentY);
  context.rafId = window.requestAnimationFrame(() => {
    step(context);
  });
};

// node_modules/seamless-scroll-polyfill/lib/scroll.js
var nonFinite = (value) => {
  if (!isFinite(value)) {
    return 0;
  }
  return Number(value);
};
var isConnected = (node) => {
  var _a;
  return (_a = node.isConnected) !== null && _a !== void 0 ? _a : !node.ownerDocument || // eslint-disable-next-line no-bitwise
  !(node.ownerDocument.compareDocumentPosition(node) & /** DOCUMENT_POSITION_DISCONNECTED */
  1);
};
var scrollWithOptions = (element, options, config) => {
  var _a, _b;
  if (!isConnected(element)) {
    return;
  }
  const startX = element.scrollLeft;
  const startY = element.scrollTop;
  const targetX = nonFinite((_a = options.left) !== null && _a !== void 0 ? _a : startX);
  const targetY = nonFinite((_b = options.top) !== null && _b !== void 0 ? _b : startY);
  if (targetX === startX && targetY === startY) {
    return;
  }
  const fallback = backupMethod(HTMLElement.prototype, "scroll", elementScrollXY);
  const method = backupMethod(Object.getPrototypeOf(element), "scroll", fallback).bind(element);
  if (options.behavior !== "smooth") {
    method(targetX, targetY);
    return;
  }
  const removeEventListener = () => {
    window.removeEventListener("wheel", cancelScroll);
    window.removeEventListener("touchmove", cancelScroll);
  };
  const callback = () => {
    removeEventListener();
    const isDocument = element.nodeType === /** Node.DOCUMENT_NODE */
    9;
    element.dispatchEvent(scrollEndEvent(isDocument));
  };
  const context = Object.assign(Object.assign({}, config), {
    timeStamp: now(),
    startX,
    startY,
    targetX,
    targetY,
    rafId: 0,
    method,
    callback
  });
  const cancelScroll = () => {
    window.cancelAnimationFrame(context.rafId);
    removeEventListener();
  };
  window.addEventListener("wheel", cancelScroll, {
    passive: true,
    once: true
  });
  window.addEventListener("touchmove", cancelScroll, {
    passive: true,
    once: true
  });
  step(context);
};
var isWindow = (obj) => obj.window === obj;
var createScroll = (scrollName) => (target, scrollOptions, config) => {
  const [element, scrollType] = isWindow(target) ? [scrollingElement(target.document.documentElement), "Window"] : [target, "Element"];
  const options = scrollOptions !== null && scrollOptions !== void 0 ? scrollOptions : {};
  if (!isObject(options)) {
    throw new TypeError(failedExecute(scrollName, scrollType));
  }
  if (!checkBehavior(options.behavior)) {
    throw new TypeError(failedExecuteInvalidEnumValue(scrollName, scrollType, options.behavior));
  }
  if (scrollName === "scrollBy") {
    options.left = nonFinite(options.left) + element.scrollLeft;
    options.top = nonFinite(options.top) + element.scrollTop;
  }
  scrollWithOptions(element, options, config);
};
var scroll = /* @__PURE__ */ createScroll("scroll");
var scrollTo = /* @__PURE__ */ createScroll("scrollTo");
var scrollBy = /* @__PURE__ */ createScroll("scrollBy");
var elementScroll = scroll;

// node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js
var normalizeWritingMode = (writingMode) => {
  switch (writingMode) {
    case "horizontal-tb":
    case "lr":
    case "lr-tb":
    case "rl":
    case "rl-tb":
      return 0;
    case "vertical-rl":
    case "tb":
    case "tb-rl":
      return 1;
    case "vertical-lr":
    case "tb-lr":
      return 2;
    case "sideways-rl":
      return 3;
    case "sideways-lr":
      return 4;
  }
  return 0;
};
var calcPhysicalAxis = (writingMode, isLTR, hPos, vPos) => {
  let layout = 0;
  if (!isLTR) {
    layout ^= 2;
  }
  switch (writingMode) {
    /**
     * ↓→
     * | 1 | 2 | 3 |
     * | 4 | 5 |   |
     * |   |   |   |
     *
     * RTL: ↓←
     * | 3 | 2 | 1 |
     * |   | 5 | 4 |
     * |   |   |   |
     */
    case 0:
      layout = layout >> 1 | (layout & 1) << 1;
      [hPos, vPos] = [vPos, hPos];
      break;
    /**
     * ↓←
     * |   | 4 | 1 |
     * |   | 5 | 2 |
     * |   |   | 3 |
     *
     * RTL: ↑←
     * |   |   | 3 |
     * |   | 5 | 2 |
     * |   | 4 | 1 |
     */
    case 1:
    case 3:
      layout ^= 1;
      break;
    /**
     * ↑→
     * | 3 |   |   |
     * | 2 | 5 |   |
     * | 1 | 4 |   |
     *
     * RTL: ↓→
     * | 1 | 4 |   |
     * | 2 | 5 |   |
     * | 3 |   |   |
     */
    case 4:
      layout ^= 2;
      break;
  }
  return [layout, hPos, vPos];
};
var isXReversed = (computedStyle) => {
  const layout = calcPhysicalAxis(normalizeWritingMode(computedStyle.writingMode), computedStyle.direction !== "rtl", void 0, void 0)[0];
  return (layout & 1) === 1;
};
var toPhysicalAlignment = (options, writingMode, isLTR) => {
  const [layout, hPos, vPos] = calcPhysicalAxis(writingMode, isLTR, options.block || "start", options.inline || "nearest");
  return [hPos, vPos].map((value, index) => {
    switch (value) {
      case "center":
        return 1;
      case "nearest":
        return 0;
      default: {
        const reverse = layout >> index & 1;
        return value === "start" === !reverse ? 2 : 3;
      }
    }
  });
};
var mapNearest = (align, scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, elementEdgeStart, elementEdgeEnd, elementSize) => {
  if (align !== 0) {
    return align;
  }
  if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
    return null;
  }
  if (elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize || elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize) {
    return 2;
  }
  if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
    return 3;
  }
  return null;
};
var canOverflow = (overflow) => {
  return overflow !== "visible" && overflow !== "clip";
};
var getFrameElement = (element) => {
  var _a;
  try {
    return ((_a = element.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.frameElement) || null;
  } catch (_b) {
    return null;
  }
};
var isScrollable = (element, computedStyle) => {
  if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
    return canOverflow(computedStyle.overflowY) || canOverflow(computedStyle.overflowX) || element === scrollingElement(element);
  }
  return false;
};
var parentElement = (element) => {
  const pNode = element.parentNode;
  const pElement = element.parentElement;
  if (pElement === null && pNode !== null) {
    if (pNode.nodeType === /** Node.DOCUMENT_FRAGMENT_NODE */
    11) {
      return pNode.host;
    }
    if (pNode.nodeType === /** Node.DOCUMENT_NODE */
    9) {
      return getFrameElement(element);
    }
  }
  return pElement;
};
var clamp = (value, min, max) => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};
var getSupportedScrollMarginProperty = (ownerDocument) => {
  return ["scroll-margin", "scroll-snap-margin"].filter((property) => property in ownerDocument.documentElement.style)[0];
};
var getElementScrollSnapArea = (element, elementRect, computedStyle) => {
  const {
    top,
    right,
    bottom,
    left
  } = elementRect;
  const scrollProperty = getSupportedScrollMarginProperty(element.ownerDocument);
  if (!scrollProperty) {
    return [top, right, bottom, left];
  }
  const scrollMarginValue = (edge) => {
    const value = computedStyle.getPropertyValue(`${scrollProperty}-${edge}`);
    return parseInt(value, 10) || 0;
  };
  return [top - scrollMarginValue("top"), right + scrollMarginValue("right"), bottom + scrollMarginValue("bottom"), left - scrollMarginValue("left")];
};
var calcAlignEdge = (align, start, end) => {
  switch (align) {
    case 1:
      return (start + end) / 2;
    case 3:
      return end;
    case 2:
    case 0:
      return start;
  }
};
var getFrameViewport = (frame, frameRect) => {
  var _a, _b, _c;
  const visualViewport = (_a = frame.ownerDocument.defaultView) === null || _a === void 0 ? void 0 : _a.visualViewport;
  const [x, y, width, height] = frame === scrollingElement(frame) ? [0, 0, (_b = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.width) !== null && _b !== void 0 ? _b : frame.clientWidth, (_c = visualViewport === null || visualViewport === void 0 ? void 0 : visualViewport.height) !== null && _c !== void 0 ? _c : frame.clientHeight] : [frameRect.left, frameRect.top, frame.clientWidth, frame.clientHeight];
  const left = x + frame.clientLeft;
  const top = y + frame.clientTop;
  const right = left + width;
  const bottom = top + height;
  return [top, right, bottom, left];
};
var computeScrollIntoView = (element, options) => {
  const actions = [];
  let ownerDocument = element.ownerDocument;
  let ownerWindow = ownerDocument.defaultView;
  if (!ownerWindow) {
    return actions;
  }
  const computedStyle = window.getComputedStyle(element);
  const isLTR = computedStyle.direction !== "rtl";
  const writingMode = normalizeWritingMode(computedStyle.writingMode || computedStyle.getPropertyValue("-webkit-writing-mode") || computedStyle.getPropertyValue("-ms-writing-mode"));
  const [alignH, alignV] = toPhysicalAlignment(options, writingMode, isLTR);
  let [top, right, bottom, left] = getElementScrollSnapArea(element, element.getBoundingClientRect(), computedStyle);
  for (let frame = parentElement(element); frame !== null; frame = parentElement(frame)) {
    if (ownerDocument !== frame.ownerDocument) {
      ownerDocument = frame.ownerDocument;
      ownerWindow = ownerDocument.defaultView;
      if (!ownerWindow) {
        break;
      }
      const {
        left: dX,
        top: dY
      } = frame.getBoundingClientRect();
      top += dY;
      right += dX;
      bottom += dY;
      left += dX;
    }
    const frameStyle = ownerWindow.getComputedStyle(frame);
    if (frameStyle.position === "fixed") {
      break;
    }
    if (!isScrollable(frame, frameStyle)) {
      continue;
    }
    const frameRect = frame.getBoundingClientRect();
    const [frameTop, frameRight, frameBottom, frameLeft] = getFrameViewport(frame, frameRect);
    const eAlignH = mapNearest(alignH, frameLeft, frameRight, frame.clientWidth, left, right, right - left);
    const eAlignV = mapNearest(alignV, frameTop, frameBottom, frame.clientHeight, top, bottom, bottom - top);
    const diffX = eAlignH === null ? 0 : calcAlignEdge(eAlignH, left, right) - calcAlignEdge(eAlignH, frameLeft, frameRight);
    const diffY = eAlignV === null ? 0 : calcAlignEdge(eAlignV, top, bottom) - calcAlignEdge(eAlignV, frameTop, frameBottom);
    const moveX = isXReversed(frameStyle) ? clamp(diffX, -frame.scrollWidth + frame.clientWidth - frame.scrollLeft, -frame.scrollLeft) : clamp(diffX, -frame.scrollLeft, frame.scrollWidth - frame.clientWidth - frame.scrollLeft);
    const moveY = clamp(diffY, -frame.scrollTop, frame.scrollHeight - frame.clientHeight - frame.scrollTop);
    actions.push([frame, {
      left: frame.scrollLeft + moveX,
      top: frame.scrollTop + moveY,
      behavior: options.behavior
    }]);
    top = Math.max(top - moveY, frameTop);
    right = Math.min(right - moveX, frameRight);
    bottom = Math.min(bottom - moveY, frameBottom);
    left = Math.max(left - moveX, frameLeft);
  }
  return actions;
};
var scrollIntoView = (element, scrollIntoViewOptions, config) => {
  const options = scrollIntoViewOptions || {};
  if (!checkBehavior(options.behavior)) {
    throw new TypeError(failedExecuteInvalidEnumValue("scrollIntoView", "Element", options.behavior));
  }
  const actions = computeScrollIntoView(element, options);
  actions.forEach(([frame, scrollToOptions]) => {
    elementScroll(frame, scrollToOptions, config);
  });
};
var elementScrollIntoView = scrollIntoView;

// node_modules/seamless-scroll-polyfill/lib/scroll.polyfill.js
var createPolyfill = (scrollName, patch) => (config) => {
  if (isScrollBehaviorSupported(config)) {
    return;
  }
  const scrollMethod = {
    scroll,
    scrollTo,
    scrollBy
  }[scrollName];
  patch(scrollName, function() {
    const args = arguments;
    if (arguments.length === 1) {
      scrollMethod(this, args[0], config);
      return;
    }
    const left = args[0];
    const top = args[1];
    scrollMethod(this, {
      left,
      top
    });
  });
};
var elementScrollPolyfill = /* @__PURE__ */ createPolyfill("scroll", modifyPrototypes);
var elementScrollToPolyfill = /* @__PURE__ */ createPolyfill("scrollTo", modifyPrototypes);
var elementScrollByPolyfill = /* @__PURE__ */ createPolyfill("scrollBy", modifyPrototypes);
var modifyWindow = (prop, func) => {
  markPolyfill(func);
  backupMethod(window, prop);
  window[prop] = func;
};
var windowScrollPolyfill = /* @__PURE__ */ createPolyfill("scroll", modifyWindow);
var windowScrollToPolyfill = /* @__PURE__ */ createPolyfill("scrollTo", modifyWindow);
var windowScrollByPolyfill = /* @__PURE__ */ createPolyfill("scrollBy", modifyWindow);

// node_modules/seamless-scroll-polyfill/lib/scrollIntoView.polyfill.js
function elementScrollIntoViewBoolean(alignToTop) {
  elementScrollIntoView(this, {
    block: (alignToTop !== null && alignToTop !== void 0 ? alignToTop : true) ? "start" : "end",
    inline: "nearest"
  });
}
var elementScrollIntoViewPolyfill = (config) => {
  if (isScrollBehaviorSupported(config)) {
    return;
  }
  const originalFunc = backupMethod(window.HTMLElement.prototype, "scrollIntoView", elementScrollIntoViewBoolean);
  modifyPrototypes("scrollIntoView", function scrollIntoView2() {
    const args = arguments;
    const options = args[0];
    if (args.length === 1 && isObject(options)) {
      elementScrollIntoView(this, options, config);
      return;
    }
    originalFunc.apply(this, args);
  });
};

// node_modules/seamless-scroll-polyfill/lib/polyfill.js
var polyfill = (config) => {
  if (isScrollBehaviorSupported(config)) {
    return;
  }
  elementScrollPolyfill(config);
  elementScrollToPolyfill(config);
  elementScrollByPolyfill(config);
  elementScrollIntoViewPolyfill(config);
  windowScrollPolyfill(config);
  windowScrollToPolyfill(config);
  windowScrollByPolyfill(config);
};

// node_modules/ngx-scrolltop/fesm2022/ngx-scrolltop.mjs
var _c02 = ["*"];
function NgxScrollTopComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 6);
    \u0275\u0275element(1, "path", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("fill", ctx_r1.symbolColor());
  }
}
function NgxScrollTopComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3, 0);
    \u0275\u0275listener("click", function NgxScrollTopComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.scrollToTop());
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "span", null, 1);
    \u0275\u0275projection(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NgxScrollTopComponent_Conditional_0_Conditional_6_Template, 2, 2, ":svg:svg", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ref_r3 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.position() === "left" ? "20px" : "")("background-color", ctx_r1.backgroundColor())("width", ctx_r1.size(), "px")("height", ctx_r1.size(), "px");
    \u0275\u0275property("ngClass", ctx_r1.theme());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ref_r3.childNodes.length === 0 ? 6 : -1);
  }
}
var NgxScrollTopCoreService = class _NgxScrollTopCoreService {
  constructor() {
    this.scrolledFromTop = signal(false);
    this.scrollOffset = signal(0);
    this.isBrowser = typeof window !== "undefined";
    this.alreadyActivated = signal(false);
    this.document = inject(DOCUMENT);
  }
  onWindowScroll(mode) {
    const position = this.document.documentElement?.scrollTop || this.document.scrollingElement?.scrollTop;
    switch (mode) {
      case "classic":
        return this.classicMode(position);
      case "smart":
        return this.smartMode(position);
    }
  }
  classicMode(position) {
    if (this.isBrowser && position > window.innerHeight) {
      return true;
    } else {
      return false;
    }
  }
  smartMode(position) {
    let show = false;
    if (position === 0) {
      show = false;
      this.scrolledFromTop.set(false);
    }
    if (this.scrolledFromTop() && this.scrollOffset() > position) {
      show = true;
    }
    if (this.isBrowser && position > window.innerHeight * 2) {
      this.scrolledFromTop.set(true);
      this.scrollOffset.set(position);
    }
    return show;
  }
  scrollToTop() {
    if (this.isBrowser) {
      if (!this.alreadyActivated()) {
        polyfill();
        this.alreadyActivated.set(true);
      }
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }
  static {
    this.\u0275fac = function NgxScrollTopCoreService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScrollTopCoreService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NgxScrollTopCoreService,
      factory: _NgxScrollTopCoreService.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScrollTopCoreService, [{
    type: Injectable
  }], null, null);
})();
var NgxScrollTopComponent = class _NgxScrollTopComponent {
  constructor() {
    this.backgroundColor = input();
    this.symbolColor = input();
    this.size = input();
    this.position = input("right");
    this.theme = input("gray");
    this.mode = input("classic");
    this.show = signal(false);
    this.core = inject(NgxScrollTopCoreService);
  }
  onWindowScroll() {
    const show = this.core.onWindowScroll(this.mode());
    if (this.show() !== show) {
      this.show.set(show);
    }
  }
  scrollToTop() {
    this.core.scrollToTop();
  }
  static {
    this.\u0275fac = function NgxScrollTopComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScrollTopComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxScrollTopComponent,
      selectors: [["ngx-scrolltop"]],
      hostBindings: function NgxScrollTopComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("scroll", function NgxScrollTopComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, \u0275\u0275resolveWindow);
        }
      },
      inputs: {
        backgroundColor: [1, "backgroundColor"],
        symbolColor: [1, "symbolColor"],
        size: [1, "size"],
        position: [1, "position"],
        theme: [1, "theme"],
        mode: [1, "mode"]
      },
      features: [\u0275\u0275ProvidersFeature([NgxScrollTopCoreService])],
      ngContentSelectors: _c02,
      decls: 1,
      vars: 1,
      consts: [["scrollTopButton", ""], ["ref", ""], ["type", "button", "role", "button", "aria-label", "Scroll to top of the page", "tabindex", "0", 1, "scrolltop-button", 3, "ngClass", "left", "backgroundColor", "width", "height"], ["type", "button", "role", "button", "aria-label", "Scroll to top of the page", "tabindex", "0", 1, "scrolltop-button", 3, "click", "ngClass"], [1, "symbol-container"], ["aria-hidden", "true", "focusable", "false", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512", 3, "fill"], ["aria-hidden", "true", "focusable", "false", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 448 512"], ["d", "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]],
      template: function NgxScrollTopComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NgxScrollTopComponent_Conditional_0_Template, 7, 10, "button", 2);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.show() ? 0 : -1);
        }
      },
      dependencies: [NgClass],
      styles: ["button[_ngcontent-%COMP%]{outline:0;-webkit-user-select:none;user-select:none}.scrolltop-button[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;border-radius:50%;padding:0;width:40px;height:40px;right:20px;bottom:20px;cursor:pointer;border:none;transition:opacity .1s linear;z-index:10000;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.scrolltop-button[_ngcontent-%COMP%]:hover{opacity:.92}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:empty{display:none}.scrolltop-button[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{display:inline-flex;transform:translateY(10%);width:35%;vertical-align:baseline}.scrolltop-button.black[_ngcontent-%COMP%]{background-color:#000;color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.scrolltop-button.black[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff}.scrolltop-button.white[_ngcontent-%COMP%]{background-color:#fff;color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#000}.scrolltop-button.white[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#000}.scrolltop-button.gray[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.gray[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]{background-color:#212121;color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fafafa}.scrolltop-button.grey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fafafa}.scrolltop-button.brown[_ngcontent-%COMP%]{background-color:#3e2723;color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#efebe9}.scrolltop-button.brown[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#efebe9}.scrolltop-button.deeporange[_ngcontent-%COMP%]{background-color:#bf360c;color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fbe9e7}.scrolltop-button.deeporange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fbe9e7}.scrolltop-button.orange[_ngcontent-%COMP%]{background-color:#ff6d00;color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff3e0}.scrolltop-button.orange[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff3e0}.scrolltop-button.yellow[_ngcontent-%COMP%]{background-color:#ffd600;color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fffde7}.scrolltop-button.yellow[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fffde7}.scrolltop-button.green[_ngcontent-%COMP%]{background-color:#1b5e20;color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8f5e9}.scrolltop-button.green[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8f5e9}.scrolltop-button.blue[_ngcontent-%COMP%]{background-color:#2962ff;color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e3f2fd}.scrolltop-button.blue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e3f2fd}.scrolltop-button.purple[_ngcontent-%COMP%]{background-color:#4a148c;color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f3e5f5}.scrolltop-button.purple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f3e5f5}.scrolltop-button.deeppurple[_ngcontent-%COMP%]{background-color:#311b92;color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ede7f6}.scrolltop-button.deeppurple[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ede7f6}.scrolltop-button.pink[_ngcontent-%COMP%]{background-color:#880e4f;color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fce4ec}.scrolltop-button.pink[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fce4ec}.scrolltop-button.red[_ngcontent-%COMP%]{background-color:#b71c1c;color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffebee}.scrolltop-button.red[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#ffebee}.scrolltop-button.indigo[_ngcontent-%COMP%]{background-color:#1a237e;color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e8eaf6}.scrolltop-button.indigo[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e8eaf6}.scrolltop-button.lightblue[_ngcontent-%COMP%]{background-color:#01579b;color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e1f5fe}.scrolltop-button.lightblue[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e1f5fe}.scrolltop-button.cyan[_ngcontent-%COMP%]{background-color:#006064;color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f7fa}.scrolltop-button.cyan[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f7fa}.scrolltop-button.teal[_ngcontent-%COMP%]{background-color:#004d40;color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0f2f1}.scrolltop-button.teal[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#e0f2f1}.scrolltop-button.lightgreen[_ngcontent-%COMP%]{background-color:#33691e;color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f1f8e9}.scrolltop-button.lightgreen[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f1f8e9}.scrolltop-button.lime[_ngcontent-%COMP%]{background-color:#827717;color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#f9fbe7}.scrolltop-button.lime[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f9fbe7}.scrolltop-button.amber[_ngcontent-%COMP%]{background-color:#ff6f00;color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff8e1}.scrolltop-button.amber[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#fff8e1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]{background-color:#263238;color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%], .scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#eceff1}.scrolltop-button.bluegrey[_ngcontent-%COMP%]   .symbol-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#eceff1}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScrollTopComponent, [{
    type: Component,
    args: [{
      selector: "ngx-scrolltop",
      imports: [NgClass],
      providers: [NgxScrollTopCoreService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      template: `@if (show()) {
  <button
    type="button"
    role="button"
    aria-label="Scroll to top of the page"
    tabindex="0"
    class="scrolltop-button"
    #scrollTopButton
    (click)="scrollToTop()"
    [ngClass]="theme()"
    [style.left]="position() === 'left' ? '20px' : ''"
    [style.backgroundColor]="backgroundColor()"
    [style.width.px]="size()"
    [style.height.px]="size()">
    <div class="symbol-container">
      <span #ref>
        <ng-content></ng-content>
      </span>
      @if (ref.childNodes.length === 0) {
        <svg 
          aria-hidden="true"
          [style.fill]="symbolColor()"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z">
          </path>
        </svg>
      }
    </div>
  </button>
}`,
      styles: ["button{outline:0;-webkit-user-select:none;user-select:none}.scrolltop-button{position:fixed;display:flex;justify-content:center;align-items:center;border-radius:50%;padding:0;width:40px;height:40px;right:20px;bottom:20px;cursor:pointer;border:none;transition:opacity .1s linear;z-index:10000;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.scrolltop-button:hover{opacity:.92}.scrolltop-button .symbol-container span{font-size:15px}.scrolltop-button .symbol-container span:empty{display:none}.scrolltop-button .symbol-container svg{display:inline-flex;transform:translateY(10%);width:35%;vertical-align:baseline}.scrolltop-button.black{background-color:#000;color:#fff}.scrolltop-button.black .symbol-container,.scrolltop-button.black .symbol-container span{color:#fff}.scrolltop-button.black .symbol-container svg{fill:#fff}.scrolltop-button.white{background-color:#fff;color:#000}.scrolltop-button.white .symbol-container,.scrolltop-button.white .symbol-container span{color:#000}.scrolltop-button.white .symbol-container svg{fill:#000}.scrolltop-button.gray{background-color:#212121;color:#fafafa}.scrolltop-button.gray .symbol-container,.scrolltop-button.gray .symbol-container span{color:#fafafa}.scrolltop-button.gray .symbol-container svg{fill:#fafafa}.scrolltop-button.grey{background-color:#212121;color:#fafafa}.scrolltop-button.grey .symbol-container,.scrolltop-button.grey .symbol-container span{color:#fafafa}.scrolltop-button.grey .symbol-container svg{fill:#fafafa}.scrolltop-button.brown{background-color:#3e2723;color:#efebe9}.scrolltop-button.brown .symbol-container,.scrolltop-button.brown .symbol-container span{color:#efebe9}.scrolltop-button.brown .symbol-container svg{fill:#efebe9}.scrolltop-button.deeporange{background-color:#bf360c;color:#fbe9e7}.scrolltop-button.deeporange .symbol-container,.scrolltop-button.deeporange .symbol-container span{color:#fbe9e7}.scrolltop-button.deeporange .symbol-container svg{fill:#fbe9e7}.scrolltop-button.orange{background-color:#ff6d00;color:#fff3e0}.scrolltop-button.orange .symbol-container,.scrolltop-button.orange .symbol-container span{color:#fff3e0}.scrolltop-button.orange .symbol-container svg{fill:#fff3e0}.scrolltop-button.yellow{background-color:#ffd600;color:#fffde7}.scrolltop-button.yellow .symbol-container,.scrolltop-button.yellow .symbol-container span{color:#fffde7}.scrolltop-button.yellow .symbol-container svg{fill:#fffde7}.scrolltop-button.green{background-color:#1b5e20;color:#e8f5e9}.scrolltop-button.green .symbol-container,.scrolltop-button.green .symbol-container span{color:#e8f5e9}.scrolltop-button.green .symbol-container svg{fill:#e8f5e9}.scrolltop-button.blue{background-color:#2962ff;color:#e3f2fd}.scrolltop-button.blue .symbol-container,.scrolltop-button.blue .symbol-container span{color:#e3f2fd}.scrolltop-button.blue .symbol-container svg{fill:#e3f2fd}.scrolltop-button.purple{background-color:#4a148c;color:#f3e5f5}.scrolltop-button.purple .symbol-container,.scrolltop-button.purple .symbol-container span{color:#f3e5f5}.scrolltop-button.purple .symbol-container svg{fill:#f3e5f5}.scrolltop-button.deeppurple{background-color:#311b92;color:#ede7f6}.scrolltop-button.deeppurple .symbol-container,.scrolltop-button.deeppurple .symbol-container span{color:#ede7f6}.scrolltop-button.deeppurple .symbol-container svg{fill:#ede7f6}.scrolltop-button.pink{background-color:#880e4f;color:#fce4ec}.scrolltop-button.pink .symbol-container,.scrolltop-button.pink .symbol-container span{color:#fce4ec}.scrolltop-button.pink .symbol-container svg{fill:#fce4ec}.scrolltop-button.red{background-color:#b71c1c;color:#ffebee}.scrolltop-button.red .symbol-container,.scrolltop-button.red .symbol-container span{color:#ffebee}.scrolltop-button.red .symbol-container svg{fill:#ffebee}.scrolltop-button.indigo{background-color:#1a237e;color:#e8eaf6}.scrolltop-button.indigo .symbol-container,.scrolltop-button.indigo .symbol-container span{color:#e8eaf6}.scrolltop-button.indigo .symbol-container svg{fill:#e8eaf6}.scrolltop-button.lightblue{background-color:#01579b;color:#e1f5fe}.scrolltop-button.lightblue .symbol-container,.scrolltop-button.lightblue .symbol-container span{color:#e1f5fe}.scrolltop-button.lightblue .symbol-container svg{fill:#e1f5fe}.scrolltop-button.cyan{background-color:#006064;color:#e0f7fa}.scrolltop-button.cyan .symbol-container,.scrolltop-button.cyan .symbol-container span{color:#e0f7fa}.scrolltop-button.cyan .symbol-container svg{fill:#e0f7fa}.scrolltop-button.teal{background-color:#004d40;color:#e0f2f1}.scrolltop-button.teal .symbol-container,.scrolltop-button.teal .symbol-container span{color:#e0f2f1}.scrolltop-button.teal .symbol-container svg{fill:#e0f2f1}.scrolltop-button.lightgreen{background-color:#33691e;color:#f1f8e9}.scrolltop-button.lightgreen .symbol-container,.scrolltop-button.lightgreen .symbol-container span{color:#f1f8e9}.scrolltop-button.lightgreen .symbol-container svg{fill:#f1f8e9}.scrolltop-button.lime{background-color:#827717;color:#f9fbe7}.scrolltop-button.lime .symbol-container,.scrolltop-button.lime .symbol-container span{color:#f9fbe7}.scrolltop-button.lime .symbol-container svg{fill:#f9fbe7}.scrolltop-button.amber{background-color:#ff6f00;color:#fff8e1}.scrolltop-button.amber .symbol-container,.scrolltop-button.amber .symbol-container span{color:#fff8e1}.scrolltop-button.amber .symbol-container svg{fill:#fff8e1}.scrolltop-button.bluegrey{background-color:#263238;color:#eceff1}.scrolltop-button.bluegrey .symbol-container,.scrolltop-button.bluegrey .symbol-container span{color:#eceff1}.scrolltop-button.bluegrey .symbol-container svg{fill:#eceff1}\n"]
    }]
  }], null, {
    onWindowScroll: [{
      type: HostListener,
      args: ["window:scroll"]
    }]
  });
})();
var NgxScrollTopDirective = class _NgxScrollTopDirective {
  constructor() {
    this.mode = input("classic", {
      alias: "ngxScrollTopMode"
    });
    this.show = signal(false);
    this.el = inject(ElementRef);
    this.core = inject(NgxScrollTopCoreService);
    this.hideElement();
  }
  onWindowScroll() {
    const show = this.core.onWindowScroll(this.mode());
    if (this.show() !== show) {
      show ? this.showElement() : this.hideElement();
      this.show.set(show);
    }
  }
  onClick() {
    this.scrollToTop();
  }
  hideElement() {
    this.el.nativeElement.style.display = "none";
  }
  showElement() {
    this.el.nativeElement.style.display = "";
  }
  scrollToTop() {
    this.core.scrollToTop();
  }
  static {
    this.\u0275fac = function NgxScrollTopDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScrollTopDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _NgxScrollTopDirective,
      selectors: [["", "ngxScrollTop", ""]],
      hostBindings: function NgxScrollTopDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("scroll", function NgxScrollTopDirective_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, \u0275\u0275resolveWindow)("click", function NgxScrollTopDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      },
      inputs: {
        mode: [1, "ngxScrollTopMode", "mode"]
      },
      features: [\u0275\u0275ProvidersFeature([NgxScrollTopCoreService])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScrollTopDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxScrollTop]",
      standalone: true,
      providers: [NgxScrollTopCoreService]
    }]
  }], () => [], {
    onWindowScroll: [{
      type: HostListener,
      args: ["window:scroll"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var NgxScrollTopModule = class _NgxScrollTopModule {
  static {
    this.\u0275fac = function NgxScrollTopModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxScrollTopModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxScrollTopModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [NgxScrollTopCoreService],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxScrollTopModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NgxScrollTopComponent, NgxScrollTopDirective],
      providers: [NgxScrollTopCoreService],
      exports: [NgxScrollTopComponent, NgxScrollTopDirective]
    }]
  }], null, null);
})();

// src/app/shared/components/footer/footer.component.ts
var FooterComponent = class _FooterComponent {
  constructor(viewportScroller) {
    this.viewportScroller = viewportScroller;
  }
  onClick(elementId) {
    this.viewportScroller.scrollToAnchor(elementId);
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(ViewportScroller));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: false, decls: 37, vars: 0, consts: [[1, "footer-area"], [1, "container"], [1, "footer-content"], [1, "footer-brand"], ["routerLink", "/"], [1, "footer-info"], [1, "footer-contact"], [1, "fas", "fa-map-marker-alt"], [1, "far", "fa-envelope"], [1, "fab", "fa-whatsapp"], [1, "footer-social"], ["href", "https://www.linkedin.com/company/99272758/admin/feed/posts/", "target", "_blank", 1, "fab", "fa-linkedin-in"], ["href", "https://www.facebook.com/people/VICS-Consultoria/61555044575855/", "target", "_blank", 1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/vicsdevbr", "target", "_blank", 1, "fab", "fa-twitter"], ["href", "https://www.instagram.com/vicsdevbr", "target", "_blank", 1, "fab", "fa-instagram"], [1, "footer-bottom"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3")(5, "a", 4);
        \u0275\u0275text(6, "VICS \u2013 Engenharia de Dados e Solu\xE7\xF5es Digitais");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Especialistas em backend, engenharia de dados, automa\xE7\xF5es e integra\xE7\xF5es.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6)(11, "p");
        \u0275\u0275element(12, "i", 7);
        \u0275\u0275elementStart(13, "strong");
        \u0275\u0275text(14, "Lagoa Santa, Minas Gerais \u2013 Atua\xE7\xE3o remota Brasil e Europa");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275element(16, "i", 8);
        \u0275\u0275elementStart(17, "strong");
        \u0275\u0275text(18, "cristiano@engenhariadedados.tec.br");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "p");
        \u0275\u0275element(20, "i", 9);
        \u0275\u0275elementStart(21, "strong");
        \u0275\u0275text(22, "WhatsApp: 5531975474785");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 10)(24, "ul")(25, "li");
        \u0275\u0275element(26, "a", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "li");
        \u0275\u0275element(28, "a", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "li");
        \u0275\u0275element(30, "a", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "li");
        \u0275\u0275element(32, "a", 14);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(33, "div", 15)(34, "p");
        \u0275\u0275text(35, "\u{1F12F} 2025 \u2013 Todos os direitos reservados.");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(36, "ngx-scrolltop");
      }
    }, dependencies: [NgxScrollTopComponent, RouterLink], styles: ["\n\n.footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n}\n.footer-brand[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 250px;\n}\n.footer-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  text-decoration: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.footer-brand[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff2c57 !important;\n}\n.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #cccccc !important;\n  line-height: 1.5;\n}\n.footer-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 2;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .footer-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n}\n.footer-contact[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: #ffffff !important;\n}\n.footer-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  width: 16px;\n  color: #ff2c57;\n}\n.footer-links[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.footer-links[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #ffffff !important;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.footer-links[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.footer-links[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cccccc !important;\n  text-decoration: none;\n}\n.footer-links[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ff2c57 !important;\n}\n.footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    justify-content: center;\n    margin-top: 1rem;\n  }\n}\n.footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background-color: #ff2c57;\n  color: white !important;\n  border-radius: 50%;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.footer-social[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ffffff;\n  color: #ff2c57 !important;\n  transform: translateY(-2px);\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid #444444;\n  padding-top: 1rem;\n  text-align: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #cccccc !important;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: false, template: '<footer class="footer-area">\n    <div class="container">\n        <div class="footer-content">\n            <div class="footer-brand">\n                <h3><a routerLink="/">VICS \u2013 Engenharia de Dados e Solu\xE7\xF5es Digitais</a></h3>\n                <p>Especialistas em backend, engenharia de dados, automa\xE7\xF5es e integra\xE7\xF5es.</p>\n            </div>\n            \n            <div class="footer-info">\n                <div class="footer-contact">\n                    <p><i class="fas fa-map-marker-alt"></i> <strong>Lagoa Santa, Minas Gerais \u2013 Atua\xE7\xE3o remota Brasil e Europa</strong></p>\n                    <p><i class="far fa-envelope"></i> <strong>cristiano&#64;engenhariadedados.tec.br</strong></p>\n                    <p><i class="fab fa-whatsapp"></i> <strong>WhatsApp: 5531975474785</strong></p>\n                </div>\n                <!--\n                <div class="footer-links">\n                    <h4>Links \xFAteis</h4>\n                    <ul class="footer-nav">\n                        <li><a href="#services">Servi\xE7os</a></li>\n                        <li><a href="#work">Casos de Sucesso</a></li>\n                        <li><a href="#about">Sobre N\xF3s</a></li>\n                        <li><a href="#contact">Contato</a></li>\n                    </ul>\n                </div>\n                -->\n            </div>\n            \n            <div class="footer-social">\n                <ul>\n                    <li><a href="https://www.linkedin.com/company/99272758/admin/feed/posts/" target="_blank" class="fab fa-linkedin-in"></a></li>\n                    <li><a href="https://www.facebook.com/people/VICS-Consultoria/61555044575855/" target="_blank" class="fab fa-facebook-f"></a></li>\n                    <li><a href="https://twitter.com/vicsdevbr" target="_blank" class="fab fa-twitter"></a></li>\n                    <li><a href="https://www.instagram.com/vicsdevbr" target="_blank" class="fab fa-instagram"></a></li>\n                </ul>\n            </div>\n        </div>\n        \n        <div class="footer-bottom">\n            <p>\u{1F12F} 2025 \u2013 Todos os direitos reservados.</p>\n        </div>\n    </div>\n</footer>\n\n<!--<app-demo-sidebar></app-demo-sidebar>-->\n\n<ngx-scrolltop></ngx-scrolltop>', styles: ["/* src/app/shared/components/footer/footer.component.scss */\n.footer-content {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n@media (max-width: 768px) {\n  .footer-content {\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n}\n.footer-brand {\n  flex: 1;\n  min-width: 250px;\n}\n.footer-brand h3 a {\n  color: #ffffff !important;\n  text-decoration: none;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n.footer-brand h3 a:hover {\n  color: #ff2c57 !important;\n}\n.footer-brand p {\n  margin-top: 0.5rem;\n  color: #cccccc !important;\n  line-height: 1.5;\n}\n.footer-info {\n  display: flex;\n  flex: 2;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .footer-info {\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n}\n.footer-contact {\n  flex: 1;\n}\n.footer-contact p {\n  margin-bottom: 0.5rem;\n  color: #ffffff !important;\n}\n.footer-contact p i {\n  margin-right: 0.5rem;\n  width: 16px;\n  color: #ff2c57;\n}\n.footer-links {\n  flex: 1;\n}\n.footer-links h4 {\n  margin-bottom: 1rem;\n  color: #ffffff !important;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.footer-links .footer-nav {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-links .footer-nav li {\n  margin-bottom: 0.5rem;\n}\n.footer-links .footer-nav li a {\n  color: #cccccc !important;\n  text-decoration: none;\n}\n.footer-links .footer-nav li a:hover {\n  color: #ff2c57 !important;\n}\n.footer-social ul {\n  display: flex;\n  gap: 0.5rem;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .footer-social ul {\n    justify-content: center;\n    margin-top: 1rem;\n  }\n}\n.footer-social ul li a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background-color: #ff2c57;\n  color: white !important;\n  border-radius: 50%;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.footer-social ul li a:hover {\n  background-color: #ffffff;\n  color: #ff2c57 !important;\n  transform: translateY(-2px);\n}\n.footer-bottom {\n  border-top: 1px solid #444444;\n  padding-top: 1rem;\n  text-align: center;\n}\n.footer-bottom p {\n  margin: 0;\n  color: #cccccc !important;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], () => [{ type: ViewportScroller }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/shared/components/footer/footer.component.ts", lineNumber: 10 });
})();

// node_modules/countup.js/dist/countUp.min.js
var t = function() {
  return t = Object.assign || function(t3) {
    for (var i3, n2 = 1, s2 = arguments.length; n2 < s2; n2++) for (var a in i3 = arguments[n2]) Object.prototype.hasOwnProperty.call(i3, a) && (t3[a] = i3[a]);
    return t3;
  }, t.apply(this, arguments);
};
var i = function() {
  function i3(i4, n2, s2) {
    var a = this;
    this.endVal = n2, this.options = s2, this.version = "2.8.1", this.defaults = {
      startVal: 0,
      decimalPlaces: 0,
      duration: 2,
      useEasing: true,
      useGrouping: true,
      useIndianSeparators: false,
      smartEasingThreshold: 999,
      smartEasingAmount: 333,
      separator: ",",
      decimal: ".",
      prefix: "",
      suffix: "",
      enableScrollSpy: false,
      scrollSpyDelay: 200,
      scrollSpyOnce: false
    }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t3) {
      a.startTime || (a.startTime = t3);
      var i5 = t3 - a.startTime;
      a.remaining = a.duration - i5, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i5, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i5, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i5 / a.duration);
      var n3 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
      a.frameVal = n3 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i5 < a.duration ? a.rAF = requestAnimationFrame(a.count) : null !== a.finalEndVal ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
    }, this.formatNumber = function(t3) {
      var i5, n3, s3, e2, o = t3 < 0 ? "-" : "";
      i5 = Math.abs(t3).toFixed(a.options.decimalPlaces);
      var r = (i5 += "").split(".");
      if (n3 = r[0], s3 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
        e2 = "";
        for (var l = 3, h = 0, u = 0, p = n3.length; u < p; ++u) a.options.useIndianSeparators && 4 === u && (l = 2, h = 1), 0 !== u && h % l == 0 && (e2 = a.options.separator + e2), h++, e2 = n3[p - u - 1] + e2;
        n3 = e2;
      }
      return a.options.numerals && a.options.numerals.length && (n3 = n3.replace(/[0-9]/g, function(t4) {
        return a.options.numerals[+t4];
      }), s3 = s3.replace(/[0-9]/g, function(t4) {
        return a.options.numerals[+t4];
      })), o + a.options.prefix + n3 + s3 + a.options.suffix;
    }, this.easeOutExpo = function(t3, i5, n3, s3) {
      return n3 * (1 - Math.pow(2, -10 * t3 / s3)) * 1024 / 1023 + i5;
    }, this.options = t(t({}, this.defaults), s2), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n2), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = false), this.el = "string" == typeof i4 ? document.getElementById(i4) : i4, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, i4) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
      return a.handleScroll(a);
    }), window.onscroll = function() {
      window.onScrollFns.forEach(function(t3) {
        return t3();
      });
    }, this.handleScroll(this)));
  }
  return i3.prototype.handleScroll = function(t3) {
    if (t3 && window && !t3.once) {
      var i4 = window.innerHeight + window.scrollY, n2 = t3.el.getBoundingClientRect(), s2 = n2.top + window.pageYOffset, a = n2.top + n2.height + window.pageYOffset;
      a < i4 && a > window.scrollY && t3.paused ? (t3.paused = false, setTimeout(function() {
        return t3.start();
      }, t3.options.scrollSpyDelay), t3.options.scrollSpyOnce && (t3.once = true)) : (window.scrollY > a || s2 > i4) && !t3.paused && t3.reset();
    }
  }, i3.prototype.determineDirectionAndSmartEasing = function() {
    var t3 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t3;
    var i4 = t3 - this.startVal;
    if (Math.abs(i4) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t3;
      var n2 = this.countDown ? 1 : -1;
      this.endVal = t3 + n2 * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else this.endVal = t3, this.finalEndVal = null;
    null !== this.finalEndVal ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, i3.prototype.start = function(t3) {
    this.error || (this.options.onStartCallback && this.options.onStartCallback(), t3 && (this.options.onCompleteCallback = t3), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, i3.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, i3.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, i3.prototype.update = function(t3) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t3), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, i3.prototype.printValue = function(t3) {
    var i4;
    if (this.el) {
      var n2 = this.formattingFn(t3);
      if (null === (i4 = this.options.plugin) || void 0 === i4 ? void 0 : i4.render) this.options.plugin.render(this.el, n2);
      else if ("INPUT" === this.el.tagName) this.el.value = n2;
      else "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = n2 : this.el.innerHTML = n2;
    }
  }, i3.prototype.ensureNumber = function(t3) {
    return "number" == typeof t3 && !isNaN(t3);
  }, i3.prototype.validateValue = function(t3) {
    var i4 = Number(t3);
    return this.ensureNumber(i4) ? i4 : (this.error = "[CountUp] invalid start or end value: ".concat(t3), null);
  }, i3.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, i3;
}();

// node_modules/ngx-countup/fesm2020/ngx-countup.mjs
var CountUpDirective = class {
  constructor(el, zone, platformId) {
    this.el = el;
    this.zone = zone;
    this.platformId = platformId;
    this.options = {};
    this.reanimateOnClick = true;
    this.complete = new EventEmitter();
  }
  // Re-animate if preference is set.
  onClick() {
    if (this.reanimateOnClick) {
      this.animate();
    }
  }
  ngOnChanges(changes) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const {
      options,
      endVal
    } = changes;
    if (this.countUp) {
      if (options?.currentValue !== void 0 || endVal?.currentValue !== void 0) {
        if (options?.currentValue !== void 0) {
          this.initAndRun();
        } else {
          if (!this.options.startVal) {
            this.options.startVal = this.countUp.frameVal;
          }
          this.zone.runOutsideAngular(() => {
            this.countUp.update(this.endVal);
          });
        }
      }
    } else {
      this.initAndRun();
    }
  }
  animate() {
    this.zone.runOutsideAngular(() => {
      this.countUp.reset();
      this.countUp.start(() => {
        this.zone.run(() => {
          this.complete.emit();
        });
      });
    });
  }
  initAndRun() {
    this.zone.runOutsideAngular(() => {
      this.countUp = new i(this.el.nativeElement, this.endVal, this.options);
      if (!this.options.enableScrollSpy) {
        this.animate();
      }
    });
  }
};
CountUpDirective.\u0275fac = function CountUpDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CountUpDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PLATFORM_ID));
};
CountUpDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: CountUpDirective,
  selectors: [["", "countUp", ""]],
  hostBindings: function CountUpDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CountUpDirective_click_HostBindingHandler() {
        return ctx.onClick();
      });
    }
  },
  inputs: {
    endVal: [0, "countUp", "endVal"],
    options: "options",
    reanimateOnClick: "reanimateOnClick"
  },
  outputs: {
    complete: "complete"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpDirective, [{
    type: Directive,
    args: [{
      selector: "[countUp]"
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: Object,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }];
  }, {
    endVal: [{
      type: Input,
      args: ["countUp"]
    }],
    options: [{
      type: Input
    }],
    reanimateOnClick: [{
      type: Input
    }],
    complete: [{
      type: Output
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var CountUpModule = class {
};
CountUpModule.\u0275fac = function CountUpModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CountUpModule)();
};
CountUpModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: CountUpModule
});
CountUpModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUpModule, [{
    type: NgModule,
    args: [{
      imports: [],
      declarations: [CountUpDirective],
      exports: [CountUpDirective]
    }]
  }], null, null);
})();

// node_modules/typed.js/dist/typed.module.js
function t2() {
  return t2 = Object.assign ? Object.assign.bind() : function(t3) {
    for (var s2 = 1; s2 < arguments.length; s2++) {
      var e2 = arguments[s2];
      for (var n2 in e2) Object.prototype.hasOwnProperty.call(e2, n2) && (t3[n2] = e2[n2]);
    }
    return t3;
  }, t2.apply(this, arguments);
}
var s = {
  strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
  stringsElement: null,
  typeSpeed: 0,
  startDelay: 0,
  backSpeed: 0,
  smartBackspace: true,
  shuffle: false,
  backDelay: 700,
  fadeOut: false,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
  loop: false,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
  attr: null,
  bindInputFocusEvents: false,
  contentType: "html",
  onBegin: function(t3) {
  },
  onComplete: function(t3) {
  },
  preStringTyped: function(t3, s2) {
  },
  onStringTyped: function(t3, s2) {
  },
  onLastStringBackspaced: function(t3) {
  },
  onTypingPaused: function(t3, s2) {
  },
  onTypingResumed: function(t3, s2) {
  },
  onReset: function(t3) {
  },
  onStop: function(t3, s2) {
  },
  onStart: function(t3, s2) {
  },
  onDestroy: function(t3) {
  }
};
var e = new (/* @__PURE__ */ function() {
  function e2() {
  }
  var n2 = e2.prototype;
  return n2.load = function(e3, n3, i3) {
    if (e3.el = "string" == typeof i3 ? document.querySelector(i3) : i3, e3.options = t2({}, s, n3), e3.isInput = "input" === e3.el.tagName.toLowerCase(), e3.attr = e3.options.attr, e3.bindInputFocusEvents = e3.options.bindInputFocusEvents, e3.showCursor = !e3.isInput && e3.options.showCursor, e3.cursorChar = e3.options.cursorChar, e3.cursorBlinking = true, e3.elContent = e3.attr ? e3.el.getAttribute(e3.attr) : e3.el.textContent, e3.contentType = e3.options.contentType, e3.typeSpeed = e3.options.typeSpeed, e3.startDelay = e3.options.startDelay, e3.backSpeed = e3.options.backSpeed, e3.smartBackspace = e3.options.smartBackspace, e3.backDelay = e3.options.backDelay, e3.fadeOut = e3.options.fadeOut, e3.fadeOutClass = e3.options.fadeOutClass, e3.fadeOutDelay = e3.options.fadeOutDelay, e3.isPaused = false, e3.strings = e3.options.strings.map(function(t3) {
      return t3.trim();
    }), e3.stringsElement = "string" == typeof e3.options.stringsElement ? document.querySelector(e3.options.stringsElement) : e3.options.stringsElement, e3.stringsElement) {
      e3.strings = [], e3.stringsElement.style.cssText = "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";
      var r = Array.prototype.slice.apply(e3.stringsElement.children), o = r.length;
      if (o) for (var a = 0; a < o; a += 1) e3.strings.push(r[a].innerHTML.trim());
    }
    for (var u in e3.strPos = 0, e3.currentElContent = this.getCurrentElContent(e3), e3.currentElContent && e3.currentElContent.length > 0 && (e3.strPos = e3.currentElContent.length - 1, e3.strings.unshift(e3.currentElContent)), e3.sequence = [], e3.strings) e3.sequence[u] = u;
    e3.arrayPos = 0, e3.stopNum = 0, e3.loop = e3.options.loop, e3.loopCount = e3.options.loopCount, e3.curLoop = 0, e3.shuffle = e3.options.shuffle, e3.pause = {
      status: false,
      typewrite: true,
      curString: "",
      curStrPos: 0
    }, e3.typingComplete = false, e3.autoInsertCss = e3.options.autoInsertCss, e3.autoInsertCss && (this.appendCursorAnimationCss(e3), this.appendFadeOutAnimationCss(e3));
  }, n2.getCurrentElContent = function(t3) {
    return t3.attr ? t3.el.getAttribute(t3.attr) : t3.isInput ? t3.el.value : "html" === t3.contentType ? t3.el.innerHTML : t3.el.textContent;
  }, n2.appendCursorAnimationCss = function(t3) {
    var s2 = "data-typed-js-cursor-css";
    if (t3.showCursor && !document.querySelector("[" + s2 + "]")) {
      var e3 = document.createElement("style");
      e3.setAttribute(s2, "true"), e3.innerHTML = "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ", document.body.appendChild(e3);
    }
  }, n2.appendFadeOutAnimationCss = function(t3) {
    var s2 = "data-typed-fadeout-js-css";
    if (t3.fadeOut && !document.querySelector("[" + s2 + "]")) {
      var e3 = document.createElement("style");
      e3.setAttribute(s2, "true"), e3.innerHTML = "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ", document.body.appendChild(e3);
    }
  }, e2;
}())();
var n = new (/* @__PURE__ */ function() {
  function t3() {
  }
  var s2 = t3.prototype;
  return s2.typeHtmlChars = function(t4, s3, e2) {
    if ("html" !== e2.contentType) return s3;
    var n2 = t4.substring(s3).charAt(0);
    if ("<" === n2 || "&" === n2) {
      var i3;
      for (i3 = "<" === n2 ? ">" : ";"; t4.substring(s3 + 1).charAt(0) !== i3 && !(1 + ++s3 > t4.length); ) ;
      s3++;
    }
    return s3;
  }, s2.backSpaceHtmlChars = function(t4, s3, e2) {
    if ("html" !== e2.contentType) return s3;
    var n2 = t4.substring(s3).charAt(0);
    if (">" === n2 || ";" === n2) {
      var i3;
      for (i3 = ">" === n2 ? "<" : "&"; t4.substring(s3 - 1).charAt(0) !== i3 && !(--s3 < 0); ) ;
      s3--;
    }
    return s3;
  }, t3;
}())();
var i2 = /* @__PURE__ */ function() {
  function t3(t4, s3) {
    e.load(this, s3, t4), this.begin();
  }
  var s2 = t3.prototype;
  return s2.toggle = function() {
    this.pause.status ? this.start() : this.stop();
  }, s2.stop = function() {
    this.typingComplete || this.pause.status || (this.toggleBlinking(true), this.pause.status = true, this.options.onStop(this.arrayPos, this));
  }, s2.start = function() {
    this.typingComplete || this.pause.status && (this.pause.status = false, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
  }, s2.destroy = function() {
    this.reset(false), this.options.onDestroy(this);
  }, s2.reset = function(t4) {
    void 0 === t4 && (t4 = true), clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t4 && (this.insertCursor(), this.options.onReset(this), this.begin());
  }, s2.begin = function() {
    var t4 = this;
    this.options.onBegin(this), this.typingComplete = false, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
      0 === t4.strPos ? t4.typewrite(t4.strings[t4.sequence[t4.arrayPos]], t4.strPos) : t4.backspace(t4.strings[t4.sequence[t4.arrayPos]], t4.strPos);
    }, this.startDelay);
  }, s2.typewrite = function(t4, s3) {
    var e2 = this;
    this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
    var i3 = this.humanizer(this.typeSpeed), r = 1;
    true !== this.pause.status ? this.timeout = setTimeout(function() {
      s3 = n.typeHtmlChars(t4, s3, e2);
      var i4 = 0, o = t4.substring(s3);
      if ("^" === o.charAt(0) && /^\^\d+/.test(o)) {
        var a = 1;
        a += (o = /\d+/.exec(o)[0]).length, i4 = parseInt(o), e2.temporaryPause = true, e2.options.onTypingPaused(e2.arrayPos, e2), t4 = t4.substring(0, s3) + t4.substring(s3 + a), e2.toggleBlinking(true);
      }
      if ("`" === o.charAt(0)) {
        for (; "`" !== t4.substring(s3 + r).charAt(0) && (r++, !(s3 + r > t4.length)); ) ;
        var u = t4.substring(0, s3), p = t4.substring(u.length + 1, s3 + r), c = t4.substring(s3 + r + 1);
        t4 = u + p + c, r--;
      }
      e2.timeout = setTimeout(function() {
        e2.toggleBlinking(false), s3 >= t4.length ? e2.doneTyping(t4, s3) : e2.keepTyping(t4, s3, r), e2.temporaryPause && (e2.temporaryPause = false, e2.options.onTypingResumed(e2.arrayPos, e2));
      }, i4);
    }, i3) : this.setPauseStatus(t4, s3, true);
  }, s2.keepTyping = function(t4, s3, e2) {
    0 === s3 && (this.toggleBlinking(false), this.options.preStringTyped(this.arrayPos, this));
    var n2 = t4.substring(0, s3 += e2);
    this.replaceText(n2), this.typewrite(t4, s3);
  }, s2.doneTyping = function(t4, s3) {
    var e2 = this;
    this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(true), this.arrayPos === this.strings.length - 1 && (this.complete(), false === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
      e2.backspace(t4, s3);
    }, this.backDelay));
  }, s2.backspace = function(t4, s3) {
    var e2 = this;
    if (true !== this.pause.status) {
      if (this.fadeOut) return this.initFadeOut();
      this.toggleBlinking(false);
      var i3 = this.humanizer(this.backSpeed);
      this.timeout = setTimeout(function() {
        s3 = n.backSpaceHtmlChars(t4, s3, e2);
        var i4 = t4.substring(0, s3);
        if (e2.replaceText(i4), e2.smartBackspace) {
          var r = e2.strings[e2.arrayPos + 1];
          e2.stopNum = r && i4 === r.substring(0, s3) ? s3 : 0;
        }
        s3 > e2.stopNum ? (s3--, e2.backspace(t4, s3)) : s3 <= e2.stopNum && (e2.arrayPos++, e2.arrayPos === e2.strings.length ? (e2.arrayPos = 0, e2.options.onLastStringBackspaced(), e2.shuffleStringsIfNeeded(), e2.begin()) : e2.typewrite(e2.strings[e2.sequence[e2.arrayPos]], s3));
      }, i3);
    } else this.setPauseStatus(t4, s3, false);
  }, s2.complete = function() {
    this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = true;
  }, s2.setPauseStatus = function(t4, s3, e2) {
    this.pause.typewrite = e2, this.pause.curString = t4, this.pause.curStrPos = s3;
  }, s2.toggleBlinking = function(t4) {
    this.cursor && (this.pause.status || this.cursorBlinking !== t4 && (this.cursorBlinking = t4, t4 ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
  }, s2.humanizer = function(t4) {
    return Math.round(Math.random() * t4 / 2) + t4;
  }, s2.shuffleStringsIfNeeded = function() {
    this.shuffle && (this.sequence = this.sequence.sort(function() {
      return Math.random() - 0.5;
    }));
  }, s2.initFadeOut = function() {
    var t4 = this;
    return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
      t4.arrayPos++, t4.replaceText(""), t4.strings.length > t4.arrayPos ? t4.typewrite(t4.strings[t4.sequence[t4.arrayPos]], 0) : (t4.typewrite(t4.strings[0], 0), t4.arrayPos = 0);
    }, this.fadeOutDelay);
  }, s2.replaceText = function(t4) {
    this.attr ? this.el.setAttribute(this.attr, t4) : this.isInput ? this.el.value = t4 : "html" === this.contentType ? this.el.innerHTML = t4 : this.el.textContent = t4;
  }, s2.bindFocusEvents = function() {
    var t4 = this;
    this.isInput && (this.el.addEventListener("focus", function(s3) {
      t4.stop();
    }), this.el.addEventListener("blur", function(s3) {
      t4.el.value && 0 !== t4.el.value.length || t4.start();
    }));
  }, s2.insertCursor = function() {
    this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", true), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
  }, t3;
}();

// node_modules/ngx-typed-js/fesm2020/ngx-typed-js.mjs
var _c03 = ["wrapper"];
var _c1 = ["*"];
var NgxTypedJsComponent = class {
  constructor() {
    this.typeSpeed = 30;
    this.completed = new EventEmitter();
    this.preStringTyped = new EventEmitter();
    this.stringTyped = new EventEmitter();
    this.lastStringBackspaced = new EventEmitter();
    this.typingPaused = new EventEmitter();
    this.typingResumed = new EventEmitter();
    this.reset = new EventEmitter();
    this.stopped = new EventEmitter();
    this.started = new EventEmitter();
    this.destroyed = new EventEmitter();
  }
  ngAfterViewInit() {
    this.typed = new i2(this.content.nativeElement.querySelector(".typing"), this.options);
    if (this.showCursor !== false) {
      this.updateCursorStyle();
    }
  }
  toggle() {
    this.typed.toggle();
  }
  stop() {
    this.typed.stop();
  }
  start() {
    this.typed.start();
  }
  destroy() {
    this.typed.destroy();
  }
  doReset(restart) {
    this.typed.reset(restart);
  }
  get options() {
    const emit = (emitter) => () => emitter.emit();
    const emitIndex = (emitter) => (index) => emitter.emit(index);
    const opts = {
      strings: this.strings ?? [""],
      stringsElement: this.stringsElement,
      typeSpeed: this.typeSpeed,
      startDelay: this.startDelay,
      backSpeed: this.backSpeed,
      smartBackspace: this.smartBackspace,
      shuffle: this.shuffle,
      backDelay: this.backDelay,
      fadeOut: this.fadeOut,
      fadeOutClass: this.fadeOutClass,
      fadeOutDelay: this.fadeOutDelay,
      loop: this.loop,
      loopCount: this.loopCount,
      showCursor: this.showCursor,
      autoInsertCss: this.autoInsertCss,
      attr: this.attr,
      bindInputFocusEvents: this.bindInputFocusEvents,
      contentType: this.contentType,
      onComplete: emit(this.completed),
      preStringTyped: emitIndex(this.preStringTyped),
      onStringTyped: emitIndex(this.stringTyped),
      onLastStringBackspaced: emit(this.lastStringBackspaced),
      onTypingPaused: emitIndex(this.typingPaused),
      onTypingResumed: emitIndex(this.typingResumed),
      onReset: emit(this.reset),
      onStop: emitIndex(this.stopped),
      onStart: emitIndex(this.started),
      onDestroy: emit(this.destroyed)
    };
    Object.keys(opts).forEach((key) => {
      if (opts[key] === void 0) {
        delete opts[key];
      }
    });
    return opts;
  }
  updateCursorStyle() {
    const textElementStyle = getComputedStyle(this.content.nativeElement.querySelector(".typing"));
    const cursorElementStyle = this.content.nativeElement.querySelector(".typed-cursor").style;
    cursorElementStyle.fontSize = textElementStyle.fontSize;
    cursorElementStyle.color = this.cursorColor || textElementStyle.color;
  }
  ngOnChanges(changes) {
    if (this.typed) {
      this.typed.destroy();
      this.ngAfterViewInit();
    }
  }
};
NgxTypedJsComponent.\u0275fac = function NgxTypedJsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxTypedJsComponent)();
};
NgxTypedJsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: NgxTypedJsComponent,
  selectors: [["ngx-typed-js"]],
  viewQuery: function NgxTypedJsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    cursorColor: "cursorColor",
    strings: "strings",
    stringsElement: "stringsElement",
    typeSpeed: "typeSpeed",
    startDelay: "startDelay",
    backSpeed: "backSpeed",
    smartBackspace: "smartBackspace",
    shuffle: "shuffle",
    backDelay: "backDelay",
    fadeOut: "fadeOut",
    fadeOutClass: "fadeOutClass",
    fadeOutDelay: "fadeOutDelay",
    loop: "loop",
    loopCount: "loopCount",
    showCursor: "showCursor",
    cursorChar: "cursorChar",
    autoInsertCss: "autoInsertCss",
    attr: "attr",
    bindInputFocusEvents: "bindInputFocusEvents",
    contentType: "contentType"
  },
  outputs: {
    completed: "completed",
    preStringTyped: "preStringTyped",
    stringTyped: "stringTyped",
    lastStringBackspaced: "lastStringBackspaced",
    typingPaused: "typingPaused",
    typingResumed: "typingResumed",
    reset: "reset",
    stopped: "stopped",
    started: "started",
    destroyed: "destroyed"
  },
  standalone: false,
  features: [\u0275\u0275NgOnChangesFeature],
  ngContentSelectors: _c1,
  decls: 3,
  vars: 0,
  consts: [["wrapper", ""]],
  template: function NgxTypedJsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", null, 0);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd();
    }
  },
  styles: ["[_nghost-%COMP%] > .typing[_ngcontent-%COMP%]{display:inline}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxTypedJsComponent, [{
    type: Component,
    args: [{
      selector: "ngx-typed-js",
      template: "<div #wrapper>\n  <ng-content></ng-content>\n</div>\n",
      styles: [":host>.typing{display:inline}\n"]
    }]
  }], null, {
    cursorColor: [{
      type: Input
    }],
    strings: [{
      type: Input
    }],
    stringsElement: [{
      type: Input
    }],
    typeSpeed: [{
      type: Input
    }],
    startDelay: [{
      type: Input
    }],
    backSpeed: [{
      type: Input
    }],
    smartBackspace: [{
      type: Input
    }],
    shuffle: [{
      type: Input
    }],
    backDelay: [{
      type: Input
    }],
    fadeOut: [{
      type: Input
    }],
    fadeOutClass: [{
      type: Input
    }],
    fadeOutDelay: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    loopCount: [{
      type: Input
    }],
    showCursor: [{
      type: Input
    }],
    cursorChar: [{
      type: Input
    }],
    autoInsertCss: [{
      type: Input
    }],
    attr: [{
      type: Input
    }],
    bindInputFocusEvents: [{
      type: Input
    }],
    contentType: [{
      type: Input
    }],
    completed: [{
      type: Output
    }],
    preStringTyped: [{
      type: Output
    }],
    stringTyped: [{
      type: Output
    }],
    lastStringBackspaced: [{
      type: Output
    }],
    typingPaused: [{
      type: Output
    }],
    typingResumed: [{
      type: Output
    }],
    reset: [{
      type: Output
    }],
    stopped: [{
      type: Output
    }],
    started: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    content: [{
      type: ViewChild,
      args: ["wrapper", {
        static: true
      }]
    }]
  });
})();
var NgxTypedJsModule = class {
};
NgxTypedJsModule.\u0275fac = function NgxTypedJsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxTypedJsModule)();
};
NgxTypedJsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: NgxTypedJsModule
});
NgxTypedJsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [[]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxTypedJsModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxTypedJsComponent],
      imports: [],
      exports: [NgxTypedJsComponent]
    }]
  }], null, null);
})();

// src/app/shared/shared.module.ts
var SharedModule = class _SharedModule {
  static {
    this.\u0275fac = function SharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
      provideHttpClient(withFetch(), withInterceptorsFromDi())
    ], imports: [
      NgxScrollTopModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      CommonModule,
      NgxScrollTopModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      FormsModule,
      CountUpModule,
      NgxTypedJsModule
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      declarations: [
        NavbarComponent,
        FooterComponent
      ],
      exports: [
        CommonModule,
        NgxScrollTopModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        CountUpModule,
        NgxTypedJsModule,
        NavbarComponent,
        FooterComponent
      ],
      imports: [
        NgxScrollTopModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
      ],
      providers: [
        provideHttpClient(withFetch(), withInterceptorsFromDi())
      ]
    }]
  }], null, null);
})();

export {
  DefaultValueAccessor,
  Validators,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate,
  RadioControlValueAccessor,
  FormBuilder,
  NavbarComponent,
  FooterComponent,
  CountUpDirective,
  SharedModule
};
/*! Bundled license information:

@angular/forms/fesm2022/forms.mjs:
  (**
   * @license Angular v19.2.11
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-ZV3RLNPR.js.map
