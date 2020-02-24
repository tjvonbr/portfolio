/** @jsx jsx **/

import React from 'react';
import Navbar from '../components/NavBar';
import { jsx, css } from '@emotion/core';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
], { literal: true }, { overlap: true })

const About = () => {
  return (
    <div
      css={mq({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center'
      })}
     >
      <Navbar />
      
      <div
        css={mq({
          width: ['90%', '80%', '50%'],
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >

        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Hello!  I'm Trevor Von Bruenchenhein!</p>

        <p>I am a Chicago-based full-stack engineer with a background in education and software development.  After teaching high school history for five years, I wanted to approach education from a different angle and decided to pursue studying web development full-time.  Because of my experience in the classroom, I understand how valuable educational technology is in an increasingly digital world, and I’m ready to start working on a project that is going to transform the educational experience for students around the world.</p>

      </div>
    </div>
  )
};

export default About;
