import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {




  render() {
    const {transactions, handleSubmit, searchFilter} = this.props
    return (
      <div>
        
        <Search searchFilter={searchFilter} />
        <AddTransactionForm handleSubmit={handleSubmit} />
        <TransactionsList transactions={transactions}  />
      </div>
    );
  }
}

export default AccountContainer;
