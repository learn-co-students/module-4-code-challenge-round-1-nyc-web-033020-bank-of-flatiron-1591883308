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

  onChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      transForm: {
        ...this.state.transForm, [name]:value
      }
    })
  }

  handleSubmit = () => {
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
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

  render() {

    // console.log(this.state)
    return (
      <div>
        <Search />
        <AddTransactionForm transForm={this.state.transForm} onChange={this.onChange} handleSubmit={this.handleSubmit} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
