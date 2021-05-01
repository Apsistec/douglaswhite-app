import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ResumePageRoutingModule } from './resume-routing.module';
import { ResumePage } from './resume.page';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResumePageRoutingModule,
    NgxExtendedPdfViewerModule,
    SharedModule
  ],
  declarations: [ResumePage]
})
export class ResumePageModule {}
