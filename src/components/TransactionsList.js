import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  const { transactions, sortToggle, toggleSort } = props

  return (
    <>  
      <form>
        <h4>Sort By:</h4>
        <div>
          <input
            type="radio"
            name="sort-by"
            value="category"
            checked={sortToggle === "category"}
            onChange={toggleSort}
          />
          Category
          <input
            type="radio"
            name="sort-by"
            value="description"
            checked={sortToggle === "description"}
            onChange={toggleSort}
          />
          Description
        </div>
        {/* <div className="form-check">
          <label>
                <input
                  type="radio"
                  name="sort-by"
                  value="sort-by"
                  checked={true}
                />
                Sort By:
          </label>
        </div>
        <div className="form-check">
          <label>
                <input
                  type="radio"
                  name="sort-by"
                  value="category"
                />
                Category
          </label>
        </div>
        <div className="form-check">
          <label>
                <input
                  type="radio"
                  name="sort-by"
                  value="description"
                />
                Description
          </label>
        </div> */}
      </form>

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
          </tr>
          {/* render Transactions here */}
          {transactions.map(transaction => <Transaction key={transaction.id} {...transaction}/>)}
        </tbody>
      </table>
    </> 
  );
};

export default TransactionsList;
