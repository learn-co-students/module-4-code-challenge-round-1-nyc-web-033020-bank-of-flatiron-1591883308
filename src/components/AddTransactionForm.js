import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleForm}>
          <div className="inline fields">
            <input value={this.props.date} onChange={this.props.handleInputChange} type="date" name="date" />
            <input value={this.props.description} onChange={this.props.handleInputChange} type="text" name="description" placeholder="Description" />
            <input value={this.props.category} onChange={this.props.handleInputChange} type="text" name="category" placeholder="Category" />
            <input
              value={this.props.amount}
              onChange={this.props.handleInputChange}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
        <div>
          <h4>Sort transactions:</h4>
          <button className='ui button' value='sort by category' onClick={this.props.handleSort}>By category</button>
        </div>
      </div>
    );
  }
}

export default AddTransactionForm;
