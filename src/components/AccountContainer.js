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

  createTransaction = (event) => {
    if (event.target.name === 'date'){
      this.setState({date: event.target.value})
    } else if (event.target.name === 'description'){
      this.setState({description: event.target.value})
    } else if (event.target.name === 'category'){
      this.setState({category: event.target.value})
    } else if (event.target.name === 'amount'){
      this.setState({amount: event.target.value})
    }
  }

  submitTransaction = (event) => {
    event.preventDefault()
    console.log('submitting...')
    let newTransaction = {
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      amount:this.state.amount 
    }

    fetch('http://localhost:6001/transactions', {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "accept": "application/json"
    },
    body: JSON.stringify(newTransaction)
  })
  
  .then(res => res.json())
  .then(data => this.setState({transactions: [...this.state.transactions, data]}))

    
}
  
  
  
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm 
        submitTransaction={this.submitTransaction}
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
