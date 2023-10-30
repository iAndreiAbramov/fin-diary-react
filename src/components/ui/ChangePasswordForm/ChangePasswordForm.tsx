import React from 'react';
import { Field, Form } from 'react-final-form';
import { MIN_PASSWORD_LENGTH } from 'constants/forms/forms.constants';

import { ErrorText } from 'components/atoms/ErrorText';
import FormErrorElement from 'components/ui/FormErrorElement';
import FormInput from 'components/ui/FormInput';
import { composeValidators, isNotTooShort, isRequired } from 'utils/validators';
import { comparePasswords } from 'utils/validators/compare-passwords';

import { IChangePasswordFormProps } from './ChangePasswordForm.types';

import * as S from './ChangePasswordForm.styled';

const ChangePasswordForm: React.FC<IChangePasswordFormProps> = ({
  onSubmit,
  backendError,
  isSubmitting,
}) => {
  return (
    <Form onSubmit={onSubmit} validate={comparePasswords}>
      {({ handleSubmit, submitFailed, hasValidationErrors }) => (
        <S.Form onSubmit={handleSubmit}>
          <Field name="oldPassword" validate={isRequired}>
            {({ input, meta }) => (
              <S.FieldWrapper>
                <FormInput
                  {...input}
                  type="password"
                  labelText="Старый пароль"
                  isInvalid={meta.error && submitFailed}
                />
                {meta.error && submitFailed && <ErrorText as="span">{meta.error}</ErrorText>}
              </S.FieldWrapper>
            )}
          </Field>
          <Field
            name="password"
            validate={composeValidators([isRequired, isNotTooShort(MIN_PASSWORD_LENGTH)])}
          >
            {({ input, meta }) => (
              <S.FieldWrapper>
                <FormInput
                  {...input}
                  type="password"
                  labelText="Новый пароль"
                  isInvalid={meta.error && submitFailed}
                />
                {meta.error && submitFailed && <ErrorText as="span">{meta.error}</ErrorText>}
              </S.FieldWrapper>
            )}
          </Field>
          <Field name="passwordConfirmation" validate={isRequired}>
            {({ input, meta }) => (
              <S.FieldWrapper>
                <FormInput
                  {...input}
                  type="password"
                  labelText="Подтвердите пароль"
                  isInvalid={meta.error && submitFailed}
                />
                {meta.error && submitFailed && <ErrorText as="span">{meta.error}</ErrorText>}
              </S.FieldWrapper>
            )}
          </Field>
          <S.SubmitButton
            type="submit"
            displayType="primary"
            text="Сменить пароль"
            disabled={(submitFailed && hasValidationErrors) || isSubmitting}
          />
          {backendError && <FormErrorElement errorText={backendError} />}
        </S.Form>
      )}
    </Form>
  );
};

export default ChangePasswordForm;
