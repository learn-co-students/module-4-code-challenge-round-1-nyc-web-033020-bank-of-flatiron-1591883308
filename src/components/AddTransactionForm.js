import React, { Component } from "react";

const API = 'http://localhost:6001/transactions'

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: null
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  postTransaction = () => {
    const post = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch(API, post)
    .then(res => res.json())
    .then(data => this.props.onSubmit(data))
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: null
  
    })
  }

  submitHandler = e => {
    e.preventDefault()
    // e.persist() /* hold in case you need */
    this.postTransaction()
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.onChangeHandler} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.onChangeHandler} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.onChangeHandler} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} 
              onChange={this.onChangeHandler} 
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
