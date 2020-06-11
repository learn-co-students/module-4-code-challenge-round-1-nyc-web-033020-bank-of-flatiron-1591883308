import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const TRANS_URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: []
    search: ''
  } 

  componentDidMount(){
    fetch(TRANS_URL)
      .then(resp => resp.json())
      .then(transactions => this.setState ({ transactions }))
  };

  addTransaction = (transObj) => {
    const newArray = [...this.state.transactions]
    newArray.push(transObj)
    this.setState({ transactions: newArray })
  };

  render() {
    // console.log(this.state.transactions)

    const { transactions, search } = this.state 

    return (
      <div>
        <Search search={search}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
