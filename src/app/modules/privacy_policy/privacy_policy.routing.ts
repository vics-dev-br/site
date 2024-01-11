import { Route } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy_policy.component';
import { PrivacyPolicyPageComponent } from './components/privace_policy_page.component';


export const PrivacyPolicyRoutes: Route[] = [
  {
    path: '',
    component: PrivacyPolicyComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
    },
    children: [
      {
        path: '',
        component: PrivacyPolicyPageComponent,
        resolve: {
        }
      }
    ]
  }
];