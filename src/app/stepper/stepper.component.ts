import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent extends CdkStepper  implements OnInit {


  ngOnInit() {}

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
