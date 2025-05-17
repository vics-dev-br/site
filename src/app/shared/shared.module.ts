import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CountUpModule } from 'ngx-countup';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({ declarations: [
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        CommonModule,
        NgxScrollTopModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        CountUpModule,
        TooltipModule,
        NgxTypedJsModule,
        NavbarComponent,
        FooterComponent
    ], imports: [NgxScrollTopModule,
        CarouselModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {
}
