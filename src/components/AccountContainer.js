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

  handleTransactionForm = (e) =>{
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

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm 
        addTransaction={this.submitTransaction} 
        handleTransactionForm={this.handleTransactionForm}
        newTDate={this.state.newTDate}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
