import Auth from "../utils/Auth";
import {
  ON_LOGIN_EMAIL_CHANGE,
  ON_LOGIN_PW_CHANGE,
  AUTH0_LOGIN_SUCCESS
} from "./types";

export const onLoginEmailChange = value => {
  return { type: ON_LOGIN_EMAIL_CHANGE, payload: value };
};

export const onLoginPwChange = value => {
  return { type: ON_LOGIN_PW_CHANGE, payload: value };
};

export const auth0Login = (username, password, push) => dispatch => {
  console.log("here")
  const auth = new Auth();
  auth.login(username, password, push);

  // dispatch({ type: AUTH0_LOGIN_SUCCESS, payload: "" });
};
