import { ArchwizardModule } from 'angular-archwizard';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FlaskBakComponent } from '../flask-bak/flask-bak.component';
import { SharedModule } from '../shared/shared.module';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { MaterialExampleModule } from '../material.module';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    SharedModule,
    ArchwizardModule,
    MaterialExampleModule,
    // NoopAnimationsModule
  ],
  declarations: [AboutPage, FlaskBakComponent],
})
export class AboutPageModule {}
