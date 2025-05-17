import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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

    constructor(private viewportScroller: ViewportScroller, private _homeService: HomeService) {}

    public onClick(elementId: string): void { 
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {
        this._homeService.getPosts().subscribe(
            (posts) => {
                this.posts = posts;
            }
        )
    }

    blogSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		rtl: true,
		margin: 30,
		navText: [
			"<i class='fa fa-angle-right'></i>",
			"<i class='fa fa-angle-left'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
    }

}