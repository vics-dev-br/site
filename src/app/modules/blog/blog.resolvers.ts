import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { BlogService } from './blog.service';
import { People, Post, Profile } from './blog.type';
import { catchError } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class PostsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(        
        private _blogService: BlogService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]>
    {               
        return this._blogService.getPosts();
    }
}



@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(        
        private _blogService: BlogService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post>
    {               
        const id = route.paramMap.get('id');
        return this._blogService.getPost(+id).pipe(
            // Error here means the requested mail is either
            // not available on the requested page or not
            // available at all
            catchError((error) => {

                // Log the error
                console.error(error);

                // Get the parent url
                const parentUrl = state.url.split('/').slice(0, -1).join('/');

                // Navigate to there
                this._router.navigateByUrl(parentUrl);

                // Throw an error
                return throwError(error);
            })
        );
    }
}


@Injectable({
    providedIn: 'root'
})
export class ProfileResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(        
        private _blogService: BlogService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile>
    {               
        const postId = route.paramMap.get('id');
        return this._blogService.getProfileByPost(+postId).pipe(
            catchError((error) => {

                // Log the error
                console.error(error);

                // Get the parent url
                const parentUrl = state.url.split('/').slice(0, -1).join('/');

                // Navigate to there
                this._router.navigateByUrl(parentUrl);

                // Throw an error
                return throwError(error);
            })
        );
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthorResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(        
        private _blogService: BlogService,
        private _router: Router
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<People>
    {               
        const postId = route.paramMap.get('id');
        return this._blogService.getAuthorByPost(+postId).pipe(
            catchError((error) => {

                // Log the error
                console.error(error);

                // Get the parent url
                const parentUrl = state.url.split('/').slice(0, -1).join('/');

                // Navigate to there
                this._router.navigateByUrl(parentUrl);

                // Throw an error
                return throwError(error);
            })
        );
    }
}
