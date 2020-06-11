import React, { Component } from "react";

const state = {date: "", description: "", category: "", amount: ""}
class AddTransactionForm extends Component {
  state = state

  handleOnchange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/transactions", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(transaction => {this.props.addNewTransaction(transaction)
      })
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


