import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseUrl = `http://localhost:6002/transactions`

class AccountContainer extends Component {

  state = {
    transactions: [],
    transactionInfo: {
      date: "2020-06-10",
      description: 'testing',
      category: 'Food',
      amount: '999'
    }
  }

  handleForm = (transactionInfo) => {
    this.setState({
     
    })
  }

  componentDidMount(){
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm 
          transactionInfo={this.state.transactionInfo} 
          handleForm={this.handleForm}
        />
        <TransactionsList 
          transactions={this.state.transactions} 
        />
      </div>
    );
  }
}

export default AccountContainer;
