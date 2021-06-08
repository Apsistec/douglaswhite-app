import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neon',
  templateUrl: './neon.component.html',
  styleUrls: ['./neon.component.scss'],
})
export class NeonComponent implements OnInit {
  setProperty = (duration) => {
    document.documentElement.style.setProperty(
      '--animation-time',
      duration + 's'
    );
  };

  changeAnimationTime = () => {
    const animationDuration = 1 + Math.random();
    this.setProperty(animationDuration);
  };

  constructor() {}

  ngOnInit(): void {
    // setInterval(this.changeAnimationTime, 1000);
  }
}
