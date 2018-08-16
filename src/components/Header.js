import React from "react";
import { Link, withRouter } from "react-router-dom";
import Auth from "../utils/Auth";

const isAuthenticated = push => {
  const auth = new Auth();
  if (auth.isAuthenticated()) {
    return <button onClick={() => auth.logout(push)}>Logout</button>;
  } else {
    return <Link to="/auth0_form">Authenticate with Auth0</Link>;
  }
};

const Header = props => {
  const {
    history: { push }
  } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Sportradar
      </Link>
      {isAuthenticated(push)}
    </nav>
  );
};

export default withRouter(Header);
