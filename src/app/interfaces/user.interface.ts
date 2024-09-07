// TODO: Modify this according to User Schema

export interface IUser {
  _id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  phone?: string;
  role?: "admin" | "doctor" | "patient";
  isEmailVerified?: boolean;
  resetPasswordExpire?: Date;
  resetPasswordToken?: string;
  bloodGroup?: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  medicalConditions?: string;
  allergies?: string;
  createdAt?: string;
  updatedAt?: string;
}
