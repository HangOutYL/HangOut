import React, { useContext } from "react";
import Product from "./Product/Product";
import ProductsContext from "../../Context/ProductsContext";
const Products = () => {
  const { searchedProducts } = useContext(ProductsContext);

  return (
    <div className="CoffeeCards">
      {searchedProducts && searchedProducts.length > 0 ? (
        searchedProducts.map(({ id, image, title, price, category }) => (
          <Product
            key={id}
            id={id}
            image={image}
            title={title}
            price={price}
            category={category}
          />
        ))
      ) : (
        <span>No matches found!</span>
      )}
    </div>
  );
};

export default Products;
