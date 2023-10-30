import { IChangePasswordFormValues } from 'types/forms/change-password-form-values.interface';

export interface IChangePasswordFormProps {
  onSubmit: (values: IChangePasswordFormValues) => void;
  backendError?: string | null;
  isSubmitting?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
}
