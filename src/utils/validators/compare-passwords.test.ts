import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { comparePasswords } from './compare-passwords';

describe('compare passwords', function () {
  it('should return no errors if passwords are matching', function () {
    const PASSWORD = '12345678';
    const PASSWORD_CONFIRMATION = '12345678';
    expect(
      comparePasswords({ password: PASSWORD, passwordConfirmation: PASSWORD_CONFIRMATION }),
    ).toEqual({ password: undefined, passwordConfirmation: undefined });
  });

  it('should return an errors object if passwords does not match', function () {
    const PASSWORD = '12345678';
    const PASSWORD_CONFIRMATION = '1234';
    expect(
      comparePasswords({ password: PASSWORD, passwordConfirmation: PASSWORD_CONFIRMATION }),
    ).toEqual({
      password: ValidationErrorMessage.PasswordsDoesNotMatch(),
      passwordConfirmation: ValidationErrorMessage.PasswordsDoesNotMatch(),
    });
  });
});
