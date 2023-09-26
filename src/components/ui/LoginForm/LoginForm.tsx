import React, { useCallback, useState } from 'react';
import { Field, Form } from 'react-final-form';

import Input from 'components/ui/Input';

import { ILoginFormProps } from './LoginForm.types';

import * as S from './LoginForm.styled';

const LoginForm: React.FC<ILoginFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
  }, []);

  const handlePasswordChange = useCallback((value: string) => {
    setPassword(value);
  }, []);

  const handlePasswordConfirmationChange = useCallback((value: string) => {
    setPasswordConfirmation(value);
  }, []);

  const onFormSubmit = useCallback(() => {
    onSubmit({ email, password, passwordConfirmation });
  }, [email, password, passwordConfirmation, onSubmit]);

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <S.Form as="form" onSubmit={() => handleSubmit()}>
          <Field
            name="email"
            render={({ input }) => (
              <>
                <S.Label>
                  <S.LabelText as="span">Электронная почта</S.LabelText>
                  <Input {...input} type="text" onChange={handleEmailChange} value={email} />
                </S.Label>
                <S.Label>
                  <S.LabelText>Пароль</S.LabelText>
                  <Input
                    {...input}
                    type="password"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </S.Label>
                {type === 'register' && (
                  <S.Label>
                    <S.LabelText>Подтвердите пароль</S.LabelText>
                    <Input
                      {...input}
                      type="password"
                      onChange={handlePasswordConfirmationChange}
                      value={passwordConfirmation}
                    />
                  </S.Label>
                )}
                <S.SubmitButton
                  type="submit"
                  displayType="primary"
                  text={type === 'register' ? 'Зарегистрироваться' : 'Войти'}
                />
              </>
            )}
          />
        </S.Form>
      )}
    />
  );
};

export default LoginForm;
