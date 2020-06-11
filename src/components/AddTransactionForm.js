import React, { Component } from "react";

class AddTransactionForm extends Component {
  
  state = {
  	// Start with a default date of today, formatted to yyyy-mm-dd
	date: new Date().toISOString().split('T')[0],
	description: '',
	category: '',
	amount: 0
  }

  handleChange = e => {
	e.persist();

	const fieldName = e.target.name;
	// If the change target is the value field, parse it to a number before committing to state
	const newVal = fieldName === 'amount' ? Number(e.target.value) : e.target.value

  	this.setState({
		[fieldName]: newVal
  	})
  }

  handleSubmit = e => {
	e.preventDefault();
 	const form = e.target;

 	// Extract form values into an object
 	const transactionData = {
		date: form.date.value,
		description: form.description.value,
		category: form.category.value,
		amount: form.amount.value
 	};

 	// Pass data into the new transaction function passed in from Account Container
 	this.props.newTransaction(transactionData)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input 
              type="date" 
              name="date" 
              value={this.state.date} 
             />
            <input 
              type="text" 
              name="description" 
              placeholder="Description" 
              value={this.state.description}
             />
            <input 
              type="text" 
              name="category" 
              placeholder="Category" 
              value={this.state.category}
             />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={Number(this.state.amount)}
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
