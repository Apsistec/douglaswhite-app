import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ControlErrorComponent } from '../control-error/control-error.component';
import { ControlErrorContainerDirective } from '../directives/control-error-container.directive';
import { ControlErrorsDirective } from '../directives/control-errors.directive';
import { FormSubmitDirective } from '../directives/form-submit.directive';
import { SharedModule } from '../shared/shared.module';
import { ContactPageRoutingModule } from './contact-routing.module';
import { ContactPage } from './contact.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ContactPageRoutingModule,
    SharedModule,
  ],
  entryComponents: [ControlErrorComponent],

  declarations: [
    ContactPage,
    ControlErrorsDirective,
    FormSubmitDirective,
    ControlErrorContainerDirective,
    ControlErrorComponent,
  ],
})
export class ContactPageModule {}
