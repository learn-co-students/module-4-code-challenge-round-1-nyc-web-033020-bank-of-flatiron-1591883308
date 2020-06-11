import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const baseUrl = "http://localhost:6001";
const parseData = (res) => res.json();
const headers = {
  Action: "application/json",
  "Content-Type": "application/json",
};

class AccountContainer extends Component {
  state = {
    transactions: [],
    search: "",
  };

  componentDidMount() {
    fetch(baseUrl + "/transactions")
      .then(parseData)
      .then((transactions) => this.setState({ transactions }));
  }

  handleSubmit = (transaction) => {
    fetch(baseUrl + "/transactions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(transaction),
    })
      .then(parseData)
      .then((t) =>
        this.setState({ transactions: [t, ...this.state.transactions] })
      );
  };

  handleSearch = (event) => {
    const value = event.target.value;
    this.setState({ search: value });
  };

  render() {
    // console.log("transactions: ", this.state.transactions);
    return (
      <div>
        <Search search={this.state.search} handleSearch={this.handleSearch} />
        <AddTransactionForm handleSubmit={this.handleSubmit} />
        <TransactionsList
          transactions={this.state.transactions.filter((t) =>
            t.description.includes(this.state.search)
          )}
        />
      </div>
    );
  }
}

export default AccountContainer;
