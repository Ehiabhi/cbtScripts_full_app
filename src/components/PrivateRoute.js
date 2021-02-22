import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function PrivateRoute({
  Component,
  changeAuth,
  isAuthenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} changeAuth={changeAuth} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
