import {
  AfterViewInit,
  ApplicationRef,
  Component,
  OnInit,
} from '@angular/core';
// import { SwUpdate } from '@angular/service-worker';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FirebaseApp } from '@angular/fire/compat';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  checked = false;
  prefersDark!: MediaQueryList;
  dark = false;
  toggle!: any;

  constructor(
    // private swUpdate: SwUpdate,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public firebaseApp: FirebaseApp,
    public appRef: ApplicationRef
  ) {
    this.appRef.isStable
      .pipe(debounceTime(200))
      .subscribe((it) => console.log('isStable', it));
  }

  ngOnInit() {
    this.initializeApp();
    this.storage.create();
  }

  initializeApp() {
    this.platform.ready().then(
      (readySource: any) => {
        if (readySource === 'capacitor') {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
          return true;
        } else {
          return false;
        }
      },
      (reject) => false
    );

    this.toggle = document.body.querySelector('#toggle');
    this.toggle.addEventListener('ionChange', (ev: any) => {
      document.body.classList.toggle('dark', ev.detail.checked);
    });
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(this.prefersDark.matches);
    this.prefersDark.addEventListener('change', (e) => {
      this.checkToggle(e.matches);
    });
    // if (this.swUpdate.isEnabled) {
    //   this.swUpdate.available.subscribe(() => {
    //     if (confirm('New version available. Load New Version?')) {
    //       window.location.reload();
    //     }
    //     return;
    //   });
    // }
  }

  ngAfterViewInit() {
    this.checkToggle(this.prefersDark.matches);
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  checkToggle(shouldCheck: boolean) {
    this.toggle.checked = shouldCheck;
  }
}
