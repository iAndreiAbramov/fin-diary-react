import { ValidationErrorMessage } from 'constants/messages/validation-error.message';

import { isNotTooShort } from './is-not-too-short';

describe('isNotToShort', () => {
  it('should return undefined when the string length is equal to the minimum length', () => {
    const minLength = 5;
    const validator = isNotTooShort(minLength);
    const value = '12345';

    const result = validator(value);

    expect(result).toBeUndefined();
  });

  it('should return undefined when the string length is greater than the minimum length', () => {
    const minLength = 5;
    const validator = isNotTooShort(minLength);
    const value = '123456';

    const result = validator(value);

    expect(result).toBeUndefined();
  });

  it('should return an error message when the string length is less than the minimum length', () => {
    const minLength = 5;
    const validator = isNotTooShort(minLength);
    const value = '1234';

    const result = validator(value);

    expect(result).toEqual(ValidationErrorMessage.PasswordIsTooShort(minLength));
  });
});
