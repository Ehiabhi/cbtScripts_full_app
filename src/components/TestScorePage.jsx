import React from "react";
import { QuestionFile } from "./QuestionFile";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function TestScorePage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root + "container"}>
      <h1>
        Hello, {props.name} Thanks for taking the test. Your score is {props.score} /{" "}
        {QuestionFile.length - 1}
      </h1>

      <Button variant="contained" color="secondary" onClick={props.resetTest}>
        Back to Home Page
      </Button>
    </div>
  );
}

export default TestScorePage;
