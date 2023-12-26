import { Route } from '@angular/router';
import { HomeOneComponent } from './components/home-one/home-one.component';

export const appRoutes: Route[] = [
    {path: '', component: HomeOneComponent},
    {
        path: 'blog',
        loadChildren: () => import("./modules/blog/blog.module").then(m => m.BlogModule)
    },
    {path: '**', component: HomeOneComponent} // This line will remain down from the whole pages component list
];
