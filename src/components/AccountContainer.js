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
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        allTransactions: data
      })
    })
  }

  handlerSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handlerAddNewTransaction = (e) => {
    e.preventDefault()
    console.log('adding: ', e.target.date.value)
    console.log('adding: ', e.target.description.value)
    console.log('adding: ', e.target.category.value)
    console.log('adding: ', e.target.amount.value)
  }

  render() {
    const searchedTransactions = this.state.allTransactions.filter(transaction => 
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) )

    return (
      <div>
        <Search handlerSearch={this.handlerSearch}/>
        <AddTransactionForm handlerAddNewTransaction={this.handlerAddNewTransaction}/>
        <TransactionsList allTransactions={searchedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
