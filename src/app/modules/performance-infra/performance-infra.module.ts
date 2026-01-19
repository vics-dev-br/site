import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerformanceInfraComponent } from './performance-infra.component';
import { PerformanceInfraRoutes } from './performance-infra.routing';
import { DiagnosticoPerformanceComponent } from './diagnostico-performance.component';

@NgModule({
  declarations: [PerformanceInfraComponent, DiagnosticoPerformanceComponent],
  imports: [SharedModule, RouterModule.forChild(PerformanceInfraRoutes)]
})
export class PerformanceInfraModule { }
