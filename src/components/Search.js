import React from "react";

const Search = (props) => {
  console.log('ser', props)
  return (
    <div className="ui large fluid icon input">
      <input type="text" placeholder={"Search your Recent Transactions"} value={props.searchTerm} 
      onChange={props.searchHandler}/>
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
