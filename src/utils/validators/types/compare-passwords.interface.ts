export interface IComparePasswordsValues {
  password: string;
  passwordConfirmation?: string;
}

export type TComparePasswordsErrors = Partial<IComparePasswordsValues>;
