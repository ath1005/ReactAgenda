import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "/src/styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  return (
    <div className="App">
      <h1>Agenda</h1>
      <TaskForm onAdd={addTask} />
    </div>
  );
}
