import { InjectionToken } from '@angular/core';

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  // providedIn: 'root',
  factory: () => defaultErrors
});

export const defaultErrors = {
  required: (error: any) => `This field is required`,
  minlength: ({ requiredLength, actualLength }): string => {
    return `Expect min. ${requiredLength} characters but only got ${actualLength}`;
  },
  maxlength: (error: any) => `You have reached limit of 3000 characters`,
  email: (error: any) => `Email format is incorrrect`
}
