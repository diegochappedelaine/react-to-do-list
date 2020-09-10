import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import NoTask from "../components/NoTask";
import SetTypeButton from "../components/SetTypeButton";

import Cookies from "js-cookie";

const Main = () => {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState(null);

  // Get Tasks from Cookies on loadup
  useEffect(() => {
    const fetchData = async () => {
      const tasksInCookies = await Cookies.get("tasks");
      tasksInCookies && setToDo(JSON.parse(tasksInCookies));
    };
    fetchData();
  }, []);

  // Add New Task
  const addTask = (e) => {
    e.preventDefault();
    if (input !== "") {
      const copy = [...toDo];
      copy.push({
        task: input,
        finished: false,
        type,
        id: Math.floor(Math.random() * 1001),
      });
      setType(null);
      setInput("");
      setToDo(copy);
      Cookies.set("tasks", JSON.stringify(copy), { expires: 7 });
    }
  };

  // Handle New Task Name
  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const areEveryTaskFinished =
    toDo.every((task) => task.finished) || !toDo.length;

  // Display Unfinished Tasks
  const unFinishedTasks = toDo
    .filter((task) => !task.finished)
    .map((task, index) => {
      return (
        <Task
          key={index}
          task={task}
          toDo={toDo}
          setToDo={setToDo}
          index={index}
        />
      );
    });

  // Display Finished Tasks
  const finishedTasks = toDo
    .filter((task) => task.finished)
    .map((task, index) => {
      return (
        <Task
          task={task}
          toDo={toDo}
          setToDo={setToDo}
          index={index}
          key={index}
        />
      );
    });

  return (
    <main className="container">
      <section>
        <form className="add-task" onSubmit={addTask}>
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Add new task"
          />
          <div>
            <SetTypeButton type={type} setType={setType} value={"work"} />
            <SetTypeButton type={type} setType={setType} value={"personnal"} />
            <SetTypeButton type={type} setType={setType} value={"urgent"} />
            <button className="add-button" type="submit">
              Add
            </button>
          </div>
        </form>
        <h2>To-do</h2>
        {!areEveryTaskFinished ? unFinishedTasks : <NoTask />}
        {!!finishedTasks.length && [
          <h2 key={Math.floor(Math.random() * 101)}>Done</h2>,
          finishedTasks,
        ]}
      </section>
    </main>
  );
};

export default Main;
