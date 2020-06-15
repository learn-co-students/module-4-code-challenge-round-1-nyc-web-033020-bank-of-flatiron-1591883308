import React, { Component } from "react";

class AddTransactionForm extends Component {

  render() {

    const { id, date, description, category, amount, handleChange, handleSubmit } = this.props 

    return (
      <div className="ui segment">
        <form className="ui form"onSubmit={handleSubmit} >
          <div className="inline fields">
            <input type="date" name="date" value={date} onChange={handleChange}/>
            <input type="text" name="description" placeholder="Description" value={description} onChange={handleChange}/>
            <input type="text" name="category" placeholder="Category" value={category} onChange={handleChange}/>
            <input type="number" name="amount" placeholder="Amount" step="0.01" value={amount} onChange={handleChange}/>
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
