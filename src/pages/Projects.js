/** @jsx jsx **/

import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NavBarLink from '../components/NavBarLink';
import ProjectNavBar from '../components/ProjectNavBar';
import { jsx, css } from '@emotion/core';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

// Font size for subnavigation
const fontSize = '1.6rem'

const Projects = () => {
  return (
    <div
      css={mq({
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ['center', 'center', 'flex-start'],
        alignItems: 'center',
      })}
    >
      <NavBar />

      <div
        css={mq({
          width: ['50%', '50%', '92%'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >
        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Check out my work!</p>
  
        <p>I've worked on many projects as a member of a distributed team--working with developers, data scientists, and UX designers from different backgrounds and experiences.  I've selected a few projects that I'm most proud of.</p>

        <ProjectNavBar />
      </div>

    </div>
  )
}

export default Projects;