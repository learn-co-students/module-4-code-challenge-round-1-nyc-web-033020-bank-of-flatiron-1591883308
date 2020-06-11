import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  
  state = {
    transactions: [],
    date: '',
    description:'',
    category:'',
    amount:''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions: data }))
  }

  createTransaction = () => {

  }
  
  
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm 
        createTransaction={this.createTransaction}
        date={this.state.date}
        description={this.state.description}
        category={this.state.category}
        amount={this.state.amount}
        />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    );
  }
}

export default AccountContainer;
