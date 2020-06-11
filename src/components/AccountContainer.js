import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: '',
    filter: ''
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }


  handleForm = (e) => {
    // console.log(e)
    const data = {
      "date": e.target.date.value,
      "description": e.target.description.value,
      "category": e.target.category.value,
      "amount": e.target.amount.value
    }

    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      })
      .then(newTransaction => {
        this.setState({
          transactions: [...this.state.transactions, newTransaction]
        })
      })
  }

  handleSearch = (e) => {
    // console.log(e)
    this.setState({
      search: e.target.value
    })
  }

  handleFilter = (e) => {
    console.log(e)
    if(e.target.value === 'description'){
      this.setState({
        description: ''
      })
    } else 
    this.setState({
      description: e.target.value.toLowerCase()
    })
  }

  handleSearchAndFilter = () => {
    this.handleSearch()
    this.handleFilter()
  }

  render() {
    const searchTransactions = this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase())
      ).filter(transaction => transaction.description.includes(this.state.filter))

    return (
      <div>
        <Search handleSearch={this.handleSearchAndFilter}/>
        <AddTransactionForm handleForm={this.handleForm}/>
        <TransactionsList transactions={this.state.transactions} searchTransactions={searchTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
