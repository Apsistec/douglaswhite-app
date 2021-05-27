import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutPage implements OnInit, AfterViewInit {
  particlesUrl: any = '../../assets/particles.json';
  id: any = 'tsparticles';

  scrolledDown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  constructor() {}
  ngOnInit() {}
  ngAfterViewInit() {

  }

  scrollToTop() {
    this.content.scrollToTop(750);
  }

  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 400 ? true : false;
  }
}
