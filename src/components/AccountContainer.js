import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    txns: [],
    search: '',
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(txns => this.setState({txns: txns}))
  }

  submitForm = (txn) => {
    return fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(txn)
    }).then(res => res.json())
      .then(txn => {
        this.setState(prevState => ({txns: [...prevState.txns, txn]}))
      })
  }

  handleSearchChange = (event) => {
    this.setState({search: event.target.value})
  }

  filterTransactions = () => {
    return [...this.state.txns].filter(txn => txn.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  render() {
    return (
      <div>
        <Search searchValue={this.state.search} handleChange={this.handleSearchChange} />
        <AddTransactionForm submitForm={this.submitForm}/>
        <TransactionsList txns={this.filterTransactions()}/>
      </div>
    );
  }
}

export default AccountContainer;
