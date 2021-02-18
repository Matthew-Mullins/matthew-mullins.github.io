import React from 'react'
import './About.css'

class About extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    render() {
        return (
            <div id="about" className="section">
                <h5>My Skills</h5>
                <h1>My Expertise</h1>
                <div className="about-container">
                    <div className="about-wrapper">
                        <div id="" className="about-card">
                            Education
                        </div>
                        <div id="" className="about-card">
                            Technologies
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, perferendis voluptates aliquid expedita sed aspernatur impedit facere repellendus! Nisi, doloribus?
                            </p>
                        </div>
                        <div id="" className="about-card">
                            Languages
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About