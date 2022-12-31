import { EMPTY, merge, Observable } from 'rxjs';

import {
  ComponentRef,
  Directive,
  Host,
  Inject,
  Input,
  OnInit,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import { NgControl } from '@angular/forms';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FORM_ERRORS } from '../contact/form-errors';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { FormSubmitDirective } from './form-submit.directive';
@UntilDestroy()
@Directive({
  selector: '[formControl], [formControlName]',
})
export class ControlErrorsDirective implements OnInit {
  container: ViewContainerRef;

  submit$: Observable<Event>;
  @Input() customErrors: any = {};

  constructor(
    private ref: ComponentRef<ControlErrorComponent>,
    private vcr: ViewContainerRef,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors: any,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit() {
    merge(this.submit$, this.control.valueChanges)
      .pipe(untilDestroyed(this))
      .subscribe((v) => {
        const controlErrors = this.control.errors;
        if (controlErrors) {
          const firstKey = Object.keys(controlErrors)[0];
          const getError = this.errors[firstKey];
          const text =
            this.customErrors[firstKey] || getError(controlErrors[firstKey]);
          this.setError(text);
        } else if (this.ref) {
          this.setError(null as any);
        }
      });
  }

  get control(): any {
    return this.controlDir.control;
  }

  setError(text: string) {
    if (!this.ref) {
      this.ref = this.vcr.createComponent(ControlErrorComponent);
    }

    this.ref.instance.text = text;
  }
}
