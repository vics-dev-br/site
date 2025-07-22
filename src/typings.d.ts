import 'jquery';

declare global {
  interface JQuery {
    tooltip(options?: any): JQuery;
  }
  
  function gtag(...args: any[]): void;
}
