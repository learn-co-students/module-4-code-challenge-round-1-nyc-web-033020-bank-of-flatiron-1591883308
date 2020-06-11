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

  handleSubmit = (e) => {
    e.preventDefault()
    const newDate = this.state.date
    const newDescription = this.state.description
    const newCategory = this.state.category
    const newAmount = this.state.amount
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json'
      }, body: JSON.stringify({
        date: newDate,
        description: newDescription,
        category: newCategory,
        amount: newAmount
      })
    }).then(res => res.json()).then(newTransation => this.setState({ transations: [...this.state.transations, newTransation]}))
    this.setState({
      date: '',
      description: '',
      category: '',
      amount: ''
    })
  }

  render() {
    let transactionsDisplay = this.state.transations.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search search={this.state.search} handleOnChange={this.handleOnChange}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}  handleOnChange={this.handleOnChange} date={this.state.date} description={this.state.description} category={this.state.category} amount={this.state.amount}/>
        <TransactionsList transactionsDisplay={transactionsDisplay} />
      </div>
    );
  }
}

export default AccountContainer;
