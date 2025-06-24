import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingTipsComponent } from './landing-tips.component';

@NgModule({
  declarations: [
    LandingTipsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LandingTipsComponent }
    ])
  ]
})
export class LandingTipsModule { }