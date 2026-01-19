import { Route } from '@angular/router';
import { PerformanceInfraComponent } from './performance-infra.component';
import { DiagnosticoPerformanceComponent } from './diagnostico-performance.component';

export const PerformanceInfraRoutes: Route[] = [
  {
    path: '',
    component: PerformanceInfraComponent
  },
  {
    path: 'diagnostico',
    component: DiagnosticoPerformanceComponent
  }
];
