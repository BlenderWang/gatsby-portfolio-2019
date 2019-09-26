import React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';

import Layout from "../components/layout"
import Nav from "../components/nav"
import Skills from "../components/skills"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas }  from '@fortawesome/free-solid-svg-icons'

library.add(fas)

const SkillsPage = () => (
  <PageTransition
    defaultStyle={{
        transition: 'bottom 500ms cubic-bezier(0.47, 0, 0.75, 0.72)',
        bottom: '100%',
        position: 'absolute',
        height: '100%',
        opacity: '0',
    }}
    transitionStyles={{
      entering: { bottom: '0%', opacity: '1' },
      entered: { bottom: '0%', opacity: '1' },
      exiting: { bottom: '100%' },
    }}
    transitionTime={500}
  >
    <div
      style={{
          margin: `0 auto`,
          maxWidth: `100vw`,
          paddingTop: 0,
      }}>
      <Nav/>
      <Skills />
    </div>
  </PageTransition>
)

export default SkillsPage
