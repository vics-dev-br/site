import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseServiceComponent } from 'src/app/core/base-service.component';

@Injectable({
    providedIn: 'root'
})
export class ContactService extends BaseServiceComponent {

    public constructor(public authHttp: HttpClient) {
        super(authHttp);
    }

    public requestContact(contact) {
        const url = `request_contact`;
        return this.authHttp.post(this.getBaseUrl(url), contact);
    }

    public subscrible(email) {
        const url = `subscrible`;
        return this.authHttp.post(this.getBaseUrl(url), email)
    }
}
