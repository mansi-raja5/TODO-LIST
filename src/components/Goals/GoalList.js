import GoalItem from "./GoalItem";
import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.listData.map((listItem) => (
        <GoalItem
          key={listItem.id}
          id={listItem.id}
          deleteGoal={props.onDeleteGoal}
        >
          {listItem.label}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;
