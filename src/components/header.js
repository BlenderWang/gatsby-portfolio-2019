import React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import headerImg from "../images/header-img.svg"
import nauticalLogo from "../images/nauticalLogo.svg"
import './header.scss';

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }
  parallaxShift = () => {
    console.log(window.pageYOffset);
    this.setState({
      offset: window.pageYOffset
    });
  };

  render() {
    return(
      <header id="header" style={{ backgroundPositionY: this.state.offset }}>
        <div className="container">
            <img className="nautical-logo" src={nauticalLogo} alt="My Logo" />
            <div className="section-img" style={{ backgroundPositionY: this.state.offset / 2 }}>
              <img className="header-img" src={headerImg} alt="SVG header" />
            </div>
            <h2 className="section-title">Shirley Wang</h2>
            <h3 className="section-desc">
                <em>Front-End Dev & Graphic Designer</em>
            </h3>
            <Link className="btn btn-primary" to="#about">Find Out More</Link>
        </div>
      </header>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.default = {
//   siteTitle: ``,
// }

export default Header
