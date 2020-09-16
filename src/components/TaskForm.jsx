import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

  function handleDate(event) {
    var date = new Date(event);
    setTask((prevTask) => {
      return {
        ...prevTask,
        date: date.toLocaleDateString()
      };
    });
  }

  return (
    <div className="task-form">
      <DatePicker
        className="form-picker"
        onChange={handleDate}
        value={task.date}
      />
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleInput}
          value={task.title}
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
