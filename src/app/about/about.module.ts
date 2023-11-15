import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FlaskBakComponent } from '../flask-bak/flask-bak.component';
import { SharedModule } from '../shared/shared.module';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { MatIconModule } from '@angular/material/icon';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { StepperComponent } from '../stepper/stepper.component';
import { StepperContentComponent } from '../stepper-content/stepper-content.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    SharedModule,
    MatIconModule,
    CdkStepperModule,
    NgTemplateOutlet,
  ],
  declarations: [
    AboutPage,
    FlaskBakComponent,
    StepperComponent,
    StepperContentComponent,
  ],
  providers: [CdkStepper],
})
export class AboutPageModule {}
