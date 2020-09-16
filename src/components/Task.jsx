import React from "react";
import DoneIcon from "@material-ui/icons/Done";

function Task(props) {
  return (
    <div className="task">
      <h1>{props.title}</h1>
      <h2>{props.date}</h2>
      <p>{props.comments}</p>
      <button onClick={() => props.onDelete(props.id)}>
        <DoneIcon />
      </button>
    </div>
  );
}

export default Task;
