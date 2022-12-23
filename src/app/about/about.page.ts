import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})
export class AboutPage implements OnInit {
  showBackToTopFab = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  stepper;

  constructor(public toastController: ToastController) {}

  ngOnInit(){
    setTimeout(() => {
      this.presentToast()

    },3000)

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message:
        'This installable PWA was developed using Ionic 6, Angular 15 and Firebase 7',
      duration: 4500,
      header: "Douglas White's PWA",
      icon: 'logo-ionic',
      position: 'middle',
      color: 'secondary',
      buttons: [
        'close'
      ]
    });
    await toast.present();
  }


  onScroll(event) {
    this.showBackToTopFab = event.detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id) {
    const element = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop - 45, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750);
  }
}
