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
        transition: 'top 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        top: '100%',
        position: 'absolute',
        height: '100%',
        opacity: '0',
    }}
    transitionStyles={{
      entering: { top: '0%', opacity: '1' },
      entered: { top: '0%', opacity: '1' },
      exiting: { top: '100%' },
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
