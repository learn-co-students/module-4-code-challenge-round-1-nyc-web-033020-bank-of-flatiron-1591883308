import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  const {transactions, searchTerm} = props
  console.log('hiiii!!',props )

  let filteredTransactions = transactions.filter(trans=> trans.description.toLowerCase().includes(searchTerm.toLowerCase()))
    let wantedTransactions = []
    filteredTransactions? wantedTransactions = filteredTransactions : wantedTransactions = [transactions]

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {wantedTransactions.map(transaction=> <Transaction {...transaction} key={transaction.id}/>)}
      </tbody>
    </table>
  );
};

export default TransactionsList;

