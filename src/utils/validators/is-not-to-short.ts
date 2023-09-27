import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { TValidatorResponse } from './validators.types';

export const isNotToShort =
  (minLength: number) =>
  (value: string): TValidatorResponse =>
    value?.length >= minLength ? undefined : ValidationErrorMessage.PasswordIsTooShort(minLength);
