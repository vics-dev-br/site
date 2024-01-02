import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeadRoutes } from './lead.routing';
import { LeadComponent } from './lead.component';
import { RequestContactComponent } from './components/request_contact/request-contact.component';


@NgModule({
    declarations: [
        LeadComponent,
        RequestContactComponent
    ],
    imports: [
        RouterModule.forChild(LeadRoutes),
        SharedModule
    ],
    providers: []
})
export class LeadModule {
}
