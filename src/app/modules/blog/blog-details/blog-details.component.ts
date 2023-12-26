import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { People, Post, Profile } from '../blog.type';

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

  constructor(private _blogService: BlogService) { }

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

}
