import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions';

class AccountContainer extends Component {
  
  state = {
	transactions: []
  };

  fetchTransactions = () => {
	fetch(API)
	  .then( res => res.json() )
	  .then( transactions => this.setState({ transactions }))
  }

  componentDidMount(){
	this.fetchTransactions()
  };

  recordNewTransaction = data => {
	fetch(API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(data)
	})
	  .then( this.fetchTransactions )
  }


  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm 
		  newTransaction={this.recordNewTransaction}/>
        <TransactionsList 
          transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
