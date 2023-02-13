import React, { useEffect, useState } from "react";
import { tasks } from "../components/api/testApi";

const TaskScreen = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Task Screen Mounted");
  }, []);

  useEffect(() => {
    console.log("Task Screen Updated");
    setCount(5);
  });

  return Alltasks.map((task, index) => {
    <div key={index} onClick={(e) => setCount(count + 1)}>
      <h1>
        {task.taskNumber} {task.taskName}
      </h1>
      <p>{task.taskDescription}</p>
    </div>;
  });
};

export default TaskScreen;
