import { BreakpointObserver } from '@angular/cdk/layout';
import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { StepperOrientation } from '@angular/material/stepper';
import { IonApp, IonContent, ToastController } from '@ionic/angular';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, showError: true },
    },
  ],
})
export class AboutPage implements OnInit {
  name = 'Angular' + VERSION.major;
  ion: string = 'Ionic' + IonApp;
  showBackToTopFab = false;
  // @ViewChild('stepper') stepper!: CdkStepper;

  @ViewChild(IonContent, { static: false })
  content!: IonContent;
  stepperOrientation!: Observable<StepperOrientation>;

  constructor(
    public toastController: ToastController,
    public breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit() {
    setTimeout(() => {
      this.presentToast();
    }, 3000);
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message:
        'Thank you for your consideration.. This progressive web app (PWA) was built with Ionic 6 and ${name}',
      duration: 4500,
      header: "Portfolio of Douglas White",
      icon: 'information-circle',
      position: 'top',
      color: 'primary',
    });
    await toast.present();
  }

  ngAfterViewInit(): void {
    // this.stepper.next();
  }

  onScroll(ev: Event) {
    this.showBackToTopFab =
      (<CustomEvent>ev).detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id: any) {
    const element: any = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop - 45, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750);
  }
}
