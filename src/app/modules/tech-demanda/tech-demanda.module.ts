import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TechDemandaComponent } from './tech-demanda.component';

const routes: Routes = [
  {
    path: '',
    component: TechDemandaComponent
  }
];

@NgModule({
  declarations: [
    TechDemandaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TechDemandaModule { }