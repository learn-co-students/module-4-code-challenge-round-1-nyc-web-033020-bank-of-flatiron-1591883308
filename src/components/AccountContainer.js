import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import Sort from './Sort';
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    txns: [],
    search: '',
    sort: '',
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

  submitSort = (s) => {
    this.setState({sort: s})
  }

  renderTransactions = () => {
    let txns = [...this.state.txns]
    txns = this.filterTransactions(txns)
    txns = this.sortTransactions(txns)
    return txns
  }

  filterTransactions = (txns) => {
    return txns.filter(txn => txn.description.toLowerCase().includes(this.state.search.toLowerCase()))
  }

  sortTransactions = (txns) => {
    if (this.state.sort) {
      return txns.sort((a,b) => a[this.state.sort].localeCompare(b[this.state.sort]))
    }
    return txns
  }

  handleDelete = (txn) => {
    fetch(API + '/' + txn.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(() => {
      this.setState(prevState => {
        let txns = [...prevState.txns]
        const i = txns.indexOf(txn)
        txns.splice(i, 1)
        return {txns: txns}
      })
    })
  }

  render() {
    return (
      <div>
        <Search searchValue={this.state.search} handleChange={this.handleSearchChange} />
        <AddTransactionForm submitForm={this.submitForm}/>
        <Sort submitSort={this.submitSort}/>
        <TransactionsList txns={this.renderTransactions()} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
