import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const TRANS_URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ''
  } 

  componentDidMount(){
    fetch(TRANS_URL)
      .then(resp => resp.json())
      .then(transactions => this.setState ({ transactions }))
  };

  handleSearch = (inputValue) => {
    this.setState({search: inputValue})
  };

  addTransaction = (transObj) => {
    const newArray = [...this.state.transactions]
    newArray.push(transObj)
    this.setState({ transactions: newArray })
  };

  render() {
    console.log(this.state.search)

    const { transactions, search } = this.state 

    const filteredTransactions = transactions.filter(
      trans => trans.description.toLowerCase()
        .includes(search.toLowerCase())
    )

    return (
      <div>
        <Search search={search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
