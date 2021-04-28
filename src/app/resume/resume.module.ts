import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ResumePageRoutingModule } from './resume-routing.module';
import { ResumePage } from './resume.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResumePageRoutingModule
  ],
  declarations: [ResumePage]
})
export class ResumePageModule {}
