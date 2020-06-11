import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = 'http://localhost:6001/transactions';

class AccountContainer extends Component {
  
  state = {
	transactions: [],
	filter: ''
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
  	// Called with a hash representing a new transaction
  	// Renders pesimistically, e.g., POST then refetch
	fetch(API, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"Accept": "application/json"
		},
		body: JSON.stringify(data)
	}).then( this.fetchTransactions )
  }

  // This is what will actually be passed to the transactions list for rendering
  filteredTransactions = () => {
  	const { transactions, filter } = this.state

	return transactions.filter(transaction => {
		return transaction.description.toLowerCase().includes(filter.toLowerCase()) ||
			transaction.category.toLowerCase().includes(filter.toLowerCase())
	})
  }
  
  // Will take an onChange event and set state's filter to the value of that field
  handleSearch = e => {
	const filter = e.target.value;
	this.setState({ filter })
  }


  render() {
    return (
      <div>
        <Search 
			filter={this.state.filter}
			handleSearch={this.handleSearch} />
        <AddTransactionForm 
		  newTransaction={this.recordNewTransaction} />
        <TransactionsList 
          transactions={this.filteredTransactions()} />
          sort={this.handleSort}
      </div>
    );
  }
}

export default AccountContainer;
