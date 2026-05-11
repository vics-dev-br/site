import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReferralProgramComponent } from './referral-program.component';
import { ReferralProgramRoutes } from './referral-program.routing';

@NgModule({
  declarations: [ReferralProgramComponent],
  imports: [SharedModule, HttpClientModule, RouterModule.forChild(ReferralProgramRoutes)]
})
export class ReferralProgramModule { }
