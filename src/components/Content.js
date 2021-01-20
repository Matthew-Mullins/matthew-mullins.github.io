import React from 'react'
import './Content.css'
import email_icon from '../images/email_icon.jpg'
import phone_icon from '../images/phone_icon.jpg'
import location_icon from '../images/location_icon.jpg'

class Content extends React.Component {
    render () {
        return (
            <div className="content">
                <div id="intro" className="section">
                    <h1>Matthew Mullins</h1>
                    <h4>Software Developer</h4>
                    <br/>
                    <br/>
                    <div style={{marginBottom: '.5em'}}>
                        <img style={{width: '2em', height: '2em', verticalAlign: 'middle', marginRight: '1em'}} src={email_icon} alt=""/>
                        <span style={{display: 'inline-block', verticalAlign: 'middle'}}>matthew@mullinsfamily.ca</span>
                    </div>
                    <div style={{marginBottom: '.5em'}}>
                        <img style={{width: '2em', height: '2em', verticalAlign: 'middle', marginRight: '1em'}} src={phone_icon} alt=""/>
                        <span style={{display: 'inline-block', verticalAlign: 'middle'}}>+1 (999) 999-9999</span>
                    </div>
                    <div>
                        <img style={{width: '2em', height: '2em', verticalAlign: 'middle', marginRight: '1em'}} src={location_icon} alt=""/>
                        <span style={{display: 'inline-block', verticalAlign: 'middle'}}>Calgary, AB T3M0J7</span>
                    </div>
                    <br/>
                    <br/>
                    <ul id="socials">
                        <button>LI</button>
                        <button>GH</button>
                        <button>GH</button>
                        <button>GH</button>
                    </ul>
                </div>
                <div id="image" className="section">
                </div>
                <div id="projects" className="section">
                    <h1>projects</h1>
                </div>
                <div id="about" className="section">
                    <h1>about</h1>
                </div>
                <div id="contact" className="section">
                    <h1>contact</h1>
                </div>
            </div>
        )
    }
}

export default Content