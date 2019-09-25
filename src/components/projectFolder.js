import React, { Component } from 'react'
import Project from './project'
import './portfolio.scss'

class ProjectFolder extends Component {
    render() {

        return (
            <ul className="portfolio__content">
                {this.props.projects.map((project, i) => <Project key={i} project={project} />)}
            </ul>
        )
    }
}

export default ProjectFolder