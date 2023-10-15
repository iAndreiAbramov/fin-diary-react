export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface IRegistrationRequestBody {
  email: string;
  password: string;
  passwordConfirmation: string;
}
