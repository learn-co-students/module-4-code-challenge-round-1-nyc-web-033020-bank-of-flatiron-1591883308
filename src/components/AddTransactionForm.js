import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '2020-07-11',
    description: '',
    category: '',
    amount: '',
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.submitForm(this.state)
      .then(this.setState({
        date: '2020-07-11',
        description: '',
        category: '',
        amount: '',
      }))
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input 
              value={this.state.date} 
              onChange={this.handleChange}
              type="date"
              name="date" 
            />
            <input 
              value={this.state.description} 
              onChange={this.handleChange}
              type="text"
              name="description" placeholder="Description" 
            />
            <input 
              value={this.state.category}
              onChange={this.handleChange}
              type="text"
              name="category" placeholder="Category" 
            />
            <input
              value={this.state.amount}
              onChange={this.handleChange}
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
