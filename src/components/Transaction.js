import React from "react";

const Transaction = (props) => {

  // console.log(props)

  return (
    <tr>
      <td>{props.date}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  );
};

export default Transaction;


// "id": 3,
// "date": "2019-12-02",
// "description": "South by Southwest Quinoa Bowl at Fresh & Co",
// "category": "Food",
// "amount": -10.55