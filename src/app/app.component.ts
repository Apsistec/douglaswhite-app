import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

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
    private statusBar: StatusBar,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.initializeApp();
    this.storage.create();
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
      document.body.classList.toggle('dark');
    }
  }
}
