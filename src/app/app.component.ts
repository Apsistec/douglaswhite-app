import { Observable } from 'rxjs';

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  darkSetting;

  constructor(
    private swUpdate: SwUpdate,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      const source = readySource;
      console.log('source: ' + source);
      if (source === 'capacitor') {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      } else {
        return false;
      }
    });

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
        return;
      });
    }
  }

  ngAfterViewInit() {
    this.darkSetting = window.matchMedia('(prefers-color-scheme: dark)');
    if (this.darkSetting.matches === true) {
      // this.dark = !this.dark;
      document.body.classList.toggle('dark');
    }
  }
}
