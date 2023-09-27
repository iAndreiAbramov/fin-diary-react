import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { TValidatorResponse } from './types/validators.types';

export const isRequired = (value: string): TValidatorResponse =>
  value ? undefined : ValidationErrorMessage.Required();
