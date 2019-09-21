import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Nav from "../components/nav"
import About from "../components/about"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab }  from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const IndexPage = () => (
  <Layout>
    <Header />
    <Nav />
    <About />
  </Layout>
)

export default IndexPage
