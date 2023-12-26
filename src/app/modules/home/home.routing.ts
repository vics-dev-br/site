import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './components/index/index.component';


export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
    },
    children : [
      {
        path     : '',
        component: IndexComponent,
        resolve  : {
        }
      }
    ]
  }
];