import { CreditsComponent } from './../../credits/credits.component';
import { IonModal, ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  yearDate: number = Date.now();

  constructor(public modalCtrl: ModalController) {}

  async showCredits() {
    const modal = await this.modalCtrl.create({
      component: CreditsComponent,
    });
    modal.present();
  }
}
