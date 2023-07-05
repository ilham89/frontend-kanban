export interface ILogin {
  email: string;
  password: string;
}

export interface IToken {
  auth_token: string;
}

export interface ISignup extends ILogin {
  name: string;
  password_confirmation: string;
}

export interface ISuccessSignup extends IToken {
  message: string;
}
