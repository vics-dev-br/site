import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { K8sResourcesComponent } from './k8s-resources.component';
import { K8sResourcesRoutes } from './k8s-resources.routing';

@NgModule({
  declarations: [K8sResourcesComponent],
  imports: [SharedModule, RouterModule.forChild(K8sResourcesRoutes)]
})
export class K8sResourcesModule { }
