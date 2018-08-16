import { INITIATE_AUTH0 } from "../actions/types";
import Auth from "../utils/Auth";

const auth = new Auth();

export default (state = {}, actions) => {
  switch (actions.type) {
    case INITIATE_AUTH0:
      return { auth };
    default:
      return state;
  }
};
