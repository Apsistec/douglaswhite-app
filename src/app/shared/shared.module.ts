import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ToggleComponent } from './toggle/toggle.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPopoverComponent } from './error-popover/error-popover.component';
import { NeonComponent } from './neon/neon.component';

@NgModule({
  declarations: [ToggleComponent, FooterComponent, ErrorPopoverComponent, NeonComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [ ToggleComponent, FooterComponent, NeonComponent ]
})
export class SharedModule { }
