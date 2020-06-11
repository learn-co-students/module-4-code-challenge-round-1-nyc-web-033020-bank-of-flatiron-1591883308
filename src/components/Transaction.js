import React from "react";

const Transaction = (props) => {

  return (
    <tr>
      <td>{props.txn.date}</td>
      <td>{props.txn.description}</td>
      <td>{props.txn.category}</td>
      <td>{props.txn.amount}</td>
      <td onClick={props.handleDelete}>❌</td>
    </tr>
  );
};

export default Transaction;
