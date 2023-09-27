import { TValidatorResponse } from './types/validators.types';

type TValidatorFn = (value: string) => TValidatorResponse;

export const composeValidators =
  (validators: TValidatorFn[]) =>
  (value: string): TValidatorResponse => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) {
        return error;
      }
    }
  };
