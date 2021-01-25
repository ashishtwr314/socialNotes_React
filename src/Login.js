import React from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./firebase";
import LeftNav from "./LeftNav";

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword("user1@gmail.com", "password")
    //   .then((result) => {

    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    console.log(props.history.push("/dashboard"));
  };

  return (
    <>
      <LeftNav />
      <div className="mainArea">
        <div className="auth-form">
          <form onSubmit={(e) => handleLogin(e)}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
            <p className="helper_text">
              Not a member yet ? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(Login);
