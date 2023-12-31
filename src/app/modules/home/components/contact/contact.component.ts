import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    form: FormGroup;

    constructor(private _contactService: ContactService, private viewportScroller: ViewportScroller, private _formBuilder: FormBuilder) { }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
        this.form = this._formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            subject: ['', [Validators.required, Validators.minLength(8)]],
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
                (response) => console.log(response)
            )
        }
    }

}