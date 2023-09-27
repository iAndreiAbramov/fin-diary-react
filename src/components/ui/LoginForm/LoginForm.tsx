import React from 'react';
import { Field, Form } from 'react-final-form';

import { composeValidators, isNotTooShort, isRequired, isValidEmail } from 'utils/validators';

import FormInput from './FormInput';
import { MIN_PASSWORD_LENGTH } from './LoginForm.constants';
import { ILoginFormProps } from './LoginForm.types';
import { validate } from './LoginForm.utils';

import * as S from './LoginForm.styled';

const LoginForm: React.FC<ILoginFormProps> = ({ type, onSubmit, backendError }) => {
  return (
    <Form onSubmit={onSubmit} validate={type === 'register' ? validate : undefined}>
      {({ handleSubmit, submitFailed, hasValidationErrors }) => (
        <S.Form as="form" onSubmit={handleSubmit} $isFailed={submitFailed}>
          <Field name="email" validate={composeValidators([isRequired, isValidEmail])}>
            {({ input, meta }) => (
              <S.FieldWrapper as="div">
                <FormInput
                  {...input}
                  type="text"
                  labelText="Электронная почта"
                  isValid={!meta.error || !submitFailed}
                />
                {meta.error && submitFailed && <S.ErrorText>{meta.error}</S.ErrorText>}
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
                  isValid={!meta.error || !submitFailed}
                />
                {meta.error && submitFailed && <S.ErrorText as="span">{meta.error}</S.ErrorText>}
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
                    isValid={!meta.error || !submitFailed}
                  />
                  {meta.error && submitFailed && <S.ErrorText as="span">{meta.error}</S.ErrorText>}
                </S.FieldWrapper>
              )}
            </Field>
          )}
          <S.SubmitButton
            type="submit"
            displayType="primary"
            text={type === 'register' ? 'Зарегистрироваться' : 'Войти'}
            disabled={submitFailed && hasValidationErrors}
          />
          {backendError && (
            <S.ErrorContainer as="div" $hasError={!!backendError}>
              <S.ErrorText as="span">{backendError}</S.ErrorText>
            </S.ErrorContainer>
          )}
        </S.Form>
      )}
    </Form>
  );
};

export default LoginForm;
