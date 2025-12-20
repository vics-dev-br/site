import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerformanceInfraComponent } from './performance-infra.component';
import { PerformanceInfraRoutes } from './performance-infra.routing';

@NgModule({
  declarations: [PerformanceInfraComponent],
  imports: [SharedModule, RouterModule.forChild(PerformanceInfraRoutes)]
})
export class PerformanceInfraModule { }
