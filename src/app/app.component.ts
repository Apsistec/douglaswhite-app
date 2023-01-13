import {
  AfterViewInit,
  ApplicationRef,
  Component,
  OnInit,
} from '@angular/core';
import { FirebaseApp } from '@angular/fire/compat';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PwaService } from './services/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  checked = false;
  prefersDark!: MediaQueryList;
  dark = false;
  toggle!: HTMLInputElement;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    public firebaseApp: FirebaseApp,
    public appRef: ApplicationRef,
    public pwa: PwaService
  ) {}

  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

  ngOnInit() {
    this.initializeApp();
    this.storage.create();
  }

  initializeApp() {
    this.platform.ready().then(
      (readySource) => {
        if (readySource === 'capacitor') {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
          return true;
        } else {
          return false;
        }
      },
      () => false
    );

    this.toggle = document.body.querySelector('#toggle')!;
    this.toggle.addEventListener('ionChange', (ev: Event) => {
      document.body.classList.toggle('dark', (<CustomEvent>ev).detail.checked);
    });
    this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.toggleDarkTheme(this.prefersDark.matches);
    this.prefersDark.addEventListener('change', (e) => {
      this.checkToggle(e.matches);
    });
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
