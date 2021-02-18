import React from 'react'
import './Intro.css'
import face from '../../images/face.jpg'
import email_icon from '../../images/email_icon.jpg'
import location_icon from '../../images/location_icon.jpg'

class Intro extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="intro-wrapper section">
                <div className="intro-text">
                    <h1>Matthew Mullins.</h1>
                    <h4>I am a Software Developer.</h4>
                    <div style={{marginBottom: '.5em'}}>
                        <img className="intro-icon" src={email_icon} alt=""/>
                        <p style={{display: 'inline-block', verticalAlign: 'middle'}}>matthew@mullinsfamily.ca</p>
                    </div>
                    <div>
                        <img className="intro-icon" src={location_icon} alt=""/>
                        <p style={{display: 'inline-block', verticalAlign: 'middle'}}>Calgary, AB T3M0J7</p>
                    </div>
                    <ul id="socials">
                        <button className="circle-button">LI</button>
                        <button className="circle-button">GH</button>
                        <button className="circle-button">GH</button>
                        <button className="circle-button">GH</button>
                    </ul>
                </div>
                <div className="intro-image-wrapper">
                    <img className="intro-image" src={face} alt=""/>
                </div>
            </div>
        )
    }
}

export default Intro