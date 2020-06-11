import React, { Component } from "react";

class AddTransactionForm extends Component {


  render() {

    const { date, description, category, amount, onChange, handleSubmit } = this.props
    // const { transForm, onChange } = this.props


    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date"  name="date" onChange={onChange} />
            <input type="text"  name="description" placeholder="Description" onChange={onChange} />
            <input type="text"  name="category" placeholder="Category"  onChange={onChange} />
            <input
              type="number"
              // value='amount'
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={onChange}
            />
          </div>
          <button className="ui button" type="submit" onSubmit={handleSubmit} >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;

{/* <input type="date" value='yyyy-MM-dd' name="date" onChange={handleChangeDate} /> */}


// return (
//   <div className="ui segment">
//     <form className="ui form">
//       <div className="inline fields">
//         <input type="date" value='date' name="date" onChange={(e) => onChange(date)} />
//         <input type="text" value='description' name="description" placeholder="Description" onChange={() => onChange(description)} />
//         <input type="text" value='category' name="category" placeholder="Category"  onChange={() => onChange(category)} />
//         <input
//           type="number"
//           value='amount'
//           name="amount"
//           placeholder="Amount"
//           step="0.01"
//           onChange={() => onChange(amount)}
//         />
//       </div>
//       <button className="ui button" type="submit">
//         Add Transaction
//       </button>
//     </form>
//   </div>
// );
// }
// }