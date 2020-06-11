import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchInput: ''
  }

  componentDidMount(){
    this.renderTransactions()
  }

  renderTransactions = () => {
    fetch(API)
    .then(res => res.json())
    .then(transactions => this.setState({ transactions }))
  }

  searchTransactions = e => {
    this.setState({
      searchInput: e.target.value
    })
    this.renderSearchedTransactions()
  }
  
  renderSearchedTransactions = () => {
    //make copy of transactions
    const transactions = [...this.state.transactions]
    //pull in searchInput
    const searchInput = this.state.searchInput
    //filter transacations copy by
    return transactions.filter(transaction => transaction.description.includes(searchInput))
  }

  render() {
    return (
      <div>
        <Search onChange={this.searchTransactions}/>
        <AddTransactionForm onSubmit={this.renderTransactions} />
        <TransactionsList transactions={this.renderSearchedTransactions()}/>
      </div>
    );
  }
}

export default AccountContainer;
