import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const transaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }

    this.props.addTransaction(transaction)
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="inline fields">
            <input onChange={this.handleChange} value={this.state.date} type="date" name="date" />
            <input onChange={this.handleChange} value={this.state.description} type="text" name="description" placeholder="Description" />
            <input onChange={this.handleChange} value={this.state.category} type="text" name="category" placeholder="Category" />
            <input
              onChange={this.handleChange}
              value={this.state.amount}
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
