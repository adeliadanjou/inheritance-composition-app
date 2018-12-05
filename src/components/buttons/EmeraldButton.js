import React, { Component } from 'react'
import GenericButton from './GenericButton'
import './EmeraldButton.css'

class EmeraldButton extends GenericButton {
    //optional
    onclickHandler = (e) => {
        console.log('emerald')
    }

    render () {
        return (
            <GenericButton className="emeraldButton" externalClickHandler={this.onclickHandler}>{this.props.children}</GenericButton>
        )
    }
}

export default EmeraldButton