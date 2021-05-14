import { Component, OnInit } from '@angular/core';

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

  }

  toggle() {
    document.body.classList.toggle('dark');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    // this.dark = !this.dark;
  }
}
