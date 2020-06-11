import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {




  render() {
    const {transactions, handleSubmit, handleSearch, handleDelete} = this.props
    return (
      <div>
        <Search handleSearch={handleSearch} />
        <AddTransactionForm handleSubmit={handleSubmit} />
        <TransactionsList transactions={transactions}  handleDelete={handleDelete}/>
      </div>
    );
  }
}

export default AccountContainer;
