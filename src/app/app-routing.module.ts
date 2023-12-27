import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path: 'post',
        loadChildren: () => import("./modules/blog/blog.module").then(m => m.BlogModule)
    }
];
