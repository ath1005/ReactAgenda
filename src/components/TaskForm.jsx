import React, { useState } from "react";

function TaskForm(props) {
  const [task, setTask] = useState({
    title: "",
    date: "",
    comments: ""
  });

  function handleInput(event) {
    const { value, name } = event.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  }

  function handleAdd(event) {
    props.onAdd(task);
    setTask({
      title: "",
      date: "",
      comments: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleInput}
          value={task.title}
        />
        <input
          name="date"
          placeholder="Date"
          onChange={handleInput}
          value={task.date}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          onChange={handleInput}
          value={task.comments}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
