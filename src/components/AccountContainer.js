import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions : [],
    searchTerm: '',
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(dbTransact => this.setState({transactions:dbTransact}))
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  submitTransaction = (e) => {
    e.preventDefault()
    fetch(API,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(resp => resp.json())
    .then(newTransact => this.setState(prevState =>({
      transactions: [...prevState.transactions, newTransact]
    })))
  }

  // Alternative search pattern I considered where form must be submitted. Decided the state based render looked cooler.
  // handleSearchSubmit = () =>{
  //   this.state.transactions.filter(transaction => transaction.includes(this.state.searchTerm))
  // }

  render() {
    const filteredTransactions = this.state.transactions.filter(
      transaction => transaction.description.includes(this.state.searchTerm))
    return (
      
      <div>
        <Search 
        searchTerm ={this.state.searchTerm} 
        handleChange={this.handleChange}
        handleSearchSubmit={this.handleSearchSubmit}
        />
        <AddTransactionForm 
        addTransaction={this.submitTransaction} 
        handleChange={this.handleChange}
        newTDate={this.state.newTDate}/>
        <TransactionsList transactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
