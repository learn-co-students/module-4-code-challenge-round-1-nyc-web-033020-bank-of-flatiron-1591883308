import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  fetchTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }


  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
