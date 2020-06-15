import React, { Component } from "react";

class AddTransactionForm extends Component {

    state = {
      date: "",
      description: "",
      category: "",
      amount: ""
    }

    componentDidMount(){

    }

    enterInfo = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })

    }

    addTransaction = (e) => {
      e.preventDefault()
      console.log(e)
      this.setState({
        date: '',
         description: '',
         category: '',
         amount: ''
      })
      
    }

    postTransaction = (e) => {
      e.preventDefault()
      fetch('http://localhost:6001/transactions', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: this.state.date,
          description: this.state.description,
          category: this.state.category,
          amount: this.state.amount
        })
        }
      )
      .then(resp => resp.json())
      .then(data => {
        this.props.helper(data)
      })
    }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.postTransaction}>
          <div className="inline fields">
            <input onChange={this.enterInfo} type="date" value={this.state.date} name="date" />
            <input onChange={this.enterInfo} type="text" value={this.state.description} name="description" placeholder="Description" />
            <input onChange={this.enterInfo} type="text" value={this.state.category} name="category" placeholder="Category" />
            <input onChange={this.enterInfo}
              value={this.state.amount}
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
