import React from "react"
import { Link } from "gatsby"
import skillsImg from "../images/skills-img.svg"
import folderDummy from "../images/folder-dummy.svg"
import file01 from "../images/file_1.svg"
import file02 from "../images/file_2.svg"
import file03 from "../images/file_3.svg"
import './skills.scss';

const Skills = () => {
    return(
        <section id="skills" className="bg-primary">
            <div className="container">
                <img className="skills-img" src={skillsImg} alt="SVG laptop" />

                <div className="skills__heading">
                    <h2 className="section-title">Skills</h2>
                    <p className="section-desc">
                        <em>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quae voluptate dicta quas possimus magnam neque dolorem! Praesentium rerum eligendi architecto? Minus sapiente cupiditate eos omnis, ipsam aut nihil? Eveniet!</em>
                    </p>
                </div>

                <div className="skills__item skills__item--1">
                    <div className="folder">
                        <div className="folder__feedback"></div>
                        <div className="folder__preview folder__preview--thumb">
                            <img src={file01} alt="HTML skills" className="folder__thumb"/>
                            <img src={file02} alt="CSS skills" className="folder__thumb"/>
                            <img src={file03} alt="JS skills" className="folder__thumb"/>
                        </div>
                        <div className="folder__icon">
                            <img src={folderDummy} alt=""/>
                        </div>
                        <h3 className="folder__caption">Programming</h3>
                    </div>
                </div>

                <div className="skills__item skills__item--2">
                    <div className="folder">
                        <div className="folder__feedback"></div>
                        <div className="folder__preview folder__preview--thumb">
                            <img src={file01} alt="HTML skills" className="folder__thumb"/>
                            <img src={file02} alt="CSS skills" className="folder__thumb"/>
                            <img src={file03} alt="JS skills" className="folder__thumb"/>
                        </div>
                        <div className="folder__icon">
                            <img src={folderDummy} alt=""/>
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