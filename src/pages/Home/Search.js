import React from "react";
import SearchIcon from "../../views/SearchVector.png";

const Search = ({ handleInput }) => {
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
