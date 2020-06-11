import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseUrl = `http://localhost:6002/transactions`

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: 'Searching!'
  }

  addTransaction = (transactionObj) => {
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      }, 
      body: JSON.stringify(transactionObj)
    })
    .then(resp => resp.json())
    .then(newTransaction => {
      let updatedTransactionsList = [...this.state.transactions, newTransaction]
      this.setState({
        transactions: updatedTransactionsList
      })
    })
  }

  componentDidMount(){
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  handleSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  render() {
    console.log(this.state.searchTerm)
    return (
      <div>
        <Search 
          searchTerm={this.state.searchTerm} 
          handleSearch={this.handleSearchTerm}
        />
        <AddTransactionForm 
          transactionInfo={this.state.transactionInfo} 
          addTransaction={this.addTransaction}
        />
        <TransactionsList 
          transactions={this.state.transactions} 
        />
      </div>
    );
  }
}

export default AccountContainer;
