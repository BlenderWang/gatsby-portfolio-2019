import React from 'react';
import { Link } from 'gatsby'
import myPic from '../images/mine.jpg'

import './about.scss';

const About = () => {
    return (
        <div id="about" class="bg-light">
            <h2 className="section-title">About Me</h2>
            <img src={myPic} alt="It is me!" class="my-pic" />
            <p className="about__paragraph">Hi! <em>Shirley Wang</em> here. I am so glad that you are interested in who I am and what I have achieved. I was majored in economics and literature back in the university. I've always been drawn to stories, fantasies and mythologies and etc, which leads me to have skills in <em>graphics</em> and <em>animation</em> as well as to the decision of moving to Sweden, one of the European countries that are filled with amazing stories.
            <br/>
            <br/>
            Meanwhile the fast development of the web have intrigued me and let me into the co-existing world of <em>Front-End</em> Development where I can further grow and improve as a <em>designer</em> as well as being a <em>developer</em>. One thing I have to state clearly is that I am neither a genius in graphics nor a coding wizard. Instead I have the <em>curiosity</em> for obtaining knowledge and the persistency for <em>improving</em> my skills.</p>
            <Link className="btn btn-dark" to="/page-skills">What Are My Skills</Link>
        </div>
    );
}

export default About;
