import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.props.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.props.handleOnChange} value={this.props.date} type="date" name="date" />
            <input onChange={this.props.handleOnChange} value={this.props.description} type="text" name="description" placeholder="Description" />
            <input onChange={this.props.handleOnChange} value={this.props.category} type="text" name="category" placeholder="Category" />
            <input
            value={this.props.amount}
              onChange={this.props.handleOnChange}
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
      </div>
    );
  }
}

export default AddTransactionForm;
