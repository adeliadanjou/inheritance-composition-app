import React, { Component } from 'react'
//imports the base styles for everybutton
import './GenericButton.css'

//this provides the base for every button in our example, both in terms of style and logic
class GenericButton extends Component {
    onclickHandler = (e) => {
        this.props.externalClickHandler(e)
    }

    render () {
        console.log(this.props.ref)
        return (
            //this will be the base button with its classname and clickhandler passed from the outside
            <button className={this.props.className} onClick={this.onclickHandler}>{this.props.children}</button>
        )
    }
}

export default GenericButton