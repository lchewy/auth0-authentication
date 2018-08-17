import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Logo from "../images/logo.png";
import "./Main.css";

class Main extends Component {
  render() {
    const {
      history: { push }
    } = this.props;
    return (
      <div className="signin_form">
        <div className="logo_container">
          <img src={Logo} className="logo" />
        </div>
        <LoginForm push={push} />
      </div>
    );
  }
}

export default Main;

// import React, { Component } from "react";
// import Welcome from "./Welcome";
// import Secret from "./Secret";
// import Auth from "../utils/Auth";

// class Main extends Component {
// renderScreen = () => {
//   const auth = new Auth();
//   return auth.isAuthenticated() ? <Secret /> : <Welcome />;
// };

//   render() {
//     return (
//       <div>
//         Welcome screen <p>please log in to see secret</p>
//       </div>
//     );
//   }
// }

// export default Main;
