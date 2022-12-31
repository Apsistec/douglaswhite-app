import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class AboutPage implements OnInit {
  showBackToTopFab = false;
  @ViewChild(IonContent, { static: false })
  content!: IonContent;

  constructor(public toastController: ToastController) {}

  ngOnInit() {
    setTimeout(() => {
      this.presentToast();
    }, 3000);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message:
        'Thank you for stopping by.... This progressive web app was built with Ionic 6 and Angular 13',
      duration: 4500,
      header: "Douglas White's Web App",
      icon: 'information-circle',
      position: 'top',
      color: 'primary',
    });
    await toast.present();
  }

  onScroll(event: any) {
    this.showBackToTopFab = event.detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id: any) {
    const element: any = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop - 45, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750);
  }
}
