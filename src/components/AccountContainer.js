import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: []
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

  render() {
    console.log(this.state.transactions)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
