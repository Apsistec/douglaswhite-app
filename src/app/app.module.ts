import { NgModule } from '@angular/core';
<<<<<<< Updated upstream
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireFunctionsModule,
  NEW_ORIGIN_BEHAVIOR,
  ORIGIN,
} from '@angular/fire/functions';
=======
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
>>>>>>> Stashed changes
import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream
import { NeonComponent } from './neon/neon.component';
=======
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFunctions, getFunctions } from '@angular/fire/functions';
>>>>>>> Stashed changes

@NgModule({
  declarations: [AppComponent],
  imports: [
<<<<<<< Updated upstream
    BrowserModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
=======
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
>>>>>>> Stashed changes
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
<<<<<<< Updated upstream
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
=======
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
>>>>>>> Stashed changes
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
<<<<<<< Updated upstream
    StatusBar,
    SplashScreen,
    { provide: NEW_ORIGIN_BEHAVIOR, useValue: true },
    { provide: ORIGIN, useValue: 'https://douglaswhite.app' },
=======
>>>>>>> Stashed changes
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
