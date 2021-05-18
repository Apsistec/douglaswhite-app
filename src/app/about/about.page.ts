/* eslint-disable id-blacklist */
import { Container, Main } from 'ng-particles';

/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})
export class AboutPage implements OnInit {
  id: any = 'tsparticles';
  particlesURL: any = '../../assets/particles.json';
  hideToolbar: true;
  scrolledDown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  yearDate: any = Date.now();

  constructor() {}

  ngOnInit() {}

  scrollToTop() {
    this.content.scrollToTop(750);
  }

  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 400 ? true : false;
  }
}
