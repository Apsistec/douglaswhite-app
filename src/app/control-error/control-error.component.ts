import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  templateUrl: 'control-error.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./control-error.component.scss']
})
export class ControlErrorComponent implements OnInit {
  _text;
  _hide = true;

  @Input() set text(value) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  };

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
