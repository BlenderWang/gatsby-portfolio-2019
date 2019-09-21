import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import headerImg from "../images/header-img.svg"
import NauticalLogo from "./nauticalLogo"
import './header.scss';

const Header = () => {
  return(
    <header id="header">
        <div className="container">
            <NauticalLogo />
            <img className="header-img" src={headerImg} alt="SVG header" />
            <h2 className="section-title">Shirley Wang</h2>
            <h3 className="section-desc">
                <em>Front-End Dev & Graphic Designer</em>
            </h3>
            <Link className="btn btn-primary" to="/#about">Find Out More</Link>
        </div>
      </header>
    )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.default = {
//   siteTitle: ``,
// }

export default Header
