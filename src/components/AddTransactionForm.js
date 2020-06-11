import React, { Component } from "react";

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = (evt) => {
    let {name, value} = evt.target
    this.setState({
      [name]:value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.addTransaction(this.state)
  }

  render() {
    const {date, description, category, amount } = this.state
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={date}
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              name="description" 
              value={description} 
              placeholder="Description" 
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              name="category" 
              value={category} 
              placeholder="Category" 
              onChange={this.handleChange} 
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={amount}
              step="0.01"
              onChange={this.handleChange} 
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
