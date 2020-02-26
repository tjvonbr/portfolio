/** @jsx jsx **/

import React from 'react';
import { useParams } from 'react-router-dom';
import { jsx } from '@emotion/core';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

const Project = ({projects, match}) => {
  //
  const project = projects.find(({ id }) => id === match.params.projectId)

  return (
    <div>
      <p>{ project.id }</p>
    </div>
  )
}

export default Project;