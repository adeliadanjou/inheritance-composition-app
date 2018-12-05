import React, { Component } from 'react'
import GenericButton from '../buttons/GenericButton'
import GoldenButton from '../buttons/GoldenButton'
import EmeraldButton from '../buttons/EmeraldButton'

class Home extends Component {
    //handler for button which is passed through props so it can be consume and their state lifted
    parentClickHandler = (e) => {
        console.log("hola desde app!!!!")
        console.log(e)
    }

    render() {
        return (
            <div>
                Section home

                <div>
                    {/* here we are using the multiple buttons we have created through inheritance */}
                    <GoldenButton externalClickHandler={this.parentClickHandler}>Ok!</GoldenButton>
                    <EmeraldButton externalClickHandler={this.parentClickHandler} ref="login-button">Ok!</EmeraldButton>
                    <GenericButton externalClickHandler={this.parentClickHandler}>Ok!</GenericButton>
                </div>

                {/* standard html5 component */}
                <img src="https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg?auto=compress&cs=tinysrgb&h=750&w=1260" width="300" />
            </div>
        )
    }
}

export default Home