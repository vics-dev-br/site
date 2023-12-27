import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogService } from './blog.service';
import { AuthorResolver, PostResolver, PostsResolver, ProfileResolver } from './blog.resolvers';
import { BlogRoutes } from './blog.routing';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        BlogComponent,
        BlogListComponent,
        BlogDetailsComponent
    ],
    imports     : [
        RouterModule.forChild(BlogRoutes),
        SharedModule      
    ],
    providers: [BlogService, PostsResolver, PostResolver, ProfileResolver, AuthorResolver]
})
export class BlogModule
{
}
