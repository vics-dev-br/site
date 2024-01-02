import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path: 'contato',
        loadChildren: () => import("./modules/contact/contact.module").then(m => m.ContactModule)
    }
];
