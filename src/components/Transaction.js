import React from "react";

const Transaction = (props) => {
  return (
    <tr>
      <td>{this.props.date}</td>
      <td>{this.props.description}</td>
      <td>{this.props.category}</td>
      <td>{this.props.amount}</td>
    </tr>
  );
};

export default Transaction;
