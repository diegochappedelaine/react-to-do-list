import React from "react";

import { FaCheckCircle, FaCircle } from "react-icons/fa";

const Task = ({ task, toDo, setToDo, done }) => {
  const handleClick = () => {
    const taskToEdit = toDo.filter((element) => element.id === task.id);
    taskToEdit[0].finished = !taskToEdit[0].finished;
    setToDo(
      toDo.filter((element) => element.id !== task.id).concat(taskToEdit[0])
    );
  };

  const taskStyle = done ? "task finished" : "task";

  const type = `type ${task.type}`;

  return (
    <div className={taskStyle} onClick={handleClick}>
      <div className={type} />
      <p>{task.task}</p>
      {task.finished ? (
        <FaCheckCircle style={{ color: "green" }} />
      ) : (
        <FaCircle style={{ color: "white" }} />
      )}
    </div>
  );
};

export default Task;
