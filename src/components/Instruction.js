import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Instruction = () => {
  const [testRoute, setTestRoute] = useState(false);
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const classes = useStyles();
  const handleRedirectToTest = () => {
    setTestRoute(true);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    fetch("/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Logout successful");
          setRedirectOnLogin(true);
        } else if (response.status === 401) {
          console.log(response);
        } else if (response.status === 401) {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {redirectOnLogin && <Redirect to="/" />}
      <div className={classes.root + "container"}>
        {testRoute && <Redirect to="/exam" />}
        <h1>Welcome to CbtExperts</h1>
        <div>
          <p>
            Congratulations on making it to this stage. You're truly a champion.
            You'll now be tested on general knowledge.
          </p>
          <h2>
            Please carefully read and understand all the following instructions
            before proceeding to take the test
          </h2>
          <ol id="instruction">
            <li>Attempt all questions.</li>
            <li>All questions are equally weighted.</li>
            <li>Wrong answers do not attract negative score.</li>
            <li>
              Do not cheat or seek answers from any external source but
              yourself.
            </li>
          </ol>
          <em>
            The school will take record of your score for future assessment.
          </em>
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRedirectToTest}
          >
            Start Test
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Quit Test
          </Button>

          <footer>CbtExperts Designed and developed by Ehis</footer>
        </div>
      </div>
    </>
  );
};

export default Instruction;
