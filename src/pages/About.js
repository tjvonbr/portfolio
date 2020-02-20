/** @jsx jsx **/

import React from 'react';
import Navbar from '../components/NavBar';
import { jsx } from '@emotion/core';

const About = () => {
  return (
    <div
      css={{
        maxWidth: '800px',
        margin: '0px auto',
      }}
    >
      <Navbar />
      
      <div
        css={{
          maxWidth: '800px',
          position: 'fixed',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >

        <p style={{fontSize: '2.4rem', fontWeight: 'bold'}}>Hello!  I'm Trevor Von Bruenchenhein!</p>

        <p>I am a Chicago-based full-stack engineer with a background in education and software development.  After teaching high school history for five years, I wanted to approach education from a different angle and decided to pursue studying web development full-time.  Because of my experience in the classroom, I understand how valuable educational technology is in an increasingly digital world, and I’m ready to start working on a project that is going to transform the educational experience for students around the world.</p>

      </div>
    </div>
  )
}

export default About;