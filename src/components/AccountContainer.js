import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions : [],
    searchTerm: '',
    sortedTrans: []
  }

  componentDidMount () {
    fetch('http://localhost:6001/transactions')
    .then(res=> res.json())
    .then(transactions => this.setState({transactions}))
  }

  searchHandler = (e) => this.setState({searchTerm: e.target.value})

  addNew = (newTrans) => {
    this.setState({transactions: [...this.state.transactions, newTrans]})
  }

  deleteTrans =(e, id) => {
    let updatedTrans = this.state.transactions.filter(trans=> trans.id !==id )
    fetch(`http://localhost:6001/transactions/${id}`,{
      method: "DELETE"
    })
    this.setState({transactions: updatedTrans})
  }

  // sortHandeler = (type) => {
  //   console.log("click")
  // }

  render() {

    return (
      <div>
        
        <Search  searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <AddTransactionForm addNew={this.addNew} sortHandeler={this.sortHandeler}/>
        <TransactionsList transactions={this.state.transactions} deleteTrans={this.deleteTrans} searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default AccountContainer;
