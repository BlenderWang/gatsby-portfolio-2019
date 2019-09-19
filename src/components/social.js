import React from "react"
import { Link } from "gatsby"

import './social.scss';

const SocialMedia = () => {
    return (
        <div className="social-icons">
            <Link to="https://github.com/BlenderWang" className="social-icons__link">
                <i className="fab fa-github fa-2x"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/shirley-wang-37b7457b/" className="social-icons__link">
                <i className="fab fa-linkedin-in fa-2x"></i>
            </Link>
            <Link to="https://codepen.io/blenderWang" className="social-icons__link">
                <i className="fab fa-codepen fa-2x"></i>
            </Link>
        </div>
    );
}

export default SocialMedia
