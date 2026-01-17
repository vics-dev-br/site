import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MlStartComponent } from './ml-start.component';
import { DiagnosticoComponent } from './diagnostico.component';
import { MlStartRoutes } from './ml-start.routing';

@NgModule({
  declarations: [MlStartComponent, DiagnosticoComponent],
  imports: [SharedModule, RouterModule.forChild(MlStartRoutes)]
})
export class MlStartModule {}
