import React from "react";

function CategoryFilter({categories, selectedCategory, onCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((item,idx)=>{
        return(
          <button 
            key={idx}
            className={selectedCategory === item ? 'selected' : ''}
            onClick={() => onCategoryChange(item)}
          >{item}</button>
        )
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
