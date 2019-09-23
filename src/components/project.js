import React, { Component } from 'react'
import './portfolio.scss'

export default class project extends Component {
    render() {
        const project = this.props.project
        return (
            <div className="project">
                <img className="project__screenshot" src={project.imageLink} alt={project.title} />
                <div className="project__details">
                    <h4 className="project--title">{project.title}</h4>
                    <p className="project--desc">{project.description}</p>
                    <button className="codepenDemo">View Demo</button>
                    <button className="githubRepo">View Code</button>
                </div>
            </div>
        )
    }
}
