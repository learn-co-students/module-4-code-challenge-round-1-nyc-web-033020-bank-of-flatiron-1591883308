import React from "react";

const Transaction = (props) => {
  const { date, description, category, amount } = props.transaction;
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td onClick={() => props.deleteTransaction(props.transaction)}>
        {amount}
      </td>
    </tr>
  );
};

export default Transaction;
