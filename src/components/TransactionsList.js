import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  return (
    <div>
  <button className="ui button" onClick={props.handleSortButton}>Sort By: {props.sortView.charAt(0).toUpperCase() + props.sortView.slice(1)}</button>
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
          <th>
            <h3 className="ui center aligned header">Actions</h3>
          </th>
        </tr>
        {props.transactions.map( transact => 
        <Transaction 
          key ={transact.id} 
          handleDeleteButton={props.handleDeleteButton} 
          {...transact}
        />)}
      </tbody>
    </table>
    </div>
  );
};

export default TransactionsList;
