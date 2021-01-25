import React from "react";
import { Link } from "react-router-dom";
import LeftNav from "./LeftNav";

function SignUp() {
  return (
    <>
      <LeftNav />
      <div className="mainArea">
        <div className="auth-form signup-form">
          <form>
            <div>
              <input type="text" placeholder="Fullname" />
              <input type="text" placeholder="Username" />
            </div>
            <div>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Signup</button>
            <p className="helper_text">
              Already a member ? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
