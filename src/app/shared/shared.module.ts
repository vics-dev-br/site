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


@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        NgxScrollTopModule,
        CarouselModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        NgxScrollTopModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        CountUpModule,
        TooltipModule,
        NgxTypedJsModule,
        NavbarComponent,
        FooterComponent
    ],
    providers: []
})
export class SharedModule {
}
