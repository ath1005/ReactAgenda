import React from "react";

function Task(props) {
  return (
    <div className="task">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <p>{props.comments}</p>
    </div>
  );
}

export default Task;
