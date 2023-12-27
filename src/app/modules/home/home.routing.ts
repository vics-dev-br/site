import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { IndexComponent } from './components/index/index.component';
import { PostsResolver } from '../blog/blog.resolvers';


export const HomeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
      posts: PostsResolver
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