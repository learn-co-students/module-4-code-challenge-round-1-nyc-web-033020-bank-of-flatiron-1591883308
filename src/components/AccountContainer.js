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
    amount:'',
    search:''
  }

  componentDidMount(){
    fetch('http://localhost:6001/transactions')
    .then(res => res.json())
    .then(data => this.setState({transactions: data }))
  }

  searchTransaction = (event) => {
    this.setState({search: event.target.value})
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

  deleteTransaction = (id) => {
    let updatedTransactions = [...this.state.transactions]
    let newTransactions = updatedTransactions.filter(transaction => transaction.id !== id)
    console.log(newTransactions)
    this.setState({transaction: newTransactions}) /*why isnt this working, back end is correct */
    console.log('deleting..')
    fetch(`http://localhost:6001/transactions/${id}`, {
      method: "DELETE"
    })
   

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
  this.setState({date: '',
  description:'',
  category:'',
  amount:''})

    
}
  
  
  
  render() {
    const filteredTransactions = this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.search))
    return (
      <div>
        <Search search={this.state.search} searchTransaction={this.searchTransaction}/>
        <AddTransactionForm 
        submitTransaction={this.submitTransaction}
        createTransaction={this.createTransaction}
        date={this.state.date}
        description={this.state.description}
        category={this.state.category}
        amount={this.state.amount}
        />
        <TransactionsList transactions={filteredTransactions} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
