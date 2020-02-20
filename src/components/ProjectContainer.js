/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';

const ProjectContainer = ({data}) => {
  const highlights = data.highlights

  return (
    <div css={{
      height: '100%',
      border: '1px solid black',
      padding: '10px 10px'

    }}>
      <h3 css={{textDecoration: 'underline', marginBottom: '0px'}}>{data.title}</h3>
      <p css={{margin: '0px'}}>{data.date}</p>

      <p><strong>Summary: </strong>{data.summary}</p>

      <p><strong>Role: </strong>{data.role}</p>

      <p><strong>Highlights: </strong></p>
      <ul>
      {highlights.map(highlight => (
         <li>{highlight}</li>
      ))}
      </ul>

    </div>
  )
}

export default ProjectContainer;