import React from 'react';
import { Field, Form } from 'react-final-form';
import { MIN_PASSWORD_LENGTH } from 'constants/forms/forms.constants';

import { ErrorText } from 'components/atoms/ErrorText';
import FormErrorElement from 'components/ui/FormErrorElement';
import FormInput from 'components/ui/FormInput';
import { GetRoute } from 'utils/routes/get-route';
import { composeValidators, isNotTooShort, isRequired, isValidEmail } from 'utils/validators';
import { comparePasswords } from 'utils/validators/compare-passwords';

import { ILoginFormProps } from './LoginForm.types';

import * as S from './LoginForm.styled';

const LoginForm: React.FC<ILoginFormProps> = ({ type, onSubmit, backendError, isSubmitting }) => {
  return (
    <Form onSubmit={onSubmit} validate={type === 'register' ? comparePasswords : undefined}>
      {({ handleSubmit, submitFailed, hasValidationErrors }) => (
        <S.Form as="form" onSubmit={handleSubmit} $isFailed={submitFailed}>
          <Field name="email" validate={composeValidators([isRequired, isValidEmail])}>
            {({ input, meta }) => (
              <S.FieldWrapper as="div">
                <FormInput
                  {...input}
                  type="text"
                  labelText="Электронная почта"
                  isInvalid={meta.error && submitFailed}
                />
                {meta.error && submitFailed && <ErrorText>{meta.error}</ErrorText>}
              </S.FieldWrapper>
            )}
          </Field>
          <Field
            name="password"
            validate={composeValidators([isRequired, isNotTooShort(MIN_PASSWORD_LENGTH)])}
          >
            {({ input, meta }) => (
              <S.FieldWrapper as="div">
                <FormInput
                  {...input}
                  type="password"
                  labelText="Пароль"
                  isInvalid={meta.error && submitFailed}
                />
                {meta.error && submitFailed && <ErrorText as="span">{meta.error}</ErrorText>}
              </S.FieldWrapper>
            )}
          </Field>
          {type === 'register' && (
            <Field name="passwordConfirmation" validate={isRequired}>
              {({ input, meta }) => (
                <S.FieldWrapper as="div">
                  <FormInput
                    {...input}
                    type="password"
                    labelText="Повторите пароль"
                    isInvalid={meta.error && submitFailed}
                  />
                  {meta.error && submitFailed && <ErrorText as="span">{meta.error}</ErrorText>}
                </S.FieldWrapper>
              )}
            </Field>
          )}
          <S.SubmitButton
            type="submit"
            displayType="primary"
            text={type === 'register' ? 'Зарегистрироваться' : 'Войти'}
            disabled={(submitFailed && hasValidationErrors) || isSubmitting}
          />
          {backendError && <FormErrorElement errorText={backendError} />}
          <S.AlterLink
            linkTo={type === 'login' ? GetRoute.Registration() : GetRoute.Login()}
            name={type === 'login' ? 'Зарегистрироваться' : 'Войти'}
            title={type === 'login' ? 'Зарегистрироваться' : 'Войти'}
          />
        </S.Form>
      )}
    </Form>
  );
};

export default LoginForm;
