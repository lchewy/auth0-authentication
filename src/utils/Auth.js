import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "srlc.auth0.com",
    clientID: "dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F"
  });

  url = this.auth0.client.buildAuthorizeUrl({
    clientID: "dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F",
    responseType: "token",
    redirectUri: "https://localhost:3000/callback"
  });

  login = async (username, password, push, failed, success) => {
    await this.auth0.client.login(
      {
        realm: "Username-Password-Authentication",
        username,
        password,
        responseType: "code",
        scope: "openid profile email"
      },
      (err, authResults) => {
        if (err) {
          // l.chiu@sportradar.com
          // Sp0rtradar1
          failed()
          return err;
        } else {
          success()
          this.handleAuthentication(authResults, push);
          return authResults;
        }
      }
    );
  };

  // NO NEED FOR SIGNUP
  signup = async (email, password, push) => {
    await this.auth0.signup(
      {
        connection: "Username-Password-Authentication",
        email: email,
        password: password
      },
      err => {
        if (err) {
          return;
        } else {
          this.login(email, password, push);
        }
      }
    );
  };

  handleAuthentication = (authResults, push) => {
    if (authResults && authResults.accessToken && authResults.idToken) {
      let expiresAt = JSON.stringify(
        authResults.expiresIn * 1000 + new Date().getTime()
      );

      localStorage.setItem("access_token", authResults.accessToken);
      localStorage.setItem("id_token", authResults.idToken);
      localStorage.setItem("expires_at", expiresAt);
      push("/secret");
    }
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  logout = push => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    push("/");
  };

  getProfile = () => {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  };
}
