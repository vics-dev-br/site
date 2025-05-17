import 'jquery';

declare global {
  interface JQuery {
    tooltip(options?: any): JQuery;
  }
}
