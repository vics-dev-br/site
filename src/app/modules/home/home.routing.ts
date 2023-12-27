import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './components/index/index.component';
import { HomePostsResolver } from './home.resolvers';


export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
      posts: HomePostsResolver
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