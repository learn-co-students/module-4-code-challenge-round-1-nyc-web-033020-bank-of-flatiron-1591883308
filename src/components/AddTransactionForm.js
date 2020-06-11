import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = {}

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" value={this.state.date} onChange={this.handleChange} name="date" />
            <input type="text" value={this.state.description} onChange={this.handleChange} name="description" placeholder="Description" />
            <input type="text" value={this.state.category} onChange={this.handleChange} name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
              placeholder="Amount"
              step="0.01"
            />
          </div>
          <button className="ui button" onClick={this.handleSubmit} type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
