import React from "react";

const Categories = ({ names }) => {
  const catNames = names;
  console.log(catNames);
  return (
    <div className="CoffeeCategories">
      {catNames?.map((cat) => (
        <div className="Category" key={cat}>
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Categories;
