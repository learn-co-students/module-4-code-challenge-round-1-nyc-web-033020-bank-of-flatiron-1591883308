import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const BASE_API = 'http://localhost:6001/transactions'
class App extends Component {
  state = { 
    transactions: [],

  }

  componentDidMount() {
    fetch(BASE_API)
    .then(res => res.json())
    .then(transactions => {
      this.setState({
        transactions 
      })
    })
  }

  handleSubmit = (e, transactions) => {
    e.preventDefault()
    // console.log(transactions)
    fetch(BASE_API, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify( transactions )
    })
    .then( res => res.json())
    .then(newTransaction => {
      this.setState({
        transactions: [...this.state.transactions, newTransaction]
      })
    } )


  }

  render() {
    // console.log(this.state)
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
