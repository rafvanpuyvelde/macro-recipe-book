import React from "react";
import { Route, Switch } from "react-router";

import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/sign-in">
        <SignInPage />
      </Route>
      <Route path="/sign-up">
        <SignUpPage />
      </Route>
    </Switch>
  );
};

export default Routes;
