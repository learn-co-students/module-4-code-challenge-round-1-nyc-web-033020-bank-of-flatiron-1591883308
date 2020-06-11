import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.props.date} onChange={this.props.createTransaction}/>
            <input type="text" name="description" value={this.props.description} placeholder="Description" onChange={this.props.createTransaction}/>
            <input type="text" name="category" value={this.props.category} placeholder="Category" onChange={this.props.createTransaction}/>
            <input
              value={this.props.amount}
              onChange={this.props.createTransaction}
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
