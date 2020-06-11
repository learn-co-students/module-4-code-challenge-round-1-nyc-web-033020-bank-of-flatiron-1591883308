import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";


const url = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transations: [],
      date: '',
      description: '',
      category: '',
      amount: '',
      search: ''
  }

  componentDidMount(){
  fetch(url).then(res => res.json()).then(transations => this.setState({ transations }))
  }

  handleOnChange = (event) =>{
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    let transactionsDisplay = this.state.transations.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search search={this.state.search} handleOnChange={this.handleOnChange}/>
        <AddTransactionForm  handleOnChange={this.handleOnChange} date={this.state.date} description={this.state.description} category={this.state.category} amount={this.state.amount}/>
        <TransactionsList transactionsDisplay={transactionsDisplay} />
      </div>
    );
  }
}

export default AccountContainer;
