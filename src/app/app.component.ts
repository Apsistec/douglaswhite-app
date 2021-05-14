import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
darkSetting;

  constructor() {

  }

  ngOnInit(){
    const simpleObservable$: Observable<string> = new Observable((observer) => {
      // observable execution
      // observer.next('Welcome to');
      // observer.next('Angular 9');
      // observer.complete();
    });
    simpleObservable$.subscribe(val => console.log(val));

    this.darkSetting = window.matchMedia('(prefers-color-scheme: dark)');
    if (this.darkSetting.matches === true) {
      // this.dark = !this.dark;
      document.body.classList.toggle('dark');
    }

  }

}
