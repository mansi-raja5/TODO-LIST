import "./GoalItem.css";

const GoalItem = (props) => {
  const onClickHandler = () => {
    props.deleteGoal(props.id);
  };
  return (
    <li className="goal-item" onClick={onClickHandler}>
      {props.children}
    </li>
  );
};

export default GoalItem;