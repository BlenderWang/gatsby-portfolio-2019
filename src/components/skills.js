import React, { Component } from "react"
import { Link } from "gatsby"
import FolderIcon from "./folderIcon"
import skillsImg from "../images/skills-img.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './skills.scss';

const files = [{
    id: "0",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_1.svg",
    description: "HTML skills"
}, {
    id: "1",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_2.svg",
    description: "CSS skills"
}, {
    id: "2",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_3.svg",
    description: "JavaScript skills"
}, {
    id: "3",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_4.svg",
    description: "NodeJS skills"
}, {
    id: "4",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_5.svg",
    description: "PHP"
}, {
    id: "5",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_6.svg",
    description: "MySql skills"
}, {
    id: "6",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_7.svg",
    description: "Inkscape skills"
}, {
    id: "7",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_8.svg",
    description: "Gimp skills"
}, {
    id: "8",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_9.svg",
    description: "Blender skills"
}, {
    id: "9",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_10.svg",
    description: "After Effect skills"
}, {
    id: "10",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_11.svg",
    description: "Illustrator skills"
}, {
    id: "11",
    fileLink: "https://res.cloudinary.com/shirlzzz9/image/upload/v1569444126/Gatsby-Portfolio/file_12.svg",
    description: "Photoshop skills"
}]

class Skills extends Component {
    constructor() {
        super()

        this.state = {
            visible: false,
            visible2: false
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick() {
        console.log('click');
        this.setState({
            visible: !this.state.visible,
        });
    }

    handleClick2() {
        console.log('click2');
        this.setState({
            visible2: !this.state.visible2,
        });
    }

    render() {
        const show = this.state.visible ? 'folder__preview folder__preview--thumb show' : 'folder__preview folder__preview--thumb'
        const show2 = this.state.visible2 ? 'folder__preview folder__preview--thumb show' : 'folder__preview folder__preview--thumb'

        return(
            <section id="skills" className="bg-primary">
                <div className="container">
                    <img className="skills-img" src={skillsImg} alt="SVG laptop" />

                    <div className="skills__heading">
                        <h2 className="section-title">Skills</h2>
                        <p className="section-desc">
                            I'd like to divide my skills into two categories: programming and graphics as presented down below.The numbers are simply my personal evaluation on the subject.
                            <br />
                            In the scale of 1 to 10, <em>1 = minimium capacity </em> while <em>10 = maxmium capacity </em>
                        </p>
                    </div>

                    <div className="skills__item skills__item--1">
                        <div className="folder">
                            <div className={show}>
                                <img src={files[0].fileLink} alt={files[0].description} className="folder__thumb"/>
                                <img src={files[1].fileLink} alt={files[1].description} className="folder__thumb"/>
                                <img src={files[2].fileLink} alt={files[2].description} className="folder__thumb"/>
                                <img src={files[3].fileLink} alt={files[3].description} className="folder__thumb"/>
                                <img src={files[4].fileLink} alt={files[4].description} className="folder__thumb"/>
                                <img src={files[5].fileLink} alt={files[5].description} className="folder__thumb"/>
                            </div>
                            <div className="folder__icon" onClick={this.handleClick}>
                                <FontAwesomeIcon icon={['fas', 'code']} className="fa-icons fa-code" />
                                <FolderIcon />
                            </div>
                            <h3 className="folder__caption">Programming</h3>
                        </div>
                    </div>

                    <div className="skills__item skills__item--2">
                        <div className="folder">
                            <div className={show2}>
                                <img src={files[6].fileLink} alt={files[6].description} className="folder__thumb"/>
                                <img src={files[7].fileLink} alt={files[7].description} className="folder__thumb"/>
                                <img src={files[8].fileLink} alt={files[8].description} className="folder__thumb"/>
                                <img src={files[9].fileLink} alt={files[9].description} className="folder__thumb"/>
                                <img src={files[10].fileLink} alt={files[10].description} className="folder__thumb"/>
                                <img src={files[11].fileLink} alt={files[11].description} className="folder__thumb"/>
                            </div>
                            <div className="folder__icon" onClick={this.handleClick2}>
                                <FontAwesomeIcon icon={['fas', 'image']} className="fa-icons fa-image" />
                                <FolderIcon />
                            </div>
                            <h3 className="folder__caption">Graphics</h3>
                        </div>
                    </div>
                    <Link className="btn btn-dark" to="/page-portfolio">Check out my Portfolio</Link>
                </div>
            </section>
        )
    }
}

export default Skills