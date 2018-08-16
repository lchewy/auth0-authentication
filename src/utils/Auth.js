/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
// import Auth0Lock from "auth0-lock";

const LOGIN_SUCCESS = "/secret";
const LOGIN_FAILURE = "/";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "srlc.auth0.com",
    clientID: "dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F",
    // redirectUri: "http://localhost:3000/callback",
    // audience: "https://srlc.auth0.com/userinfo",
    // responseType: "token id_token",
    // scope: "openid profile"
  });

  url = this.auth0.client.buildAuthorizeUrl({
    clientID: 'dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F', // string
    responseType: 'token', // code or token
    redirectUri: 'https://localhost:3000/callback',
    // connection: "https://localhost:3000/test"
  })

  // lock = new Auth0Lock("dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F","srlc.auth0.com", )

  login = () => {

    console.log(this.url)
    location.href = this.url
    // this.auth0.authorize();


    // this.auth0.client.buildAuthorizeUrl({
    //   clientID: "dc8Mvbk6uA9qb1i9sxvzeEJYEKVWdw0F", // string
    //   responseType: "token id_token", // code
    //   redirectUri: "/callback",
    //   state: "YOUR_STATE",
    //   nonce: "YOUR_NONCE"
    // });

    // this.lock.show()

    // console.log("suuup")
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );

        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS;
      } else if (err) {
        location.pathname = LOGIN_FAILURE;
        console.log(err);
      }
    });
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = LOGIN_FAILURE;
  };

  getProfile = () => {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));
    } else {
      return {};
    }
  };
}
