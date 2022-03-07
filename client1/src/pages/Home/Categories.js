import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import ProductsContext from "../../Context/ProductsContext";

const Categories = ({ names }) => {
  const [all, setAll] = useState(false);
  const { products, searchedProducts, setSearchedProducts } =
    useContext(ProductsContext);
  const catNames = names;

  const handleClick = (e) => {
    const clickedCategory = e.target.value;
    const filteredCategory = products?.filter(
      (product) => product.category === clickedCategory
    );
    filteredCategory === searchedProducts
      ? setSearchedProducts(products)
      : setSearchedProducts(filteredCategory);
    setAll(true);
  };

  const toggleALL = (e) => {
    setSearchedProducts(products);
    setAll(false);
  };

  return (
    <div className="CoffeeCategories">
      {all && (
        <button value="all" className="all" onClick={toggleALL}>
          ALL
        </button>
      )}
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
