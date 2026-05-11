# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VICS (www.vics.dev.br) is an Angular 19 Progressive Web Application (PWA) with Server-Side Rendering (SSR) for a data science/analytics company. The project uses Angular Universal for SEO optimization and includes offline capabilities through service workers.

## Commands

### Development
- `npm start` - Start development server at http://localhost:4200/
- `npm run serve:ssr` - Run the SSR server locally using the built distribution

### Build
- `npm run build` - Build for production with optimization
- `npm run build:prod` - Same as above, explicitly production build
- `npm run build:test` - Build for test environment
- `npm run build:ssr` - Build both client and server bundles for SSR

### Testing & Quality
- `npm test` - Run unit tests with Karma/Jasmine in Chrome (watch mode enabled by default)
- `npm run lint` - Run TSLint with Codelyzer for Angular-specific checks
- `npm run e2e` - Run end-to-end tests with Protractor
- Coverage reports: `./coverage/xavro/`
- Single test file: `ng test --include='**/path-to-spec.ts'`
- Focus specific tests: use `fdescribe()` or `fit()` in test files

### Angular CLI
- `ng generate component modules/[module-name]/components/[component-name]`
- `ng generate service modules/[module-name]/services/[service-name]`
- `ng generate module modules/[module-name] --route [route-name] --module app.module`

## Architecture

### Module Structure
All feature modules are lazy-loaded via `app-routing.module.ts`:

```
src/app/
├── core/                      # BaseServiceComponent (extends for API calls)
├── shared/                    # SharedModule: navbar, footer, common imports
└── modules/
    ├── home/                  # Main landing page (marketing sections as child components)
    ├── blog/                  # Blog list + detail (data from blog.data.ts, not API)
    ├── lead/                  # Lead generation forms
    ├── landing/               # Generic landing page
    ├── landing-tips/          # Tips landing page
    ├── privacy_policy/        # Privacy policy page
    ├── tech-equity/           # Tech equity service page
    ├── performance-infra/     # Performance infrastructure page
    ├── blindagem-performance/ # Performance shielding page
    ├── monitoramento-governanca/ # Monitoring & governance page
    ├── tech-demanda/          # Tech on-demand page
    ├── ml-start/              # ML starter page
    ├── postgres-tuning/       # Tool: Postgres tuning calculator
    ├── k8s-resources/         # Tool: Kubernetes resources calculator
    ├── cloud-credits/         # Tool: Cloud credits calculator
    └── referral-program/      # Referral/affiliate program page
```

### Data Patterns

**Blog content** is stored as static data in `src/app/modules/blog/blog.data.ts` (not fetched from API). The `BlogService` reads from this file and exposes data via `BehaviorSubject` + Observable accessors (`posts$`, `post$`, `author$`, `profile$`).

**API calls** go through `BaseServiceComponent` (`src/app/core/base-service.component.ts`), which prepends `environment.apiGateway`. Services extending `BaseServiceComponent` call `this.getBaseUrl('endpoint')` to build URLs.

**Route resolvers** pre-fetch data before component activation. Pattern: resolver calls service method → service updates BehaviorSubject → component subscribes to `service.data$` observable.

### SharedModule
All feature modules import `SharedModule`, which re-exports: `CommonModule`, `FormsModule`, `ReactiveFormsModule`, `RouterModule`, `CountUpModule`, `NgxTypedJsModule`, `NgxScrollTopModule`, `NavbarComponent`, `FooterComponent`.

### API Configuration
- Production: `https://669n3b1h62.execute-api.us-east-1.amazonaws.com/prod/` (AWS Lambda)
- Development: `http://localhost:3000/`
- Configured in `src/environments/`

### Key Technologies
- Angular 19.2.11 with TypeScript 5.8.3
- Bootstrap 5.3 for styling
- FontAwesome for icons
- Animate.css for animations
- ngx-countup, ngx-scrolltop, ngx-typed-js for UI enhancements

### Deployment
AWS Amplify (see `amplify.yml`):
- Node.js 22 runtime
- Build output: `dist/vics/browser`
- SSR server: `dist/vics/server/server.mjs`

## Code Style
- Single quotes for strings; semicolons required
- 140 character line limit
- Component selectors: `app-` prefix with kebab-case
- Directive selectors: `app` prefix with camelCase
- Member ordering: static fields → instance fields → static methods → instance methods
- Banned console methods: `debug`, `info`, `time`, `timeEnd`, `trace`
