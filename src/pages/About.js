/** @jsx jsx **/

import React from 'react';
import Navbar from '../components/NavBar';
import { jsx, css } from '@emotion/core';

const About = () => {
  return (
    <div
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <Navbar />
    </div>
  )
}

export default About;