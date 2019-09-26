import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from "../components/layout"
import Header from "../components/header"
import Nav from "../components/nav"
import About from "../components/about"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab }  from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      transition: 'right 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
      right: '100%',
      position: 'absolute',
      width: '100%',
      opacity: '0',
    }}
    transitionStyles={{
      entering: { right: '0%', opacity: '.95' },
      entered: { right: '0%', opacity: '1' },
      exiting: { right: '100%' },
    }}
    transitionTime={500}
  >
    <Layout>
      <Header />
      <Nav />
      <About />
    </Layout>
  </PageTransition>
)

export default IndexPage
