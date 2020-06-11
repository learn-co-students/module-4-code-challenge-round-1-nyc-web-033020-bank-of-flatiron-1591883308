import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state={
    transactions:[],
    newTransaction:{
      date:'',
      description:'',
      category:'',
      amount:0
    },
    searchBar:''
  }

  url = 'http://localhost:6001/transactions'
  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(transData => this.setState({transactions: transData}))
  };

  handleChange=(event)=>{
    this.setState({newTransaction: {[event.target.name]: event.target.value}})
  }

  handleSubmit=(event)=>{
    event.persist()
    event.preventDefault()
    console.log(this.state.newTransaction)
    fetch(this.url, {
      method: 'POST',
      headers: {'content-type':'application/json',
    'accept':'application/json'},
    body: JSON.stringify({date: this.state.newTransaction.date,
      description: this.state.newTransaction.description,
      category: this.state.newTrnsaction.category,
      amount: this.state.newTransaction.amount
    })
    })
    fetch(this.url)
    .then(r=>r.json())
    .then(transData => this.setState({transactions: transData}))
  }

  handleSearch=(event)=>{
    this.setState({searchBar: event.target.value})
  }
  filteredTransactions=()=>{
    return (this.state.transactions.filter(transaction=>transaction.description.includes(this.state.searchBar)))
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.filteredTransactions()} handleChange={this.handleChange} handleSearch={this.handleSearch} searchBar={this.state.searchBar} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
