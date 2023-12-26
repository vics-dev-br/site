import { Route } from '@angular/router';
import { BlogComponent } from './blog.component';
import { AuthorResolver, PostResolver, PostsResolver, ProfileResolver } from './blog.resolvers';
import { BlogDetailsComponent } from './blog-details/blog-details.component';


export const BlogRoutes: Route[] = [
  {
    path: '',
    component: BlogComponent,
    canActivate: [],
    canActivateChild: [],
    resolve: {
      posts: PostsResolver
    },
    children : [
      {
        path     : ':id',
        component: BlogDetailsComponent,
        resolve  : {
            post: PostResolver,
            author: AuthorResolver,
            profile: ProfileResolver
        }
      }
    ]
  }
];