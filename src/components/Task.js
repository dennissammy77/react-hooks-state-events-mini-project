import React from "react";

function Task({index,category,text,onTaskDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=>onTaskDelete(index)}>X</button>
    </div>
  );
}

export default Task;
