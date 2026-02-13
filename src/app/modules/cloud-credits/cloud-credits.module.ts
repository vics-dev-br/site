import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CloudCreditsComponent } from './cloud-credits.component';
import { CloudCreditsRoutes } from './cloud-credits.routing';

@NgModule({
  declarations: [CloudCreditsComponent],
  imports: [SharedModule, RouterModule.forChild(CloudCreditsRoutes)]
})
export class CloudCreditsModule { }
