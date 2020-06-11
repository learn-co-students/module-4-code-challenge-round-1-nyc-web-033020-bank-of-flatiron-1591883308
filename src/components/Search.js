import React from "react";

class Search extends React.Component {
  state = { 
    searchTerm: ''
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
    this.props.searchFilter(this.state.searchTerm)
  }



  render() {
    const { searchFilter } = this.props
    console.log(this.state)
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          onChange={this.handleSearch}
        />
        <i className="circular search link icon"></i>
      </div>
    );
  }
};

export default Search;
