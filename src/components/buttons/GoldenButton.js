import React, { Component } from 'react'
import GenericButton from './GenericButton'
//here we add the additional styles for this kind of buttons
import './GoldenButton.css'

//please note we are extending GenericButton via using extends keyword, therefore implementing and reusing style and functionality from its parent
class GoldenButton extends GenericButton {
    onclickHandler = (e) => {
        console.log('golden')
    }

    render () {
        return (
            //here we enforce one classname so it can be used as its default
            <GenericButton className="goldenButton" externalClickHandler={this.onclickHandler}>{this.props.children}X</GenericButton>
        )
    }
}

export default GoldenButton