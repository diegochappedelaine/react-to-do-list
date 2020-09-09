import React from "react";

import { FaTrash, FaCircle } from "react-icons/fa";

const Task = ({ task, toDo, setToDo, done }) => {
  const handleClick = () => {
    const taskToEdit = toDo.filter((element) => element.id === task.id);
    taskToEdit[0].finished = !taskToEdit[0].finished;
    setToDo(
      toDo.filter((element) => element.id !== task.id).concat(taskToEdit[0])
    );
  };

  const handleDelete = () => {
    const copy = toDo;
    const filtered = copy.filter(
      (element) => element.id.toString() !== task.id.toString()
    );
    setToDo(filtered);
  };

  const taskStyle = task.finished ? "task finished" : "task";

  const type = `type ${task.type}`;

  return (
    <div className={taskStyle}>
      <div className={type} />
      <button onClick={handleClick}>{task.task}</button>
      {task.finished ? (
        <FaTrash
          className="hover"
          style={{ color: "white" }}
          onClick={handleDelete}
        />
      ) : (
        <FaCircle style={{ color: "white" }} />
      )}
    </div>
  );
};

export default Task;
