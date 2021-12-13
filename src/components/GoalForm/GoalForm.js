import { useState } from "react";
import Button from "../UI/Button";

import "./GoalForm.css";

const GoalForm = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const onChangeInputHandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label>Goal</label>
        <input type="text" value={enteredGoal} onChange={onChangeInputHandler} />
      </div>
      <Button buttonType="submit">Add Goal</Button>
    </form>
  );
};
export default GoalForm;
