import React, { useContext, useState } from "react";
import ProductsContext from "../../Context/ProductsContext";

const Categories = ({ names }) => {
  const { searchedProducts, setSearchedProducts } = useContext(ProductsContext);

  const catNames = names;

  const handleClick = (e) => {
    const clickedCategory = e.target.value;
    const filteredCategory = searchedProducts?.filter(
      (product) => product.category === clickedCategory
    );
    console.log(filteredCategory);

    setSearchedProducts(filteredCategory);
  };

  return (
    <div className="CoffeeCategories">
      {catNames?.map((cat, key) => (
        <button
          className="Category"
          key={key}
          value={cat}
          onClick={(e) => handleClick(e)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
