import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { CtaComponent } from './components/cta/cta.component';
import { SkillComponent } from './components/skill/skill.component';
import { FunfactsComponent } from './components/funfacts/funfacts.component';
import { TeamComponent } from './components/team/team.component';
import { HowWeWorkComponent } from './components/how-we-work/how-we-work.component';
import { ServicesComponent } from './components/services/services.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { PartnerComponent } from './components/partner/partner.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FaqComponent } from './components/faq/faq.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { WorkComponent } from './components/work/work.component';
import { WhyWeDifferentComponent } from './components/why-we-different/why-we-different.component';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { IndexComponent } from './components/index/index.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HomeService } from './home.service';
import { HomePostsResolver } from './home.resolvers';
import { ContactService } from './components/contact/contact.service';
import { ContactFormComponent } from './components/contact/form.component';

@NgModule({
    declarations: [
        IndexComponent,
        HomeComponent,
        AboutComponent,
        BlogHomeComponent,
        StrategyComponent,
        WhoWeAreComponent,
        CtaComponent,
        SkillComponent,
        FunfactsComponent,
        TeamComponent,
        HowWeWorkComponent,
        ServicesComponent,
        SubscribeComponent,
        PartnerComponent,
        FeedbackComponent,
        FaqComponent,
        PricingComponent,
        WorkComponent,
        WhyWeDifferentComponent,
        WelcomeComponent,
        ContactFormComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(HomeRoutes),
    ],
    providers: [HomeService, HomePostsResolver, ContactService]
})
export class HomeModule {
}
