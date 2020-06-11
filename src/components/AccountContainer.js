import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const TRANS_URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: []
  } 

  componentDidMount(){
    fetch(TRANS_URL)
      .then(resp => resp.json())
      .then(transactions => this.setState ({ transactions }))
  };

  render() {
    // console.log(this.state.transactions)

    const { transactions } = this.state 

    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
