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

  render() {

    return (
      <div>
        <Search />
        <AddTransactionForm onChange={this.onChange} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
