import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    @ViewChild('about') aboutElement: ElementRef;

    constructor(
        private viewportScroller: ViewportScroller
    ) { }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    public onClick(elementId: string): void {
        this.viewportScroller.scrollToAnchor(elementId);
    }

    ngOnInit() {

    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    scrollToAbout() {
        this.aboutElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

}