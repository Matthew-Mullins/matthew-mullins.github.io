import React from 'react'
import './Navbar.css'
import logo from '../images/logo_transparent_1.png'

class Navbar extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render () {
        return (
            <header className="navbar">
                {/* <img src={logo} className="App-logo" alt="logo" />*/}
                <a href="#"><img className="navbar-logo" src={logo} alt=""/></a>
                <ol>
                    <li>
                        <a href="#projects-section">Projects</a>
                    </li>
                    <li>
                        <a href="#skills-section">Skills</a>
                    </li>
                    <li>
                        <a href="#contact-section">Contact</a>
                    </li>
                </ol>
                <button className="circle-button">
                    M
                </button>
            </header>
        )
    } 
}

export default Navbar