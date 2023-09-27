export const ValidationErrorMessage = {
  Required: (): string => 'Поле обязательно для заполнения',
  IncorrectEmail: (): string => 'Некорректный адрес электронной почты',
  PasswordIsTooShort: (minLength: number): string =>
    `Минимальная длина пароля - ${minLength} символов`,
  PasswordsDoesNotMatch: () => 'Пароли не совпадают',
} as const;
