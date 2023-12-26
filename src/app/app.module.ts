import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {TabsModule} from 'ngx-tabset';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './modules/home/components/preloader/preloader.component';
import { ServicesTwoComponent } from './modules/home/components/services-two/services-two.component';
import { appRoutes } from './app-routing.module';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';


const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        ServicesTwoComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }