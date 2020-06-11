import React, { Component } from "react";

class AddTransactionForm extends Component {

  handleChange = (evt) => {
    this.props.handleForm(this.props)
    
  }

  render() {
    
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={this.props.transactionForm.date}
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              name="description" 
              value={this.props.transactionForm.description} 
              placeholder="Description" 
              onChange={this.handleChange} 
            />
            <input 
              type="text" 
              name="category" 
              value={this.props.transactionForm.category} 
              placeholder="Category" 
              onChange={this.handleChange} 
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={this.props.transactionForm.amount}
              step="0.01"
              onChange={this.handleChange} 
            />
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
