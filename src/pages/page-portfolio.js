import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Portfolio from "../components/portfolio"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas }  from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const SkillsPage = () => (
  <Layout>
    <Nav/>
    <Portfolio />
  </Layout>
)

export default SkillsPage
