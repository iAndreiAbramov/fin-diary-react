import { ILoginFormValues } from 'types/common/login-form-values.interface';

type TLoginFormType = 'login' | 'register';

export interface ILoginFormProps {
  type: TLoginFormType;
  onSubmit: (values: ILoginFormValues) => void;
  backendError?: string | null;
  isSubmitting?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}

export type TLoginFormErrors = Partial<ILoginFormValues>;
