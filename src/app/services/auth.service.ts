// auth.service.ts

// Importing base class
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponseInterface } from "../interfaces/api-response.interface";
import { ISignUpInterface } from "../features/auth/interfaces/signup.interface";
import { IToken } from "../features/auth/interfaces/token.interface";
import { IUser } from "../interfaces/user.interface";
import { ILogInInterface } from "../features/auth/interfaces/login.interface";
import { IForgotPasswordInterface } from "../features/auth/interfaces/forgotpassword.interface";
import { IResetPasswordInterface } from "../features/auth/interfaces/resetpassword.interface";

class AuthService extends HttpService {
  private readonly prefix: string = "api/v1/";

  /**
   * Handles user signup.
   *
   * @param {ISignUpInterface} data - The data for user registration.
   * @returns {Promise<IResponseInterface<{}>>} - The response from the server.
   * @endpoint `/api/v1/register`
   */
  signupHandler = (data: ISignUpInterface): Promise<IResponseInterface<{}>> =>
    this.post(`${this.prefix}/register`, data);

  /**
   * Handles user login.
   *
   * @param {ILogInInterface} data - The data for user login.
   * @returns {Promise<IResponseInterface<{ token: IToken; user: IUser }>>} - The response containing the token and user details.
   * @endpoint `/api/v1/login`
   */
  loginHandler = (
    data: ILogInInterface
  ): Promise<IResponseInterface<{ token: IToken; user: IUser }>> => {
    return this.post(`${this.prefix}/login`, data);
  };

  /**
   * Handles forgot password requests.
   *
   * @param {IForgotPasswordInterface} data - The data for the password reset request.
   * @returns {Promise<IResponseInterface<{}>>} - The response from the server.
   * @endpoint `/api/v1/password/forgot`
   */
  forgotPasswordHandler = (
    data: IForgotPasswordInterface
  ): Promise<IResponseInterface<{}>> =>
    this.post(`${this.prefix}/password/forgot`, data);

  /**
   * Handles password reset using a token.
   *
   * @param {string | undefined} token - The token for resetting the password.
   * @param {IResetPasswordInterface} data - The new password data.
   * @returns {Promise<IResponseInterface<{}>>} - The response from the server.
   * @endpoint `/api/v1/password/reset/${token}`
   */
  resetPasswordHandler = (
    token: string | undefined,
    data: IResetPasswordInterface
  ): Promise<IResponseInterface<{}>> =>
    this.post(`${this.prefix}/password/reset/${token}`, data);

  /**
   * Handles social authentication.
   *
   * @param {ISocialAuthInterface} data - The data for social authentication.
   * @returns {Promise<IResponseInterface<{ token: IToken; user: IUser }>>} - The response containing the token and user details.
   * @endpoint `/api/v1/social`
   */
  // socialAuthHandler = (
  //   data: ISocialAuthInterface
  // ): Promise<IResponseInterface<{ token: IToken; user: IUser }>> =>
  //   this.post(`${this.prefix}/social`, data);
}
export const authService = new AuthService();

export {};
