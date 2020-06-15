import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

//THIS IS THE RETAKE

class AccountContainer extends Component {

  state = {
    trans: [], 
      id: null,
      date: '',
      description: '',
      category: '',
      amount: ''
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transData => {
      this.setState({ trans: transData })
    })
  }

  addToTransactions = newTran => {
    this.setState({ trans: [
      ...this.state.trans, newTran
    ]})
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.persist()

    const newTransaction = {
      id: this.state.id,
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(...this.state.trans, newTransaction)
    })
      .then(res => res.json())
      .then(newTran => this.addToTransactions(newTran))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search />
        {/* <AddTransactionForm tranInForm={this.state.tranInForm} handleChange={this.handleChange} /> */}
        <AddTransactionForm 
        id={this.state.id} 
        date={this.state.date} 
        description={this.state.description} 
        category={this.state.category}
        amount={this.state.amount}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit} />

        <TransactionsList trans={this.state.trans} />
      </div>
    );
  }
}

export default AccountContainer;
