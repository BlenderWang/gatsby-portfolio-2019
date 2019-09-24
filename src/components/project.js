import React, { Component } from 'react'
import './portfolio.scss'

export default class project extends Component {
    render() {
        const project = this.props.project
        return (
            <div className={["project" , "project-demo"].join(' ')}>
                <img className="project__screenshot" src={project.imageLink} alt={project.title} />
                <div className="project__details">
                    <h4 className="project--title">{project.title}</h4>
                    <p className="project--desc">{project.description}</p>
                    <a className="linkDemo btn btn-dark" href={project.demoLink}>View Demo</a>
                    <a className="linkRepo btn btn-dark" href={project.repoLink}>View Code</a>
                </div>
            </div>
        )
    }
}
