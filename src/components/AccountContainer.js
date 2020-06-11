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
    // console.log(e.target.value)

    this.setState({
      search: e.target.value
    })


  }

  // handleFilter = (e) => {
  //   // console.log(e)
  //   if(e.target.value === this.props.description){
  //     this.setState({
  //       filter: ''
  //     })
  //   } else 
  //   this.setState({
  //     filter: e.target.value.toLowerCase()
  //   })
  // }

  // handleSearchAndFilter = (e) => {
  //   this.handleSearch(e)
  //   this.handleFilter(e)
  // }

  render() {
    const searchTransactions = this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleSearch={this.handleSearch} handleFilter={this.handleFilter}/>
        <AddTransactionForm handleForm={this.handleForm}/>
        <TransactionsList transactions={this.state.transactions} searchTransactions={searchTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
