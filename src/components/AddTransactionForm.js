import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.props.date} onChange={(event) => this.props.createTransaction(event)}/>
            <input type="text" name="description" value={this.props.description} placeholder="Description" onChange={(event) => this.props.createTransaction(event)}/>
            <input type="text" name="category" value={this.props.category} placeholder="Category" onChange={(event) => this.props.createTransaction(event)}/>
            <input
              value={this.props.amount}
              onChange={(event) => this.props.createTransaction(event)}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit" onClick={(event) => this.props.submitTransaction(event)}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
