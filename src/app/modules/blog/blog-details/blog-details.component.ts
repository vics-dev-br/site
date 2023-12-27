import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { People, Post, Profile } from '../blog.type';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  public post!: Post;
  public author!: People;
  public profile!: Profile;
  form: FormGroup;

  constructor(private _blogService: BlogService, private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  get fullName(): FormControl { return this.form.get('fullName') as FormControl; }
  get email(): FormControl { return this.form.get('email') as FormControl; }
  get message(): FormControl { return this.form.get('message') as FormControl; }

  ngOnInit() {

    // post
    this._blogService.post$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((post: Post) => {
        this.post = post;
      });

    // author
    this._blogService.author$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((author: People) => {
        this.author = author;
      });


    // profile
    this._blogService.profile$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((profile: Profile) => {
        this.profile = profile;
      });
  }

  requestContact() {
    if (this.form.valid) {
      this._blogService.requestContact(this.form.value).subscribe(
        (contact) => { console.log(contact) }
      )
    }
  }

}
