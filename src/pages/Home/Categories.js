import React, { useContext } from "react";
import ProductsContext from "../../Context/ProductsContext";

const Categories = ({ names }) => {
  const { products, searchedProducts, setSearchedProducts } =
    useContext(ProductsContext);
  const catNames = names;

  const handleClick = (e) => {
    const clickedCategory = e.target.value;
    const filteredCategory = products?.filter(
      (product) => product.category === clickedCategory
    );
    filteredCategory.length !== searchedProducts.length
      ? setSearchedProducts(filteredCategory)
      : setSearchedProducts(products);
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
