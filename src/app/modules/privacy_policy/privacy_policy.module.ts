import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivacyPolicyRoutes } from './privacy_policy.routing';
import { PrivacyPolicyComponent } from './privacy_policy.component';
import { PrivacyPolicyPageComponent } from './components/privace_policy_page.component';


@NgModule({
    declarations: [
        PrivacyPolicyComponent,
        PrivacyPolicyPageComponent
    ],
    imports: [
        RouterModule.forChild(PrivacyPolicyRoutes),
        SharedModule
    ],
    providers: []
})
export class PrivacyPolicyModule {
}
