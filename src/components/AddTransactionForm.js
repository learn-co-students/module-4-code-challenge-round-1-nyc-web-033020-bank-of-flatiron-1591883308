import React, { Component } from "react";

const TRANS_URL = 'http://localhost:6001/transactions'
const headers = {'Content-Type': 'application/json', Accept: 'application/json'}

class AddTransactionForm extends Component {

  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleClick = () => {
    fetch(TRANS_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then(transObj => this.props.addTransaction(transObj))
  };
  
  render() {

    const {date, description, category, amount} = this.state
    console.log(this.state)
    return (
      <div className="ui segment">
        <form className="ui form">
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
              value={amount}
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
            />
          </div>
          <button 
            className="ui button" 
            type="submit"
            onClick={this.handleClick}
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
