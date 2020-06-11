import React from "react";

const Search = (props) => {
  const handleSearchTerm = (event) => {
    props.handleSearch(event.target.value)

  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTerm}
        onChange={handleSearchTerm}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
