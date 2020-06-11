import React, { Component } from "react";

class AddTransactionForm extends Component {


  render() {

    const { onChange } = this.props

    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={onChange} />
            <input type="text" name="description" placeholder="Description" onChange={onChange} />
            <input type="text" name="category" placeholder="Category"  onChange={onChange} />
            <input
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
