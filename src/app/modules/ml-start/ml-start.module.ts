import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MlStartComponent } from './ml-start.component';
import { MlStartRoutes } from './ml-start.routing';

@NgModule({
  declarations: [MlStartComponent],
  imports: [SharedModule, RouterModule.forChild(MlStartRoutes)]
})
export class MlStartModule {}
