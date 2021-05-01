import { Component, OnInit } from '@angular/core';
import { IonToggle } from '@ionic/angular';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  dark: boolean;
  darkSetting;

  constructor() {}

  ngOnInit() {
    this.darkSetting = window.matchMedia('(prefers-color-scheme: dark)');
    if (!!this.darkSetting.matches) {
      return true;
    }
    return false;
  }

  toggle() {
    document.body.classList.toggle('dark');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.dark = !this.dark;
  }
}
