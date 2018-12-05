import React, { Component } from 'react'
import GoldenButton from '../buttons/GoldenButton'
import { Link, Switch, Route } from 'react-router-dom';

class AboutUs extends Component {
    //handler for button which is passed through props so it can be consume and their state lifted
    parentClickHandler = (e) => {
        console.log("hola desde app!!!!")
        console.log(e)
    }

    componentDidMount() {
    
    }

    render() {
        console.log()

        return (
            <div>
                About Us section
            </div>
        )
    }
}

export default AboutUs