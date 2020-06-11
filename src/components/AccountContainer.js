import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ''
  }

  fetchData = () => {
    fetch(`http://localhost:6001/transactions`)
      .then(r => r.json())
      .then(transactions => {
        this.setState({transactions})
      })
  }

  componentDidMount(){
    this.fetchData()
  }
  
  handleSearch = (letter) =>{
    this.setState({search: letter})
  }

  handleDelete = (transactionId) => {
    const options = {
      method: 'DELETE'
    }

    fetch(`http://localhost:6001/transactions/${transactionId}`, options)
    .then(r => r.json())
    .then(this.fetchData)
  }
  

  render() {
    const searchTransactions = this.state.transactions.filter(transaction => transaction.description.includes(this.state.search))
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
        />
        <AddTransactionForm 
          reRender={this.fetchData} 
        />
        <TransactionsList 
          transactions={searchTransactions}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default AccountContainer;
