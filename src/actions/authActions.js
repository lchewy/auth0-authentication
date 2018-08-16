import Auth from "../utils/Auth";
import {
  // INITIATE_AUTH0,
  ON_LOGIN_EMAIL_CHANGE,
  ON_LOGIN_PW_CHANGE,
  AUTH0_LOGIN_SUCCESS
} from "./types";

// export const initiateAuth0 = () => {
//   return { type: INITIATE_AUTH0 };
// };

export const onLoginEmailChange = value => {
  return { type: ON_LOGIN_EMAIL_CHANGE, payload: value };
};

export const onLoginPwChange = value => {
  return { type: ON_LOGIN_PW_CHANGE, payload: value };
};

export const auth0Login = (username, password) => dispatch =>{
  const auth = new Auth();
  auth.login(username, password);

  dispatch({type: AUTH0_LOGIN_SUCCESS, payload: ""})
};
