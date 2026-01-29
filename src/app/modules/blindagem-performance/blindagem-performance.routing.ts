import { Route } from '@angular/router';
import { BlindagemPerformanceComponent } from './blindagem-performance.component';
import { DiagnosticoBlindagemComponent } from './diagnostico-blindagem.component';

export const BlindagemPerformanceRoutes: Route[] = [
  {
    path: '',
    component: BlindagemPerformanceComponent
  },
  {
    path: 'diagnostico',
    component: DiagnosticoBlindagemComponent
  }
];
