import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function Base() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/dashboard">
                <Home />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
    </>
  );
}

export default Base;
