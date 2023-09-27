type TLoginFormType = 'login' | 'register';

export interface ILoginFormProps {
  type: TLoginFormType;
  onSubmit: (values: ILoginFormValues) => void;
}

export interface ILoginFormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export type TLoginFormErrors = Partial<ILoginFormValues>;
