/** @jsx jsx **/

import React from 'react';
import Navbar from '../components/NavBar';
import { jsx } from '@emotion/core';

const About = () => {
  return (
    <div
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <Navbar />
      
      <div>
        <h1>About Me</h1>

        <p>Hello!  I'm Trevor Von Bruenchenhein, and if you're reading this, you must've found my personal site.  I'm a full-stack engineer with an interest in how software and education best complement each other.</p>

        <p>My technical skills include:  JavaScript, React, Gatsby, Redux, React Native, HTML, CSS, Node, Express, Python, Django & Flask</p>

        <p>If you want to read more, head over to the contact page, and if you'd like to see some of the projects I helped build, check out the projects link!</p>
      </div>
    </div>
  )
}

export default About;