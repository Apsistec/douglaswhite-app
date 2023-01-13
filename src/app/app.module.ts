import { StorageComponent } from './storage/storage.component';
import { MessagingComponent } from './messaging/messaging.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule, isDevMode } from '@angular/core';
import { provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import {
  AngularFireFunctionsModule,
  ORIGIN,
} from '@angular/fire/compat/functions';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { getApp, initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemoteConfigComponent } from './remote-config/remote-config.component';

import {
  ScreenTrackingService,
  UserTrackingService,
  getAnalytics,
  provideAnalytics,
} from '@angular/fire/analytics';
import { provideAuth } from '@angular/fire/auth';
import { provideMessaging } from '@angular/fire/messaging';
import { provideRemoteConfig } from '@angular/fire/remote-config';
import {
  initializeAuth,
  indexedDBLocalPersistence,
  browserPopupRedirectResolver,
} from 'firebase/auth';
import { getMessaging } from 'firebase/messaging';
import { getRemoteConfig } from 'firebase/remote-config';
import { connectAuthEmulatorInDevMode } from './emulators';

@NgModule({
  declarations: [
    AppComponent,
    RemoteConfigComponent,
    AuthComponent,
    MessagingComponent,
    StorageComponent,
  ],
  imports: [
    IonicModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    provideAnalytics(() => getAnalytics()),
    IonicStorageModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AngularFireFunctionsModule,
    provideRemoteConfig(() => getRemoteConfig()),
    provideAnalytics(() => getAnalytics()),
    provideMessaging(() => getMessaging()),
    provideAuth(() => {
      const auth = initializeAuth(getApp(), {
        persistence: indexedDBLocalPersistence,
        popupRedirectResolver: browserPopupRedirectResolver,
      });
      connectAuthEmulatorInDevMode(auth);
      return auth;
    }),
  ],
  providers: [
    SplashScreen,
    StatusBar,
    ScreenTrackingService,
    UserTrackingService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    {
      provide: ORIGIN,
      useValue: 'https://douglaswhite-app.web.app',
    },
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
