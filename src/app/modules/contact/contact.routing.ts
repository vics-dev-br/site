import { Route } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './components/form.component';

export const ContactRoutes: Route[] = [
    {
        path: '',
        component: ContactComponent,
        children: [
            {
                path: '',
                component: ContactFormComponent
            }
        ]
    }
];