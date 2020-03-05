/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import CompleteNavigation from '../components/CompleteNavigation'
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

// Font size for subnavigation to pass as props
const fontSize = '1.6rem'

const Project = (props) => {
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

      <CompleteNavigation />

      {/*Container serving as the project card */}
      <div
        css={mq({
          width: ['45%', '70%', '90%']
        })}
      >
        <a  
          href={props.deployed}
          target="_blank"
          css={{
            fontSize: '2.4rem',
            marginBottom: '0px',
            color: 'black'
          }}  
        >
        {props.title}
        </a>

        <p css={{margin: '0px'}}>{ props.date }</p>

        <p><strong>Summary:</strong> { props.summary }</p>

        <p><strong>Role:</strong> { props.role }</p>

        <p css={{marginBottom: '0px'}}><strong>Highlights:</strong></p>

          {props.highlights.map(highlight => (
           <li>{highlight}</li>
          ))}
        
        <p>
          <a 
            href={props.link}
            target="_blank"
            css={{
              color: 'black'
            }}
          >See the code</a>
        </p>

      </div>
    </div>
  )
}

export default Project;