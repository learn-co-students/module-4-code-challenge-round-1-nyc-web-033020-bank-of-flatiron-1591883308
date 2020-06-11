import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state={
    transactions:[],
    newTransaction:{
      date:'',
      description:'',
      category:'',
      amount:0
    }
  }

  url = 'http://localhost:6001/transactions'
  componentDidMount(){
    fetch(this.url)
    .then(r=>r.json())
    .then(transData => this.setState({transactions: transData}))
  };

  handleChange=(event)=>{
    this.setState({newTransaction: {[event.target.name]: event.target.value}})
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
