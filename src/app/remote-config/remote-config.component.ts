import { Component, Optional } from '@angular/core';
import { traceUntilFirst } from '@angular/fire/performance';
import { RemoteConfig, getAllChanges } from '@angular/fire/remote-config';
import { EMPTY, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-remote-config',
  template: `<ng-container *ngIf="change$ | async"></ng-container>`,
  styles: [],
})
export class RemoteConfigComponent {
  readonly change$: Observable<any>;

  constructor(@Optional() remoteConfig: RemoteConfig) {
    if (remoteConfig) {
      this.change$ = getAllChanges(remoteConfig).pipe(
        traceUntilFirst('remote-config'),
        tap((it) => console.log('REMOTE CONFIG', it))
      );
    } else {
      this.change$ = EMPTY;
    }
  }
}
