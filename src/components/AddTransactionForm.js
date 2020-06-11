import React, { Component } from "react";

class AddTransactionForm extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={event => this.props.addTransaction(event)}>
          <div className="inline fields">
            <input type="date" name="date" onChange={event => this.props.handleChange(event)} value={this.props.date}/>
            <input type="text" name="description" placeholder="Description" onChange={event => this.props.handleChange(event)} value={this.props.description} />
            <input type="text" name="category" placeholder="Category"onChange={event => this.props.handleChange(event)} value={this.props.category} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={event => this.props.handleChange(event)} 
              value={this.props.amount}
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
