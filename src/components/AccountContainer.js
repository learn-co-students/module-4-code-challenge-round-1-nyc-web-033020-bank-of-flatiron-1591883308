import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleSearch={this.props.handleSearch} searchBar={this.props.searchBar}/>
        <AddTransactionForm handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
