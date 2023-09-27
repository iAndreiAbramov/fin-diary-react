import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { TValidatorResponse } from './types/validators.types';

export const isNotTooShort =
  (minLength: number) =>
  (value: string): TValidatorResponse =>
    value?.length >= minLength ? undefined : ValidationErrorMessage.PasswordIsTooShort(minLength);
