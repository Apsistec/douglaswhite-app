import { NgModule, isDevMode } from '@angular/core';
import { provideFirebaseApp, FirebaseApp, initializeApp } from '@angular/fire/app';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import {
  AngularFireFunctionsModule,
  ORIGIN,
} from '@angular/fire/compat/functions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  declarations: [AppComponent],
  imports: [
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    CdkStepperModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AngularFireFunctionsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [
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
