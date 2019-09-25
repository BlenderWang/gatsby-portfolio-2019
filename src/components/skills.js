import React from "react"
import { Link } from "gatsby"
import FolderPreviews from "./folderPreviews"
import FolderIcon from "./folderIcon"
import skillsImg from "../images/skills-img.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './skills.scss';

const files = [{
    id: "0",
    fileLink: "../../static/img/file_1.svg",
    description: "HTML skills"
}, {
    id: "1",
    fileLink: "../../static/img/file_2.svg",
    description: "CSS skills"
}, {
    id: "2",
    fileLink: "../../static/img/file_3.svg",
    description: "JavaScript skills"
}, {
    id: "3",
    fileLink: "../../static/img/file_4.svg",
    description: "NodeJS skills"
}, {
    id: "4",
    fileLink: "../../static/img/file_5.svg",
    description: "PHP"
}, {
    id: "5",
    fileLink: "../../static/img/file_6.svg",
    description: "MySql skills"
}, {
    id: "6",
    fileLink: "../../static/img/file_7.svg",
    description: "Inkscape skills"
}, {
    id: "7",
    fileLink: "../../static/img/file_8.svg",
    description: "Gimp skills"
}, {
    id: "8",
    fileLink: "../../static/img/file_9.svg",
    description: "Blender skills"
}, {
    id: "9",
    fileLink: "../../static/img/file_10.svg",
    description: "After Effect skills"
}, {
    id: "10",
    fileLink: "../../static/img/file_11.svg",
    description: "Illustrator skills"
}, {
    id: "11",
    fileLink: "../../static/img/file_12.svg",
    description: "Photoshop skills"
}]

const Skills = () => {
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
                        <div className="folder__feedback"></div>
                        <FolderPreviews files={files} />
                        <div className="folder__icon">
                            <FontAwesomeIcon icon={['fas', 'code']} className="fa-icons fa-code" />
                            <FolderIcon />
                        </div>
                        <h3 className="folder__caption">Programming</h3>
                    </div>
                </div>

                <div className="skills__item skills__item--2">
                    <div className="folder">
                        <div className="folder__feedback"></div>
                        <FolderPreviews files={files} />
                        <div className="folder__icon">
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

export default Skills