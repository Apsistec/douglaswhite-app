import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared/shared.module';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';
import { NgParticlesModule } from 'ng-particles';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { ControlErrorContainerDirective } from '../directives/control-error-container.directive';
import { ControlErrorsDirective } from '../directives/control-errors.directive';
import { FormSubmitDirective } from '../directives/form-submit.directive';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ContactPage }]),
    ContactPageRoutingModule,
    SharedModule,
    NgParticlesModule,
  ],
  entryComponents: [ControlErrorComponent],

  declarations: [
    ContactPage,
    ControlErrorsDirective, FormSubmitDirective, ControlErrorContainerDirective, ControlErrorComponent
  ]
})
export class ContactPageModule {}
