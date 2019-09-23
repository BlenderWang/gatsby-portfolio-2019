import React, { Component } from 'react'
import Project from './project'
import './portfolio.scss'

class ProjectFolder extends Component {
    render() {

        return (
            <div className="portfolio__content">
                {this.props.projects.map(project => <Project key={project.id} project={project} />)}
            </div>
        )
    }
}

export default ProjectFolder