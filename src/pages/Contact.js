/** @jsx jsx **/

import React from 'react';
import { jsx } from '@emotion/core';
import NavBar from '../components/NavBar';
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
  return (
    <div 
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <NavBar />

      <div
        css={{
          maxWidth: '800px',
          width: '20%',
          position: 'fixed',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Reach out!</p>

        <p css={{marginBottom: '50px'}}>If you're interested in education, technology, or the intersection of the two, I'd love to hear from you!</p>

        <div
          css={{
            width: '70%',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
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