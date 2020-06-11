import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Buttons from './Buttons'


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


  handleDelete = (id) => {
   this.setState({ transations: this.state.transations.filter(trans => trans.id !== id )})
   fetch(url + '/' + id, {
     method: 'DELETE',
     headers: {
      'content-type': 'application/json',
       accept: 'application/json'
     }
   })
  }

  handleButton = (event) => {
    let newArray = []
    if (event.target.name === 'category'){
      newArray = this.state.transations.sort((a,b)=> a.category > b.category ? 1 : -1 )
    } else if (event.target.name === 'description'){
      newArray = this.state.transations.sort((a,b)=> a.description > b.description ? 1 : -1 )
    } else if (event.target.name === 'amount'){
      newArray = this.state.transations.sort((a,b)=> a.amount < b.amount ? 1 : -1 )
    }
    this.setState({ transations: newArray })
  }

  render() {
    let transactionsDisplay = this.state.transations.filter(trans => trans.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search search={this.state.search} handleOnChange={this.handleOnChange} button={this.state.button}/>
        <AddTransactionForm handleSubmit={this.handleSubmit}  handleOnChange={this.handleOnChange} date={this.state.date} description={this.state.description} category={this.state.category} amount={this.state.amount}/>
        <Buttons handleOnChange={this.handleButton} button={this.state.button}/> 
        <TransactionsList transactionsDisplay={transactionsDisplay} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
