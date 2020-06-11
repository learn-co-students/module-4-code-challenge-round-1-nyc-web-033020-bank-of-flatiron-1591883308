import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state ={
    transactions: [],
    search: ''
  }

  componentDidMount() {
    this.renderTransactionsList()
  }

  postTransaction = transaction => {
    // console.log(transaction)

    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ 
        date: transaction.date,
        description: transaction.description,
        category: transaction.category,
        amount: transaction.amount
      })
    })
      .then(resp => resp.json())
      .then(transaction => console.log(transaction))
      .then(() => this.renderTransactionsList())
      .then(() => {
        this.setState({
          search: ''
        })
      })
  }

  renderTransactionsList = () => {
    fetch('http://localhost:6001/transactions')
      .then(resp => resp.json())
      .then(transactions => {
        this.setState({ transactions })
      })
  }

  updateSearchState = search => {
    // console.log(search)
    this.setState({ search })
  }

  filterTransactions = () => {
    const search = this.state.search.toLowerCase()
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(search))
    return filteredTransactions
  }

  // For advanced deliverable... not working yet
  // sortedTransactions = transactions => {
  //   return [...transactions.category].sort((transA, transB) => transA.localeCompare(transB))
  // }

  render() {
    // console.log(this.state.search)
    return (
      <div>
        <Search search={this.updateSearchState} />
        <AddTransactionForm addTransaction={this.postTransaction} />
        <TransactionsList 
          transactions={this.filterTransactions()}

          //advanced diverable... not working
          // transactions={this.sortedTransactions(this.filterTransactions())}
        />

        {/* Advanced Deliverable */}
        {/* <button style={{marginTop: "3rem"}} onClick={this.sortedTransactions}>Sort categories A-Z</button> */}
      </div>
    );
  }
}

export default AccountContainer;
