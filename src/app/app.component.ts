import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})

export class AppComponent implements OnInit, AfterViewInit {
  checked: boolean;
  prefersDark: MediaQueryList;
  dark: boolean;
  toggle;

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

  ngAfterViewInit() {
    this.checkToggle(this.prefersDark.matches);
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      const source = readySource;
      if (source === 'capacitor') {
        this.statusBar.show();
        this.splashScreen.show();
        this.statusBar.styleDefault();
      } else {
        return false;
      }
    });
    this.toggle = document.body.querySelector('#toggle');
    this.toggle.addEventListener('ionChange', (ev) => {
      document.body.classList.toggle('dark', ev.detail.checked);
    });
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(this.prefersDark.matches);
    this.prefersDark.addEventListener('change', (e) => {
      this.checkToggle(e.matches);
    });
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
        map((evt) => ({
          type: 'UPDATE_AVAILABLE',
          current: evt.currentVersion,
          available: evt.latestVersion,
        }))
      );
    }
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  checkToggle(shouldCheck: boolean) {
    this.toggle.checked = shouldCheck;
  }
}
