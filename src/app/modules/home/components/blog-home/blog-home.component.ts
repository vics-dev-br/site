import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Post } from 'src/app/modules/blog/blog.type';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss'],
  standalone: false
})
export class BlogHomeComponent implements OnInit {
  public posts!: Post[];

  constructor(
    private viewportScroller: ViewportScroller,
    private _homeService: HomeService
  ) {}

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
    this._homeService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
