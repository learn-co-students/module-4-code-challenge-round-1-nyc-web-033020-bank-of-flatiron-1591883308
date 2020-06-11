import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    allTransactions: [],
    search: ''
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(resp => resp.json())
    .then(data =>{
      this.setState({
        allTransactions: data
      })
    })
  }

  handlerSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  handlerAddNewTransaction = (e) => {
    e.preventDefault()
    const newTransaction = {
      date: e.target.date.value,
      description: e.target.description.value,
      category: e.target.category.value,
      amount: e.target.amount.value
    }

    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allTransactions: [...this.state.allTransactions, data]
      })
    })

    //cleaning up the form
    e.target.date.value = ''
    e.target.description.value = ''
    e.target.category.value = ''
    e.target.amount.value = ''
  }

  handlerDeleteTransaction = (transaction) => {
    fetch(`http://localhost:6001/transactions/${transaction.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this.setState({
      allTransactions: this.state.allTransactions.filter(transac => transac.id !== transaction.id)
    }))
  }

  handlerSort = (e) => {
    if(e.target.value === "by category"){
      this.setState({
        allTransactions: this.state.allTransactions.sort((a,b) => a.category.localeCompare(b.category))
      })
    } else{
      this.setState({
        allTransactions: this.state.allTransactions.sort((a,b) => a.description.localeCompare(b.description))
      })
    }
  }

  render() {
    const searchedTransactions = this.state.allTransactions.filter(transaction => 
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) )

    return (
      <div>
        <Search handlerSearch={this.handlerSearch}/>
        <AddTransactionForm handlerAddNewTransaction={this.handlerAddNewTransaction}
          handlerSort={this.handlerSort}/>
        <TransactionsList allTransactions={searchedTransactions} 
          handlerDeleteTransaction={this.handlerDeleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
