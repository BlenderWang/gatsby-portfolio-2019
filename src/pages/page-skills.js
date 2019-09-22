import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Skills from "../components/skills"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas }  from '@fortawesome/free-solid-svg-icons'
// import { fab }  from '@fortawesome/free-brands-svg-icons'

library.add(fas)

const SkillsPage = () => (
  <Layout>
    <Nav/>
    <Skills />
  </Layout>
)

export default SkillsPage
