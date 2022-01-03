import React from "react";
import Product from "./Product/Product";
import "./Products.css";
import { useContext } from "react";
import ProductsContext from "../../Context/ProductsContext";
const Products = () => {
  const [products] = useContext(ProductsContext);
  return (
    <div className="CoffeeCards">
      {products.map(({ id, title, category, description, image, price }) => (
        <Product
          id={id}
          key={id}
          title={title}
          category={category}
          description={description}
          image={image}
          price={price}
        />
      ))}
    </div>
  );
};

export default Products;
