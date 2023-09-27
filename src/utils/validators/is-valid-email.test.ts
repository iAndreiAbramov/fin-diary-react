import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { isValidEmail } from './is-valid-email';

describe('isValidEmail', () => {
  it('should return undefined when the email is valid', () => {
    const validEmails = ['test@example.com', 'user123@gmail.com', 'john.doe@domain.io'];

    validEmails.forEach((email) => {
      const result = isValidEmail(email);
      expect(result).toBeUndefined();
    });
  });

  it('should return an error message when the email is invalid', () => {
    const invalidEmails = [
      'test@example',
      'user123@gmail',
      'john.doe@domain',
      'invalidemail',
      'invalid.email.com',
    ];

    invalidEmails.forEach((email) => {
      const result = isValidEmail(email);
      expect(result).toEqual(ValidationErrorMessage.IncorrectEmail());
    });
  });

  it('should return an error message when the value is empty string', () => {
    const value = '';

    const result = isValidEmail(value);

    expect(result).toEqual(ValidationErrorMessage.IncorrectEmail());
  });
});
