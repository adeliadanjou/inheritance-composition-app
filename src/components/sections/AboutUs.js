import React, { Component } from 'react'
import GoldenButton from '../buttons/GoldenButton'

class AboutUs extends Component {
    //handler for button which is passed through props so it can be consume and their state lifted
    parentClickHandler = (e) => {
        console.log("hola desde app!!!!")
        console.log(e)
    }

    render() {
        return (
            <div>
                About Us section

                <div>
                    {/* here we are using the multiple buttons we have created through inheritance */}
                    <GoldenButton externalClickHandler={this.parentClickHandler}>Ok!</GoldenButton>
                </div>
            </div>
        )
    }
}

export default AboutUs