type TLoginFormType = 'login' | 'register';

export interface ILoginFormProps {
  type: TLoginFormType;
  onSubmit: (values: ILoginFormValues) => void;
  backendError?: string | null;
  isSubmitting?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

export interface ILoginFormValues {
  email: string;
  password: string;
  passwordConfirmation?: string;
}

export type TLoginFormErrors = Partial<ILoginFormValues>;
