import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { ContactType, People, Post, Profile } from './blog.type';
import { switchMap, tap } from 'rxjs/operators';
import { posts as postsData, peoples as peoplesData, profiles as profilesData } from './blog.data';
import { BaseServiceComponent } from 'src/app/core/base-service.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class BlogService extends BaseServiceComponent {
    private _posts: BehaviorSubject<Post[]> = new BehaviorSubject(null);
    private _post: BehaviorSubject<Post> = new BehaviorSubject(null);
    private _author: BehaviorSubject<People> = new BehaviorSubject(null);
    private _profile: BehaviorSubject<Profile> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    public constructor(public httpClientd: HttpClient) {
        super(httpClientd);
    }

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
     * Getter for post
     */
    get post$(): Observable<Post> {
        return this._post.asObservable();
    }

    /**
     * Getter for author
     */
    get author$(): Observable<People> {
        return this._author.asObservable();
    }

    /**
     * Getter for profile
     */
    get profile$(): Observable<Profile> {
        return this._profile.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for post
    */
    public getPost(id: number): Observable<Post> {
        return of(postsData).pipe(
            tap((response: any) => {
                const post = postsData.data.find(item => item.id === id);
                this._post.next(post);
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

    /**
     * Getter for profile
    */
    public getProfileByPost(postId: number): Observable<Profile> {
        return of(postsData).pipe(
            tap((response: any) => {
                const post = postsData.data.find(item => item.id === postId);
                const authorId = post.relationships.author.data.id;
                const author = peoplesData.data.find(item => item.id === authorId);
                const profileId = author.relationships.profile.data.id;
                const profile = profilesData.data.find(item => item.id === profileId);
                this._profile.next(profile);
            }),
            switchMap((response) => {
                if (response === null) {
                    return throwError({
                        message: 'Requested page is not available!'
                    });
                }
                return of(response);
            })
        );
    }

    /**
    * Getter for author
    */
    public getAuthorByPost(postId: number): Observable<People> {
        return of(postsData).pipe(
            tap((response: any) => {
                const post = postsData.data.find(item => item.id === postId);
                const authorId = post.relationships.author.data.id;
                const author = peoplesData.data.find(item => item.id === authorId);
                this._author.next(author);
            }),
            switchMap((response) => {
                if (response === null) {
                    return throwError({
                        message: 'Requested page is not available!'
                    });
                }
                return of(response);
            })
        );
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

    public requestContact(contact: ContactType): Observable<ContactType> {
        const url = this.getBaseUrl('contacts');
        return this.httpClientd.post<ContactType>(url, contact);
    }

}
