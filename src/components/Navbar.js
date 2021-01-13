import React from 'react'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <header className="navbar">
                {/* <img src={logo} className="App-logo" alt="logo" />*/}
                <h1>LOGO</h1>
                <ol>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ol>
                <button id="Contact-Button">
                M
                </button>
            </header>
        )
    } 
}

export default Navbar