import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social.scss';

const SocialMedia = () => {
    return (
        <div className="social-icons">
            <a href="https://github.com/BlenderWang" className="social-icons__link">
                <FontAwesomeIcon icon={['fab', 'github']} className="fa-icons" />
            </a>
            <a href="https://www.linkedin.com/in/shirley-wang-37b7457b/" className="social-icons__link">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="fa-icons" />
            </a>
            <a href="https://codepen.io/blenderWang" className="social-icons__link">
                <FontAwesomeIcon icon={['fab', 'codepen']} className="fa-icons" />
            </a>
        </div>

    );
}

export default SocialMedia
