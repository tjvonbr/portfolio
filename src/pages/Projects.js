/** @jsx jsx **/

import React from 'react';
import { useRouteMatch, Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import NavBarLink from '../components/NavBarLink';
import Project from '../components/Project';
import ProjectData from '../data/ProjectData';
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

const Projects = props  => {
  const { path, url } = useRouteMatch();

  return (
    <div
      css={mq({
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ['center', 'center', 'flex-start'],
        alignItems: 'center',
        backgroundColor: ['lightcoral', 'blue', 'yellow']
      })}
    >
      <NavBar />

      <nav
        css={mq({
          display: 'flex',
          position: ['absolute', 'absolute', 'relative'],
          top: ['40px'],
          width: ['20%', '40%', '50%'],
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          margin: '0px auto',
          height: '50px',

        })}
      >

        <NavBarLink 
          {...props}
          path={`${url}/comake`}
          page="Co-Make" 
          fontSize={fontSize} 
        />

        <NavBarLink 
          {...props}
          path={`${url}/wanderlust`}
          page="Wanderlust" 
          fontSize={fontSize} 
        />
 
        <NavBarLink 
          {...props}
          path={`${url}/splitthebill`}
          page="Split the Bill" 
          fontSize={fontSize} 
        />
      </nav>

      <div
        css={mq({
          width: ['50%', '50%', '92%'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >
  
        <p>I've worked on many projects as a member of a distributed team--working with developers, data scientists, and UX designers from different backgrounds and experiences.  I've selected a few projects that I'm most proud of.</p>
      </div>

      {/* <Route path={`${path}/:projectId`} render={() => <Project />} /> */}

    </div>
  )
}

export default Projects;