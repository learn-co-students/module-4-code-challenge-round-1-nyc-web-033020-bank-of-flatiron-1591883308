import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions : [],
    searchTerm: '',
  }

  componentDidMount () {
    fetch('http://localhost:6001/transactions')
    .then(res=> res.json())
    .then(transactions => this.setState({transactions}))
  }

  searchHandler = (e) => this.setState({searchTerm: e.target.value})


  addNew = (newTrans) => {
    this.setState({transactions: [...this.state.transactions, newTrans]})
  }
  render() {
    // console.log(this.state.wantedTransactions)
    return (
      <div>
        <Search  searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm addNew={this.addNew}/>
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default AccountContainer;
