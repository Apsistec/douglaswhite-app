import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutPage {
  showBackToTopFab = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor() {}

  onScroll(event) {
    this.showBackToTopFab = event.detail.scrollTop > 200 ? true : false;
  }

  scrollToId(id) {
    const element = document.getElementById(id);
    this.content.scrollToPoint(0, element.offsetTop, 750);
  }

  scrollToTop() {
    this.content.scrollToTop(750);
  }
}
