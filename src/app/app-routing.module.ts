import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path: 'lead',
        loadChildren: () => import("./modules/lead/lead.module").then(m => m.LeadModule)
    },
    {
        path: 'politica_de_privacidade',
        loadChildren: () => import("./modules/privacy_policy/privacy_policy.module").then(m => m.PrivacyPolicyModule)
    },
    { path: 'landing', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },

];
