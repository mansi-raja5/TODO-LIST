import { useState } from "react";
import Button from "../UI/Button";
import styled from "styled-components";

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

  const FormControl = styled.div`
    margin: 0.5rem 0;

    & label {
      font-weight: bold;
      display: block;
      margin-bottom: 0.5rem;
    }

    & input {
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      font: inherit;
      line-height: 1.5rem;
      padding: 0 0.25rem;
    }

    & input:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }

    &.invalid input {
      background: rgb(230, 179, 179);
      border: red;
    }

    &.invalid label {
      color: red;
    }
  `;

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl className={!isValid && " invalid"}>
        <label>Goal</label>
        <input
          type="text"
          value={enteredGoal}
          onChange={onChangeInputHandler}
        />
      </FormControl>
      <Button buttonType="submit">Add Goal</Button>
    </form>
  );
};
export default GoalForm;
