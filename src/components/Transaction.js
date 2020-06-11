import React from "react";

const Transaction = (props) => {
  const handleClick = (evt) => {
    props.deleteTransaction(props.transaction.id)
  }
  const {date, description, category, amount } = props.transaction
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <span onClick={handleClick}> X </span>
    </tr>
      
  );
};

export default Transaction;
