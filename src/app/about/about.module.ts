import { NgParticlesModule } from 'ng-particles';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { FlaskBakComponent } from '../flask-bak/flask-bak.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    NgParticlesModule,
    SharedModule
  ],
  declarations: [AboutPage, FlaskBakComponent]
})
export class AboutPageModule {}
