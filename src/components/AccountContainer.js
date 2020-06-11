import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    transForm: {
      date: '',
      description: '',
      category: '',
      amount: ''
    }
  }

  // date: 'yyyy-MM-dd'

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transactionData => 
      this.setState({ transactions: transactionData})
    )
  }

  // onChange = event => {
  //   const target = event.target
  //   const value = target.value
  //   const name = target.name

  //   this.setState({
  //     transForm: {
  //       ...this.state.transForm, [name]:value
  //     }
  //   })
  // }

  handleDate = event => {
    const date = event.target.value 
    this.setState((prevState) => {
      return {transForm: {
        ...prevState.transForm, date
      }}
    })
  }

  handleDesc = event => {
    const desc = event.target.value 
    this.setState((prevState) => {
      return {transForm: {
        ...prevState.transForm, desc
      }}
    })
  }

  handleCat = event => {
    const cat = event.target.value 
    this.setState((prevState) => {
      return {transForm: {
        ...prevState.transForm, cat
      }}
    })
  }

  handleAmount = event => {
    const amount = event.target.value 
    this.setState((prevState) => {
      return {transForm: {
        ...prevState.transForm, amount
      }}
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    event.persist()

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({...this.state.transForm})
    })
      .then(res => res.json())
      .then(newTrans => 
        this.setState({
          transForm: newTrans
        }))
  }

  // handleChangeDate = event => {
  //   this.setState({
  //     transForm: {
  //       ...this.state.transForm, date: event.target.value
  //     }
  //   })
  // }

    addToTransactions = newFormTrans => {
      this.setState({
        transactions: [
          ...this.state.transactions, newFormTrans
        ]
      })
    }

  render() {

    // console.log(this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm 
        transForm={this.state.transForm}
        // {...this.state.transForm}
        handleDate={this.handleDate} 
        handleDesc={this.handleDesc} 
        handleSubmit={this.handleSubmit}
        handleCat={this.handleCat} 
        handleAmount={this.handleAmount}
        addToTransactions={this.addToTransactions}
        />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;

