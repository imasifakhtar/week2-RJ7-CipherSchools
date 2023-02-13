import React, { useReducer } from "react";

const countReducer = (action, state) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const TaskComponent = () => {
  const [state, dispatch] = useReducer({ count: 0 });

  return (
    <div>
      <h1>The count {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrease</button>
    </div>
  );
};

export default TaskComponent;
