import { IUser } from "../../interfaces/user.interface";
import { IToken } from "./interfaces/token.interface";

interface IAuthState {
  loading: boolean | null;
  user?: IUser | null;
  token?: string;
  message?: string | null;
}

const initialAuthState: IAuthState = {
  loading: null,
  user: null,
  token: undefined,
  message: null,
};

export default initialAuthState;
