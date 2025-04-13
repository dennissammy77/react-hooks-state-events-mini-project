import React from "react";
import Task from "./Task";

function TaskList({tasks,setTasks}) {
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };
  
  return (
    <div className="tasks">
      {tasks.map((item,idx)=>{
        return(
          <Task key={idx} index={idx} category={item.category} text={item.text} onTaskDelete={deleteTask}/>
        )
      })}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
