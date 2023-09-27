import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { ILoginFormValues, TLoginFormErrors } from './LoginForm.types';

export const validate = ({
  password,
  passwordConfirmation,
}: ILoginFormValues): TLoginFormErrors => {
  const errors: TLoginFormErrors = {
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
  };

  if (password !== passwordConfirmation) {
    errors.password = ValidationErrorMessage.PasswordsDoesNotMatch();
    errors.passwordConfirmation = ValidationErrorMessage.PasswordsDoesNotMatch();
  }

  return errors;
};
