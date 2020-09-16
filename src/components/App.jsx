import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import "/src/styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  }

  function deleteTask(id) {
    setTasks((prevTasks) => {
      return prevTasks.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>Assignments</h1>
      <TaskForm onAdd={addTask} />
      <div>
        <ul>
          {tasks.map((task, index) => (
            <Task
              key={index}
              id={index}
              title={task.title}
              date={task.date}
              comments={task.comments}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
