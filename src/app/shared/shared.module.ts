import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [ ToggleComponent ]
})
export class SharedModule { }
