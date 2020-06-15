import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    allTransactions: [],
    search: ''
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allTransactions: data
      })
    })
  }

  handleForm = (e) => {
    e.preventDefault()
    const newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }

    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        allTransactions: [...this.state.allTransactions, data]
      })
    })

    e.target.date.value = ''
    e.target.description.value = ''
    e.target.category.value = ''
    e.target.amount.value = ''
  }


 
  render() {
    const searchTransactions = this.state.allTransactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) )

    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
        <AddTransactionForm handleForm={this.handleForm}/>
        <TransactionsList transactions={searchTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
