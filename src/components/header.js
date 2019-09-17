import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import headerImg from "../images/header-img.svg"
import nauticalLogo from "../images/nauticalLogo.svg"
import './header.scss';

const Header = ({ siteTitle }) => (
  <header id="header">
    <div className="container">
        <img src={nauticalLogo} alt="My Logo" />
        <img className="header-img" src={headerImg} alt="SVG header" />
        <h2 className="section-title">Shirley Wang</h2>
        <h3 className="section-desc">
            <em>{ siteTitle }</em>
        </h3>
        <Link className="btn btn-primary" to="#about">Find Out More</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
