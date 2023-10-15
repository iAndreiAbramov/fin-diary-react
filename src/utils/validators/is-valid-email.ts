import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { TValidatorResponse } from './types/validator-response.types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (value: string): TValidatorResponse =>
  EMAIL_REGEX.test(value) ? undefined : ValidationErrorMessage.IncorrectEmail();
