import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  templateUrl: 'control-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./control-error.component.scss'],
})
export class ControlErrorComponent {
  _text;
  _hide = true;

  @Input() set text(value: string) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  }

  constructor(private cdr: ChangeDetectorRef) {}

}
