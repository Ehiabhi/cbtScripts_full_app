import React, { useEffect, useState } from "react";
import Label from "./Label";
import Options from "./Options";
import { QuestionFile, Answer } from "./QuestionFile";
import TestScorePage from "./TestScorePage";
import { Redirect } from "react-router-dom";

function Exam(props) {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(QuestionFile[count].time);

  let timeId;

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    clearTimeout(timeId);
    QuestionFile[count + 1].time === 0
      ? setTimer(null)
      : setTimer(QuestionFile[count + 1].time);
  };

  const nextQuestion = (event) => {
    const choice = event.target.value;
    if (choice === String(Answer[count].key)) {
      setScore((prevScore) => prevScore + 1);
    }
    incrementCount();
  };

  // While timer > 0, continually decrement timer else clear setTimeout function
  timer > 0
    ? (timeId = setTimeout(() => setTimer(timer - 1), 1000))
    : clearTimeout(timeId);

  if (timer === 0) {
    // Call next question while all questions have not been served. Since QuestionFile.length === number of questions.
    count - 1 < QuestionFile.length && incrementCount();
  }

  if (props.auth) {
    return <Redirect to="/" />;
  } else {
    if (count === QuestionFile.length - 1) {
      return (
        <TestScorePage score={score} resetTest={() => props.changeAuth()} />
      );
    } else {
      return (
        <div className="container">
          <Label timer={timer} count={count + 1} />
          <hr />
          <Options
            question={QuestionFile[count].question}
            questionfile={QuestionFile}
            count={count}
            setnextquestion={(evt) => nextQuestion(evt)}
          />
        </div>
      );
    }
  }
}

export default Exam;
