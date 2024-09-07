// TODO: Modify this according to User Schema


export interface IUser {
    _id?: string;
    username?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    role?: "user" | "admin"
    isEmailVerified?: boolean;
    resetPasswordExpire?: Date;
    resetPasswordToken?: string;
  }
  