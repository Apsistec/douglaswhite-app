/* eslint-disable id-blacklist */
import { Container } from 'ng-particles';

/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
})
export class AboutPage implements OnInit {
  id: any = 'tsparticles';
  particlesURL = '../../assets/particles.json';

  constructor() {}

  ngOnInit() {}
  particlesLoaded(_container: Container): void {
  }
}
