import {
  ON_LOGIN_EMAIL_CHANGE,
  ON_LOGIN_PW_CHANGE,
  AUTH0_LOGIN_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  login_email: "",
  login_pw: "",
  user: ""
};

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case ON_LOGIN_EMAIL_CHANGE:
      return { ...state, login_email: actions.payload };
    case ON_LOGIN_PW_CHANGE:
      return { ...state, login_pw: actions.payload };
    case AUTH0_LOGIN_SUCCESS:
      return {...state, ...INITIAL_STATE, user: ""}
    default:
      return state;
  }
};
