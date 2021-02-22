import React from "react";
import AlarmIcon from "@material-ui/icons/Alarm";

function Label({ count, timer }) {
  return (
    <>
      <h1>Question {count} of 20</h1>
      <p style={{ color: "red" }}>
        <AlarmIcon fontSize="large" color="secondary" />
        {timer} s
      </p>
    </>
  );
}

export default Label;
