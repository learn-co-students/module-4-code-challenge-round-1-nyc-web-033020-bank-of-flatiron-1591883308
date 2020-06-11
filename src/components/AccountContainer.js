import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: ""
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions: data}))
  }

  handleSearch = (e) => {
    this.setState({search: e.target.value})
  }

  addNewTransaction = (transaction) => 
    this.setState({transactions: [...this.state.transactions, transaction]})

  render() {
    console.log(this.state.transactions)
    const searchTransactions = this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.search.toLowerCase()))  ///to lower case 
    return (
      <div>
        <Search handleSearch = {this.handleSearch} />
        <AddTransactionForm addNewTransaction = {this.addNewTransaction}/>
        <TransactionsList transactions = {searchTransactions} />
      </div>
    );
  }
}

export default AccountContainer;


