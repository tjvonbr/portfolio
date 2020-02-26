/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import NavBar from '../components/NavBar';
import { SocialIcon } from 'react-social-icons';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

const Contact = () => {
  return (
    <div 
      css={mq({
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: ['center', 'center', 'flex-start'],
        alignItems: 'center',
        backgroundColor: ['red', 'blue', 'yellow']
      })}
    >
      <NavBar />

      <div
          css={mq({
          width: ['30%', '50%', '92%'],
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >
        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Reach out!</p>

        <p css={{marginBottom: '50px'}}>If you're interested in education, technology, or the intersection of the two, I'd love to hear from you!</p>

        <div
          css={{
            width: '50%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}
        >
          <a href="https://www.linkedin.com/in/tjvonbr/" target="_blank">
            <SocialIcon
              network={'linkedin'}
              bgColor={'black'}
              fgColor={'white'}
            />
          </a>

          <a href="https://www.github.com/tjvonbr/" target="_blank">
            <SocialIcon
              network={'github'}
              bgColor={'black'}
              fgColor={'white'}
            />
          </a>

           <a href="mailto:trevorvonbruenchenhein@gmail.com" target="_blank">
            <SocialIcon
              network={'email'}
              bgColor={'black'}
              fgColor={'white'}
            />
           </a>

        </div>
      </div>
    </div>
  )
}

export default Contact;