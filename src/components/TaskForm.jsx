import React, { useState } from "react";

function TaskForm(props) {
  const [task, setTask] = useState({
    title: "",
    date: ""
  });

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <input name="date" placeholder="Date" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
