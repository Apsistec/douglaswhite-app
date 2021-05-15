/* eslint-disable id-blacklist */
import { Container } from 'ng-particles';

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
  // particlesURL = '../../assets/particles.json';
  hideToolbar: true;
  scrolledDown = false;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  yearDate: any = Date.now();

  constructor() {}

  ngOnInit() {

    this.id.load("tsparticles", {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle"
          },
          "opacity": {
            "value": 0.8,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 0.6,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 40,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 10,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false
          }
        },
        "interactivity": {
          "detect_on": "window",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "repulse": {
              "distance": 175,
              "duration": 0.4
            }
          }
        },
        "retina_detect": false,
        "max_fps": 60
      })
    }

  //     particlesLoaded(_container: Container): void {
  // }

  // logScrolling(){

  // }


  scrollToTop() {
    this.content.scrollToTop(750);
  }



  onScroll(event) {
    this.scrolledDown = event.detail.scrollTop > 400 ? true : false;
  }


}
