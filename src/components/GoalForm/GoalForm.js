import { useState } from "react";
import Button from "../UI/Button";

import "./GoalForm.css";

const GoalForm = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const [isValid, setIsValid] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const onChangeInputHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredGoal(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={`form-control ${!isValid ? ' invalid' : ''}`}>
        <label>Goal</label>
        <input
          type="text"
          value={enteredGoal}
          onChange={onChangeInputHandler}
        />
      </div>
      <Button buttonType="submit">Add Goal</Button>
    </form>
  );
};
export default GoalForm;
