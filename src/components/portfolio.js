import React, { Component } from 'react'
import PortfolioFolder from './projectFolder'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './portfolio.scss'
// import project from './project'

const projects = [{
    id: "0",
    title: "The White Strips --- A Tribute Site",
    description: "my latest group project and perhaps the most succssful school project",
    imageLink: "../../static/img/school-project-01.jpg",
    repoLink: "",
    demoLink: ""
    }, {
        id: "1",
        title: "A template website --- A freelance project",
        description: "A simple website done with HTML, CSS and JavaScript",
        imageLink: "../../static/img/carlos-website-template.jpg",
        repoLink: "",
        demoLink: ""
    }, {
        id: "2",
        title: "Flex vs Grid",
        description: "my favorite school project done by only HTML and CSS in such psychodelic color scheme",
        imageLink: "../../static/img/school-project-02.jpg",
        repoLink: "",
        demoLink: ""
    }, {
        id: "3",
        title: "Working with API --- build a simple TV search site",
        description: "a very much simplified IMDB inspired side project",
        imageLink: "../../static/img/mini-search.jpg",
        repoLink: "",
        demoLink: ""
    }
]

export default class Portfolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // folders: projects.folders,
            // folder: projects.folders[0]
        }
    }

    nextSlide = () => {
        // const newIndex = this.state.folder.index+1
        // this.setState({
        //     folder: projects.folders[newIndex]
        // })
    }

    prevSlide = () => {
        // const newIndex = this.state.folder.index-1
        // this.setState({
        //     folder: projects.folders[newIndex]
        // })
    }

    render() {
        // const { folder } = this.state

        return (
            <section id="portfolio" className="portfolio">
                <div className="container">
                    <div className="portfolio__heading">
                        <h2 className="section-title">Portfolio</h2>
                        <p className="section-desc">
                            <em>My latest and favorite projects.</em>
                            <br/> Lay back and enjoy!
                        </p>
                    </div>

                    <PortfolioFolder projects={projects} />

                    <div className="slider__controls">
                        <button className="slider__arrow slider__arrow_prev" onClick={() => this.prevSlide()} >
                            <FontAwesomeIcon icon={['fas', 'caret-left']} className="fa-icons fa-prev" />
                        </button>
                        <button className="slider__arrow slider__arrow_next" onClick={() => this.nextSlide()} >
                            <FontAwesomeIcon icon={['fas', 'caret-right']} className="fa-icons fa-next" />
                        </button>
                    </div>
                </div>
            </section>
        )
    }
}
