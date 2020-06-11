import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            <div>
        <button onClick={this.props.handleOnChange} name='category'> Sort By Category</button>
        <br></br>
        <button onClick={this.props.handleOnChange} name='description'> Sort By Description</button>
        <br></br>
        <button onClick={this.props.handleOnChange} name='amount'> Sort By Amount</button>
        <br></br>
            </div>
        )
    }
}

export default Buttons
