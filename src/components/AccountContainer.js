import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseUrl = `http://localhost:6002/transactions`

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ''
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

  componentDidUpdate(){
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
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

  deleteTransaction = (transactionId) => {
    fetch(`${baseUrl}/${transactionId}`,{
      method: "DELETE"
    }).then(resp => resp.json())
    .then(deletedTransaction => {
      let updatedTransactionsList = this.state.transactions.filter(transaction => {
        return transaction.id !== transactionId
      }) 
      this.setState({
        transaction: updatedTransactionsList
      }) 
    })
  }

  handleSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  filteredTransactions = () => {
    let filteredTransactions = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredTransactions
  }

  render() {

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
          transactions={this.filteredTransactions()} 
          deleteTransaction={this.deleteTransaction}
        />
      </div>
    );
  }
}

export default AccountContainer;
