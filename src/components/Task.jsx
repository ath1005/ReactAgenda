import React from "react";

function Task(props) {
  return (
    <div className="task">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <p>{props.comments}</p>
      <button onClick={() => props.onDelete(props.id)}>Delete</button>
    </div>
  );
}

export default Task;
