/** @jsx jsx **/

import React from 'react';
import Navbar from '../components/NavBar';
import { jsx, css } from '@emotion/core';
import facepaint from 'facepaint';

// Media queries
const mq = facepaint([
  '@media(max-width: 1200px)',
  '@media(max-width: 992px)',
  '@media(max-width: 768px)'
])

const About = () => {
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
      <Navbar />
      
      <div
        css={mq({
          width: ['50%', '50%', '92%'],
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        })}
      >
 
        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Hello!  I'm Trevor Von Bruenchenhein!</p>

        <p>I am a Chicago-based full-stack engineer with a background in education and software development.  After teaching high school history for five years, I wanted to approach education from a different angle and decided to pursue studying web development full-time.  Because of my experience in the classroom, I understand how valuable educational technology is in an increasingly digital world, and I’m ready to start working on a project that is going to transform the educational experience for students around the world.</p>

        <p>If your next project utilizes any of the following technologies, and want my help building it, please make sure to visit my Contact page!</p>

        <p><em>Technical skills: </em>JavaScript, HTML, CSS, React, Redux, React Native, Node, Express, Python, Django & SQL</p>

      </div>
    </div>
  )
};

export default About;
