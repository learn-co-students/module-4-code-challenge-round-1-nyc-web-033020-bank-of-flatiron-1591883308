import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const API = "http://localhost:6001/transactions"

class AccountContainer extends Component {

  state = {
    transactions : [],
    searchTerm: '',
    date: '',
    description: '',
    category: '',
    amount: 0,
    sortView: 'date'
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(dbTransact => this.setState({transactions:dbTransact}))
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>console.log(this.state))
  }

  submitTransaction = (e) => {
    e.preventDefault()
    fetch(API,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(resp => resp.json())
    .then(newTransact => this.setState(prevState =>({
      transactions: [...prevState.transactions, newTransact]
    })))
  }

  // Advanced Deliverables
  handleSortButton = () =>{
    switch(this.state.sortView){
      case 'date':
        this.setState({sortView:'description'})
        console.log(this.state.sortView)
        break;
      case 'description':
        this.setState({sortView:'category'})
        console.log(this.state.sortView)
        break;
      case 'category':
        this.setState({sortView:'date'})
        console.log(this.state.sortView)
        break;
      default:
        this.setState({sortView:'date'})
    }
  }

  handleDeleteButton = (transactId) =>{
    console.log(transactId)
    fetch(`${API}/${transactId}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json",
                Accept: "application/json"
    }
    })
    .then(resp => resp.json())
    .then(delTr => {
      console.log(delTr)
      this.setState(prevState =>({
        transactions: [...prevState.transactions.filter(transaction => transaction.id !== transactId)]
      })
      )
    })
  }

  // Alternative search pattern I considered where form must be submitted. Decided the state based render looked cooler.
  // handleSearchSubmit = () =>{
  //   this.state.transactions.filter(transaction => transaction.includes(this.state.searchTerm))
  // }

  render() {
    const filteredTransactions = this.state.transactions.filter(
      transaction => transaction.description.includes(this.state.searchTerm))

      if(this.state.sortView==="description"){
        filteredTransactions.sort((a,b) => (a.description > b.description) ? 1 : -1)
      } else if(this.state.sortView==="category"){
        filteredTransactions.sort((a,b) => (a.category > b.category) ? 1 : -1)
      } else if(this.state.sortView==="date"){
        filteredTransactions.sort((a,b) => (a.date> b.date) ? -1 : 1)
      }

    return (
      
      <div>
        <Search 
        searchTerm ={this.state.searchTerm} 
        handleChange={this.handleChange}
        handleSearchSubmit={this.handleSearchSubmit}
        />
        <AddTransactionForm 
        addTransaction={this.submitTransaction} 
        handleChange={this.handleChange}
        newTDate={this.state.newTDate}/>
        <TransactionsList 
        transactions={filteredTransactions}
        sortView={this.state.sortView}
        handleSortButton={this.handleSortButton}
        handleDeleteButton={this.handleDeleteButton}
        />
      </div>
    );
  }
}

export default AccountContainer;
