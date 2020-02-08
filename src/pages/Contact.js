/** @jsx jsx **/

import React from 'react';
import NavBar from '../components/NavBar';
import { jsx, css } from '@emotion/core';

const Contact = () => {
  return (
    <div
      css={{
        width: '800px',
        margin: '0px auto',
      }}
    >
      <NavBar />

      <div>
        <h1>Contact Me</h1>

        <p css={{ fontStyle: 'normal' }}>If you'd like to contact me for any reason, please use the following mediums to do so.  I'm currently looking for projects to work on, so if you'd like to collaborate, shoot me an email at <strong>trevorvonbruenchenhein@gmail.com</strong>.
        </p>

        <p>You can also check out my <a href="https://www.linkedin.com/feed/" css={{ color: 'blue' }}>LinkedIn</a> and <a href="https://github.com/tjvonbr" css={{ color: 'blue' }}>GitHub</a> accounts.</p>
      </div>

    </div>
  )
}

export default Contact;