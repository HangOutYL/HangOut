import React, { useContext } from "react";
import Product from "./Product/Product";
import ProductsContext from "../../Context/ProductsContext";
const Products = () => {
  const { searchedProducts, noMatch } = useContext(ProductsContext);

  return (
    <div className="CoffeeCards">
      {searchedProducts &&
        searchedProducts.map(
          ({ _id: id, image, title, price, category, milk }) => (
            <Product
              key={id}
              id={id}
              image={image}
              title={title}
              price={price}
              category={category}
              milk={milk}
            />
          )
        )}
      {noMatch && <div>No Matches Found!</div>}
      <span></span>
    </div>
  );
};

export default Products;
