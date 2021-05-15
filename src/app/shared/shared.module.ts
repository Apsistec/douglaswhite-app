import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ToggleComponent } from './toggle/toggle.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ToggleComponent, FooterComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [ ToggleComponent, FooterComponent ]
})
export class SharedModule { }
