import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactRoutes } from './contact.routing';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './components/form.component';
import { ContactService } from './contact.service';


@NgModule({
    declarations: [
        ContactComponent,
        ContactFormComponent
    ],
    imports: [
        RouterModule.forChild(ContactRoutes),
        SharedModule
    ],
    providers: [ContactService]
})
export class ContactModule {
}
