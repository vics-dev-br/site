import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { Router } from '@angular/router';

declare global {
    interface Window {
        dataLayer: any[];
    }
}

@Component({
    selector: 'app-contact-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    standalone: false
})
export class ContactFormComponent implements OnInit {
    form: FormGroup;


    constructor(private _router: Router, private _contactService: ContactService, private _formBuilder: FormBuilder) { }

    ngOnInit() {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            subject: ['', [Validators.required]],
            message: ['', [Validators.required]]
        });

    }

    get name(): FormControl { return this.form.get('name') as FormControl; }
    get email(): FormControl { return this.form.get('email') as FormControl; }
    get phone(): FormControl { return this.form.get('phone') as FormControl; }
    get subject(): FormControl { return this.form.get('subject') as FormControl; }
    get message(): FormControl { return this.form.get('message') as FormControl; }

    submit() {
        if (this.form.valid) {
            this._contactService.requestContact(this.form.value).subscribe(
                (response) => {
                    // Push evento para o Google Tag Manager
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({
                        'event': 'contact_form_submit',
                        'form_type': 'contact',
                        'form_location': 'home_page',
                        'form_subject': this.form.value.subject
                    });
                    
                    this._router.navigate([`/lead`],);
                },
                (error) => { console.log(error) }
            )
        }
    }

}