import { ILoginFormValues } from 'types/common/login-form-values.interface';

export interface IChangePasswordFormProps {
  onSubmit: (values: ILoginFormValues) => void;
  backendError?: string | null;
  isSubmitting?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}
