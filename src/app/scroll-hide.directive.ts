import { IonContent } from '@ionic/angular';
import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnDestroy,
  OnChanges,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import * as elementResizeDetectorMaker from 'element-resize-detector';
import { take } from 'rxjs/operators';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[scrollHide]'
})
export class ScrollHideDirective implements OnDestroy, OnChanges, OnInit {
  @Input('scrollHide') scrollContent: IonContent;

  /*
  * Using elementResizeDetectorMaker in order to listen to any kind of resize on the header (css or window resize)
  */
  private erd = elementResizeDetectorMaker({
    strategy: 'scroll'
  });

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private subscriptions: Subscription[] = [];

  async ngOnDestroy() {
    /** On destroy make sure the subscriptions are unsubscribed in order to prevent memory leaks */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    this.erd.removeAllListeners(this.element.nativeElement);
  }

  ngOnInit() {
    /* Register listener to trigger the `setOffsetHeight` when the component is created */
    this.erd.listenTo(
      this.element.nativeElement,
      this.setOffsetHeight.bind(this)
    );
  }

  /*
   * Setting the different components to a fake initial position where
   * the header shows up on the screen with a css translateY property
   * but where the margin-top is set to be where the header should be when
   * scrolled.
   * It sets the position of the header with a negative
   * margin-top and translates it to the
   */
  private setOffsetHeight(element: HTMLElement) {
    const { offsetHeight } = element;
    /* Setting the margin top to an initial negative position */
    this.renderer.setStyle(
      element,
      'margin-top',
      `calc( (var(--ion-safe-area-top) + ${offsetHeight}px) * -1 )`
    );
    /* Lowering to the previous position with a transform property so the show/hide animation
    * can be rendered without having to recalculate the position of every component on the view
    */
    this.renderer.setStyle(
      element,
      'transform',
      `translateY( calc( (var(--ion-safe-area-top) + ${offsetHeight}px) ))`
    );
    /* Setting a margin-top to the first child of the scroll element in order to
     * be visible on load and not slide under the header.
     */
    this.renderer.setStyle(
      this.scrollContent['el'].firstChild,
      'margin-top',
      `calc( (var(--ion-safe-area-top) + ${offsetHeight}px)`
    );
  }

  ngOnChanges() {
    /* Unsubscribing from every registered subscription in order to aviod memory leaks */
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
    /* When scroll content is loaded, register subscriptions to the scrolls in order to trigger the animations */
    if (this.scrollContent) {
      this.scrollContent.scrollEvents = true;

      this.subscriptions.push(
        /* Setting the animation delay */
        this.scrollContent.ionScrollStart.pipe(take(1)).subscribe(() => {
          this.renderer.setStyle(
            this.element.nativeElement,
            'transition',
            'transform 300ms ease-in'
          );
        })
      );

      /* Setting the header position depending on the animation */
      this.subscriptions.push(
        this.scrollContent.ionScroll.subscribe((ev: any) => {
          const { deltaY, scrollTop } = ev.detail;
          const { offsetHeight } = this.element.nativeElement;
          if (scrollTop > offsetHeight && deltaY > 0) {
            this.renderer.setStyle(
              this.element.nativeElement,
              'transform',
              'translateY(0px)'
            );
          } else {
            this.renderer.setStyle(
              this.element.nativeElement,
              'transform',
              `translateY( calc( (var(--ion-safe-area-top) + ${offsetHeight}px) ))`
            );
          }
        })
      );
    }
  }
}

