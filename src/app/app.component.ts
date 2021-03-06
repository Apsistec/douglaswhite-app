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

  initializeApp() {
    this.platform.ready().then((readySource) => {
      const source = readySource;
      if (source === 'capacitor') {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
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

    // this.toggleDarkTheme(e.matches);

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
    this.checkToggle(this.prefersDark.matches);
  }

  toggleDarkTheme(shouldAdd) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  checkToggle(shouldCheck: boolean) {
    this.toggle.checked = shouldCheck;
  }
}
