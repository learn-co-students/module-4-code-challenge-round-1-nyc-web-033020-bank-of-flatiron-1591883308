import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const BASE_API = 'http://localhost:6001/transactions'
class App extends Component {
  state = { 
    transactions: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch(BASE_API)
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions 
      })
    })
  }

  handleSubmit = (e, transactions) => {
    e.preventDefault()
    // console.log(transactions)
    fetch(BASE_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify( transactions )
    })
    .then( res => res.json())
    .then(newTransaction => {
      this.setState({
        transactions: [...this.state.transactions, newTransaction]
      })
    } )
  }

  handleSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleDelete = (id) => {
    const updatedTransactions = this.state.transactions.filter(transaction => transaction.id !== id)
    console.log(updatedTransactions)
    this.setState({
      transactions: updatedTransactions
    })
    fetch(`${BASE_API}/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
      }
    })
  }

  render() {
    console.log(this.state)
    const transactionsFilter = this.state.transactions.filter(transaction => transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))


    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={transactionsFilter} 
        handleSubmit={this.handleSubmit} 
        handleSearch={this.handleSearch}
        handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
