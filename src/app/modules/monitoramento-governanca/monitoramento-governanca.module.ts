import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MonitoramentoGovernancaComponent } from './monitoramento-governanca.component';
import { DiagnosticoMonitoramentoComponent } from './diagnostico-monitoramento.component';
import { MonitoramentoGovernancaRoutes } from './monitoramento-governanca.routing';

@NgModule({
  declarations: [MonitoramentoGovernancaComponent, DiagnosticoMonitoramentoComponent],
  imports: [SharedModule, RouterModule.forChild(MonitoramentoGovernancaRoutes)]
})
export class MonitoramentoGovernancaModule {}
