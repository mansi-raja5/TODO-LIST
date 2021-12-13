import { useState } from "react";
import GoalList from "./components/Goals/GoalList";
import GoalForm from "./components/GoalForm/GoalForm";
import "./App.css";

function App() {
  const INITIAL_GOALS = [
    { id: 1, label: "Mansi" },
    { id: 2, label: "Raja" },
  ];

  const [goals, setGoals] = useState(INITIAL_GOALS);

  const addGoalHandler = (goalName) => {
    setGoals((prevGoals) => {
      return [...prevGoals, { id: Math.random().toString(), label: goalName }];
    });
  };

  const onDeleteGoalHandler = (deleteGoalId) => {
    setGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== deleteGoalId);
    });
  };

  return (
    <div>
      <section id="goal-form">
        <GoalForm onAddGoal={addGoalHandler}></GoalForm>
      </section>
      <section id="goals">
        {goals.length > 0 && (
          <GoalList
            listData={goals}
            onDeleteGoal={onDeleteGoalHandler}
          ></GoalList>
        )}
        {!goals.length && <p className="center-align">No Goals Found!</p>}
      </section>
    </div>
  );
}

export default App;
