import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
import TransactionsList from "./TransactionsList";

class App extends Component {
  //set needed values in state
  state = {
    transactionList: [],
    transaction: {
      date: "",
      description: "",
      category: "",
      amount: 0
    }
  }
  //invoke fetch 
  componentDidMount(){
    this.fetchTransactions()
  }
//fetch transaction data
  fetchTransactions = () => {
    fetch('http://localhost:6001/transactions')
    .then(resp => resp.json())
    .then(transactionList => this.setState({transactionList}))
  }
  
  //create a function to map over transactions & populate transaction list
  populateTransactionList = () => {
    const currentTransactions = this.state.transactionList
    currentTransactions.map(trans => {

    })
  }





  render() {
    console.log(this.state)
    const { transactionList } = this.state
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer />
        <TransactionsList 
          transactionList={transactionList} />
      </div>
    );
  }
}

export default App;
