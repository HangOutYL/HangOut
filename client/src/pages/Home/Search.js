import React from "react";
import SearchIcon from "../../views/SearchVector.png";
import { useContext } from "react";
import ProductsContext from "../../Context/ProductsContext";

const Search = () => {
  const { products, setSearchedProducts, setNoMatch } =
    useContext(ProductsContext);

  const handleInput = (e) => {
    const productSearchFilter =
      products &&
      products.filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
    setSearchedProducts(productSearchFilter);
    if (!productSearchFilter.length) {
      setNoMatch(true);
    } else {
      setNoMatch(false);
    }
  };

  return (
    <div className="SearchBar">
      <img src={SearchIcon} alt="SearchIcon" />
      <input
        placeholder="Browse your favourite Coffee.."
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
