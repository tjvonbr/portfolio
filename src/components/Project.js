/** @jsx jsx **/

import React from 'react';
import { useParams } from 'react-router-dom';
import { jsx } from '@emotion/core';

const Project = ({ match, projects }) => {
  console.log("MATCH", match, projects)

  return (
    <div>
      <h1>Title</h1>
    </div>
  )
}

export default Project;