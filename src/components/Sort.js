import React from "react";

class Sort extends React.Component {

  state = {
    sort: 'date',
  }

  handleChange = (event) => {
    this.setState({sort: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitSort(this.state.sort)
  }

  render() {
    return (
      <div className="ui segment">
      <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <button className="ui button" type="submit">
              Sort By:
            </button>
            <select value={this.state.sort} onChange={this.handleChange} >
              <option value="date">Date</option>
              <option value="category">Category</option>
              <option value="description">Description</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
  
};

export default Sort;