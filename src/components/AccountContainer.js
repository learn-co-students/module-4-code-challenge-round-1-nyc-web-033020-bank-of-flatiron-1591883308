import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state ={
    transactions: []
  }

  componentWillMount() {
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
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
