/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Social from "./social"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: 'My 2019 Portfolio made with Gatsby. First try.'
          },
          {
            name: 'keywords',
            content: 'gatsby, react, portfolio'
          },
        ]}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100vw`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Social />
        <footer
          style={{
            margin: `0 auto`,
            display: `flex`,
            justifyContent: `center`,
            marginTop: `1rem`,
          }}
        >
          Shirley Wang || WANGIMATION © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
