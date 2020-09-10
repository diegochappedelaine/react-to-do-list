import React from "react";

import Cookies from "js-cookie";

import { FaTrash, FaCircle } from "react-icons/fa";

const Task = ({ task, toDo, setToDo }) => {
  // Set Task to "finished"
  const handleClick = () => {
    const taskToEdit = toDo.filter((element) => element.id === task.id);
    taskToEdit[0].finished = !taskToEdit[0].finished;
    const updated = toDo
      .filter((element) => element.id !== task.id)
      .concat(taskToEdit[0]);
    setToDo(updated);
    Cookies.set("tasks", JSON.stringify(updated), { expires: 7 });
  };

  // Delete Task
  const handleDelete = () => {
    const copy = toDo;
    const filtered = copy.filter(
      (element) => element.id.toString() !== task.id.toString()
    );
    setToDo(filtered);
    Cookies.set("tasks", JSON.stringify(filtered), { expires: 7 });
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
