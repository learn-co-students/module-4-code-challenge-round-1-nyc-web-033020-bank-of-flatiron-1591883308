import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  state = {
    transactions: [],
  }

  componentDidMount(){
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        transactions: data
      })
    })
  }


  handleForm = (e) => {
    const data = {
      "date": e.target.date.value,
      "description": e.target.description.value,
      "category": e.target.category.value,
      "amount": e.target.amount.value
    }

    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      })
      .then(newTransaction => {
        this.setState({
          transactions: [...this.state.transactions, newTransaction]
        })
      })
  }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm handleForm={this.handleForm}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
