import { Route } from '@angular/router';
import { LeadComponent } from './lead.component';
import { RequestContactComponent } from './components/request_contact/request-contact.component';


export const LeadRoutes: Route[] = [
  {
    path: '',
    component: LeadComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
    },
    children: [
      {
        path: '',
        component: RequestContactComponent,
        resolve: {
        }
      }
    ]
  }
];