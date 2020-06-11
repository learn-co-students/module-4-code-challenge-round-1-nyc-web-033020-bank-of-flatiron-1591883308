import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    transaction: {
      date: "",
      description: "",
      category: "",
      amount: "",
    },
  };

  handleChange = (event) => {
    const target = event.target;
    this.setState({
      transaction: {
        ...this.state.transaction,
        [target.name]: target.value,
      },
    });
  };

  render() {
    const { date, description, category, amount } = this.state.transaction;
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields" onChange={this.handleChange}>
            <input type="date" name="date" value={date} />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={description}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={category}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={amount}
              step="0.01"
            />
          </div>
          <button
            className="ui button"
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              this.props.handleSubmit(this.state.transaction);
            }}
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
