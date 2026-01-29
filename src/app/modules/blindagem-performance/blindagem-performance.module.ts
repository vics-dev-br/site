import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlindagemPerformanceComponent } from './blindagem-performance.component';
import { DiagnosticoBlindagemComponent } from './diagnostico-blindagem.component';
import { BlindagemPerformanceRoutes } from './blindagem-performance.routing';

@NgModule({
  declarations: [BlindagemPerformanceComponent, DiagnosticoBlindagemComponent],
  imports: [SharedModule, RouterModule.forChild(BlindagemPerformanceRoutes)]
})
export class BlindagemPerformanceModule {}
