import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"
import Nav from "../components/nav"
import Skills from "../components/skills"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas }  from '@fortawesome/free-solid-svg-icons'
// import { fab }  from '@fortawesome/free-brands-svg-icons'

library.add(fas)

const SkillsPage = () => (
  <PageTransition
    defaultStyle={{
        transition: 'left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        left: '100%',
        position: 'absolute',
        width: '100%',
        opacity: '0',
      }}
      transitionStyles={{
        entering: { left: '0%', opacity: '1' },
        entered: { left: '0%', opacity: '1' },
        exiting: { left: '100%' },
      }}
      transitionTime={500}
  >
    <Layout>
      <Nav/>
      <Skills />
    </Layout>
  </PageTransition>
)

export default SkillsPage
