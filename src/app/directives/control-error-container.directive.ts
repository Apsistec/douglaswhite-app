import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[controlErrorContainer]'
})
export class ControlErrorContainerDirective {
  constructor(public vcr: ViewContainerRef) { }
}
