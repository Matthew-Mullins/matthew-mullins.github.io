import React from 'react'
import './Content.css'

import Intro from './content/Intro.js'
import About from './content/About.js'
import Projects from './content/Projects.js'
import Contact from './content/Contact.js'

class Content extends React.Component {
    render () {
        return (
            <div className="content">
                <Intro/>
                <a id="projects-section"/>
                <Projects/>
                <a id="skills-section"/>
                <About/>
                <a id="contact-section"/>
                <Contact/>
            </div>
        )
    }
}

export default Content