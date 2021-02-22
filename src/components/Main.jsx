import React, { useEffect } from "react";
import Exam from "./Exam";
import Login from "./Login";
import Register from "./Register";
import Recovery from "./Recovery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Instruction from "./Instruction";
import PrivateRoute from "./PrivateRoute";
import { connect, useSelector } from "react-redux";
import { authChanger } from "../redux/actions/actionCreator";

function Main(props) {
  let store = useSelector((state) => state.isAuthenticated);

  return (
    <div style={{ color: "red" }}>
      <Router>
        <Switch>
          <PrivateRoute
            Component={Exam}
            isAuthenticated={props.auth}
            exact
            path="/exam"
            auth={props.auth}
            changeAuth={() => props.dispatch(authChanger(store))}
          />
          <Route
            path="/login"
            component={() => (
              <Login
                auth={props.auth}
                changeAuth={() => props.dispatch(authChanger())}
              />
            )}
          />
          <Route path="/register" component={Register} />
          <PrivateRoute
            Component={Instruction}
            isAuthenticated={props.auth}
            exact
            path="/instruction"
          />
          <Route path="/recovery" component={Recovery} />
          <Route
            path="/"
            exact
            component={() => (
              <Login
                auth={props.auth}
                changeAuth={() => props.dispatch(authChanger())}
              />
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Main);
