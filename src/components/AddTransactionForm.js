import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }
  
 

  


  render() {
    const { handleSubmit } = this.props
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => handleSubmit(e, this.state)}>
          <div className="inline fields">
            <input type="date" value={this.state.date} onChange={this.handleFormChange} name="date" />
            <input type="text" value={this.state.description} onChange={this.handleFormChange} name="description" placeholder="Description" />
            <input type="text" value={this.state.category} onChange={this.handleFormChange} name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleFormChange}
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

// "id": 1,
// "date": "2019-12-01",
// "description": "Paycheck from Bob's Burgers",
// "category": "Income",
// "amount": 1000