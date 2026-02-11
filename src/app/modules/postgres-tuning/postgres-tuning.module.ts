import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostgresTuningComponent } from './postgres-tuning.component';
import { PostgresTuningRoutes } from './postgres-tuning.routing';

@NgModule({
  declarations: [PostgresTuningComponent],
  imports: [SharedModule, RouterModule.forChild(PostgresTuningRoutes)]
})
export class PostgresTuningModule { }
