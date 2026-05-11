import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PtPtComponent } from './pt-pt.component';
import { PtPtRoutes } from './pt-pt.routing';

@NgModule({
    declarations: [PtPtComponent],
    imports: [SharedModule, RouterModule.forChild(PtPtRoutes)]
})
export class PtPtModule { }
