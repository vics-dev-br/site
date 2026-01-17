import { Route } from '@angular/router';
import { MlStartComponent } from './ml-start.component';
import { DiagnosticoComponent } from './diagnostico.component';

export const MlStartRoutes: Route[] = [
  {
    path: '',
    component: MlStartComponent
  },
  {
    path: 'diagnostico',
    component: DiagnosticoComponent
  }
];
