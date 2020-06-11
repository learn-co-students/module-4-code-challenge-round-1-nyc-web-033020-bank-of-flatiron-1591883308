import React from "react";
import Transaction from "./Transaction";

class TransactionsList extends React.Component {
  	
  	// Store sorting info in state, default to date descending
  	// Use a bool for order for easy conditionals
	state = {
		sortColumn: 'date',
		sortOrderDesc: true
	}

	setSort = column => {
		this.setState(prevState => ({
			sortColumn: column,
			sortOrderDesc: !prevState.sortOrderDesd
		}))
	}

	sortedTransactions = () => {
		const { sortColumn, sortOrder } = this.state
		return this.props.transactions.sort((a,b) => {
			return a.amount - b.amount
		})
	}

  	render() {
  	  return (
    	<table className="ui celled striped padded table">
      	  <tbody>
        	<tr>
          	  <th>
            	<h3 className="ui center aligned header">Date</h3>
          	  </th>
          	  <th>
            	<h3 className="ui center aligned header">Description</h3>
          	  </th>
          	  <th>
            	<h3 className="ui center aligned header">Category</h3>
          	  </th>
          	  <th>
            	<h3 className="ui center aligned header" onClick={this.setSort('amount')}>Amount</h3>
          	  </th>
        	</tr>
			{
				this.sortedTransactions().map(t => <Transaction key={t.id} {...t} />)
			}
      	  </tbody>
    	</table>
  	  );
  	}
};

export default TransactionsList;
