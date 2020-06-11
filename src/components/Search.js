import React from "react";

const Search = (props) => {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        name="searchTerm"
        placeholder={"Search your Recent Transactions"}
        onChange={event => props.handleChange(event)}
      />
      <i className="circular search link icon" onClick={props.handleSearchSubmit}></i>
    </div>
  );
};

export default Search;
