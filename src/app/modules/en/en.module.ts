import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnComponent } from './en.component';
import { EnRoutes } from './en.routing';

@NgModule({
    declarations: [EnComponent],
    imports: [SharedModule, RouterModule.forChild(EnRoutes)]
})
export class EnModule { }
