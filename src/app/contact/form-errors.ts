import { InjectionToken } from '@angular/core';

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: (): any => defaultErrors,
});

export const defaultErrors = {
  required: (error: string) => `This field is required`,
  minlength: ({ requiredLength, actualLength }: any): string => {
    return `Expect min. ${requiredLength} characters but only got ${actualLength}`;
  },
  maxlength: (error: string) => `You have reached limit of 3000 characters`,
  email: (error: string) => `Email format is incorrrect`,
};
