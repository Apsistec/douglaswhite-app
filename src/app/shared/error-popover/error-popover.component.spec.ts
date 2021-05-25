import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPopoverComponent } from './error-popover.component';

describe('ErrorPopoverComponent', () => {
  let component: ErrorPopoverComponent;
  let fixture: ComponentFixture<ErrorPopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPopoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
