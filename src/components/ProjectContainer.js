/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';

const ProjectContainer = ({data}) => {
  const highlights = data.highlights

  return (
    <div css={{
      height: '100%',
      paddingLeft: '10px'
    }}>
      <h3 css={{textDecoration: 'underline'}}>{data.title}</h3>

      <p><strong>Summary: </strong>{data.summary}</p>

      <p><strong>Role: </strong>{data.role}</p>

      <p><strong>Highlights: </strong></p>
      <ul>
      {highlights.map(highlight => (
         <li>{highlight}</li>
      ))}
      </ul>

      <a href={data.link} target="_blank">Check out my code!</a>

    </div>
  )
}

export default ProjectContainer;