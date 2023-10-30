import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import {
  IComparePasswordsValues,
  TComparePasswordsErrors,
} from './types/compare-passwords.interface';

export const comparePasswords = ({
  password,
  passwordConfirmation,
}: IComparePasswordsValues): TComparePasswordsErrors => {
  const errors: TComparePasswordsErrors = {
    password: undefined,
    passwordConfirmation: undefined,
  };

  if (password !== passwordConfirmation) {
    errors.password = ValidationErrorMessage.PasswordsDoesNotMatch();
    errors.passwordConfirmation = ValidationErrorMessage.PasswordsDoesNotMatch();
  }

  return errors;
};
