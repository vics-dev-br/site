import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path: 'lead',
        loadChildren: () => import("./modules/lead/lead.module").then(m => m.LeadModule)
    }
];
