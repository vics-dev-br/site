import { ViewportScroller } from '@angular/common';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterContentInit {

    constructor(private viewportScroller: ViewportScroller, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {

    }

    ngAfterContentInit(): void {
        this.activatedRoute.fragment.subscribe((fragment: string) => {
            if (fragment) {
                setTimeout(() => {
                    this.viewportScroller.scrollToAnchor(fragment);
                }, 100); // Ajuste o tempo de atraso conforme necessário
            }
        });
    }

}