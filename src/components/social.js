import React from "react"
// import { Link } from "gatsby"
import FontAwesomeIcon from 'react-fontawesome'

import './social.scss';

const SocialMedia = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/BlenderWang" className="social-icons__link">
                <i className="fab fa-github fa-2x"></i>
                <FontAwesomeIcon name='github' />
            </a>
            <a href="https://www.linkedin.com/in/shirley-wang-37b7457b/" className="social-icons__link">
                <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a href="https://codepen.io/blenderWang" className="social-icons__link">
                <i className="fab fa-codepen fa-2x"></i>
            </a>
        </div>
    );
}

export default SocialMedia
