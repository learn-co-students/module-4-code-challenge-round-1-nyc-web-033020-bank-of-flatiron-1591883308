import React from "react";

class Search extends React.Component {
  // state = { 
  //   searchTerm: ''
  // }

  // handleSearch = (e) => {
  //   this.setState({
  //     searchTerm: e.target.value
  //   })
  // }



  render() {
    const { handleSearch } = this.props
    // console.log(this.state)
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={handleSearch}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
