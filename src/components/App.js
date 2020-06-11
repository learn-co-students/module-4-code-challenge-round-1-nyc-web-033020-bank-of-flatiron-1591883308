import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  // state = {
  //   transactions: [],
  //   transForm: {
  //     date: '',
  //     description: '',
  //     category: '',
  //     amount: ''
  //   }
  // }

  // componentDidMount() {
  //   fetch('http://localhost:6001/transactions')
  //   .then(res => res.json())
  //   .then(transactionData => 
  //     this.setState({ transactions: transactionData})
  //   )
  // }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer />
      </div>
    );
  }
}

export default App;

{/* <AccountContainer transactions={this.state.transactions} /> */}

