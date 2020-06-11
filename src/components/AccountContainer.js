import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {




  render() {
    const {transactions} = this.props
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={transactions} />
      </div>
    );
  }
}

export default AccountContainer;
