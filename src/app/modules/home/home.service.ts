import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Post } from '../blog/blog.type';
import { posts as postsData } from '../blog/blog.data';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    private _posts: BehaviorSubject<Post[]> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor() { }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for posts
     */
    get posts$(): Observable<Post[]> {
        return this._posts.asObservable();
    }


    /**
    * Getter for posts
    */
    public getPosts(): Observable<Post[]> {
        return of(postsData).pipe(
            tap((response: any) => {
                this._posts.next(response.data);
            }),
            switchMap((response) => {
                if (response.data === null) {
                    return throwError({
                        message: 'Requested page is not available!'
                    });
                }
                return of(response.data);
            })
        );
    }

}
