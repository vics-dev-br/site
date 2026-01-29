import { Route } from '@angular/router';
import { MonitoramentoGovernancaComponent } from './monitoramento-governanca.component';
import { DiagnosticoMonitoramentoComponent } from './diagnostico-monitoramento.component';

export const MonitoramentoGovernancaRoutes: Route[] = [
  {
    path: '',
    component: MonitoramentoGovernancaComponent
  },
  {
    path: 'diagnostico',
    component: DiagnosticoMonitoramentoComponent
  }
];
