export interface ILoginRequestBody {
  email: string;
  password: string;
}

export interface IRegistrationRequestBody {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IChangePasswordRequestBody {
  oldPassword: string;
  newPassword: string;
  id: string;
}
