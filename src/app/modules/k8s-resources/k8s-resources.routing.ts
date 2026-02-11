import { Route } from '@angular/router';
import { K8sResourcesComponent } from './k8s-resources.component';

export const K8sResourcesRoutes: Route[] = [
  {
    path: '',
    component: K8sResourcesComponent
  }
];
