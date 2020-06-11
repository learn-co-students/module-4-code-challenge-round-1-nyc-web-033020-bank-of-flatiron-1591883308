import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
      <td onClick={() => props.handleDelete(props.id)}>Delete Transation</td>
    </tr>
  );
};

export default Transaction;
