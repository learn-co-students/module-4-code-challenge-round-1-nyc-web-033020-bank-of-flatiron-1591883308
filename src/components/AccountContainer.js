import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import RadioButtons from "./RadioButtons"

//complete 

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: '',
    radioValue: ''
  }

  fetchData = () => {
    fetch(`http://localhost:6001/transactions`)
      .then(r => r.json())
      .then(transactions => {
        this.setState({transactions})
      })
  }

  componentDidMount(){
    this.fetchData()
  }
  
  handleSearch = (letter) =>{
    this.setState({search: letter})
  }

  handleDelete = (transactionId) => {
    const options = {
      method: 'DELETE'
    }

    fetch(`http://localhost:6001/transactions/${transactionId}`, options)
    .then(r => r.json())
    .then(this.fetchData)
  }

  handleRadioButtons = (radioValue) => {
    this.setState({radioValue})

    if (radioValue === "Category"){
      this.state.transactions.sort((a,b) => a.category > b.category ? 1 : -1)
    } else if (radioValue === "Description"){
      this.state.transactions.sort((a,b) => a.description > b.description ? 1 : -1)
    }
  }
  

  render() {
    const searchTransactions = this.state.transactions.filter(transaction => transaction.description.includes(this.state.search))
    return (
      <div>
        <RadioButtons
          handleRadioButtons={this.handleRadioButtons}
          radioValue={this.state.radioValue}
        />
        <Search
          handleSearch={this.handleSearch}
        />
        <AddTransactionForm 
          reRender={this.fetchData} 
        />
        <TransactionsList 
          transactions={searchTransactions}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default AccountContainer;
