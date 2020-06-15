import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    allTransactions: [],
    search: '',
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        allTransactions: data
      })
    })
  }

  handleForm = (e) => {
    // console.log(e)
    e.preventDefault()
    const newTransaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount: this.state.amount
    }

    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        allTransactions: [...this.state.allTransactions, data]
      })
    })

    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
   
  }

  handleSearch = (e) => {
    // console.log(e)
    this.setState({
      search: e.target.value
    })
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSort = (e) => {
    if(e.target.value === 'sort by category'){
      this.setState({
        allTransactions: this.state.allTransactions.sort((a, b) => a.category.localeCompare(b.category))
      })
    }
  }

  handleDelete = (transaction) => {  //not too sure about this
    fetch(`http://localhost:6001/transactions/${transaction.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.setState({
      allTransactions: this.state.allTransactions.filter(deleteTrans => deleteTrans.id !== transaction.id)
    }))
  }
 //works
  render() {
    const searchTransactions = this.state.allTransactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) )

    return (
      <div>
        <Search handleSearch={this.handleSearch} search={this.state.search}/>
        <AddTransactionForm handleForm={this.handleForm} handleSort={this.handleSort}
          date={this.state.date} description={this.state.description} category={this.state.category} amount={this.state.amount}
          handleInputChange={this.handleInputChange}
        />
        <TransactionsList transactions={searchTransactions} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
