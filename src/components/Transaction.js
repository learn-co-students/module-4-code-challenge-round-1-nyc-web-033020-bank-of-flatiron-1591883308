import React from "react";

const Transaction = (props) => {
  const{id, date,description,category,amount,deleteTrans} = props
  // console.log(props)
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={(e)=>deleteTrans(e,id)}>delete</button></td>
    </tr>
  );
};

export default Transaction;
