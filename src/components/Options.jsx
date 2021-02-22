import React from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";

function Options(props) {
  const { questionfile, setnextquestion, count } = props;
  return (
    <>
      <FormControl className="transit" component="fieldset">
        <FormLabel id="question" component="legend">
          {props.question}
        </FormLabel>
        <RadioGroup
          aria-label="Questions"
          name="Questions1"
          onChange={count < questionfile.length ? setnextquestion : undefined}
        >
          {questionfile[count].options.map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Options;
