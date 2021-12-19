import React from "react";
import SearchIcon from "../../views/SearchVector.png";

const Search = () => {
  return (
    <div className="SearchBar">
      <img src={SearchIcon} alt="SearchIcon" />
      <input placeholder="Browse your favourite Coffee.." />
    </div>
  );
};

export default Search;
