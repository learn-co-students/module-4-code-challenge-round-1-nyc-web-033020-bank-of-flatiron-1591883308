import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handlerAddNewTransaction}>
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" type="submit">Add Transaction</button>
        </form>
          <div>
            <strong>Sort transactions alphabetically: </strong>
            <button className="ui button" value="by category" onClick={this.props.handlerSort}>by category</button>
            <button className="ui button" value="by description" onClick={this.props.handlerSort}>by description</button>
          </div>
      </div>
    );
  }
}

export default AddTransactionForm;
