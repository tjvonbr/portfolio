/** @jsx jsx **/

import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectData from '../data/ProjectData';
import { jsx } from '@emotion/core';

const Projects = (props) => {
  let { path, url } = useRouteMatch();
  const projects = ProjectData;
  
  return (
    <div
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <NavBar />
      <ProjectNavBar {...props} 
        url={url} 
        path={path} 
        projects={projects} 
      />

      <div
        css={{
          maxWidth: '800px',
          position: 'fixed',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Check out my projects!</p>

        <p>I've worked on many projects as a member of a distributed team--working with developers, data scientists, and UX designers from different backgrounds and experiences.  I've selected a few projects that I'm most proud of.</p>
      </div>
    </div>
  )
}

export default Projects;