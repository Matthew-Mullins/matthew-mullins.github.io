import React from 'react'
import './Content.css'
import face_img from '../images/face.jpg'

class Content extends React.Component {
    render () {
        return (
            <div className="content">
                <div className="content-section">
                    <div className="frame">
                        <div className="intro">
                            <h1 style={{margin: '0', fontSize: '2rem'}}>Hello, I am</h1>
                            <h1 style={{margin: '0', fontSize: '4rem'}}>Matthew Mullins</h1>
                            <h1 style={{margin: '0', fontSize: '3rem'}}>Developer</h1>
                            <h1 style={{margin: '0', fontSize: '1rem'}}>Email</h1>
                            <h1 style={{margin: '0', fontSize: '1rem'}}>Phone Number</h1>
                            <h1 style={{margin: '0', fontSize: '1rem'}}>Location</h1>
                            <h1 style={{margin: '0'}}>Socials</h1>
                        </div>
                    </div>
                </div>
                <div className="content-section">
                    <div className="frame">
                        <img src={face_img} alt="" style={{borderRadius: '50%'}}/>
                    </div>
                </div>
                <div className="content-section">
                    <div className="frame">
                        <img src={face_img} alt=""/>
                    </div>
                </div>
                <div className="content-section">
                    <div className="frame">
                        <img src={face_img} alt=""/>
                    </div>
                </div>
                <div className="content-section">
                    <div className="frame">
                        <img src={face_img} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content