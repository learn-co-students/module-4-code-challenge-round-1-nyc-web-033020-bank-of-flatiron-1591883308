import React from "react";

const Search = (props) => {

  const {search, handleSearch} = props

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        value={search}
        placeholder={"Search your Recent Transactions"}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
