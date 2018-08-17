import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import * as actions from "../actions";

class SignupForm extends Component {

  usernameField = () =>{
    return (<div/>)
  }

  render() {
    // const {
    //   handleSubmit,
    //   submitLogin,
    //   val,
    //   history,
    //   displayLogin,
    //   displaySignup,
    //   location
    // } = this.props;
    console.log("signup props ", this.props)
    return (
      <form>
        <Field 
          name="username"
          component={()=>[]}
        />

      </form>
      // <form
      //   onSubmit={handleSubmit(() =>
      //     submitLogin(val.values, history, location)
      //   )}
      // >
      //   <button>
      //     <a href="/api/auth/facebook">Continue with Facebook</a>
      //   </button>
      //   <button>
      //     <a href="/api/auth/google">Continue with Google</a>
      //   </button>
      //   {this.renderFields()}
      //   <button type="submit">Submit</button>
      //   <hr />
      //   <p>
      //     Don't have an account?{" "}
      //     <span
      //       onClick={() => {
      //         displayLogin(false);
      //         displaySignup(true);
      //       }}
      //       style={{ cursor: "pointer" }}
      //     >
      //       <strong>Sign up</strong>
      //     </span>
      //   </p>
      // </form>
    );
  }
}

export default connect(
  null,
  actions
)(reduxForm({ form: "signupForm" })(SignupForm));
