import React, { Component } from "react";


class AddTransactionForm extends Component {
  state = {
    date: "",
    description: "",
    category: "",
    amount: ''
  }

  handleOnchange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  // amountToInteger = (amount) => {
  //   amount
  // }
  

  handleSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {date: this.state.date, description: this.state.description, category: this.state.category, amount: this.state.amount}
    fetch("http://localhost:6001/transactions", {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json())
      .then(transaction => console.log(transaction))
        // this.props.addNewTransaction(transaction)
      }
  }



  render() {
    console.log(this.state.amount, this.state.description, this.state.date, this.state.category)
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit = {this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value= {this.state.data} onChange = {this.handleOnchange}/>
            <input type="text" name="description" value= {this.state.description} onChange = {this.handleOnchange} placeholder="Description" />
            <input type="text" name="category" value= {this.state.category} onChange = {this.handleOnchange} placeholder="Category" />
            <input onChange = {this.handleOnchange}
              type="number"
              value = {this.state.amount}
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


