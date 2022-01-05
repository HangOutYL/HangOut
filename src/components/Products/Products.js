import React, { useContext } from "react";
import Product from "./Product/Product";
import ProductsContext from "../../Context/ProductsContext";
const Products = () => {
  const { searchedProducts } = useContext(ProductsContext);

  return (
    <div className="CoffeeCards">
      {searchedProducts &&
        searchedProducts.map(({ id, image, title, price }) => (
          <Product key={id} id={id} image={image} title={title} price={price} />
        ))}
    </div>
  );
};

export default Products;
