import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle/toggle.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


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
