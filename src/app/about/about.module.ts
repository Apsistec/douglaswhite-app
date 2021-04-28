import { NgParticlesModule } from 'ng-particles';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { ToggleComponent } from '../toggle/toggle.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    NgParticlesModule
  ],
  declarations: [AboutPage, ToggleComponent]
})
export class AboutPageModule {}
