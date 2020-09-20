import React from "react";
import DoneIcon from "@material-ui/icons/Done";

function Task(props) {
  return (
    <div className="task">
      <h5>{props.date}</h5>
      <h1>{props.title}</h1>
      <p>{props.comments}</p>
      <button onClick={() => props.onDelete(props.id)}>
        <DoneIcon />
      </button>
    </div>
  );
}

export default Task;
