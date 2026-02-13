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
    {
        path: 'tech-equity',
        loadChildren: () => import('./modules/tech-equity/tech-equity.module').then(m => m.TechEquityModule)
    },
    {
        path: 'performance-infra',
        loadChildren: () => import('./modules/performance-infra/performance-infra.module').then(m => m.PerformanceInfraModule)
    },
    {
        path: 'blindagem-performance-infra',
        loadChildren: () => import('./modules/blindagem-performance/blindagem-performance.module').then(m => m.BlindagemPerformanceModule)
    },
    {
        path: 'monitoramento-governanca-performance',
        loadChildren: () => import('./modules/monitoramento-governanca/monitoramento-governanca.module').then(m => m.MonitoramentoGovernancaModule)
    },
    {
        path: 'landing-tips',
        loadChildren: () => import('./modules/landing-tips/landing-tips.module').then(m => m.LandingTipsModule)
    },
    {
        path: 'tech-demanda',
        loadChildren: () => import('./modules/tech-demanda/tech-demanda.module').then(m => m.TechDemandaModule)
    },
    {
        path: 'ml-start',
        loadChildren: () => import('./modules/ml-start/ml-start.module').then(m => m.MlStartModule)
    },
    {
        path: 'ferramentas/postgres-tuning-online',
        loadChildren: () => import('./modules/postgres-tuning/postgres-tuning.module').then(m => m.PostgresTuningModule)
    },
    {
        path: 'ferramentas/k8s-resources-calculator',
        loadChildren: () => import('./modules/k8s-resources/k8s-resources.module').then(m => m.K8sResourcesModule)
    },
    {
        path: 'ferramentas/cloud-credits',
        loadChildren: () => import('./modules/cloud-credits/cloud-credits.module').then(m => m.CloudCreditsModule)
    },

];
