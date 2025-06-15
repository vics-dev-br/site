import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechEquityComponent } from './tech-equity.component';

@NgModule({
  declarations: [
    TechEquityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TechEquityComponent }
    ])
  ]
})
export class TechEquityModule { }