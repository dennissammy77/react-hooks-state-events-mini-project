import React, { useState } from "react";

function NewTaskForm({categories,onTaskFormSubmit}) {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Code');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text,
      category,
    };
    if(!text || !category){
      return alert('all inputs are required')
    }

    onTaskFormSubmit(newTask);
    setText('');
    setCategory('');
  };
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.filter((item)=>item !== 'All').map((item,idx)=>{
            return(
              <option 
                key={idx}
                value={item}
              >{item}</option>
            )
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
