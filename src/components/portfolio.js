import React, { Component } from 'react'
import PortfolioFolder from './projectFolder'
import './portfolio.scss'

const projects = [{
    id: "0",
    title: "project 01",
    description: "my latest group project bla bla bla",
    imageLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1568642331/Gatsby-Portfolio/skills-img.svg",
    repoLink: "",
    demoLink: ""
    }, {
        id: "1",
        title: "project 02",
        description: "e-commerce amazon inspired nodejs project. My reflection: such experience such wow!",
        imageLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1568642368/Gatsby-Portfolio/header-img.svg",
        repoLink: "",
        demoLink: ""
    }, {
        id: "2",
        title: "project 03",
        description: "my favorite school project done by only HTML and CSS in such psychodelic color scheme",
        imageLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1568642332/Gatsby-Portfolio/myLogoDark.svg",
        repoLink: "",
        demoLink: ""
    }
]

export default class Portfolio extends Component {
    render() {
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
                </div>
            </section>
        )
    }
}
