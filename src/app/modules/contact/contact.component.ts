import { ViewportScroller } from '@angular/common';
import { AfterContentInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit, OnDestroy, AfterContentInit {
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */

    constructor(private viewportScroller: ViewportScroller, private activatedRoute: ActivatedRoute) { }


    ngAfterContentInit(): void {
        this.activatedRoute.fragment.subscribe((fragment: string) => {
            if (fragment) {
                setTimeout(() => {
                    this.viewportScroller.scrollToAnchor(fragment);
                }, 100); // Ajuste o tempo de atraso conforme necessário
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
}
