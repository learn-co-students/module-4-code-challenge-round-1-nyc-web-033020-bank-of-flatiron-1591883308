import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            <div>
        <button onClick={this.props.handleOnChange} name='category'> Sort By Category</button>
        <button onClick={this.props.handleOnChange} name='description'> Sort By Description</button>
        <button onClick={this.props.handleOnChange} name='amount'> Sort By Amount</button>
        <button onClick={this.props.handleOnChange} name='date'> Sort By Date</button>
            </div>
        )
    }
}

export default Buttons
