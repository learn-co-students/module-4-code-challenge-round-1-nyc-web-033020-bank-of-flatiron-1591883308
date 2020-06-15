import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

//THIS IS THE RETAKE

class AccountContainer extends Component {

  state = {
    trans: [],
    tranInForm: {
      
    }
  }

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(transData => {
      this.setState({ trans: transData })
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList trans={this.state.trans} />
      </div>
    );
  }
}

export default AccountContainer;
