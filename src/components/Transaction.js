import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
      <td><button style={{verticalAlign: "middle"}} onClick={() => props.onClick(props.id)}>DELETE</button></td>
    </tr>
  );
};

export default Transaction;
