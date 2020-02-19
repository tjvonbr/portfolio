/** @jsx jsx **/

import React from 'react';
import { jsx, css } from '@emotion/core';
import NavBarLink from '../components/NavBarLink';

const NavBar = () => {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottom: '1px solid black',
        margin: '10px auto',
        height: '50px',
        width: '50%',
      }}
    >
      <NavBarLink path="/aboutme" page="About" />
      <NavBarLink path="/projects/comake" page="Projects"/>
      <NavBarLink path="/contact" page="Contact" />
    </div>
  )
};

export default NavBar; 