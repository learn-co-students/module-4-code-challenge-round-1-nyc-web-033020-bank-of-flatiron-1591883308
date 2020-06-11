import React from "react";

const Transaction = (props) => {
  const {date, description, category, amount} = props
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button className="ui button" onClick={ () => props.handleDeleteButton(props.id)}>Delete</button></td>
    </tr>
  );
};

export default Transaction;
