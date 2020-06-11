import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state ={
    transactions: []
  }

  componentDidMount() {
    this.renderTransactionsList()
  }

  postTransaction = transaction => {
    // console.log(transaction)

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ 
        date: transaction.date,
        description: transaction.description,
        category: transaction.category,
        amount: transaction.amount
      })
    })
      .then(resp => resp.json())
      .then(transaction => console.log(transaction))
      .then(() => this.renderTransactionsList())
  }

  renderTransactionsList = () => {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(transactions => {
        this.setState({ transactions })
      })
  }

  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm addTransaction={this.postTransaction} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
