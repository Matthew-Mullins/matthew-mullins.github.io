import React from 'react'
import './Projects.css'
import Project from './Project.js'

class Projects extends React.Component{
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div id="projects" className="section">
                    <h1>Projects</h1>
                    <div className="projects-content">
                        <button>{'<'}</button>
                        <div className="projects-card-container">
                            <div className="projects-card-wrapper">
                                <Project/>
                            </div>
                        </div>
                        <button>{'>'}</button>
                    </div>
                </div>
        )
    }
}

export default Projects