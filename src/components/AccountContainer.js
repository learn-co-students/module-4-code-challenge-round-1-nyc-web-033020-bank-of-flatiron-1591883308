import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    txns: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(txns => this.setState({txns: txns}))
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList txns={this.state.txns}/>
      </div>
    );
  }
}

export default AccountContainer;
