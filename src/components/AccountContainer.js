import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const TRANS_URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: '',
    sortToggle: '',
  } 

  componentDidMount(){
    fetch(TRANS_URL)
      .then(resp => resp.json())
      .then(transactions => this.setState ({ transactions }))
  };

  handleSearch = (inputValue) => {
    this.setState({search: inputValue})
  };

  toggleSort = (e) => {
    this.setState({sortToggle: e.target.value})
  };

  handleSort = (transactions, sortType) => {
    if(sortType === 'category'){
      return transactions.sort((t1, t2) => (t1.category - t2.category))
    } else if (sortType === 'description'){
      return transactions.sort((t1, t2) => (t1.description - t2.description))
    }
  };

  addTransaction = (transObj) => {
    const newArray = [...this.state.transactions]
    newArray.push(transObj)
    this.setState({ transactions: newArray })
  };


  render() {
    console.log(this.state.sortToggle)

    const { transactions, search, sortToggle } = this.state 

    const filteredTransactions = transactions.filter(
      trans => trans.description.toLowerCase()
        .includes(search.toLowerCase())
    )
      

    // const sortedTransactions = filteredTransactions

    return (
      <div>
        <Search search={search} handleSearch={this.handleSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList 
          transactions={filteredTransactions} 
          sortToggle={sortToggle}
          toggleSort={this.toggleSort}
        />
      </div>
    );
  }
}

export default AccountContainer;
