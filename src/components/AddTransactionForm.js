import React, { Component } from "react";

class AddTransactionForm extends Component {

  state ={
    date: '',
    description: '',
    category: '',
    amount: 0
  }

  changeHandler = e => this.setState({[e.target.name]: e.target.value})
  submitHandler = e => {
    e.preventDefault()
    let newTrans = this.state

    fetch('http://localhost:6001/transactions',{
      method: "POST",
      headers: {"Content-Type": "application/json",
                  accept: "application/json"},
      body: JSON.stringify(newTrans)
    })
    .then(res=> res.json())
    .then(data=> this.props.addNew(data))
    this.setState({
      date: '', description: '', category: '', amount: ''
    })
  }

  render() {
    console.log(this.props)
   
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.submitHandler}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.changeHandler}/>
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.changeHandler}/>
            <input type="number" name="amount" placeholder="Amount" step="0.01" value={this.state.amount} onChange={this.changeHandler}/>
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
          {/* <label> 
          Category
          <input type="radio" value="category" name="trans" onClick={(e)=> this.props.sortHandler(e.target.value)}/>
          </label>
          <label> 
          Description
          <input type="radio" value="description" name="trans" onClcik={(e)=>this.props.sortHandler(e.target.value)}/>
          </label> */}
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
