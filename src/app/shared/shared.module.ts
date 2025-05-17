import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CountUpModule } from 'ngx-countup';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({ declarations: [
        NavbarComponent,
        FooterComponent
    ],
    exports: [
        CommonModule,
        NgxScrollTopModule,     
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        FormsModule,
        CountUpModule,       
        NgxTypedJsModule,
        NavbarComponent,
        FooterComponent
    ], 
    imports: [
        NgxScrollTopModule,       
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule], 
        providers: [
            provideHttpClient(
              withFetch(),
              withInterceptorsFromDi()
            )
        ]
})
export class SharedModule {
}
