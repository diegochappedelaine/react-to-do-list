import React, { useState } from "react";
import Task from "../components/Task";
import NoTask from "../components/NoTask";

const Main = () => {
  const [toDo, setToDo] = useState([]);
  const [input, setInput] = useState("");
  const [type, setType] = useState(null);

  // const testData = [
  //   { task: "Coder une todolist", finished: true, type: "work", id: 785 },
  //   { task: "Faire mon cv", finished: true, type: "work", id: 213 },
  //   { task: "Remplir linkedin", finished: true, type: "work", id: 309 },
  //   { task: "Manger équilibré", finished: false, type: "personnal", id: 42 },
  // ];

  const addTask = () => {
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
    }
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const areEveryTaskFinished =
    toDo.every((task) => task.finished) || !toDo.length;

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
        <div className="add-task">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Add new task"
          />
          <div>
            <button className="select-button" onClick={() => setType("work")}>
              <div className={type === "work" ? "select work" : "select"} />
              <span>Work</span>
            </button>
            <button
              className="select-button"
              onClick={() => setType("personnal")}
            >
              <div
                className={type === "personnal" ? "select personnal" : "select"}
              />
              <span>Personnal</span>
            </button>
            <button className="select-button" onClick={() => setType("urgent")}>
              <div className={type === "urgent" ? "select urgent" : "select"} />
              <span>Urgent</span>
            </button>
            <button className="add-button" onClick={addTask}>
              Add
            </button>
          </div>
        </div>
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
