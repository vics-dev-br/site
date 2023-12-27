import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HomeService } from './home.service';
import { Post } from '../blog/blog.type';



@Injectable({
    providedIn: 'root'
})
export class HomePostsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(        
        private _homeService: HomeService,
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
        return this._homeService.getPosts();
    }
}

