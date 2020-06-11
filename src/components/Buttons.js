import React, { Component } from 'react'

export class Buttons extends Component {
    render() {
        return (
            <div>
        <button onClick={this.props.handleOnChange} name='category'> Sort By Category</button>
        <br></br>
        <button onClick={this.props.handleOnChange} name='description'> Sort By Description</button>
            </div>
        )
    }
}

export default Buttons
