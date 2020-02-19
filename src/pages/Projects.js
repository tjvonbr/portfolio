/** @jsx jsx **/

import React from 'react';
import NavBar from '../components/NavBar';
import { jsx, css } from '@emotion/core';
import VerticalNavBar from '../components/VerticalNavBar';
import ProjectContainer from '../components/ProjectContainer';

const Projects = ({data}) => {
  return (
    <div
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <NavBar />

      <div>
        <h1>Projects</h1>
        
        <p>Below is a compilation of projects I have worked on in various capacities during my time with Lambda and on my own time.  For each project, I wanted to explain what the project was intended to accomplish along with some of the skills and technologies that were practiced.  In addition, I link to the relevant github repo for each.  Enjoy!</p>
      </div>

      <div
        css={{
          display: 'flex',
          height: '100%',
        }}
      >
        <VerticalNavBar />

        <ProjectContainer data={data} />
      </div>
    </div>
  )
}

export default Projects;