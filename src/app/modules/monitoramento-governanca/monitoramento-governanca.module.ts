import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MonitoramentoGovernancaComponent } from './monitoramento-governanca.component';
import { MonitoramentoGovernancaRoutes } from './monitoramento-governanca.routing';

@NgModule({
  declarations: [MonitoramentoGovernancaComponent],
  imports: [SharedModule, RouterModule.forChild(MonitoramentoGovernancaRoutes)]
})
export class MonitoramentoGovernancaModule {}
