import React from "react";

import { FaTrash, FaCircle } from "react-icons/fa";

const Task = ({ task, toDo, changeToDo }) => {
  // Set Task to "finished"
  const handleClick = () => {
    const taskToEdit = toDo.filter((element) => element.id === task.id);
    taskToEdit[0].finished = !taskToEdit[0].finished;
    const updated = toDo
      .filter((element) => element.id !== task.id)
      .concat(taskToEdit[0]);
    changeToDo(updated);
  };

  // Delete Task
  const handleDelete = () => {
    const copy = toDo;
    const filtered = copy.filter(
      (element) => element.id.toString() !== task.id.toString()
    );
    changeToDo(filtered);
  };

  // Handle styling if task is finished or not
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
